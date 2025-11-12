export class eq extends HTMLElement{
    constructor() {
        super();
        const shadowroot = this.attachShadow({ mode: 'open' });
        shadowroot.innerHTML = (
            '<style>' +
                'text-align:center;' +
                'font-family: "Computer Modern", serif;' +
                'font-size: 100vh;' +
            '</style>' 
            )
    }
};

customElements.define('eq-eq', eq);