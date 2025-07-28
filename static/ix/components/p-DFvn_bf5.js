import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$1 } from './p-CnWYvVQ3.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class IxSelectItemLabelChangeEvent extends CustomEvent {
    constructor(detail) {
        super('ix-select-item:labelChange', {
            bubbles: true,
            detail,
        });
    }
}
class IxSelectItemValueChangeEvent extends CustomEvent {
    constructor(detail) {
        super('ix-select-item:valueChange', {
            bubbles: true,
            detail,
        });
    }
}

const selectItemCss = ":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--theme-color-std-text)}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.display-none){display:none}";

const SelectItem = /*@__PURE__*/ proxyCustomElement(class SelectItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemClick = createEvent(this, "itemClick", 7);
        /**
         * Flag indicating whether the item is selected
         */
        this.selected = false;
        /**
         * @internal
         */
        this.hover = false;
        this.componentLoaded = false;
    }
    /** @internal */
    async getDropdownItemElement() {
        return this.dropdownItem;
    }
    /**
     * @internal
     * @param event
     */
    async onItemClick(event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.itemClick.emit(this.value);
    }
    get dropdownItem() {
        return this.hostElement.querySelector('ix-dropdown-item');
    }
    componentDidRender() {
        if (this.value === undefined || this.value === null) {
            console.warn('ix-select-item must have a `value` property');
        }
        this.componentLoaded = true;
    }
    onValueChange(newValue, oldValue) {
        if (this.componentLoaded) {
            this.hostElement.dispatchEvent(new IxSelectItemValueChangeEvent({
                newValue: newValue,
                oldValue: oldValue,
            }));
        }
    }
    labelChange(newValue, oldValue) {
        if (this.componentLoaded) {
            this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
                newValue: newValue,
                oldValue: oldValue,
            }));
        }
    }
    render() {
        return (h(Host, { key: '5fb345e674e981e79f0c44ac4a14a59987f34988' }, h("ix-dropdown-item", { key: '7a3666f16d17e001fcbd9bd04fb143896ac48fe4', class: {
                'select-item-checked': this.selected,
            }, checked: this.selected, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) })));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "value": ["onValueChange"],
        "label": ["labelChange"]
    }; }
    static get style() { return selectItemCss; }
}, [1, "ix-select-item", {
        "label": [513],
        "value": [513],
        "selected": [4],
        "hover": [4],
        "getDropdownItemElement": [64],
        "onItemClick": [64]
    }, undefined, {
        "value": ["onValueChange"],
        "label": ["labelChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-select-item", "ix-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-select-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SelectItem);
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { SelectItem as S, defineCustomElement as d };
//# sourceMappingURL=p-DFvn_bf5.js.map

//# sourceMappingURL=p-DFvn_bf5.js.map