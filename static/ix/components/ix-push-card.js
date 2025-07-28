import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$6 } from './p-Bw3J9644.js';
import { d as defineCustomElement$5 } from './p-BDlUCzdQ.js';
import { d as defineCustomElement$4 } from './p-B60BmY2x.js';
import { d as defineCustomElement$3 } from './p-DUuL9bnV.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";

const PushCard = /*@__PURE__*/ proxyCustomElement(class PushCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Card variant
         */
        this.variant = 'outline';
        /**
         * Collapse the card
         */
        this.collapse = true;
    }
    render() {
        var _a;
        return (h(Host, { key: 'd27788bf4203057ec2b8a0cd884b32f47cb347ad' }, h("ix-card", { key: '71e357c1619e349d63c9b43b74fe3e70025702ad', variant: this.variant }, h("ix-card-content", { key: '9bc8bf53d42a234c821eae26bfe2ceffacda1ea7' }, h("ix-card-title", { key: 'c37298a3f034a6a51aa264ae75fe659cedc46bac' }, this.icon ? (h("ix-icon", { class: 'icon', name: this.icon, size: "32" })) : null, h("span", { key: '56cef0aa0e632242a7172b30057b7f63e81335f6', class: 'notification' }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: 'f5e061cc94e088a405f809d117b655718711d95d', name: "title-action" })), h("ix-typography", { key: 'ee4e40fcf9e547c87b26cb3f5540ca5b5be8c2d8', format: "h4" }, this.heading), h("ix-typography", { key: '05e9464aed2f5887e6e3809da886deb8c208f26c' }, this.subheading)), h("ix-card-accordion", { key: 'cc109b735b6cf16a69ac449430eb3ed346b25c7b', collapse: this.collapse }, h("slot", { key: '8536131544ad57b5d5be00f48cabc51362abc989' })))));
    }
    static get style() { return pushCardCss; }
}, [1, "ix-push-card", {
        "icon": [1],
        "notification": [1],
        "heading": [1],
        "subheading": [1],
        "variant": [1],
        "collapse": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-push-card", "ix-card", "ix-card-accordion", "ix-card-content", "ix-card-title", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-push-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, PushCard);
            }
            break;
        case "ix-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-card-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-card-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-card-title":
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

const IxPushCard = PushCard;
const defineCustomElement = defineCustomElement$1;

export { IxPushCard, defineCustomElement };
//# sourceMappingURL=ix-push-card.js.map

//# sourceMappingURL=ix-push-card.js.map