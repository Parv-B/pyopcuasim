import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";

const KeyValueList = /*@__PURE__*/ proxyCustomElement(class KeyValueList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Optional striped key value list style
         */
        this.striped = false;
    }
    render() {
        return (h(Host, { key: 'fe4120265311e472df052701a5f91112d42f4fe6', class: { keyValueList: true, 'keyValueList--striped': this.striped } }, h("slot", { key: 'f2cb23adc21136d36cf9c32bf1496a4aceaa9c3b' })));
    }
    static get style() { return keyValueListCss; }
}, [1, "ix-key-value-list", {
        "striped": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-key-value-list"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-key-value-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, KeyValueList);
            }
            break;
    } });
}

const IxKeyValueList = KeyValueList;
const defineCustomElement = defineCustomElement$1;

export { IxKeyValueList, defineCustomElement };
//# sourceMappingURL=ix-key-value-list.js.map

//# sourceMappingURL=ix-key-value-list.js.map