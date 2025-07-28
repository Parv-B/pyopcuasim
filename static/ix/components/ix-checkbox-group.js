import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { H as HookValidationLifecycle } from './p-aw_FhcJ5.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { d as defineCustomElement$5 } from './p-B9XDeCpV.js';
import { d as defineCustomElement$4 } from './p-Bh9l8HMz.js';
import { d as defineCustomElement$3 } from './p-B_C2-EkQ.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const checkboxGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const CheckboxGroup = /*@__PURE__*/ proxyCustomElement(class CheckboxGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Alignment of the checkboxes in the group
         */
        this.direction = 'column';
        /**
         * Show helper, info, warning, error and valid text as tooltip
         */
        this.showTextAsTooltip = false;
        /**
         * @internal
         */
        this.required = false;
        this.isInvalid = false;
        this.isInfo = false;
        this.isValid = false;
        this.isWarning = false;
        this.touched = false;
        this.groupRef = makeRef();
        this.observer = new MutationObserver(() => {
            this.checkForRequiredCheckbox();
        });
    }
    get checkboxElements() {
        return Array.from(this.hostElement.querySelectorAll('ix-checkbox'));
    }
    checkForRequiredCheckbox() {
        this.required = this.checkboxElements.some((checkbox) => checkbox.required);
    }
    connectedCallback() {
        this.observer.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['checked', 'required'],
        });
    }
    componentWillLoad() {
        this.checkForRequiredCheckbox();
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    onClassFieldUpdate({ isInvalid, isInvalidByRequired, isInfo, isValid, isWarning, }) {
        this.isInvalid = isInvalid || isInvalidByRequired;
        this.isInfo = isInfo;
        this.isValid = isValid;
        this.isWarning = isWarning;
    }
    /**
     * @internal
     */
    isTouched() {
        return Promise.resolve(this.touched);
    }
    /**
     * @internal
     */
    hasValidValue() {
        return Promise.resolve(this.checkboxElements.some((checkbox) => checkbox.checked));
    }
    render() {
        return (h(Host, { key: '4ab181cf7fba9b6a236cbd48484ad3b1548d2fd9', ref: this.groupRef, onIxBlur: () => (this.touched = true) }, h("ix-field-wrapper", { key: '060fe61374a5e9adf6f3b0c96b6a2bc554dab720', label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, validText: this.validText, warningText: this.warningText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isInfo: this.isInfo, isValid: this.isValid, isWarning: this.isWarning, controlRef: this.groupRef }, h("div", { key: 'b3c31feb168bc2cf955aad05c9a16598fa96f247', class: {
                'checkbox-container': true,
                'row-layout': this.direction === 'row',
            } }, h("slot", { key: '5546027947171c20a58eda63ea95c1c08919d5ad' })))));
    }
    get hostElement() { return this; }
    static get style() { return checkboxGroupCss; }
}, [1, "ix-checkbox-group", {
        "helperText": [1, "helper-text"],
        "label": [1],
        "direction": [1],
        "invalidText": [1, "invalid-text"],
        "infoText": [1, "info-text"],
        "validText": [1, "valid-text"],
        "warningText": [1, "warning-text"],
        "showTextAsTooltip": [4, "show-text-as-tooltip"],
        "required": [4],
        "isInvalid": [32],
        "isInfo": [32],
        "isValid": [32],
        "isWarning": [32],
        "isTouched": [64],
        "hasValidValue": [64]
    }]);
__decorate([
    HookValidationLifecycle({
        includeChildren: true,
    })
], CheckboxGroup.prototype, "onClassFieldUpdate", null);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-checkbox-group", "ix-field-label", "ix-field-wrapper", "ix-tooltip", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-checkbox-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CheckboxGroup);
            }
            break;
        case "ix-field-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-field-wrapper":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-tooltip":
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

const IxCheckboxGroup = CheckboxGroup;
const defineCustomElement = defineCustomElement$1;

export { IxCheckboxGroup, defineCustomElement };
//# sourceMappingURL=ix-checkbox-group.js.map

//# sourceMappingURL=ix-checkbox-group.js.map