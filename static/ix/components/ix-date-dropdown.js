import { p as proxyCustomElement, H, e as createEvent, h, F as Fragment, d as Host } from './p-BA1wZ05L.js';
import { D as DateTime } from './p-bDicGJUN.js';
import { m as makeRef } from './p-bcj7UEIC.js';
import { j as iconHistory } from './p-BdCskL_j.js';
import { d as defineCustomElement$b } from './p-CPUiQJXe.js';
import { d as defineCustomElement$a } from './p-CKoR0lxP.js';
import { d as defineCustomElement$9 } from './p-CRSLovo3.js';
import { d as defineCustomElement$8 } from './p-Cu4GsGII.js';
import { d as defineCustomElement$7 } from './p-BrRMtQIh.js';
import { d as defineCustomElement$6 } from './p-CnWYvVQ3.js';
import { d as defineCustomElement$5 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$4 } from './p-8eL4ti2y.js';
import { d as defineCustomElement$3 } from './p-CufZ3bGn.js';
import { d as defineCustomElement$2 } from './p-Dlmgmbod.js';

const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0 1rem 0.75rem 1rem}";

const DateDropdown = /*@__PURE__*/ proxyCustomElement(class DateDropdown extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        /**
         * Disable the button that opens the dropdown containing the date picker.
         */
        this.disabled = false;
        /**
         * Date format string.
         * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
         */
        this.format = 'yyyy/LL/dd';
        /**
         * If true a range of dates can be selected.
         */
        this.range = true;
        /**
         * Picker date. If the picker is in range mode this property is the start date.
         * If set to `null` no default start date will be pre-selected.
         *
         * Format is based on `format`
         */
        this.from = '';
        /**
         * Picker date. If the picker is in range mode this property is the end date.
         * If the picker is not in range mode leave this value `null`
         *
         * Format is based on `format`
         */
        this.to = '';
        /**
         * The earliest date that can be selected by the date picker.
         * If not set there will be no restriction.
         */
        this.minDate = '';
        /**
         * The latest date that can be selected by the date picker.
         * If not set there will be no restriction.
         */
        this.maxDate = '';
        /**
         * Used to set the initial select date range as well as the button name,
         * if not set or no according date range label is found, nothing will be selected
         */
        this.dateRangeId = 'custom';
        /**
         * Button variant
         */
        this.variant = 'primary';
        /**
         * Outline button
         */
        this.outline = false;
        /**
         * Button with no background or outline
         */
        this.ghost = false;
        /**
         * Loading button
         */
        this.loading = false;
        /**
         * Shows week numbers displayed on the left side of the date picker
         *
         * @since 3.0.0
         */
        this.showWeekNumbers = false;
        /**
         * Controls whether the user is allowed to pick custom date ranges in the component.
         * When set to 'true', the user can select a custom date range using the date picker.
         * When set to 'false', only predefined time date ranges are available for selection.
         */
        this.customRangeAllowed = true;
        /**
         * An array of predefined date range options for the date picker.
         * Each option is an object with a label describing the range and a function
         * that returns the start and end dates of the range as a DateRangeOption object.
         *
         * Example format:
         *   {
         *     id: 'some unique id',
         *     label: 'Name of the range',
         *     from: undefined, to: '2023/03/29'
         *   },
         *   // ... other predefined date range options ...
         */
        this.dateRangeOptions = [];
        /**
         * The index of which day to start the week on, based on the Locale#weekdays array.
         * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
         */
        this.weekStartIndex = 0;
        /**
         * Text for custom dropdown item. Will be used for translation.
         */
        this.i18nCustomItem = 'Custom...';
        /**
         * Text for the done button. Will be used for translation.
         */
        this.i18nDone = 'Done';
        /**
         * Text for the done button. Will be used for translation.
         */
        this.i18nNoRange = 'No range set';
        /** @internal */
        this.today = DateTime.now().toISO();
        this.selectedDateRangeId = '';
        this.triggerRef = makeRef();
        this.datePickerTouched = false;
    }
    onDateRangeIdChange() {
        this.onRangeListSelect(this.dateRangeId);
        this.updateCurrentDate();
        this.setDateRangeSelection(this.dateRangeId);
        if (!this.currentRangeValue) {
            return;
        }
        this.onDateSelect({
            from: this.currentRangeValue.from,
            to: this.currentRangeValue.to,
            id: this.currentRangeValue.id,
        });
    }
    onDateRangeOptionsChange() {
        this.initialize();
        this.onDateRangeIdChange();
    }
    onDisabledChange() {
        if (this.disabled) {
            this.closeDropdown();
        }
    }
    componentWillLoad() {
        this.initialize();
        this.setDateRangeSelection(this.dateRangeId);
    }
    /**
     * Retrieves the currently selected date range from the component.
     * This method returns the selected date range as a `DateChangeEvent` object.
     */
    async getDateRange() {
        return this.currentRangeValue || { id: '', from: '', to: '' };
    }
    initialize() {
        const isCustomRange = this.dateRangeId === 'custom' ||
            (!this.dateRangeId && !!this.from && !!this.to);
        if (isCustomRange && this.customRangeAllowed) {
            this.selectedDateRangeId = 'custom';
            this.updateCurrentDate();
            return;
        }
        const isValidConfiguration = !isCustomRange && !this.from;
        if (!isValidConfiguration) {
            console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
            this.selectedDateRangeId = 'custom';
            this.updateCurrentDate();
            return;
        }
    }
    updateCurrentDate() {
        this.currentRangeValue = {
            id: this.selectedDateRangeId,
            from: this.from,
            to: this.to,
        };
    }
    onDateSelect(rangeValue, preserveDropdown = true) {
        this.dateRangeChange.emit(rangeValue);
        if (preserveDropdown) {
            this.closeDropdown();
        }
        this.datePickerTouched = false;
    }
    onRangeListSelect(id) {
        if (this.setDateRangeSelection(id) && this.currentRangeValue) {
            this.onDateSelect(this.currentRangeValue);
        }
    }
    setDateRangeSelection(id) {
        this.selectedDateRangeId = id;
        const option = this.dateRangeOptions.find((range) => range.id === id);
        if (option) {
            this.currentRangeValue = option;
        }
        return option;
    }
    closeDropdown() {
        const dropdown = this.hostElement.shadowRoot.querySelector('ix-dropdown');
        if (dropdown) {
            dropdown.show = false;
        }
    }
    getButtonLabel() {
        var _a, _b;
        if (this.selectedDateRangeId === 'custom' && ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from)) {
            let range = this.currentRangeValue.from;
            if (this.currentRangeValue.to) {
                range += ` - ${this.currentRangeValue.to}`;
            }
            return range;
        }
        if (!this.selectedDateRangeId) {
            return this.i18nNoRange;
        }
        if (!this.dateRangeOptions || ((_b = this.dateRangeOptions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            return this.i18nNoRange;
        }
        const option = this.dateRangeOptions.find((option) => option.id === this.selectedDateRangeId);
        if (!option) {
            console.error(`Cannot find range option with id ${this.selectedDateRangeId}`);
            return this.i18nNoRange;
        }
        return option.label;
    }
    render() {
        var _a, _b, _c;
        return (h(Host, { key: '8a5ae63cb553e80b85681b489b6ea97350827867' }, h("ix-button", { key: '0608d3a9063c9b729fbdda08b9a4f4441a19d039', "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, variant: this.variant, ghost: this.ghost, outline: this.outline, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled }, this.getButtonLabel()), h("ix-dropdown", { key: 'd266a82bca22d8fe1009d55a29f485778ebf8b4c', "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
                if (!show &&
                    this.selectedDateRangeId === 'custom' &&
                    this.datePickerTouched &&
                    this.currentRangeValue) {
                    this.onDateSelect(this.currentRangeValue);
                }
            } }, h("ix-layout-grid", { key: 'c7a01092a838122a1041651c6a0f9c5eb74c2aae', noMargin: true }, h("ix-row", { key: 'a6ed728fd08a35d8f0b3e71f115e0c258780474b' }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && (h("ix-col", { key: 'e698f56587ad326e808bf8972c856fb74ac60ee9', class: {
                'no-margin': true,
                'border-right': this.selectedDateRangeId === 'custom',
            } }, this.dateRangeOptions.map((dateRangeOption) => (h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id }))), h("div", { key: 'd2c9d06535272b384b6d730c885c8c1db8071c07', hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { key: '067c2ff3f3f977876a5b554dfd0c16b67fbab5b7', label: this.i18nCustomItem, checked: this.selectedDateRangeId === 'custom', onClick: () => this.onRangeListSelect('custom') })))), h("ix-col", { key: 'af0d3397302ba7891efa9953f5ec2805255acc23', class: "no-margin" }, this.selectedDateRangeId === 'custom' && (h(Fragment, { key: '715a8468214d59dd7f4891d78fb781c7c1987685' }, h("ix-date-picker", { key: 'cbcc5f9b33b736444359fb67fa96a22d82713013', standaloneAppearance: false, locale: this.locale, onDateChange: (e) => {
                e.stopPropagation();
                this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: 'custom' });
                this.datePickerTouched = true;
            }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: 'd98f59b3e959f64fd5d7c4be6e19486616568865', class: "pull-right" }, h("ix-button", { key: 'e30da682a1d4fecd958b6ed3c70d5f4bccc3e141', onClick: () => {
                if (this.currentRangeValue) {
                    this.onDateSelect(this.currentRangeValue);
                }
            } }, this.i18nDone))))))))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "dateRangeId": ["onDateRangeIdChange"],
        "to": ["onDateRangeIdChange"],
        "from": ["onDateRangeIdChange"],
        "dateRangeOptions": ["onDateRangeOptionsChange"],
        "disabled": ["onDisabledChange"]
    }; }
    static get style() { return dateDropdownCss; }
}, [1, "ix-date-dropdown", {
        "disabled": [4],
        "format": [1],
        "range": [4],
        "from": [1],
        "to": [1],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "dateRangeId": [1, "date-range-id"],
        "variant": [1],
        "outline": [4],
        "ghost": [4],
        "loading": [4],
        "showWeekNumbers": [4, "show-week-numbers"],
        "customRangeAllowed": [4, "custom-range-allowed"],
        "dateRangeOptions": [16, "date-range-options"],
        "locale": [1],
        "weekStartIndex": [2, "week-start-index"],
        "i18nCustomItem": [1, "i18n-custom-item"],
        "i18nDone": [1, "i18n-done"],
        "i18nNoRange": [1, "i18n-no-range"],
        "today": [1],
        "selectedDateRangeId": [32],
        "currentRangeValue": [32],
        "getDateRange": [64]
    }, undefined, {
        "dateRangeId": ["onDateRangeIdChange"],
        "to": ["onDateRangeIdChange"],
        "from": ["onDateRangeIdChange"],
        "dateRangeOptions": ["onDateRangeOptionsChange"],
        "disabled": ["onDisabledChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-date-dropdown", "ix-button", "ix-col", "ix-date-picker", "ix-date-time-card", "ix-dropdown", "ix-dropdown-item", "ix-icon-button", "ix-layout-grid", "ix-row", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-date-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DateDropdown);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ix-col":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ix-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ix-date-time-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-row":
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

const IxDateDropdown = DateDropdown;
const defineCustomElement = defineCustomElement$1;

export { IxDateDropdown, defineCustomElement };
//# sourceMappingURL=ix-date-dropdown.js.map

//# sourceMappingURL=ix-date-dropdown.js.map