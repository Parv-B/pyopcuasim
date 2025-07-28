import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$4 } from './p-Bw3J9644.js';
import { d as defineCustomElement$3 } from './p-B60BmY2x.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";

const IxActionCard$1 = /*@__PURE__*/ proxyCustomElement(class IxActionCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Card variant
         */
        this.variant = 'outline';
        /**
         * Card icon
         */
        this.icon = undefined;
        /**
         * Card selection
         */
        this.selected = false;
    }
    render() {
        return (h(Host, { key: '611489a81be0dda6b92579bc5a8b6442f9c8ba14' }, h("ix-card", { key: '442340c0b4dcf3424187966ca06bf4b329cecda7', selected: this.selected, variant: this.variant, class: 'pointer' }, h("ix-card-content", { key: '755a4d6236f9e89e9c7207c6a16cf90696b0a6dc' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, h("div", { key: '9482063b3546639e35ae0b6ae88c359fa79587d5' }, this.heading ? (h("ix-typography", { format: "h4" }, this.heading)) : null, this.subheading ? (h("ix-typography", { format: "h5" }, this.subheading)) : null, h("slot", { key: '8b2f720026a55e8b40a829f2c93a003b40cc8f3a' }))))));
    }
    static get style() { return actionCardCss; }
}, [1, "ix-action-card", {
        "variant": [1],
        "icon": [1],
        "heading": [1],
        "subheading": [1],
        "selected": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-action-card", "ix-card", "ix-card-content", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-action-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IxActionCard$1);
            }
            break;
        case "ix-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-card-content":
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

const IxActionCard = IxActionCard$1;
const defineCustomElement = defineCustomElement$1;

export { IxActionCard, defineCustomElement };
//# sourceMappingURL=ix-action-card.js.map

//# sourceMappingURL=ix-action-card.js.map