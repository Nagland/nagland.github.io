function roadmap(data) {
	dataxxx = data;
	init(dataxxx);

	function init() {
		document.getElementById("sigma-example").innerHTML = " ";
		var sigInst = sigma.init(document.getElementById('sigma-example')).drawingProperties({
			defaultLabelColor: '#fff',
			defaultLabelSize: 12,
			defaultLabelBGColor: '#008b8b',
			defaultLabelHoverColor: '#000',
			labelThreshold: 6,
			defaultEdgeType: 'curve',
			animationsTime:1000
		}).graphProperties({
			minNodeSize: 1.5,
			maxNodeSize: 4.5,
			minEdgeSize: 1,
			maxEdgeSize: 1
		}).mouseProperties({
			maxRatio: 32
		});
		sigInst.parseGexf(dataxxx);
		sigInst.draw();
	}
}
