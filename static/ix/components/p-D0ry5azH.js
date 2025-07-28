import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { c as closestPassShadow } from './p-Bi1VyG64.js';
import { u as iconClose } from './p-BdCskL_j.js';
import { d as defineCustomElement$3 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$1 } from './p-B19EzNYi.js';

const modalHeaderCss = ":host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1}:host .modal-close{align-self:flex-start}";

const ModalHeader = /*@__PURE__*/ proxyCustomElement(class ModalHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeClick = createEvent(this, "closeClick", 7);
        /**
         * Hide the close button
         */
        this.hideClose = false;
    }
    onIconChange(icon) {
        if (this.parentDialog) {
            if (icon) {
                this.parentDialog.classList.add('with-icon');
            }
            else {
                this.parentDialog.classList.remove('with-icon');
            }
        }
    }
    componentDidLoad() {
        this.parentDialog = closestPassShadow(this.hostElement, 'ix-modal');
        this.onIconChange(this.icon);
    }
    onCloseClick(event) {
        const ce = this.closeClick.emit(event);
        if (ce.defaultPrevented || event.defaultPrevented) {
            return;
        }
        this.parentDialog.dismissModal();
    }
    render() {
        return (h(Host, { key: '8d12f1f002e629c7bc9dcb8f3f180ed8fbd05576' }, this.icon ? (h("ix-icon", { name: this.icon, color: this.iconColor, size: "32" })) : null, h("div", { key: 'bf436c6d673ba42f5127e9ab1091db07e92a822f', class: "modal-title" }, h("ix-typography", { key: 'ceb4dc571d30b41a6e7182ea5d6e44f6815e8739', format: "h5" }, h("slot", { key: '0edf144a78d450993f1aec96842b45e2a8dc38a8' }))), !this.hideClose ? (h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), ghost: true, icon: iconClose })) : null));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "icon": ["onIconChange"]
    }; }
    static get style() { return modalHeaderCss; }
}, [1, "ix-modal-header", {
        "hideClose": [4, "hide-close"],
        "icon": [1],
        "iconColor": [1, "icon-color"]
    }, undefined, {
        "icon": ["onIconChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-modal-header", "ix-icon-button", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-modal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalHeader);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ModalHeader as M, defineCustomElement as d };
//# sourceMappingURL=p-D0ry5azH.js.map

//# sourceMappingURL=p-D0ry5azH.js.map