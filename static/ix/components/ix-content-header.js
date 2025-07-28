import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { h as iconArrowLeft } from './p-BdCskL_j.js';
import { d as defineCustomElement$4 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$3 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";

const ContentHeader = /*@__PURE__*/ proxyCustomElement(class ContentHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.backButtonClick = createEvent(this, "backButtonClick", 7);
        /**
         * Variant of content header
         */
        this.variant = 'primary';
        /**
         * Subtitle of Header
         */
        this.headerSubtitle = undefined;
        /**
         * Display a back button
         */
        this.hasBackButton = false;
    }
    render() {
        return (h(Host, { key: '928efa217011fe719ae85f242af1a6a53dd9f9a0' }, this.hasBackButton ? (h("ix-icon-button", { class: 'backButton', variant: "primary", icon: iconArrowLeft, ghost: true, onClick: () => this.backButtonClick.emit() })) : null, h("div", { key: '9ea073b90b1b71caa19ffd417a49eed7c4308061', class: "titleGroup" }, h("ix-typography", { key: '961dced5d7117a17efe8f1830968796d1d864be3', format: this.variant === 'secondary' ? 'h4' : 'h3', class: this.variant === 'secondary' ? 'secondary' : '' }, this.headerTitle), !!this.headerSubtitle && (h("ix-typography", { key: '9bf3c18838430fdffbbc146b1577f5d2251dc3e4', format: 'h6', "text-color": 'soft', class: this.variant === 'secondary' ? 'subtitle' : '' }, this.headerSubtitle))), h("div", { key: '8952391cb6163493dc5ab27b690c4375ef535ac4', class: "buttons" }, h("slot", { key: 'afa8f83adfda8f12a5ac50a1bde46d1e1ba60671' }))));
    }
    static get style() { return contentHeaderCss; }
}, [1, "ix-content-header", {
        "variant": [1],
        "headerTitle": [1, "header-title"],
        "headerSubtitle": [1, "header-subtitle"],
        "hasBackButton": [4, "has-back-button"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-content-header", "ix-icon-button", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-content-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ContentHeader);
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxContentHeader = ContentHeader;
const defineCustomElement = defineCustomElement$1;

export { IxContentHeader, defineCustomElement };
//# sourceMappingURL=ix-content-header.js.map

//# sourceMappingURL=ix-content-header.js.map