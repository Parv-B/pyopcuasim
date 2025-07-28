import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';

const layoutAutoCss = ":host{display:block;position:relative;margin:0 0.75rem;--ix-layout-grid-gap:1.5rem}:host .container{display:flex;align-items:stretch;flex-wrap:wrap;gap:var(--ix-layout-grid-gap)}:host ::slotted(*){flex-grow:0;flex-shrink:0}";

const LayoutForm = /*@__PURE__*/ proxyCustomElement(class LayoutForm extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Defines the layout of the form.
         */
        this.layout = [
            { minWidth: '0', columns: 1 },
            { minWidth: '48em', columns: 2 },
        ];
        this.mediaQueryList = [];
        this.observer = new MutationObserver(() => this.calculateGridTemplateColumns());
        this.resizeObserver = new ResizeObserver(() => {
            this.calculateGridTemplateColumns();
        });
    }
    connectedCallback() {
        this.observer.observe(this.hostElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-colspan'],
        });
        this.resizeObserver.observe(this.hostElement);
        this.calculateGridTemplateColumns();
    }
    componentWillLoad() {
        this.calculateGridTemplateColumns();
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    updateMediaQueryList() {
        this.mediaQueryList = [];
        this.layout.forEach((layout) => {
            const mediaQuery = window.matchMedia(`(min-width: ${layout.minWidth})`);
            this.mediaQueryList.push({
                mediaQuery,
                layout,
            });
        });
    }
    parseNumber(number) {
        if (!number) {
            return 1;
        }
        const result = parseInt(number);
        if (isNaN(result)) {
            return 1;
        }
        return result;
    }
    calculateGridTemplateColumns() {
        this.updateMediaQueryList();
        let layoutColumns = 1;
        let columnSpacing = 'var(--ix-layout-grid-gap)';
        this.mediaQueryList.forEach((mediaQuery) => {
            if (mediaQuery.mediaQuery.matches) {
                layoutColumns = mediaQuery.layout.columns;
            }
        });
        Array.from(this.hostElement.children).forEach((child) => {
            let colspan = this.parseNumber(child.getAttribute('data-colspan'));
            colspan = Math.min(colspan, layoutColumns);
            const childRatio = colspan / layoutColumns;
            child.style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;
        });
    }
    render() {
        return (h(Host, { key: '1f8f84938e86f60299fab0e2a5bea7305165b82d' }, h("div", { key: '4df4340902cbc0ec02ef07c9823a94a43039b6f5', class: "container" }, h("slot", { key: '1af475b649df045f95d387129e659e85719dadda' }))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "layout": ["updateMediaQueryList"]
    }; }
    static get style() { return layoutAutoCss; }
}, [1, "ix-layout-auto", {
        "layout": [16]
    }, undefined, {
        "layout": ["updateMediaQueryList"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-layout-auto"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-layout-auto":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LayoutForm);
            }
            break;
    } });
}

const IxLayoutAuto = LayoutForm;
const defineCustomElement = defineCustomElement$1;

export { IxLayoutAuto, defineCustomElement };
//# sourceMappingURL=ix-layout-auto.js.map

//# sourceMappingURL=ix-layout-auto.js.map