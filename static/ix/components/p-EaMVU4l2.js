import { p as proxyCustomElement, H, e as createEvent, r as readTask, h, F as Fragment, d as Host } from './p-BA1wZ05L.js';
import { c as iconMoreMenu, i as iconApps } from './p-BdCskL_j.js';
import { s as showAppSwitch } from './p-DjCDFG2y.js';
import { a as applicationLayoutService } from './p-CyFFBc_G.js';
import { a as useContextConsumer, A as ApplicationLayoutContext } from './p--2LOMK-5.js';
import { m as menuController } from './p-DDHkNPby.js';
import { h as hasSlottedElements } from './p-Bi1VyG64.js';
import { d as defineCustomElement$5 } from './p-BrRMtQIh.js';
import { d as defineCustomElement$4 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$3 } from './p-CtwIu3QJ.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$1 } from './p-B19EzNYi.js';

const applicationHeaderCss = ":host{display:flex;align-items:flex-end;flex-wrap:nowrap;position:relative;width:100%;height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));min-height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));padding-top:0;padding-right:calc(1rem + var(--ix-safe-area-inset-right, 0rem));padding-bottom:0.3rem;padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;margin-bottom:0.25rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";

const ApplicationHeader = /*@__PURE__*/ proxyCustomElement(class ApplicationHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.menuToggle = createEvent(this, "menuToggle", 7);
        this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
        /**
         * Controls the visibility of the menu toggle button based on the context of the application header.
         *
         * When the application header is utilized outside the application frame, the menu toggle button is displayed.
         * Conversely, if the header is within the application frame, this property is ineffective.
         */
        this.showMenu = false;
        this.breakpoint = 'lg';
        this.menuExpanded = false;
        this.suppressResponsive = false;
        this.hasSlottedElements = false;
    }
    get contentBackground() {
        return this.hostElement.shadowRoot.querySelector('.dropdown-content');
    }
    componentWillLoad() {
        useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
            if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === 'map-navigation') {
                this.suppressResponsive = true;
                this.breakpoint = 'md';
                return;
            }
            this.breakpoint = applicationLayoutService.breakpoint;
            this.applicationLayoutContext = ctx;
            this.tryUpdateAppSwitch();
        }, true);
        this.menuDisposable = menuController.expandChange.on((show) => {
            this.menuExpanded = show;
        });
        this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
            if (this.suppressResponsive) {
                return;
            }
            this.breakpoint = mode;
        });
        this.updateIsSlottedContent();
    }
    componentDidLoad() {
        this.attachSiemensLogoIfLoaded();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
    }
    watchApplicationLayoutContext() {
        if (this.applicationLayoutContext) {
            this.showMenu = false;
        }
    }
    watchSuppressResponsive() {
        this.breakpoint = 'md';
    }
    isLogoSlotted() {
        const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
        const nodes = slotElement.assignedNodes({
            flatten: true,
        });
        return nodes.length !== 0;
    }
    attachSiemensLogoIfLoaded() {
        var _a;
        const logoElement = document.createElement('ix-siemens-logo');
        if (!this.isLogoSlotted()) {
            (_a = this.hostElement
                .shadowRoot.querySelector('.logo')) === null || _a === void 0 ? void 0 : _a.appendChild(logoElement);
        }
    }
    async onMenuClick() {
        if (this.applicationLayoutContext) {
            menuController.toggle();
        }
        else {
            this.menuExpanded = !this.menuExpanded;
        }
        this.menuToggle.emit(this.menuExpanded);
    }
    resolveContextMenuButton() {
        return new Promise((resolve) => readTask(() => resolve(this.hostElement.shadowRoot.querySelector('[data-context-menu]'))));
    }
    tryUpdateAppSwitch() {
        var _a, _b;
        if (!this.callbackUpdateAppSwitchModal ||
            !((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
            return;
        }
        this.callbackUpdateAppSwitchModal((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
    }
    async showAppSwitch() {
        var _a, _b;
        const { defaultPrevented } = this.openAppSwitch.emit();
        if (defaultPrevented) {
            return;
        }
        if (!((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
            return;
        }
        this.callbackUpdateAppSwitchModal = await showAppSwitch((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
    }
    updateIsSlottedContent() {
        const slotElement = this.hostElement.shadowRoot.querySelector('.content slot');
        this.hasSlottedElements = hasSlottedElements(slotElement);
    }
    onContentBgClick(e) {
        if (e.target === this.contentBackground) {
            e.preventDefault();
        }
    }
    render() {
        var _a;
        const hasApplicationContextAvailable = !!this.applicationLayoutContext;
        const showMenuByApplicationFrame = this.breakpoint === 'sm' &&
            this.suppressResponsive === false &&
            hasApplicationContextAvailable;
        const showApplicationSwitch = ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) &&
            this.breakpoint !== 'sm' &&
            this.suppressResponsive === false;
        return (h(Host, { key: '8554bbb8d79f1629ca042630e8efff26b39a9bda', class: {
                [`breakpoint-${this.breakpoint}`]: true,
            }, slot: "application-header" }, (this.showMenu || showMenuByApplicationFrame) && (h("ix-menu-expand-icon", { key: 'c1d2316429d73f1dd110b6dbbc71150af5a8d595', onClick: () => this.onMenuClick(), expanded: this.menuExpanded })), showApplicationSwitch && (h("ix-icon-button", { key: 'cf1e535834c69d538da3141cb63da2c875bb2ae7', onClick: () => this.showAppSwitch(), icon: iconApps, ghost: true, class: "app-switch" })), h("div", { key: '409d608089d9c10b49d7d7585e8800a917eb8a18', class: { logo: true } }, h("slot", { key: '3c5bcd07ef0aff570e74809fcb1c7663ee67f2a0', name: "logo" })), h("ix-typography", { key: 'cf226ff850f351c570839ff2c453e58ba7a3cd5e', format: "body-lg", class: "name" }, this.name), h("div", { key: '3491a96a4a591501c399fbc3d4cf275b17c43b13', class: "content" }, this.breakpoint === 'sm' ? (h(Fragment, null, h("ix-icon-button", { class: {
                ['context-menu']: true,
                ['context-menu-visible']: this.hasSlottedElements,
            }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() }))))) : (h("slot", { onSlotchange: () => this.updateIsSlottedContent() })), h("slot", { key: 'b7f84dbc67bc6dacc82e3576b4cdb59a5fdc7f0c', name: "ix-application-header-avatar" }))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "applicationLayoutContext": ["watchApplicationLayoutContext"],
        "suppressResponsive": ["watchSuppressResponsive"]
    }; }
    static get style() { return applicationHeaderCss; }
}, [1, "ix-application-header", {
        "name": [1],
        "showMenu": [1028, "show-menu"],
        "breakpoint": [32],
        "menuExpanded": [32],
        "suppressResponsive": [32],
        "hasSlottedElements": [32],
        "applicationLayoutContext": [32]
    }, undefined, {
        "applicationLayoutContext": ["watchApplicationLayoutContext"],
        "suppressResponsive": ["watchSuppressResponsive"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-application-header", "ix-dropdown", "ix-icon-button", "ix-menu-expand-icon", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-application-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ApplicationHeader);
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-menu-expand-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ix-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ApplicationHeader as A, defineCustomElement as d };
//# sourceMappingURL=p-EaMVU4l2.js.map

//# sourceMappingURL=p-EaMVU4l2.js.map