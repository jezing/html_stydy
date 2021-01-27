import { KEY_Arrow_Left, KEY_Arrow_Right } from "./constants.js"

const keyboard = {
    bindEvents(slider) {
        document.addEventListener('keyup', ev => {
            // console.log(ev.keyCode);
            //因为keyCode被废弃了所以使用key进行替代
            // if (ev.keyCode === 37) {
            //     // ←
            //     console.log(ev.key); //ArrowLeft
            //     this.prev();
            // } else if (ev.keyCode === 39) {
            //     // →
            //     console.log(ev.key); //ArrowRight
            //     this.next();
            // }
            // 注意不能使用this 因为在模块中这个this是指向undefined的。
            if (ev.key === KEY_Arrow_Left) {
                // ←
                // console.log(ev.key); //ArrowLeft
                slider.prev();
            } else if (ev.key === KEY_Arrow_Right) {
                // →
                // console.log(ev.key); //ArrowRight
                slider.next();
            }

        })
    }
}
export default keyboard;