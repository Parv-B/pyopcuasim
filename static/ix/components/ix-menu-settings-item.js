import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';

const menuSettingsItemCss = ":host{display:block}";

const MenuSettingsItem = /*@__PURE__*/ proxyCustomElement(class MenuSettingsItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.labelChange = createEvent(this, "labelChange", 7);
    }
    watchLabel(newValue, oldValue) {
        this.labelChange.emit({
            name: 'ix-menu-settings-item',
            oldLabel: oldValue,
            newLabel: newValue,
        });
    }
    render() {
        return (h(Host, { key: '85b9c341a93a6a5d2c401d7c998e9d6701c04854' }, h("slot", { key: 'ac7e21786837e0a89dea3523d4c5e189e3f2fea6' })));
    }
    static get watchers() { return {
        "label": ["watchLabel"]
    }; }
    static get style() { return menuSettingsItemCss; }
}, [1, "ix-menu-settings-item", {
        "label": [513]
    }, undefined, {
        "label": ["watchLabel"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-settings-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-settings-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuSettingsItem);
            }
            break;
    } });
}

const IxMenuSettingsItem = MenuSettingsItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuSettingsItem, defineCustomElement };
//# sourceMappingURL=ix-menu-settings-item.js.map

//# sourceMappingURL=ix-menu-settings-item.js.map