import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const flipTileContentCss = ":host{display:block}";

const FlipTileContent = /*@__PURE__*/ proxyCustomElement(class FlipTileContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Controls the visibility of the content
         *
         * @internal
         */
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: '33ad76bf60ec2b3072cc6e0e89365e02071f1d9e' }, this.contentVisible ? h("slot", null) : null);
    }
    static get style() { return flipTileContentCss; }
}, [1, "ix-flip-tile-content", {
        "contentVisible": [4, "content-visible"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-flip-tile-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-flip-tile-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FlipTileContent);
            }
            break;
    } });
}

const IxFlipTileContent = FlipTileContent;
const defineCustomElement = defineCustomElement$1;

export { IxFlipTileContent, defineCustomElement };
//# sourceMappingURL=ix-flip-tile-content.js.map

//# sourceMappingURL=ix-flip-tile-content.js.map