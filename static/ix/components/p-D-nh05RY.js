import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';

const groupItemCss = ":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);cursor:pointer;padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(.selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(.selected:active){background-color:var(--theme-color-ghost--selected-active)}";

const GroupItem = /*@__PURE__*/ proxyCustomElement(class GroupItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.selectedChanged = createEvent(this, "selectedChanged", 7);
        /**
         * Supress the selection of the group
         */
        this.suppressSelection = false;
        /**
         * Show selected state
         */
        this.selected = false;
        /**
         * The elements tabindex attribute will get set accordingly.
         * If true tabindex will be 0, -1 otherwise.
         */
        this.focusable = true;
    }
    clickListen() {
        this.selectedChanged.emit(this.hostElement);
    }
    render() {
        return (h(Host, { key: '188000c4934bf6c42e0a1b792f39464252e2b13c', class: {
                selected: this.selected && !this.suppressSelection,
            } }, h("button", { key: '3800199f5910601ddc0c3ea6ba0ffa5a062d1dad', tabindex: this.focusable ? 0 : -1 }, h("div", { key: '589f80335094a7ef5a7563b00320fecae157273e', class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? (h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text))) : null, this.secondaryText ? (h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText))) : null, h("slot", { key: '6e6dfb945b153a7b3c054b002b7902a30b9296cb' }))));
    }
    get hostElement() { return this; }
    static get style() { return groupItemCss; }
}, [1, "ix-group-item", {
        "icon": [1],
        "text": [1],
        "secondaryText": [1, "secondary-text"],
        "suppressSelection": [4, "suppress-selection"],
        "selected": [4],
        "focusable": [4],
        "index": [2]
    }, [[1, "click", "clickListen"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-group-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-group-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GroupItem);
            }
            break;
    } });
}

export { GroupItem as G, defineCustomElement as d };
//# sourceMappingURL=p-D-nh05RY.js.map

//# sourceMappingURL=p-D-nh05RY.js.map