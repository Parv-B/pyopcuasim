import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { c as createMutationObserver } from './p-CX81WQtk.js';

const workflowStepsCss = ":host{display:block;position:relative;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;min-width:2rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .steps{display:flex;height:100%}:host .steps.vertical{flex-direction:column}";

const WorkflowSteps = /*@__PURE__*/ proxyCustomElement(class WorkflowSteps extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.stepSelected = createEvent(this, "stepSelected", 7);
        /**
         * Select orientation
         */
        this.vertical = false;
        /**
         * Activate navigation click
         */
        this.clickable = false;
        /**
         * Activate navigation click
         */
        this.selectedIndex = 0;
    }
    getSteps() {
        return Array.from(this.hostElement.querySelectorAll('ix-workflow-step'));
    }
    updateSteps() {
        let steps = this.getSteps();
        steps.forEach((element, index) => {
            element.vertical = this.vertical;
            element.clickable = this.clickable;
            element.selected = this.selectedIndex === index;
            if (steps.length === 1) {
                element.position = 'single';
                return;
            }
            if (index === 0) {
                element.position = 'first';
            }
            else if (index === steps.length - 1) {
                element.position = 'last';
            }
            else {
                element.position = 'undefined';
            }
        });
    }
    onStepSelectionChanged(event) {
        const eventTarget = event.detail;
        const steps = this.getSteps();
        const clickIndex = steps.findIndex((step) => step === eventTarget);
        const clientEvent = this.stepSelected.emit(clickIndex);
        if (clientEvent.defaultPrevented) {
            return;
        }
        steps.forEach((step, index) => {
            step.selected = index === clickIndex;
        });
    }
    componentWillLoad() {
        this.updateSteps();
    }
    componentDidLoad() {
        this.observer = createMutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.type === 'childList') {
                    this.updateSteps();
                }
            }
        });
        this.observer.observe(this.hostElement, { childList: true });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    componentDidRender() {
        this.updateSteps();
    }
    render() {
        return (h(Host, { key: '192c534bab7bc83c33b9c479817b9bec7967f759' }, h("div", { key: '9b35cb1aa638c73acf3cca0fb359e4b26ed8004e', class: { steps: true, vertical: this.vertical } }, h("slot", { key: '5feb3ad4a26faed8f4071673980ab1bb3fe27970' }))));
    }
    get hostElement() { return this; }
    static get style() { return workflowStepsCss; }
}, [1, "ix-workflow-steps", {
        "vertical": [4],
        "clickable": [4],
        "selectedIndex": [2, "selected-index"]
    }, [[0, "selectedChanged", "onStepSelectionChanged"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-workflow-steps"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-workflow-steps":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, WorkflowSteps);
            }
            break;
    } });
}

const IxWorkflowSteps = WorkflowSteps;
const defineCustomElement = defineCustomElement$1;

export { IxWorkflowSteps, defineCustomElement };
//# sourceMappingURL=ix-workflow-steps.js.map

//# sourceMappingURL=ix-workflow-steps.js.map