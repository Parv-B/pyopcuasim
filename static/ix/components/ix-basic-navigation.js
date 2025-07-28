import { p as proxyCustomElement, H, h, d as Host } from './p-BA1wZ05L.js';
import { u as useContextProvider, A as ApplicationLayoutContext } from './p--2LOMK-5.js';
import { a as applicationLayoutService } from './p-CyFFBc_G.js';
import { m as menuController } from './p-DDHkNPby.js';
import { d as defineCustomElement$7 } from './p-EaMVU4l2.js';
import { d as defineCustomElement$6 } from './p-BrRMtQIh.js';
import { d as defineCustomElement$5 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$4 } from './p-CtwIu3QJ.js';
import { d as defineCustomElement$3 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}";

const BasicNavigation = /*@__PURE__*/ proxyCustomElement(class BasicNavigation extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Hide application header. Will disable responsive feature of basic navigation.
         */
        this.hideHeader = false;
        /**
         * Supported layouts
         * @example ['sm', 'md']
         */
        this.breakpoints = ['sm', 'md', 'lg'];
        this.breakpoint = 'lg';
    }
    onHideHeaderChange() {
        var _a;
        (_a = this.contextProvider) === null || _a === void 0 ? void 0 : _a.emit({
            hideHeader: this.hideHeader,
            host: 'basic-navigation',
        });
        this.breakpoint = applicationLayoutService.breakpoint;
    }
    forceLayoutChange(newMode) {
        if (!newMode) {
            applicationLayoutService.enableBreakpointDetection();
            return;
        }
        applicationLayoutService.disableBreakpointDetection();
        applicationLayoutService.setBreakpoint(newMode);
    }
    onBreakpointsChange(breakpoints) {
        applicationLayoutService.setBreakpoints(breakpoints);
    }
    get menu() {
        return this.hostElement.querySelector('ix-menu');
    }
    onContentClick() {
        var _a;
        if (menuController.isPinned) {
            return;
        }
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
    }
    componentWillLoad() {
        applicationLayoutService.setBreakpoints(this.breakpoints);
        this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
            hideHeader: this.hideHeader,
            host: 'basic-navigation',
        });
        this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
            this.breakpoint = mode;
        });
        this.breakpoint = applicationLayoutService.breakpoint;
        if (this.forceBreakpoint) {
            this.forceLayoutChange(this.forceBreakpoint);
        }
    }
    componentDidRender() {
        if (this.menu) {
            this.menu.applicationName = this.applicationName;
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    render() {
        return (h(Host, { key: '9fc90b3779ab68ca24264543cac8229857da780b', "data-role": "", class: {
                'hide-header': this.hideHeader,
                [`breakpoint-${this.breakpoint}`]: true,
            } }, !this.hideHeader ? (h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" }))) : null, h("div", { key: 'd95cb1125f5087059726bfa6d1f7762b2eed666d', class: "navigation-content" }, h("slot", { key: '944934592f09029948d138b57b412261fc194b39', name: "menu" }), h("div", { key: 'b7740bd510330201cd79f8ffa420ecd98fb65018', class: "content", onClick: () => this.onContentClick() }, h("slot", { key: '919a58fb4a835848a0ffec81ad215372fbc6a007' })))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "hideHeader": ["onHideHeaderChange"],
        "breakpoints": ["onBreakpointsChange"]
    }; }
    static get style() { return basicNavigationCss; }
}, [1, "ix-basic-navigation", {
        "applicationName": [1, "application-name"],
        "hideHeader": [4, "hide-header"],
        "forceBreakpoint": [1, "force-breakpoint"],
        "breakpoints": [16],
        "breakpoint": [32]
    }, undefined, {
        "hideHeader": ["onHideHeaderChange"],
        "breakpoints": ["onBreakpointsChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-basic-navigation", "ix-application-header", "ix-dropdown", "ix-icon-button", "ix-menu-expand-icon", "ix-spinner", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-basic-navigation":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BasicNavigation);
            }
            break;
        case "ix-application-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-menu-expand-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-spinner":
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

const IxBasicNavigation = BasicNavigation;
const defineCustomElement = defineCustomElement$1;

export { IxBasicNavigation, defineCustomElement };
//# sourceMappingURL=ix-basic-navigation.js.map

//# sourceMappingURL=ix-basic-navigation.js.map