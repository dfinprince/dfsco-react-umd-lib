'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.umdLibrary = factory();
})(undefined, function () {
    'use strict';

    var simpleFormGroup = {
        marginBottom: '1rem'
    };
    var simpleTextLabel = {
        display: 'block',
        color: 'red'
    };
    var simpleTextInput = {
        display: 'inlineBlock',
        marginBottom: '0.5rem',
        fontSize: '16px',
        fontWeight: 400,
        color: 'rgb(33, 37, 41)'
    };

    function TextInput(_ref) {
        var _ref$type = _ref.type,
            type = _ref$type === undefined ? "text" : _ref$type,
            label = _ref.label,
            value = _ref.value,
            _onChange = _ref.onChange;

        return React.createElement(
            'div',
            { style: simpleFormGroup },
            label && React.createElement(
                'label',
                { style: simpleTextLabel },
                label
            ),
            React.createElement('input', {
                type: type,
                style: simpleTextInput,
                value: value,
                onChange: function onChange(e) {
                    return _onChange && _onChange(e.target.value);
                },
                onClick: function onClick(e) {
                    return _onChange && _onChange(e.target.value);
                }
            })
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
});