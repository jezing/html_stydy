import BaseSlider from './base.js';
import keyboard from "./keyBoard.js"
class Slider extends BaseSlider {
    constructor(el, options) {
        super(el, options);

        this._bindEvent();
    }

    _bindEvent() {
        keyboard.bindEvents(this);
    }
}

export default Slider;