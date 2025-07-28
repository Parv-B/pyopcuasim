import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { h as hasAnyText, r as renderHelperText } from './p-D9C7eJG_.js';
import { d as defineCustomElement$3 } from './p-B9XDeCpV.js';
import { d as defineCustomElement$2 } from './p-B_C2-EkQ.js';
import { d as defineCustomElement$1 } from './p-B19EzNYi.js';

const fieldWrapperCss = ":host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:-moz-min-content;width:min-content;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}";

const FieldWrapper = /*@__PURE__*/ proxyCustomElement(class FieldWrapper extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Is the field component invalid
         */
        this.isInvalid = false;
        /**
         * Is the field component valid
         */
        this.isValid = false;
        /**
         * Is the field component info
         */
        this.isInfo = false;
        /**
         * Is the field component warning
         */
        this.isWarning = false;
        /**
         * Show helper, error, info, warning text as tooltip
         */
        this.showTextAsTooltip = false;
        /**
         * Show label as required
         */
        this.required = false;
        this.slotRef = makeRef();
    }
    render() {
        const textOptions = {
            invalidText: this.invalidText,
            isInvalid: this.isInvalid,
            isValid: this.isValid,
            validText: this.validText,
            isWarning: this.isWarning,
            warningText: this.warningText,
            isInfo: this.isInfo,
            infoText: this.infoText,
            helperText: this.helperText,
        };
        return (h(Host, { key: '2dd925820a3b4fa7529956e90ad8df1268bd59d9' }, this.label && (h("div", { key: 'f70725574cea826e7c541a95de2a0d373fcb67f7', class: "field-top" }, h("ix-field-label", { key: 'b589dc77ba975991962c4e53e6344bc4bf5ececb', required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label))), h("div", { key: 'e79a3c3631908b280521dd9d86cf6e1a2b879b72', class: {
                'slot-wrapper': true,
            }, ref: this.slotRef }, h("slot", { key: '6ee9b4b8656d366e1792b0eebbcb88968e39dfcf' })), h("div", { key: '0cffa6f40dbcfed07670b2730aeab71d0b2a42fa', class: 'field-bottom' }, !this.showTextAsTooltip && renderHelperText(textOptions), h("div", { key: '9ddbc2218a776d6b8a9b0a82ca1903ceca3253f8', class: "bottom-right" }, h("slot", { key: 'e03a7d476ea203967beae72fe4f1296d0656da17', name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && (h("ix-tooltip", { key: 'a735c861da75636163beb5484909b51271a46297', for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, renderHelperText(textOptions)))));
    }
    get hostElement() { return this; }
    static get style() { return fieldWrapperCss; }
}, [1, "ix-field-wrapper", {
        "helperText": [1, "helper-text"],
        "label": [1],
        "invalidText": [1, "invalid-text"],
        "validText": [1, "valid-text"],
        "infoText": [1, "info-text"],
        "warningText": [1, "warning-text"],
        "isInvalid": [4, "is-invalid"],
        "isValid": [4, "is-valid"],
        "isInfo": [4, "is-info"],
        "isWarning": [4, "is-warning"],
        "showTextAsTooltip": [4, "show-text-as-tooltip"],
        "required": [4],
        "htmlForLabel": [1, "html-for-label"],
        "controlRef": [16, "control-ref"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-field-wrapper", "ix-field-label", "ix-tooltip", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-field-wrapper":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FieldWrapper);
            }
            break;
        case "ix-field-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-tooltip":
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

export { FieldWrapper as F, defineCustomElement as d };
//# sourceMappingURL=p-Bh9l8HMz.js.map

//# sourceMappingURL=p-Bh9l8HMz.js.map