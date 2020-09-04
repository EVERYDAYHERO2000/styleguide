const Blank = class {

    constructor (tagNamne) {
       
        const element = document.createElement(tagNamne);
        
        this.element = element;

        return this;

    }

    render(tagName) {

        const parent = document.querySelector(tagName);

        parent.appendChild(this.element);

    }

    append(otherElement) {

        this.element.appendChild(otherElement)

    }

    setAtributes (attrObj) {

        for (let prop in attrObj) {

            this.element.setAttribute(prop, attrObj[prop]);

        }

    }


}

export default Blank;