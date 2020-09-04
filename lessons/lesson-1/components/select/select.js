import Blank from '../blank/blank.js';

const Select = class {

    constructor (options) {
       

        const element = new Blank('select');

        element.element.classList.add('select');


        for (let opt in options) {

            const __option = new Blank('option'); 

            __option.element.value = options[opt].value;
            __option.element.innerText = options[opt].title;
            
            element.element.append(__option.element);
        
        }
        
        this.element = element.element;

        return this;


    }

    change(callback) {

        const _this = this;

        this.element.addEventListener('change', function(event){
            
            callback(this, event);

        })

        return this;

    }

    render(tagName) {

        const parent = document.querySelector(tagName);

        parent.appendChild(this.element);

        return this;

    }

    append(otherElement) {

        otherElement.append(this.element); 

        return this;

    }


}

export default Select;