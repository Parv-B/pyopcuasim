import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const cardTitleCss = ":host{display:flex;position:relative;flex-direction:row;align-items:center;margin-top:0.25rem;margin-bottom:0.25rem;gap:1rem;width:100%}:host .title-actions{display:flex;position:relative;flex-direction:row;gap:0.25rem;margin-left:auto;margin-right:0}";

const CardHeader = /*@__PURE__*/ proxyCustomElement(class CardHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'd4531b8777d3c33b0ebede19cbb7b0a57aac530d' }, h("slot", { key: '66864059494bc518dae8ebe6cb77d3a33adbf00f' }), h("div", { key: 'bf48c597921cf044b83500d1725c740a3ad05b84', class: "title-actions" }, h("slot", { key: '628a31f58859cf14f210fade064526e7fd09b517', name: "title-actions" }))));
    }
    static get style() { return cardTitleCss; }
}, [1, "ix-card-title"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-card-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-card-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CardHeader);
            }
            break;
    } });
}

export { CardHeader as C, defineCustomElement as d };
//# sourceMappingURL=p-DUuL9bnV.js.map

//# sourceMappingURL=p-DUuL9bnV.js.map