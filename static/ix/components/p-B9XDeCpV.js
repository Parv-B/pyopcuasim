import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { b as a11yHostAttributes } from './p-Bb7pDeaQ.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { d as defineCustomElement$1 } from './p-B19EzNYi.js';
import { c as createClassMutationObserver } from './p-aw_FhcJ5.js';

function isIxInputFieldComponent(obj) {
    return (obj &&
        'getAssociatedFormElement' in obj &&
        typeof obj.getAssociatedFormElement === 'function' &&
        'getNativeInputElement' in obj &&
        typeof obj.getNativeInputElement === 'function');
}

const fieldLabelCss = ":host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}";

const FormFieldLabel = /*@__PURE__*/ proxyCustomElement(class FormFieldLabel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /** @internal */
        this.isInvalid = false;
        this.htmlForObserver = new MutationObserver(() => this.checkForInternalState());
        this.a11yAttributes = {};
        this.labelRef = makeRef();
    }
    connectedCallback() {
        this.registerHtmlForObserver();
        this.registerControlRefObserver();
    }
    disconnectedCallback() {
        if (this.htmlForObserver) {
            this.htmlForObserver.disconnect();
        }
        if (this.htmlForClassObserver) {
            this.htmlForClassObserver.destroy();
        }
        if (this.controlRefClassObserver) {
            this.controlRefClassObserver.destroy();
        }
    }
    componentWillRender() {
        this.checkForInternalState();
    }
    componentWillLoad() {
        this.a11yAttributes = a11yHostAttributes(this.hostElement);
    }
    registerHtmlForObserver() {
        if (typeof window === 'undefined') {
            return;
        }
        if (this.htmlForObserver) {
            this.htmlForObserver.disconnect();
        }
        if (this.htmlFor) {
            this.htmlForObserver.observe(window.document, {
                childList: true,
                subtree: true,
            });
        }
    }
    async registerControlRefObserver() {
        if (typeof window === 'undefined') {
            return;
        }
        if (this.controlRefClassObserver) {
            this.controlRefClassObserver.destroy();
        }
        if (this.controlRef) {
            const input = await this.controlRef.waitForCurrent();
            this.controlRefClassObserver = createClassMutationObserver(input, () => this.checkForInvalidState(input));
        }
    }
    registerHtmlForClassObserver(forElement) {
        if (this.htmlForClassObserver) {
            this.htmlForClassObserver.destroy();
        }
        this.htmlForClassObserver = createClassMutationObserver(forElement, () => this.checkForInvalidState(forElement));
    }
    checkForInvalidState(elementToCheck) {
        this.isInvalid =
            elementToCheck.classList.contains('is-invalid') ||
                elementToCheck.classList.contains('ix-invalid');
    }
    async checkForInternalState() {
        if (this.htmlFor) {
            const forElement = document.getElementById(this.htmlFor);
            if (forElement) {
                if (typeof forElement.required === 'boolean') {
                    this.required = forElement.required;
                }
                this.registerHtmlForClassObserver(forElement);
                this.checkForInvalidState(forElement);
            }
        }
        if (this.controlRef) {
            const input = await this.controlRef.waitForCurrent();
            this.required = input.required;
        }
    }
    async focusOnClick() {
        if (this.htmlFor) {
            const target = document.getElementById(this.htmlFor);
            if (target) {
                let input = null;
                if (isIxInputFieldComponent(target)) {
                    input = await target.getNativeInputElement();
                }
                else {
                    input = target;
                }
                if (typeof input.focus === 'function') {
                    input.focus();
                }
            }
        }
        if (this.controlRef) {
            (await this.controlRef.waitForCurrent()).focus();
        }
    }
    render() {
        return (h(Host, { key: '4b00ea62a90eae362b7236d82a08f031c075c10d', onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: '1c3e406baa6b6414cacf17961279bcd7ad1545ca', htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: '54c5e7cbd6c505edbe2c37a20ecbecd91deb441b', textColor: this.isInvalid ? 'alarm' : 'soft', format: "label" }, h("slot", { key: '9638a38954088cff1cd539f1b49ef70778b4ff21' }), this.required && h("span", { key: 'b30063403d1e99121191ce945665781cba7ba34b' }, "*")))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "htmlFor": ["registerHtmlForObserver"],
        "controlRef": ["registerControlRefObserver"]
    }; }
    static get style() { return fieldLabelCss; }
}, [1, "ix-field-label", {
        "required": [1540],
        "htmlFor": [513, "html-for"],
        "controlRef": [16, "control-ref"],
        "isInvalid": [1028, "is-invalid"]
    }, undefined, {
        "htmlFor": ["registerHtmlForObserver"],
        "controlRef": ["registerControlRefObserver"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-field-label", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-field-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FormFieldLabel);
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { FormFieldLabel as F, defineCustomElement as d };
//# sourceMappingURL=p-B9XDeCpV.js.map

//# sourceMappingURL=p-B9XDeCpV.js.map