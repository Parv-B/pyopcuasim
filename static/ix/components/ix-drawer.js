import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { u as iconClose } from './p-BdCskL_j.js';
import { a as anime } from './p-Ou74PMQs.js';
import { d as defineCustomElement$3 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';

const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);display:block;position:absolute;justify-content:flex-start;align-items:center;opacity:0;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .drawer-container{z-index:100}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.display-none){display:none}";

const Drawer = /*@__PURE__*/ proxyCustomElement(class Drawer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.open = createEvent(this, "open", 7);
        this.drawerClose = createEvent(this, "drawerClose", 7);
        /**
         * Show or hide the drawer
         */
        this.show = false;
        /**
         * Fired in case of an outside click during drawer showed state
         */
        this.closeOnClickOutside = true;
        /**
         * Render the drawer with maximum height
         */
        this.fullHeight = false;
        /**
         * Min width interpreted as REM
         */
        this.minWidth = 16;
        /**
         * Max width interpreted as REM
         */
        this.maxWidth = 28;
        /**
         * Width interpreted as REM if not set to 'auto'
         */
        this.width = this.minWidth;
        this.toggle = false;
        this.callback = this.clickedOutside.bind(this);
        this.showContent = true;
    }
    onShowChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.toggleDrawer(newValue);
    }
    /**
     * Toggle or define show state of drawer
     * @param show Overwrite toggle state with boolean
     */
    async toggleDrawer(show) {
        show = show !== null && show !== void 0 ? show : !this.show;
        if (show) {
            const { defaultPrevented } = this.open.emit();
            if (defaultPrevented) {
                return;
            }
            this.show = true;
            if (!this.toggle && this.divElement) {
                this.slideInRight(this.divElement);
                setTimeout(() => {
                    window.addEventListener('mousedown', this.callback);
                }, Drawer.duration);
            }
        }
        else {
            const { defaultPrevented } = this.drawerClose.emit();
            if (defaultPrevented) {
                return;
            }
            this.show = false;
            if (this.toggle && this.divElement) {
                this.slideOutRight(this.divElement);
            }
            window.removeEventListener('mousedown', this.callback);
        }
        this.toggle = this.show;
        return Promise.resolve();
    }
    onCloseClicked() {
        this.toggleDrawer(false);
    }
    clickedOutside(evt) {
        if (!this.closeOnClickOutside) {
            return;
        }
        const target = evt.target;
        const closestElement = target.closest('#div-container');
        const btn = target.closest('#drawer-btn');
        if (evt.target.type !== 'button' &&
            closestElement !== this.divElement &&
            target !== btn) {
            this.show = false;
        }
    }
    getConstrainedWidth(width) {
        return Math.min(Math.max(width, this.minWidth), this.maxWidth);
    }
    slideOutRight(el) {
        const initialWidth = `${this.getConstrainedWidth(this.width === 'auto' ? this.minWidth : this.width)}rem`;
        anime({
            targets: el,
            duration: Drawer.duration,
            width: [initialWidth, 0],
            opacity: [1, 0],
            easing: 'easeInSine',
            complete: () => {
                el.classList.add('display-none');
            },
        });
    }
    slideInRight(el) {
        const targetWidth = `${this.getConstrainedWidth(this.width === 'auto' ? this.minWidth : this.width)}rem`;
        anime({
            targets: el,
            duration: Drawer.duration,
            width: [0, targetWidth],
            opacity: [0, 1],
            easing: 'easeOutSine',
            begin: () => {
                el.classList.remove('display-none');
            },
            complete: () => {
                this.showContent = true;
            },
        });
    }
    componentDidLoad() {
        this.toggleDrawer(this.show);
    }
    render() {
        return (h(Host, { key: '909d53fac8f9b093953e32c351aa753e64d185ca', class: {
                'drawer-container': true,
                'display-none': true,
            }, style: {
                width: '0',
                'max-width': `${this.maxWidth}rem`,
                height: this.fullHeight ? '100%' : 'auto',
                overflow: 'hidden',
            }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, h("div", { key: 'f1c46494754afe5bf34726bd62fc747925e96052', style: {
                width: this.width === 'auto'
                    ? 'auto'
                    : `${this.getConstrainedWidth(this.width)}rem`,
            } }, h("div", { key: '80059cbd571e3216c87a16913f5481d5028a1dcf', class: "header" }, h("div", { key: '9482f1bea71cf507ebc87f40663fa2586a286fc5', class: "header-content" }, h("slot", { key: 'f348a131de977557d6aeb45839e88b278ecdb3c6', name: "header" })), h("ix-icon-button", { key: 'a3578ca3c9802cfe777f30804549f3670089a510', class: "close-button", style: {
                display: this.showContent ? 'block' : 'none',
            }, icon: iconClose, size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: '8b1aad2acde63f6c04c602fd098a08985a5057c1', class: "content", style: {
                display: this.showContent ? 'block' : 'none',
            } }, h("slot", { key: 'de9a51c6e383bce7dfdbf8b5f687f37d3767ff2c' })))));
    }
    static get watchers() { return {
        "show": ["onShowChanged"]
    }; }
    static get style() { return drawerCss; }
}, [1, "ix-drawer", {
        "show": [1028],
        "closeOnClickOutside": [4, "close-on-click-outside"],
        "fullHeight": [4, "full-height"],
        "minWidth": [2, "min-width"],
        "maxWidth": [2, "max-width"],
        "width": [8],
        "showContent": [32],
        "toggleDrawer": [64]
    }, undefined, {
        "show": ["onShowChanged"]
    }]);
Drawer.duration = 300;
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-drawer", "ix-icon-button", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Drawer);
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

const IxDrawer = Drawer;
const defineCustomElement = defineCustomElement$1;

export { IxDrawer, defineCustomElement };
//# sourceMappingURL=ix-drawer.js.map

//# sourceMappingURL=ix-drawer.js.map