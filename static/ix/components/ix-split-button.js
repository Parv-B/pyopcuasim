import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { A as iconContextMenu } from './p-BdCskL_j.js';
import { d as defineCustomElement$5 } from './p-CPUiQJXe.js';
import { d as defineCustomElement$4 } from './p-BrRMtQIh.js';
import { d as defineCustomElement$3 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';

const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";

const SplitButton = /*@__PURE__*/ proxyCustomElement(class SplitButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.buttonClick = createEvent(this, "buttonClick", 7);
        /**
         * Color variant of button
         */
        this.variant = 'primary';
        /**
         * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
         */
        this.closeBehavior = 'both';
        /**
         * Button outline variant
         */
        this.outline = false;
        /**
         * Button invisible
         */
        this.ghost = false;
        /**
         * Disabled
         */
        this.disabled = false;
        /**
         * Placement of the dropdown
         */
        this.placement = 'bottom-start';
        this.toggle = false;
    }
    linkTriggerRef() {
        if (this.triggerElement && this.dropdownElement) {
            this.dropdownElement.trigger = this.triggerElement;
        }
    }
    componentDidLoad() {
        this.linkTriggerRef();
    }
    render() {
        var _a;
        const buttonAttributes = {
            variant: this.variant,
            outline: this.outline,
            ghost: this.ghost,
            disabled: this.disabled,
            class: {
                'left-button-border': !this.outline,
            },
        };
        return (h(Host, { key: '68777b9c2c7df983d65ae32bbd622367a477a31a' }, h("div", { key: 'e8c152f8de7ae7fe63a7941261472a69863c6cb9', class: { 'btn-group': true, 'middle-gap': !this.outline } }, this.label ? (h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label)) : (h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }))), h("ix-icon-button", Object.assign({ key: 'b2ffc7c55a1a1b8a616eaca91ba84df82e9b1a40' }, buttonAttributes, { ref: (r) => (this.triggerElement = r), class: 'anchor', icon: (_a = this.splitIcon) !== null && _a !== void 0 ? _a : iconContextMenu }))), h("ix-dropdown", { key: 'a8f812ac00d24a27afff24674dbcc9f9b78b21bd', ref: (r) => (this.dropdownElement = r), closeBehavior: this.closeBehavior }, h("slot", { key: '29a0b0498632d3df0c93555df6c59906452a25fa' }))));
    }
    get hostElement() { return this; }
    static get style() { return splitButtonCss; }
}, [1, "ix-split-button", {
        "variant": [1],
        "closeBehavior": [8, "close-behavior"],
        "outline": [4],
        "ghost": [4],
        "label": [1],
        "icon": [1],
        "splitIcon": [1, "split-icon"],
        "disabled": [4],
        "placement": [1],
        "toggle": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-split-button", "ix-button", "ix-dropdown", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-split-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SplitButton);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxSplitButton = SplitButton;
const defineCustomElement = defineCustomElement$1;

export { IxSplitButton, defineCustomElement };
//# sourceMappingURL=ix-split-button.js.map

//# sourceMappingURL=ix-split-button.js.map