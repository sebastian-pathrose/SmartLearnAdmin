export default {
	myVar1: [],
	myVar2: {},
	courseformat:[
		{'id': 1, 'format': 'WeekFormat'},
		{'id': 2, 'format': 'moduleFormat'},
		{'id': 3, 'format': 'numberFormat'},
	], 
	turndownService: new TurndownService(),
	async initialiseForm() {
		storeValue('courseTypes', this.courseformat);
	},
	async convertToMarkup() {
		/*MathJax.Hub.Config({
			extensions: ["tex2jax.js"],
			jax: ["input/TeX","output/HTML-CSS"],
			tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
		});
		MathJax.Hub.Queue(function () {
		  console.log(MathJax.Message.Log());
			console.log()(MathJax.Hub.lastError.message);
		});*/
		
		var math = '\(\sqrt{\frac{a}{b}}\)';

		console.log(math);
		//MathJax.config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';
		//var fMathJax = document.getElementById("frmDocOutput");
		//fMathJax.Hub.Queue(['Reprocess', fMathJax.Hub]);
		//frmDocOutput.srcDoc = math;
		imgFormula.image = 'https://math.now.sh?from=\(\sqrt{\frac{a}{b}}\)';

		return;
	}
}