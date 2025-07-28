import { s as setPlatformHelpers } from './p-BA1wZ05L.js';
export { g as getAssetPath, a as setAssetPath, b as setNonce, c as setPlatformOptions } from './p-BA1wZ05L.js';
export { I as InputState, L as LogicalFilterOperator } from './p-BH3f5fa3.js';
export { F as FlipTileState } from './p-BQ6999e5.js';
export { U as UploadFileState } from './p-BGzrnl_l.js';
import { A as Animation } from './p-Dp15M30K.js';
import { g as getCoreDelegate } from './p-BkWyDnfx.js';
export { c as closeModal, d as dismissModal, r as registerFrameworkDelegate, a as resolveDelegate, s as showMessage, b as showModal } from './p-BkWyDnfx.js';
export { g as getCurrentSystemAppearance, t as themeSwitcher } from './p-Dp4RJcgZ.js';
export { c as convertToAbbreviationString, a as convertToRemString } from './p-JJddxCCh.js';
export { r as renderDefaultItem } from './p-UQa1aROL.js';
export { T as TypedEvent } from './p-BdCnOrqW.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class FilterState {
    constructor() {
        this.tokens = [];
        this.categories = [];
    }
}

function getToastContainer() {
    const containerList = Array.from(document.querySelectorAll('ix-toast-container'));
    const [container] = containerList;
    if (containerList.length > 1) {
        console.warn('Multiple toast containers were found. Only the first one will be used.');
        return container;
    }
    if (!container) {
        const toastContainer = document.createElement('ix-toast-container');
        document.body.appendChild(toastContainer);
        return toastContainer;
    }
    return container;
}
function setToastPosition(position) {
    const container = getToastContainer();
    container.setAttribute('position', position);
}
function toast(config) {
    const container = getToastContainer();
    return container.showToast(config);
}
toast.info = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'info' }));
};
toast.error = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'error' }));
};
toast.success = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'success' }));
};
toast.warning = (config) => {
    return toast(Object.assign(Object.assign({}, config), { type: 'warning' }));
};

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function showModalLoading(message) {
    const modal = document.createElement('ix-modal');
    modal.closeOnEscape = false;
    const loading = document.createElement('ix-modal-loading');
    loading.innerText = message;
    modal.appendChild(loading);
    getCoreDelegate().attachView(modal);
    modal.showModal();
    return {
        update: (text) => (loading.innerHTML = text),
        finish: (text, timeout = 250) => {
            if (text !== undefined) {
                loading.innerText = text;
            }
            else {
                timeout = 0;
            }
            setTimeout(() => {
                modal.closeModal(null);
                setTimeout(async () => await getCoreDelegate().removeView(modal), Animation.mediumTime);
            }, timeout);
        },
    };
}

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function handlePlatformHelpers(config) {
    const platformHelpers = {};
    if (config.ael) {
        platformHelpers.ael = config.ael;
    }
    if (config.rel) {
        platformHelpers.rel = config.rel;
    }
    if (config.ce) {
        platformHelpers.ce = config.ce;
    }
    setPlatformHelpers(platformHelpers);
}

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function applyPolyfills() {
    /**
     * Placeholder to not break existing applications
     * https://github.com/ionic-team/stencil/issues/5780
     */
}

export { FilterState, applyPolyfills, getCoreDelegate, getToastContainer, handlePlatformHelpers, setToastPosition, showModalLoading, toast };
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map