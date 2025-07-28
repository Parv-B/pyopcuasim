import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';

const menuAboutItemCss = ":host{display:block}";

const MenuAboutItem = /*@__PURE__*/ proxyCustomElement(class MenuAboutItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.labelChange = createEvent(this, "labelChange", 7);
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-about-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (h(Host, { key: 'ae63769733f813931bac93bc8b38746a61338021' }, h("slot", { key: '9798db3fe19a2eaa22ce017e1ee404b666776686' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
    static get style() { return menuAboutItemCss; }
}, [1, "ix-menu-about-item", {
        "label": [513]
    }, undefined, {
        "label": ["watchLabel"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-about-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-about-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAboutItem);
            }
            break;
    } });
}

const IxMenuAboutItem = MenuAboutItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAboutItem, defineCustomElement };
//# sourceMappingURL=ix-menu-about-item.js.map

//# sourceMappingURL=ix-menu-about-item.js.map