import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const dividerCss = ":host{display:block;position:relative;width:100%;border-bottom:0.0625rem solid var(--theme-color-x-weak-bdr);margin:0.25rem 0px}";

const Divider = /*@__PURE__*/ proxyCustomElement(class Divider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h(Host, { key: 'a87fb226cd6b8b3bbae1facf4629df5e11466f28' });
    }
    static get style() { return dividerCss; }
}, [1, "ix-divider"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Divider);
            }
            break;
    } });
}

export { Divider as D, defineCustomElement as d };
//# sourceMappingURL=p-DVOgkNlf.js.map

//# sourceMappingURL=p-DVOgkNlf.js.map