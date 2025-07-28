import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";

const ModalContent = /*@__PURE__*/ proxyCustomElement(class ModalContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '7edd09743946f8a9762ccaaec9fa578484030d25' }, h("slot", { key: 'a35310fa981a3cff9997b26fa3bf1563f433a68b' })));
    }
    static get style() { return modalContentCss; }
}, [1, "ix-modal-content"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalContent);
            }
            break;
    } });
}

export { ModalContent as M, defineCustomElement as d };
//# sourceMappingURL=p-ClepN0Ea.js.map

//# sourceMappingURL=p-ClepN0Ea.js.map