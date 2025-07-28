import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { c as createClassMutationObserver, a as checkFieldClasses } from './p-aw_FhcJ5.js';
import { r as renderHelperText } from './p-D9C7eJG_.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const helperTextCss = ":host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}";

const HelperText = /*@__PURE__*/ proxyCustomElement(class HelperText extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.validationResults = {
            isInfo: false,
            isInvalid: false,
            isValid: false,
            isWarning: false,
            isInvalidByRequired: false,
        };
        this.observer = new MutationObserver(() => this.checkForRequired());
    }
    connectedCallback() {
        this.observer.observe(window.document, {
            childList: true,
            subtree: true,
        });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    componentWillRender() {
        this.checkForRequired();
    }
    async checkForRequired() {
        if (!this.htmlFor) {
            return;
        }
        const forElement = document.getElementById(this.htmlFor);
        if (!forElement) {
            return;
        }
        if (this.classObserver) {
            this.classObserver.destroy();
        }
        this.classObserver = createClassMutationObserver(forElement, () => {
            this.validationResults = checkFieldClasses(forElement);
        });
        this.validationResults = checkFieldClasses(forElement);
    }
    render() {
        return (h(Host, { key: 'f406e4120213d1d6fa4e2e68bb410e368f56942e' }, renderHelperText(Object.assign({ helperText: this.helperText, invalidText: this.invalidText, validText: this.validText, infoText: this.infoText, warningText: this.warningText }, this.validationResults))));
    }
    get hostElement() { return this; }
    static get style() { return helperTextCss; }
}, [1, "ix-helper-text", {
        "htmlFor": [1, "html-for"],
        "helperText": [1, "helper-text"],
        "invalidText": [1, "invalid-text"],
        "validText": [1, "valid-text"],
        "infoText": [1, "info-text"],
        "warningText": [1, "warning-text"],
        "validationResults": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-helper-text", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-helper-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HelperText);
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxHelperText = HelperText;
const defineCustomElement = defineCustomElement$1;

export { IxHelperText, defineCustomElement };
//# sourceMappingURL=ix-helper-text.js.map

//# sourceMappingURL=ix-helper-text.js.map