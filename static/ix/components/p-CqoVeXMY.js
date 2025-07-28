import { p as proxyCustomElement, H, e as createEvent, h } from './p-BA1wZ05L.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { d as defineCustomElement$1 } from './p-CnWYvVQ3.js';

const menuAvatarItemCss = ":host{display:block;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";

const MenuAvatarItem = /*@__PURE__*/ proxyCustomElement(class MenuAvatarItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        this.dropdownItemRef = makeRef();
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.dropdownItemRef.waitForCurrent();
    }
    render() {
        return (h("ix-dropdown-item", { key: 'e85fb837da97c6416740a89efe5d8792d9e718f8', ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
    }
    get hostElement() { return this; }
    static get style() { return menuAvatarItemCss; }
}, [1, "ix-menu-avatar-item", {
        "icon": [1],
        "label": [1],
        "getDropdownItemElement": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu-avatar-item", "ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu-avatar-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAvatarItem);
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { MenuAvatarItem as M, defineCustomElement as d };
//# sourceMappingURL=p-CqoVeXMY.js.map

//# sourceMappingURL=p-CqoVeXMY.js.map