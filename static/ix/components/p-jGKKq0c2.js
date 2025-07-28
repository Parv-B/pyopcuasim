import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { b as iconChevronRightSmall, l as iconChevronLeftSmall } from './p-BdCskL_j.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Prevents angular from change detection when requesting an animation frame
 *
 * Credits goes to:
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts
 */
const requestAnimationFrameNoNgZone = (callback) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(callback);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(callback);
    }
    return setTimeout(callback);
};

const tabsCss = ":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}";

const Tabs = /*@__PURE__*/ proxyCustomElement(class Tabs extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.selectedChange = createEvent(this, "selectedChange", 7);
        /**
         * Set tab items to small size
         */
        this.small = false;
        /**
         * Set rounded tabs
         */
        this.rounded = false;
        /**
         * Set default selected tab by index
         */
        this.selected = 0;
        /**
         * Set layout width style
         */
        this.layout = 'auto';
        /**
         * Set placement style
         */
        this.placement = 'bottom';
        this.totalItems = 0;
        this.currentScrollAmount = 0;
        this.scrollAmount = 100;
        this.scrollActionAmount = 0;
        this.showArrowPrevious = false;
        this.showArrowNext = false;
        this.windowStartSize = window.innerWidth;
        this.clickAction = {
            timeout: null,
            isClick: true,
        };
    }
    onWindowResize() {
        this.totalItems = 0;
        this.totalItems = this.getTabs().length;
        if (this.windowStartSize === 0)
            return (this.windowStartSize = window.innerWidth);
        this.move(this.windowStartSize - window.innerWidth);
        this.windowStartSize = window.innerWidth;
    }
    getTabs() {
        return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
    }
    getTab(tabIndex) {
        return this.getTabs()[tabIndex];
    }
    getTabsWrapper() {
        var _a;
        return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.items-content');
    }
    initResizeObserver() {
        const parentElement = this.hostElement.parentElement;
        if (!parentElement)
            return;
        this.resizeObserver = new ResizeObserver(() => {
            this.renderArrows();
        });
        this.resizeObserver.observe(parentElement);
    }
    showArrows() {
        try {
            const tabWrapper = this.getTabsWrapper();
            return (tabWrapper &&
                tabWrapper.scrollWidth >
                    Math.ceil(tabWrapper.getBoundingClientRect().width) &&
                this.layout === 'auto');
        }
        catch (error) {
            return false;
        }
    }
    showPreviousArrow() {
        try {
            return this.showArrows() === true && this.scrollActionAmount < 0;
        }
        catch (error) {
            return false;
        }
    }
    showNextArrow() {
        try {
            const tabWrapper = this.getTabsWrapper();
            if (!tabWrapper) {
                return false;
            }
            const tabWrapperRect = tabWrapper.getBoundingClientRect();
            return (this.showArrows() === true &&
                this.scrollActionAmount >
                    (tabWrapper.scrollWidth - tabWrapperRect.width) * -1);
        }
        catch (error) {
            return false;
        }
    }
    move(amount, click = false) {
        const tabsWrapper = this.getTabsWrapper();
        if (!tabsWrapper) {
            return;
        }
        const tabsWrapperVisibleWidth = tabsWrapper.getBoundingClientRect().width;
        const maxScrollWidth = -this.currentScrollAmount +
            tabsWrapperVisibleWidth -
            tabsWrapper.scrollWidth;
        amount = amount < maxScrollWidth ? maxScrollWidth : amount;
        amount += this.currentScrollAmount;
        amount = Math.min(amount, 0);
        const styles = [
            `transform: translateX(${amount}px);`,
            click ? 'transition: all ease-in-out 400ms;' : '',
        ].join('');
        tabsWrapper.setAttribute('style', styles);
        if (click)
            this.currentScrollAmount = this.scrollActionAmount = amount;
        else
            this.scrollActionAmount = amount;
    }
    onSelectedChange(newValue) {
        var _a;
        if (!this.showArrows())
            return;
        const tabRect = this.getTab(newValue).getBoundingClientRect();
        const wrapperWidth = (_a = this.getTabsWrapper()) === null || _a === void 0 ? void 0 : _a.clientWidth;
        const arrowWidth = 32;
        if (tabRect.left < arrowWidth) {
            this.move(-tabRect.left + arrowWidth, true);
        }
        else if (wrapperWidth && tabRect.right > wrapperWidth - arrowWidth) {
            this.move(wrapperWidth - tabRect.right - arrowWidth, true);
        }
    }
    setSelected(index) {
        this.selected = index;
    }
    clickTab(index) {
        if (!this.clickAction.isClick || this.dragStop()) {
            return;
        }
        const { defaultPrevented } = this.selectedChange.emit(index);
        if (defaultPrevented) {
            return;
        }
        this.setSelected(index);
    }
    dragStart(element, event) {
        if (!this.showArrows())
            return;
        if (event.button > 0)
            return;
        this.clickAction.timeout =
            this.clickAction.timeout === null
                ? setTimeout(() => (this.clickAction.isClick = false), 300)
                : null;
        const tabPositionX = parseFloat(window.getComputedStyle(element).left);
        const mousedownPositionX = event.clientX;
        const move = (event) => this.dragMove(event, tabPositionX, mousedownPositionX);
        const windowClick = () => {
            window.removeEventListener('mousemove', move, false);
            window.removeEventListener('click', windowClick, false);
            this.dragStop();
        };
        window.addEventListener('click', windowClick);
        window.addEventListener('mousemove', move, false);
    }
    dragMove(event, tabX, mousedownX) {
        this.move(event.clientX + tabX - mousedownX);
    }
    dragStop() {
        if (this.clickAction.timeout) {
            clearTimeout(this.clickAction.timeout);
            this.clickAction.timeout = null;
        }
        if (this.clickAction.isClick)
            return false;
        this.currentScrollAmount = this.scrollActionAmount;
        this.clickAction.isClick = true;
        return true;
    }
    componentWillLoad() {
        const tabs = this.getTabs();
        tabs.map((element, index) => {
            if (this.small)
                element.setAttribute('small', 'true');
            if (this.rounded)
                element.setAttribute('rounded', 'true');
            element.setAttribute('layout', this.layout);
            element.setAttribute('selected', index === this.selected ? 'true' : 'false');
            element.setAttribute('placement', this.placement);
        });
        this.initResizeObserver();
    }
    componentDidRender() {
        const tabs = this.getTabs();
        this.totalItems = tabs.length;
        tabs.map((element, index) => {
            element.setAttribute('selected', index === this.selected ? 'true' : 'false');
        });
    }
    componentWillRender() {
        this.renderArrows();
    }
    renderArrows() {
        requestAnimationFrameNoNgZone(() => {
            this.showArrowNext = this.showNextArrow();
            this.showArrowPrevious = this.showPreviousArrow();
        });
    }
    componentDidLoad() {
        const tabs = this.getTabs();
        tabs.forEach((element) => {
            element.addEventListener('mousedown', (event) => this.dragStart(element, event));
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    onTabClick(event) {
        if (event.defaultPrevented) {
            return;
        }
        const target = event.target;
        const tabs = this.getTabs();
        tabs.forEach((tab, index) => {
            if (!tab.disabled && tab === target) {
                this.clickTab(index);
            }
        });
    }
    render() {
        return (h(Host, { key: '087e7e19b3ad5f5c759d8f083350cfa22f209da3' }, this.showArrowPrevious && (h("div", { key: 'd339e9498044204193be9ee20b6c7a8a7ea885b1', class: "arrow", onClick: () => this.move(this.scrollAmount, true) }, h("ix-icon", { key: 'f4703821ad1adf4bc75c3697693486cc33f9f830', name: iconChevronLeftSmall }))), h("div", { key: 'cffe3545110b1638cafdc2643c2fbbbe3eabe303', class: {
                'tab-items': true,
                'overflow-shadow': true,
                'shadow-left': this.showArrowPrevious,
                'shadow-right': this.showArrowNext,
                'shadow-both': this.showArrowNext && this.showArrowPrevious,
            } }, h("div", { key: '4162663c6e5894b3e7467413a5a5fd05a7912f79', class: "items-content" }, h("slot", { key: '3f55e88974efedcc9091073eab61a9746d6dbb38' }))), this.showArrowNext && (h("div", { key: 'e8b9eed8a5457a0c29c82ffe0098a8e70a22a2ac', class: "arrow right", onClick: () => this.move(-this.scrollAmount, true) }, h("ix-icon", { key: '59a5552eddceab33b773d7c00aa5416d9fed35b7', name: iconChevronRightSmall })))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "selected": ["onSelectedChange"]
    }; }
    static get style() { return tabsCss; }
}, [1, "ix-tabs", {
        "small": [4],
        "rounded": [4],
        "selected": [1026],
        "layout": [1],
        "placement": [1],
        "totalItems": [32],
        "currentScrollAmount": [32],
        "scrollAmount": [32],
        "scrollActionAmount": [32],
        "showArrowPrevious": [32],
        "showArrowNext": [32]
    }, [[9, "resize", "onWindowResize"], [0, "tabClick", "onTabClick"]], {
        "selected": ["onSelectedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tabs);
            }
            break;
    } });
}

export { Tabs as T, defineCustomElement as d };
//# sourceMappingURL=p-jGKKq0c2.js.map

//# sourceMappingURL=p-jGKKq0c2.js.map