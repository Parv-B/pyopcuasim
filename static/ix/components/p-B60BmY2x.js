import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const cardContentCss = ":host{display:flex;padding:1rem;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content-wrapper{box-sizing:border-box;height:100%;width:100%;overflow:hidden;gap:0.5rem;display:flex;flex-direction:column;align-items:flex-start}";

const CardContent = /*@__PURE__*/ proxyCustomElement(class CardContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '9621026e8c6cfa6e3d8b86b9a7eea1aa092fd709' }, h("div", { key: '42be4252caddf4e15d8554c9b1788e839dc946e8', class: "content-wrapper" }, h("slot", { key: '5b695aaf03f88d426969691c87be2330cc23bcb4' }))));
    }
    static get style() { return cardContentCss; }
}, [1, "ix-card-content"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardContent);
            }
            break;
    } });
}

export { CardContent as C, defineCustomElement as d };
//# sourceMappingURL=p-B60BmY2x.js.map

//# sourceMappingURL=p-B60BmY2x.js.map