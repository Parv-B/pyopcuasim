import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { H as HookValidationLifecycle } from './p-aw_FhcJ5.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { d as defineCustomElement$5 } from './p-B9XDeCpV.js';
import { d as defineCustomElement$4 } from './p-Bh9l8HMz.js';
import { d as defineCustomElement$3 } from './p-B_C2-EkQ.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const radioGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";

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
const RadiobuttonGroup = /*@__PURE__*/ proxyCustomElement(class RadiobuttonGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange", 7);
        /**
         * Alignment of the radio buttons in the group
         */
        this.direction = 'column';
        /**
         * Required state of the checkbox component
         *
         * @internal
         */
        this.required = false;
        this.isInvalid = false;
        this.isValid = false;
        this.isInfo = false;
        this.isWarning = false;
        this.touched = false;
        this.groupRef = makeRef();
        this.observer = new MutationObserver(() => {
            this.ensureOnlyLastRadioChecked();
            this.hasNestedRequiredRadio();
        });
    }
    get radiobuttonElements() {
        return Array.from(this.hostElement.querySelectorAll('ix-radio'));
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
        this.selectInitialValue();
        this.ensureOnlyLastRadioChecked();
        this.hasNestedRequiredRadio();
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    selectInitialValue() {
        if (!this.value) {
            return;
        }
        this.radiobuttonElements.forEach((radiobutton) => {
            radiobutton.checked = radiobutton.value === this.value;
        });
    }
    ensureOnlyLastRadioChecked() {
        const checkedRadios = this.radiobuttonElements.filter((radio) => radio.checked);
        checkedRadios.forEach((radio, index) => {
            if (index === checkedRadios.length - 1) {
                return;
            }
            radio.checked = false;
        });
    }
    hasNestedRequiredRadio() {
        this.required = this.radiobuttonElements.some((radiobutton) => radiobutton.required);
    }
    onValueChangeHandler(newValue) {
        this.touched = true;
        this.radiobuttonElements.forEach((radiobutton) => {
            radiobutton.checked = radiobutton.value === newValue;
        });
    }
    onCheckedChangeHandler(event) {
        this.radiobuttonElements.forEach((radiobutton) => {
            if (radiobutton !== event.target) {
                radiobutton.checked = false;
                return;
            }
            radiobutton.checked = true;
            this.valueChange.emit(radiobutton.value);
        });
    }
    onClassField({ isInvalid, isInfo, isValid, isWarning, isInvalidByRequired, }) {
        this.isInvalid = isInvalid || isInvalidByRequired;
        this.isInfo = isInfo;
        this.isValid = isValid;
        this.isWarning = isWarning;
    }
    /** @internal */
    hasValidValue() {
        return Promise.resolve(!!Array.from(this.hostElement.querySelectorAll('ix-radio')).find((radio) => radio.checked));
    }
    /** @internal */
    isTouched() {
        return Promise.resolve(this.touched);
    }
    render() {
        return (h(Host, { key: '203a7e035db4618a46b19cd8f2fdc95c29a523c9', onIxBlur: () => (this.touched = true), ref: this.groupRef }, h("ix-field-wrapper", { key: 'e57767b89761a81570b6c07271009895b3590fa8', label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.groupRef }, h("div", { key: '4022286816732dbb6f831e2818e37a5b8ce97737', class: {
                'checkbox-container': true,
                'row-layout': this.direction === 'row',
            } }, h("slot", { key: '82a37de491ea6fbd6ee90c624f87b882f43f99cd' })))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "value": ["onValueChangeHandler"]
    }; }
    static get style() { return radioGroupCss; }
}, [1, "ix-radio-group", {
        "helperText": [1, "helper-text"],
        "label": [1],
        "value": [1],
        "invalidText": [1, "invalid-text"],
        "infoText": [1, "info-text"],
        "warningText": [1, "warning-text"],
        "validText": [1, "valid-text"],
        "showTextAsTooltip": [4, "show-text-as-tooltip"],
        "direction": [1],
        "required": [4],
        "isInvalid": [32],
        "isValid": [32],
        "isInfo": [32],
        "isWarning": [32],
        "hasValidValue": [64],
        "isTouched": [64]
    }, [[0, "checkedChange", "onCheckedChangeHandler"]], {
        "value": ["onValueChangeHandler"]
    }]);
__decorate([
    HookValidationLifecycle({
        includeChildren: true,
    })
], RadiobuttonGroup.prototype, "onClassField", null);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-radio-group", "ix-field-label", "ix-field-wrapper", "ix-tooltip", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RadiobuttonGroup);
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

const IxRadioGroup = RadiobuttonGroup;
const defineCustomElement = defineCustomElement$1;

export { IxRadioGroup, defineCustomElement };
//# sourceMappingURL=ix-radio-group.js.map

//# sourceMappingURL=ix-radio-group.js.map