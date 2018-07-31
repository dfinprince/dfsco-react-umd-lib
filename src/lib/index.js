'use strict';

import "./textInput.css";

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.umdLibrary = factory());
}(this, (function () {
    'use strict';

    function TextInput({ type = "text", label, value, onChange }) {
        return (
            <div className="simple-form-group">
                {label && <label className="simple-text-label">{label}</label>}
                <input
                    type={type}
                    className="simple-text-input"
                    value={value}
                    onChange={e => onChange && onChange(e.target.value)}
                    onClick={e => onChange && onChange(e.target.value)}
                />
            </div>
        );
    }

    function b() {
        this.t = function () {
            console.log('Test');
        };
    }; //    public because it's returned

    var umdLibrary = {
        b: b,
        TextInput: TextInput
    };

    // var umdLibrary$2 = Object.freeze({
    // 	default: umdLibrary
    // });

    // var umdLibrary$3 = ( umdLibrary$2 && umdLibrary ) || umdLibrary$2;

    // // TODO: decide on the top-level export form.
    // // This is hacky but makes it work with both Rollup and Jest.
    // var react = umdLibrary$3.default ? umdLibrary$3.default : umdLibrary$3;

    return umdLibrary;

})));