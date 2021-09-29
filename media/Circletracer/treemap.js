let circleJson, durCircleJson;
function TreeMap(json) {
	console.log(json);
	circleJson = json;
	durCircleJson = json;
	let g = new dagreD3.graphlib.Graph()
		.setGraph({});
	let nodes = [];
	let inputNode, outputNode;

	g.setNode(0, { label: "input", class: "type-input" });
	json.forEach((element, idx) => {
		let type = element.properties.type;
		let myIndex = element.outputs[0].location;
		let parentsIndex = [];
		let location = element.properties.location;
		let attributes = element.attributes;
		let inputs = element.inputs;
		let outputs = element.outputs;
		if (type === "CONCATENATION") { //multiple parents			
			inputs.forEach(input => {
				parentsIndex.push(input);
			});
		} else {
			parentsIndex.push(inputs[0]);
		}

		let node = {
			'index': myIndex,
			'type': type,
			'class': "type-" + type,
			'parents': parentsIndex,
			'location': location,
			'attributes': attributes,
			'inputs': inputs,
			'outputs': outputs
		};

		let label = `<p class='type'>${type}</p>`;

		// inputs label create
		if (type !== "CONCATENATION") {
			inputs.forEach((input, checkIdx) => {
				if (checkIdx === 0) {
					return;
				}

				label += `<p><label><b>input${checkIdx}</b></label><span>&lt;${getTypeArray('x', input.type)}&gt;</span></p>`;
			})

			attributes.forEach(attr => {
				if (attr['attribute'] === 'fused_activation_function' && attr['value'] !== 'NONE') {
					label += `<p class='activation'>${attr['value']}</p>`
				}
			})
		}

		// if element has duration
		if (element.hasOwnProperty('duration')) {
			let timeUnit = element.duration.timeUnit;
			let dur1 = element.duration.dur1;
			let dur2 = element.duration.dur2;

			label += `<p class='duration-title'>DURATION</p>`;
			label += `<p class='duration'>${dur1.toFixed(4)} ${timeUnit} <b>&roarr;</b> ${dur2.toFixed(4)} ${timeUnit}</p>`;
		}

		//First node logic
		if (idx === 0) {
			inputNode = {
				'index': 0,
				'class': 'type-input',
				'inputs': [element.inputs[0]],
				'outputs': [],
				'parents': []
			}

			g.setNode(0, { label: 'input', class: 'type-input' });
		}

		// Last node logic
		if (idx === json.length - 1) {
			let outputParentIndex = [];
			let name = outputs[0].name;

			outputParentIndex.push({
				location: myIndex,
			});

			inputNode.outputs.push(outputs[0]);

			outputNode = {
				'label': name,
				'class': 'type-' + name,
				'parents': outputParentIndex,
				'inputs': inputNode.inputs,
				'outputs': [outputs[0]],
				'index': myIndex + 1
			};

			nodes.push(inputNode);
			nodes.push(outputNode);
			g.setNode(outputNode.index, { labelType: 'html', label: outputNode.label, class: outputNode.class });
		}

		nodes.push(node);
		g.setNode(node.index, { labelType: 'html', label: label, class: node.class });
	});

	g.nodes().forEach(function (v) {
		let node = g.node(v);
		//  Round the corners of the nodes
		node.rx = node.ry = 5;
	});

	nodes.forEach(node => {
		let index = node.index;
		let parents = node.parents;
		parents.forEach(parent => {
			let label = `<p class="edge-label">${getTypeArray('x', parent.type)}</p>`;

			g.setEdge(parent.location, index, { labelType: 'html', label: label, curve: d3.curveBasis, arrowheadClass: 'arrowhead' });
			console.log(parent.location + "->" + index);
		})
	});

	let render = new dagreD3.render();

	let svg = d3.select('#wrapper').append("svg");
	let inner = svg.append("g");

	// Set up zoom support
	d3.select('#wrapper')
		.on('scroll', scrolled)
		.call(d3.zoom()
			.scaleExtent([0.1, 10])
			.on('zoom', () => zoomed(inner, g)));

	render(inner, g);

	svg.attr("width", g.graph().width + 300);
	svg.attr("height", g.graph().height);
	svg.selectAll("g.node")
		.on("click", (id) => createDetailContent(nodes, id, g));
}

