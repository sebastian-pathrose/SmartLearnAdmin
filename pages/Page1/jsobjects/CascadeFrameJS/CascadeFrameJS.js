export default {
	myVar1: [],
	myVar2: {},
	buttonState: {
		'icon' : 'plus'
	},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async applyCascade () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		console.log(this.buttonState.icon);
		if (this.buttonState.icon == 'plus') {
			this.buttonState.icon = 'minus';
		} else {
			this.buttonState.icon = 'plus';
		}
		await storeValue('buttonState', this.buttonState.icon);
	}
}