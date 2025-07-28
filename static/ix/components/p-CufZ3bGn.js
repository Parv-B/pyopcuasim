import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";

const Row = /*@__PURE__*/ proxyCustomElement(class Row extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'd196cf5b6609b66fd1d8e60175373e6463faec5c' }, h("slot", { key: 'cd5208fe0e779fb69579e8f9bbc1af21572d8bbc' })));
    }
    static get style() { return rowCss; }
}, [1, "ix-row"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-row"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Row);
            }
            break;
    } });
}

export { Row as R, defineCustomElement as d };
//# sourceMappingURL=p-CufZ3bGn.js.map

//# sourceMappingURL=p-CufZ3bGn.js.map