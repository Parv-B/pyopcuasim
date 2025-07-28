import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { g as getSlottedElements } from './p-Bi1VyG64.js';
import { A as iconContextMenu } from './p-BdCskL_j.js';
import { d as defineCustomElement$2 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$1 } from './p-Dlmgmbod.js';

const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}:host ::slotted(ix-dropdown){cursor:default}";

const GroupContextMenu = /*@__PURE__*/ proxyCustomElement(class GroupContextMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showContextMenu = false;
    }
    getTrigger() {
        return this.hostElement;
    }
    configureDropdown(dropdownElement, triggerElement) {
        dropdownElement.positioningStrategy = 'fixed';
        dropdownElement.trigger = triggerElement;
    }
    onSlotChange() {
        const slot = this.hostElement.shadowRoot.querySelector('slot');
        if (!slot) {
            return;
        }
        const elements = getSlottedElements(slot);
        this.showContextMenu = elements.length !== 0;
        const dropdownElement = elements.find((elm) => elm.tagName === 'IX-DROPDOWN');
        const triggerElement = this.getTrigger();
        if (!triggerElement) {
            return;
        }
        if (!dropdownElement) {
            return;
        }
        this.configureDropdown(dropdownElement, triggerElement);
    }
    render() {
        return (h(Host, { key: '348033c5ce7179287a9b336c9391ac2ae9303aab' }, h("ix-icon-button", { key: '54171a304f057863e55c7b3e4b75bdb7a26e7b73', class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: iconContextMenu }), h("slot", { key: '6dc320179eb354c333ff089856c1ad652395e38a', onSlotchange: () => this.onSlotChange() })));
    }
    get hostElement() { return this; }
    static get style() { return groupContextMenuCss; }
}, [1, "ix-group-context-menu", {
        "showContextMenu": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-group-context-menu", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-group-context-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GroupContextMenu);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { GroupContextMenu as G, defineCustomElement as d };
//# sourceMappingURL=p-B7KL9wqA.js.map

//# sourceMappingURL=p-B7KL9wqA.js.map