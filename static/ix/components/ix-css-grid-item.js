import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";

const CssGridItem = /*@__PURE__*/ proxyCustomElement(class CssGridItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        const style = {};
        style['grid-area'] = this.itemName;
        return (h(Host, { key: 'bc5b71e095a35738800e7b95baca2c4a7874205e', style: style }, h("slot", { key: 'dd2a9bc3a5eecc1d539820a72dd9de51e5466923' })));
    }
    static get style() { return cssGridItemCss; }
}, [1, "ix-css-grid-item", {
        "itemName": [1, "item-name"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-css-grid-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-css-grid-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CssGridItem);
            }
            break;
    } });
}

const IxCssGridItem = CssGridItem;
const defineCustomElement = defineCustomElement$1;

export { IxCssGridItem, defineCustomElement };
//# sourceMappingURL=ix-css-grid-item.js.map

//# sourceMappingURL=ix-css-grid-item.js.map