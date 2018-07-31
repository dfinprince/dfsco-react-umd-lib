'use strict';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.umdLibrary = factory());
}(this, (function () {
    'use strict';

    var simpleFormGroup = {
        marginBottom: '1rem'
    }
    var simpleTextLabel = {
        display: 'block',
        color: 'red'
    }
    var simpleTextInput = {
        display: 'inlineBlock',
        marginBottom: '0.5rem',
        fontSize: '16px',
        fontWeight: 400,
        color: 'rgb(33, 37, 41)'
    }

    function TextInput({ type = "text", label, value, onChange }) {
        return (
            <div style={simpleFormGroup}>
                {label && <label style={simpleTextLabel}>{label}</label>}
                <input
                    type={type}
                    style={simpleTextInput}
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