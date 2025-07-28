import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";

const KeyValue = /*@__PURE__*/ proxyCustomElement(class KeyValue extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Optional key value label position - 'top' or 'left'
         */
        this.labelPosition = 'top';
    }
    render() {
        return (h(Host, { key: '1ab3490faac180bfd075e133b0baa78c38c33599', class: `keyValue keyValue--${this.labelPosition === 'top' ? 'column' : 'row'}` }, this.icon && (h("ix-icon", { key: '385b4e87308b3bda4473c264b1d078bb47880c18', name: this.icon, size: "24", class: "keyValue__icon" })), h("div", { key: '50bbdc9c086cd11f4332e23fd33c25d8dfdd8e63', class: "keyValue__content" }, h("div", { key: 'a40ffc7c25fc36649711a433a8d5010342d61810', class: "content__label" }, this.label), h("div", { key: '5de060584a67c5a64e8f624bdd5ea0f402a20a31', class: {
                content__value: true,
                'has-customValue': this.value === undefined,
            } }, this.value !== undefined ? (this.value) : (h("slot", { name: "custom-value" }))))));
    }
    static get style() { return keyValueCss; }
}, [1, "ix-key-value", {
        "icon": [1],
        "label": [1],
        "labelPosition": [1, "label-position"],
        "value": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-key-value"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-key-value":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, KeyValue);
            }
            break;
    } });
}

const IxKeyValue = KeyValue;
const defineCustomElement = defineCustomElement$1;

export { IxKeyValue, defineCustomElement };
//# sourceMappingURL=ix-key-value.js.map

//# sourceMappingURL=ix-key-value.js.map