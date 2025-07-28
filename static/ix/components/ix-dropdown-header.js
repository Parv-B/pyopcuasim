import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const dropdownHeaderCss = ":host{display:flex;align-items:center;position:relative;height:2.5rem;width:auto;padding:0.25rem 1rem;overflow:hidden;cursor:default;color:var(--theme-color-soft-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";

const DropdownHeader = /*@__PURE__*/ proxyCustomElement(class DropdownHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '15371578ff615a3ca08fb49ef2ecacdf736cf74e' }, h("ix-typography", { key: '3071d4924c7b98e4d234b6b2064f6ec1146ea988', class: 'category-text', format: 'h5' }, this.label)));
    }
    static get style() { return dropdownHeaderCss; }
}, [1, "ix-dropdown-header", {
        "label": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-dropdown-header", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-dropdown-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownHeader);
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxDropdownHeader = DropdownHeader;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownHeader, defineCustomElement };
//# sourceMappingURL=ix-dropdown-header.js.map

//# sourceMappingURL=ix-dropdown-header.js.map