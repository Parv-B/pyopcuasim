import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { H as HookValidationLifecycle } from './p-aw_FhcJ5.js';
import { d as defineCustomElement$5 } from './p-B9XDeCpV.js';
import { d as defineCustomElement$4 } from './p-Bh9l8HMz.js';
import { d as defineCustomElement$3 } from './p-B_C2-EkQ.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const customFieldCss = ":host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}";

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
const CustomField = /*@__PURE__*/ proxyCustomElement(class CustomField extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * A value is required or must be checked for the form to be submittable
         */
        this.required = false;
        this.isInvalid = false;
        this.isValid = false;
        this.isInfo = false;
        this.isWarning = false;
    }
    updateValidationState({ isInvalid, isValid, isInfo, isWarning, }) {
        this.isInvalid = isInvalid;
        this.isValid = isValid;
        this.isInfo = isInfo;
        this.isWarning = isWarning;
    }
    render() {
        return (h(Host, { key: '50b7e5f59f28a32b2e4b9795efc2f0a9e753813e' }, h("ix-field-wrapper", { key: 'c761f7f018a021ff7014b30e34a2d87ae91bb367', label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: '0a12c0d2a8cd5152aa926e3aa9633c1f0f76ea02' }))));
    }
    get hostElement() { return this; }
    static get style() { return customFieldCss; }
}, [1, "ix-custom-field", {
        "required": [4],
        "label": [1],
        "helperText": [1, "helper-text"],
        "infoText": [1, "info-text"],
        "warningText": [1, "warning-text"],
        "invalidText": [1, "invalid-text"],
        "validText": [1, "valid-text"],
        "showTextAsTooltip": [4, "show-text-as-tooltip"],
        "isInvalid": [32],
        "isValid": [32],
        "isInfo": [32],
        "isWarning": [32]
    }]);
__decorate([
    HookValidationLifecycle({
        includeChildren: true,
    })
], CustomField.prototype, "updateValidationState", null);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-custom-field", "ix-field-label", "ix-field-wrapper", "ix-tooltip", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-custom-field":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CustomField);
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

const IxCustomField = CustomField;
const defineCustomElement = defineCustomElement$1;

export { IxCustomField, defineCustomElement };
//# sourceMappingURL=ix-custom-field.js.map

//# sourceMappingURL=ix-custom-field.js.map