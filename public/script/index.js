class PraiseButton {
	constructor (element) {
		this.element = element ;
	}
	clickButton(){
		this.element.click(() => {
            throttle(addcount,window);
            thumbup(this.element,'click');
		})
	}
	getCount (){
		return count;
	}
}
export default class Thumb extends PraiseButton {
	constructor(element){
		super(element);
	}
}
