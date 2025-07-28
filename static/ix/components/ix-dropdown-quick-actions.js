import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";

const DropdownQuickActions = /*@__PURE__*/ proxyCustomElement(class DropdownQuickActions extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'f38082cc18541cb25cbb27e53e8071ab087ea7bf' }, h("slot", { key: '57d7abc976bbfe107bf2297fcb0d5db1aec29294' })));
    }
    static get style() { return dropdownQuickActionsCss; }
}, [1, "ix-dropdown-quick-actions"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-quick-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-quick-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownQuickActions);
            }
            break;
    } });
}

const IxDropdownQuickActions = DropdownQuickActions;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownQuickActions, defineCustomElement };
//# sourceMappingURL=ix-dropdown-quick-actions.js.map

//# sourceMappingURL=ix-dropdown-quick-actions.js.map