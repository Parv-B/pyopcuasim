import { p as proxyCustomElement, H, e as createEvent, h, d as Host } from './p-BA1wZ05L.js';
import { d as defineCustomElement$c } from './p-CPUiQJXe.js';
import { d as defineCustomElement$b } from './p-CKoR0lxP.js';
import { d as defineCustomElement$a } from './p-CRSLovo3.js';
import { d as defineCustomElement$9 } from './p-Cu4GsGII.js';
import { d as defineCustomElement$8 } from './p-BrRMtQIh.js';
import { d as defineCustomElement$7 } from './p-CUVSwwVj.js';
import { d as defineCustomElement$6 } from './p-8eL4ti2y.js';
import { d as defineCustomElement$5 } from './p-CufZ3bGn.js';
import { d as defineCustomElement$4 } from './p-Dlmgmbod.js';
import { d as defineCustomElement$3 } from './p-BMylJWWP.js';
import { d as defineCustomElement$2 } from './p-B19EzNYi.js';

const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-layout-grid{border-radius:0.25rem;box-shadow:var(--theme-shadow-4)}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:0 1rem 1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}";

const DatetimePicker = /*@__PURE__*/ proxyCustomElement(class DatetimePicker extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.timeChange = createEvent(this, "timeChange", 7);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.dateSelect = createEvent(this, "dateSelect", 7);
        /**
         * If true a date-range can be selected (from/to).
         */
        this.range = true;
        /**
         * Show hour input
         */
        this.showHour = true;
        /**
         * Show minutes input
         */
        this.showMinutes = true;
        /**
         * Show seconds input
         */
        this.showSeconds = true;
        /**
         * Date format string.
         * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
         */
        this.dateFormat = 'yyyy/LL/dd';
        /**
         * Time format string.
         * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
         */
        this.timeFormat = 'HH:mm:ss';
        /**
         * Show time reference input
         * Time reference is default aligned with @see {this.timeFormat}
         */
        this.showTimeReference = false;
        /**
         * Text of date select button
         */
        this.i18nDone = 'Done';
        /**
         * Top label of time picker
         *
         * @since 3.0.0
         */
        this.i18nTime = 'Time';
        /**
         * The index of which day to start the week on, based on the Locale#weekdays array.
         * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
         */
        this.weekStartIndex = 0;
        /**
         * Shows week numbers displayed on the left side of the date picker
         *
         * @since 3.0.0
         */
        this.showWeekNumbers = false;
    }
    async onDone() {
        var _a, _b, _c, _d;
        const date = await ((_a = this.datePickerElement) === null || _a === void 0 ? void 0 : _a.getCurrentDate());
        const time = await ((_b = this.timePickerElement) === null || _b === void 0 ? void 0 : _b.getCurrentTime());
        this.dateSelect.emit({
            from: (_c = date === null || date === void 0 ? void 0 : date.from) !== null && _c !== void 0 ? _c : '',
            to: (_d = date === null || date === void 0 ? void 0 : date.to) !== null && _d !== void 0 ? _d : '',
            time: time !== null && time !== void 0 ? time : '',
        });
    }
    async onDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: date } = event;
        this.dateChange.emit(date);
    }
    async onTimeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const { detail: time } = event;
        this.timeChange.emit(time);
    }
    render() {
        return (h(Host, { key: '7f08479621490c4064f5e0ba7c54f10730fabfbb' }, h("ix-layout-grid", { key: '1c073d0809bec9ea46b1fa1882f8aa4830869578', class: "no-padding" }, h("ix-row", { key: '523b1b08bcc3def18772b0b04c744863603f561d' }, h("ix-col", { key: '3092eb9778936db8559cc24e39c648b309543096' }, h("ix-date-picker", { key: 'b225445c1dd4b5fbbbca4e6152e98ac70a0ce7d0', ref: (ref) => (this.datePickerElement = ref), corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale, showWeekNumbers: this.showWeekNumbers })), h("ix-col", { key: '57a99bb035b4a03f0b6314bc91a5f93080c3b78d' }, h("ix-time-picker", { key: '0962e9171c364b9cf6a23bb9d4fe6efcbe56a702', class: "min-width", ref: (ref) => (this.timePickerElement = ref), standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, textTime: this.i18nTime, time: this.time }), h("div", { key: 'df8026657b45a30edfab788f913d968909fc9ad7', class: "btn-select-date-container" }, h("ix-button", { key: '30274b4bc1dcbf89415f8d1ca8f5a46010320ec9', class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone)))))));
    }
    static get style() { return datetimePickerCss; }
}, [1, "ix-datetime-picker", {
        "range": [4],
        "showHour": [4, "show-hour"],
        "showMinutes": [4, "show-minutes"],
        "showSeconds": [4, "show-seconds"],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "dateFormat": [1, "date-format"],
        "timeFormat": [1, "time-format"],
        "from": [1],
        "to": [1],
        "time": [1],
        "showTimeReference": [4, "show-time-reference"],
        "timeReference": [1, "time-reference"],
        "i18nDone": [1, "i18n-done"],
        "i18nTime": [1, "i-1-8n-time"],
        "weekStartIndex": [2, "week-start-index"],
        "locale": [1],
        "showWeekNumbers": [4, "show-week-numbers"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-datetime-picker", "ix-button", "ix-col", "ix-date-picker", "ix-date-time-card", "ix-dropdown", "ix-icon-button", "ix-layout-grid", "ix-row", "ix-spinner", "ix-time-picker", "ix-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-datetime-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DatetimePicker);
            }
            break;
        case "ix-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ix-col":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ix-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ix-date-time-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ix-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ix-layout-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ix-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-time-picker":
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

const IxDatetimePicker = DatetimePicker;
const defineCustomElement = defineCustomElement$1;

export { IxDatetimePicker, defineCustomElement };
//# sourceMappingURL=ix-datetime-picker.js.map

//# sourceMappingURL=ix-datetime-picker.js.map