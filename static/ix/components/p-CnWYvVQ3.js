import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { m as iconSingleCheck, b as iconChevronRightSmall } from './p-BdCskL_j.js';

const dropdownItemCss = ":host{--ix-dropdown-item-checked-color:var(--theme-color-primary);display:flex;flex-direction:row;position:relative;height:2.5rem;width:auto;overflow:hidden;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-item{all:unset;display:flex;flex-direction:row;align-items:center;position:relative;height:calc(100% - 2px);width:calc(100% - 0.5rem - 1.5rem);padding:0 0.5rem;padding-right:1.5rem;border:0.0625rem solid transparent;white-space:nowrap}:host .dropdown-item.no-checked-field{width:calc(100% - 1rem - 1.5rem);padding:0 1rem;padding-right:1.5rem}:host .dropdown-item:focus-visible{border-color:var(--theme-color-focus-bdr)}:host .dropdown-item-checked{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:1rem;min-width:1rem;margin-right:0.5rem;color:var(--ix-dropdown-item-checked-color)}:host .dropdown-item-icon{margin-right:0.5rem;color:var(--theme-color-std-text)}:host .dropdown-item-text{display:block;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:pre}:host .submenu-icon{margin-left:auto}:host(.icon-only) .dropdown-item-icon{margin-right:0px}:host(.icon-only) .dropdown-item-checked{display:none}:host(.icon-only) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(.submenu) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(:not(.disabled):not(:disabled).hover),:host(:not(.disabled):not(:disabled):hover){background-color:var(--theme-ghost--background--hover)}:host(:not(.disabled):not(:disabled).active),:host(:not(.disabled):not(:disabled):active){background-color:var(--theme-ghost--background--active)}:host(.disabled){pointer-events:none;color:var(--theme-color-weak-text) !important}:host(.disabled) .dropdown-item-icon{color:var(--theme-color-weak-text) !important}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class DropdownItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        /**
         * Display hover state
         */
        this.hover = false;
        /**
         * Disable item and remove event listeners
         */
        this.disabled = false;
        /**
         * Whether the item is checked or not. If true a checkmark will mark the item as checked.
         */
        this.checked = false;
        /** @internal */
        this.isSubMenu = false;
        /** @internal */
        this.suppressChecked = false;
    }
    /** @internal */
    async emitItemClick() {
        this.itemClick.emit(this.hostElement);
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.hostElement;
    }
    isIconOnly() {
        return (this.label === undefined &&
            this.hostElement.innerText === '' &&
            this.icon !== undefined);
    }
    render() {
        return (h(Host, { key: '9422b6909b1e14603325f59d7414344f7ad52a36', class: {
                hover: this.hover,
                'icon-only': this.isIconOnly(),
                disabled: this.disabled,
                submenu: this.isSubMenu,
            }, role: "listitem" }, h("button", { key: '5e6f69c10c1f1ca203f66bdc0f16bcff3f793fe2', type: "button", tabIndex: 0, class: {
                'dropdown-item': true,
                'no-checked-field': this.suppressChecked,
            }, onClick: () => this.emitItemClick() }, !this.suppressChecked ? (h("div", { class: "dropdown-item-checked" }, this.checked ? (h("ix-icon", { class: "checkmark", name: iconSingleCheck, size: "16" })) : null)) : null, this.icon ? (h("ix-icon", { class: "dropdown-item-icon", name: this.icon })) : null, h("div", { key: '94ae83ecf8117a15b8ce82ae3dcd94bb5f8dee7e', class: "dropdown-item-text" }, this.label, h("slot", { key: 'cfe3fa2bc48853786f5fe9676ad55c5418c6821a' })), this.isSubMenu ? (h("ix-icon", { name: iconChevronRightSmall, class: 'submenu-icon' })) : null)));
    }
    get hostElement() { return this; }
    static get style() { return dropdownItemCss; }
}, [1, "ix-dropdown-item", {
        "label": [1],
        "icon": [1],
        "hover": [4],
        "disabled": [4],
        "checked": [4],
        "isSubMenu": [4, "is-sub-menu"],
        "suppressChecked": [4, "suppress-checked"],
        "emitItemClick": [64],
        "getDropdownItemElement": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownItem);
            }
            break;
    } });
}

export { DropdownItem as D, defineCustomElement as d };
//# sourceMappingURL=p-CnWYvVQ3.js.map

//# sourceMappingURL=p-CnWYvVQ3.js.map