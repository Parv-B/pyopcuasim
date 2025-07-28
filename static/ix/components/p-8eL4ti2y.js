import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";

const LayoutGrid = /*@__PURE__*/ proxyCustomElement(class LayoutGrid extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * The grid will not have any horizontal padding
         */
        this.noMargin = false;
        /**
         * Grid gap
         */
        this.gap = '24';
        /**
         * Overwrite the default number of columns. Choose between 2 and 12 columns.
         */
        this.columns = 12;
    }
    render() {
        return (h(Host, { key: 'd40e8aced8025bbe08dd872852003bcc29c03dac', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: 'cec24b350d29b7e30e73d408ad15887951f30184' })));
    }
    static get style() { return layoutGridCss; }
}, [1, "ix-layout-grid", {
        "noMargin": [4, "no-margin"],
        "gap": [1],
        "columns": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-layout-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LayoutGrid);
            }
            break;
    } });
}

export { LayoutGrid as L, defineCustomElement as d };
//# sourceMappingURL=p-8eL4ti2y.js.map

//# sourceMappingURL=p-8eL4ti2y.js.map