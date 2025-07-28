import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';

const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const ModalLoading = /*@__PURE__*/ proxyCustomElement(class ModalLoading extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '2a6a6009ce9985b2926467ddb57efd988845a5f0' }, h("ix-spinner", { key: 'ed44fc7dc7dfa9d77056a34473b8d585718cecd8', variant: "primary" }), h("span", { key: '5a1ac39aedabce8e5c49a5c048fb26cd7d76255c', class: 'loading-text' }, h("slot", { key: 'd23c2fd6cd045f26c22c728845bbd37082894732' }))));
    }
    static get style() { return modalLoadingCss; }
}, [1, "ix-modal-loading"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-loading", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalLoading);
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxModalLoading = ModalLoading;
const defineCustomElement = defineCustomElement$1;

export { IxModalLoading, defineCustomElement };
//# sourceMappingURL=ix-modal-loading.js.map

//# sourceMappingURL=ix-modal-loading.js.map