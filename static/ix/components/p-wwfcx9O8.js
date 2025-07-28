import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { g as iconCloseSmall } from './p-BdCskL_j.js';
import { d as defineCustomElement$2 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$1 } from './p-Dlmgmbod.js';

const filterChipCss = ":host{display:inline-flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .slot-container :host-context(.disabled){background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}:host ix-icon-button{height:1.5rem;margin-left:0.25rem}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--theme-focus--border-thickness) solid var(--theme-color-component-4);color:var(--theme-color-weak-text);padding-right:0.5rem;cursor:default}:host(.readonly){padding-right:0.5rem}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}:host(:focus-visible:not(.disabled):not(:disabled)){outline:var(--theme-color-focus-bdr) solid var(--theme-focus--border-thickness);outline-offset:-0.125rem}";

const FilterChip = /*@__PURE__*/ proxyCustomElement(class FilterChip extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeClick = createEvent(this, "closeClick", 7);
        /**
         * If true the filter chip will be in disabled state
         */
        this.disabled = false;
        /**
         * If true the filter chip will be in readonly mode
         */
        this.readonly = false;
    }
    onCloseClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.closeClick.emit();
    }
    render() {
        return (h(Host, { key: 'e3b72ae1a230407eb5a5b4b29b0c35bae916ca44', class: { disabled: this.disabled, readonly: this.readonly }, title: this.hostElement.textContent }, h("div", { key: '8eb078b239b54e9e72dc14e02ea60c93fa531c7c', class: "slot-container" }, h("slot", { key: 'ce47a7f795bf7d09bdbe42113c1a994068545940' })), !this.disabled && !this.readonly ? (h("ix-icon-button", { ghost: true, oval: true, icon: iconCloseSmall, size: "16", tabindex: this.disabled ? -1 : 0, variant: "primary", disabled: this.disabled, onClick: (e) => this.onCloseClick(e) })) : null));
    }
    get hostElement() { return this; }
    static get style() { return filterChipCss; }
}, [1, "ix-filter-chip", {
        "disabled": [4],
        "readonly": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-filter-chip", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-filter-chip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FilterChip);
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

export { FilterChip as F, defineCustomElement as d };
//# sourceMappingURL=p-wwfcx9O8.js.map

//# sourceMappingURL=p-wwfcx9O8.js.map