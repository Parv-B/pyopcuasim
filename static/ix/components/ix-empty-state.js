import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$4 } from './p-CPUiQJXe.js';
import { d as defineCustomElement$3 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const emptyStateCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}";

const EmptyState = /*@__PURE__*/ proxyCustomElement(class EmptyState extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.actionClick = createEvent(this, "actionClick", 7);
        /**
         * Optional empty state layout - one of 'large', 'compact' or 'compactBreak'
         */
        this.layout = 'large';
    }
    render() {
        return (h(Host, { key: 'f0f9a5786f47ea5654e3405c3f1801f7eef2b727', class: `emptyState emptyState--${this.layout}` }, this.icon && (h("div", { key: 'c228337793db4b012a629b9f3dba46414d1c99a3', class: "emptyState__icon" }, h("ix-icon", { key: '21230467c73a20358675e9897209764de04322dc', name: this.icon, size: this.layout === 'large' ? '32' : '32', color: "color-soft-text" }))), h("div", { key: '91f38de4d8a4f6a0425917aa193bf4a2a21d5a44', class: "emptyState__content" }, h("div", { key: '211d263089f8c10cc13c8af246de3c33525916b8', class: "content__label" }, h("ix-typography", { key: '43cc10b9a788b39b9328981e2ad2ec046d5e25c4', format: this.layout === 'large' ? 'h3' : 'body' }, this.header), this.subHeader && (h("div", { key: 'ed87bc328617986beb763f73559cbf958d561f9e', class: "label__subHeader" }, this.subHeader))), this.action && (h("div", { key: 'bb81fe8c36ecbc257528ae4b61f76345062a5292', class: "content__action" }, h("ix-button", { key: 'e7ea2c3f9534c20cbbfded277c77eadca1db302a', onClick: () => this.actionClick.emit() }, this.action))))));
    }
    static get style() { return emptyStateCss; }
}, [1, "ix-empty-state", {
        "layout": [1],
        "icon": [1],
        "header": [1],
        "subHeader": [1, "sub-header"],
        "action": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-empty-state", "ix-button", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-empty-state":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, EmptyState);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
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

const IxEmptyState = EmptyState;
const defineCustomElement = defineCustomElement$1;

export { IxEmptyState, defineCustomElement };
//# sourceMappingURL=ix-empty-state.js.map

//# sourceMappingURL=ix-empty-state.js.map