import Blank from '../blank/blank.js';

const Input = class {

    constructor (props) {
       
        const type = (props.type) ? props.type : 'text';
        const placeholder = (props.placeholder) ? props.placeholder : '';
        const value = (props.value) ? props.value : '';

        

        const element = new Blank('input');

        element.setAtributes ({

            'type' : type,
            'placeholder' : placeholder,
            'value' : value

        }); 

        element.element.classList.add('input');

        this.element = element.element;

        return this;


    }

    keyup(callback) {

        const _this = this;

        this.element.addEventListener('keyup', function(event){
            
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

export default Input;