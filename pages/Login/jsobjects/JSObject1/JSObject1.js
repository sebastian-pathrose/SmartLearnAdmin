export default {
	updateIFrameSrc (rteText) {
	  let formula_str = '<p>One over square root of two (inline style):<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></math></p>';
		return storeValue('inputHtmlText', formula_str);
	}

}