function zoomed(inner, g) {
	const scale = d3.event.transform.k;

	// 그래프 크기 조절
	inner.attr("transform", d3.event.transform);

	const scaledWidth = (g.graph().width + 300) * scale;
	const scaledHeight = (g.graph().height) * scale;

	// Change SVG dimensions.
	d3.select('svg')
		.attr('width', scaledWidth)
		.attr('height', scaledHeight);

	// Scale the image itself.
	d3.select('svg').attr('transform', `scale(${scale})`);

	// Move scrollbars.
	const wrapper = d3.select('#wrapper').node();
	wrapper.scrollLeft = -d3.event.transform.x;
	wrapper.scrollTop = -d3.event.transform.y;

	// If the image is smaller than the wrapper, move the image towards the
	// center of the wrapper.
	const dx = d3.max([0, wrapper.clientWidth / 2 - scaledWidth / 2]);
	const dy = d3.max([0, wrapper.clientHeight / 2 - scaledHeight / 2]);
	d3.select('svg').attr('transform', `translate(${dx}, ${dy})`);
}

function scrolled() {
	const wrapper = d3.select('#wrapper');
	const x = wrapper.node().scrollLeft + wrapper.node().clientWidth / 2;
	const y = wrapper.node().scrollTop + wrapper.node().clientHeight / 2;
	const scale = d3.zoomTransform(wrapper.node()).k;
	// Update zoom parameters based on scrollbar positions.
	wrapper.call(d3.zoom().translateTo, x / scale, y / scale);
}

// function openDetail() {
// 	document.querySelector('#main').style.marginRight = "35%";
// 	document.querySelector('#detail').style.width = "35%";
// 	document.querySelector("#detail").style.display = "block";
// }

// function closeDetail() {
// 	document.querySelector('#main').style.marginRight = "0%";
// 	document.querySelector("#detail").style.display = "none";
// 	// removeElementsByClass('detail-content-list');
// }

// function createDetailContent(nodes, id, g) {
// 	var _node = g.node(id);
// 	console.log("Clicked " + id, _node);

// 	removeElementsByClass('detail-content-list');
// 	nodes.forEach(node => {
// 		if (node.index == id) {
// 			for (let key in node) {
// 				if (key === 'type' || key === 'location') {
// 					createDetailItem(key, node[key], '#node-properties-content');
// 				}

// 				if (key == 'attributes') {
// 					node[key].forEach(element => {
// 						createDetailItem(element['attribute'], element['value'], '#attributes-content');
// 					})
// 				}

// 				if (key == 'inputs') {
// 					node[key].forEach((input, idx) => {
// 						createDetailItem(`input ${idx}`, `name: ${input['name']}`, '#inputs-content');
// 						createDetailItem('', `type: [${getTypeArray(',', input['type'])}]`, '#inputs-content');
// 						createDetailItem('', `location: ${input['location']}`, '#inputs-content');
// 					})
// 				}

// 				if (key == 'outputs') {
// 					node[key].forEach(output => {
// 						createDetailItem(`output`, `name: ${output['name']}`, '#outputs-content');
// 						createDetailItem('', `type: [${getTypeArray(',', output['type'])}]`, '#outputs-content');
// 						createDetailItem('', `location: ${output['location']}`, '#outputs-content');
// 					})
// 				}
// 			}
// 		}
// 	})
// 	openDetail();
// }

// function removeElementsByClass(className) {
// 	const elements = document.getElementsByClassName(className);
// 	while (elements.length > 0) {
// 		elements[0].parentNode.removeChild(elements[0]);
// 	}
// }

// function getTypeArray(delimeter, type) {
// 	let result = '';
// 	for (key in type) {
// 		result = result + type[key] + delimeter;
// 	}
// 	result = result.slice(0, -1);
// 	return result;
// }

// function createDetailItem(key, inputValue, selector) {
// 	let name = document.createElement('div');
// 	name.setAttribute("class", "detail-content-name detail-content-list");
// 	let label = document.createElement('label');
// 	label.innerHTML = key;
// 	name.appendChild(label);

// 	let value = document.createElement('div');
// 	value.setAttribute("class", "detail-content-item detail-content-list");
// 	value.innerHTML = inputValue;

// 	document.querySelector(selector).appendChild(name);
// 	document.querySelector(selector).appendChild(value);
// }