(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jsbi/dist/jsbi-umd.js
  var require_jsbi_umd = __commonJS({
    "node_modules/jsbi/dist/jsbi-umd.js"(exports, module) {
      (function(e2, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define(t2) : (e2 = e2 || self, e2.JSBI = t2());
      })(exports, function() {
        "use strict";
        var e2 = Math.imul, t2 = Math.clz32;
        function i2(e3) {
          "@babel/helpers - typeof";
          return i2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, i2(e3);
        }
        function _2(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function n2(e3, t3) {
          for (var _3, n3 = 0; n3 < t3.length; n3++)
            _3 = t3[n3], _3.enumerable = _3.enumerable || false, _3.configurable = true, "value" in _3 && (_3.writable = true), Object.defineProperty(e3, _3.key, _3);
        }
        function l2(e3, t3, i3) {
          return t3 && n2(e3.prototype, t3), i3 && n2(e3, i3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }
        function g2(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && u2(e3, t3);
        }
        function a2(e3) {
          return a2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, a2(e3);
        }
        function u2(e3, t3) {
          return u2 = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, u2(e3, t3);
        }
        function s2() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function r2() {
          return r2 = s2() ? Reflect.construct : function(e3, t3, i3) {
            var _3 = [null];
            _3.push.apply(_3, t3);
            var n3 = Function.bind.apply(e3, _3), l3 = new n3();
            return i3 && u2(l3, i3.prototype), l3;
          }, r2.apply(null, arguments);
        }
        function d2(e3) {
          return -1 !== Function.toString.call(e3).indexOf("[native code]");
        }
        function h2(e3) {
          var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return h2 = function(e4) {
            function i3() {
              return r2(e4, arguments, a2(this).constructor);
            }
            if (null === e4 || !d2(e4))
              return e4;
            if ("function" != typeof e4)
              throw new TypeError("Super expression must either be null or a function");
            if ("undefined" != typeof t3) {
              if (t3.has(e4))
                return t3.get(e4);
              t3.set(e4, i3);
            }
            return i3.prototype = Object.create(e4.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), u2(i3, e4);
          }, h2(e3);
        }
        function b2(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function m2(e3, t3) {
          if (t3 && ("object" == typeof t3 || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return b2(e3);
        }
        function c2(e3) {
          var t3 = s2();
          return function() {
            var i3, _3 = a2(e3);
            if (t3) {
              var n3 = a2(this).constructor;
              i3 = Reflect.construct(_3, arguments, n3);
            } else
              i3 = _3.apply(this, arguments);
            return m2(this, i3);
          };
        }
        function v2(e3, t3) {
          return y2(e3) || f2(e3, t3) || D2(e3, t3) || k2();
        }
        function y2(e3) {
          if (Array.isArray(e3))
            return e3;
        }
        function f2(e3, t3) {
          var i3 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != i3) {
            var _3, n3, l3 = [], g3 = true, o2 = false;
            try {
              for (i3 = i3.call(e3); !(g3 = (_3 = i3.next()).done) && (l3.push(_3.value), !(t3 && l3.length === t3)); g3 = true)
                ;
            } catch (e4) {
              o2 = true, n3 = e4;
            } finally {
              try {
                g3 || null == i3["return"] || i3["return"]();
              } finally {
                if (o2)
                  throw n3;
              }
            }
            return l3;
          }
        }
        function D2(e3, t3) {
          if (e3) {
            if ("string" == typeof e3)
              return p2(e3, t3);
            var i3 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === i3 && e3.constructor && (i3 = e3.constructor.name), "Map" === i3 || "Set" === i3 ? Array.from(e3) : "Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3) ? p2(e3, t3) : void 0;
          }
        }
        function p2(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var _3 = 0, n3 = Array(t3); _3 < t3; _3++)
            n3[_3] = e3[_3];
          return n3;
        }
        function k2() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function B2(e3, t3) {
          var _3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (!_3) {
            if (Array.isArray(e3) || (_3 = D2(e3)) || t3 && e3 && "number" == typeof e3.length) {
              _3 && (e3 = _3);
              var n3 = 0, l3 = function() {
              };
              return { s: l3, n: function() {
                return n3 >= e3.length ? { done: true } : { done: false, value: e3[n3++] };
              }, e: function(t4) {
                throw t4;
              }, f: l3 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var g3, a3 = true, u3 = false;
          return { s: function() {
            _3 = _3.call(e3);
          }, n: function() {
            var e4 = _3.next();
            return a3 = e4.done, e4;
          }, e: function(t4) {
            u3 = true, g3 = t4;
          }, f: function() {
            try {
              a3 || null == _3.return || _3.return();
            } finally {
              if (u3)
                throw g3;
            }
          } };
        }
        var S2 = function(e3) {
          var t3 = Math.abs, n3 = Math.max, o2 = Math.floor;
          function a3(e4, t4) {
            var i3;
            if (_2(this, a3), i3 = u3.call(this, e4), i3.sign = t4, Object.setPrototypeOf(b2(i3), a3.prototype), e4 > a3.__kMaxLength)
              throw new RangeError("Maximum BigInt size exceeded");
            return i3;
          }
          g2(a3, e3);
          var u3 = c2(a3);
          return l2(a3, [{ key: "toDebugString", value: function() {
            var e4, t4 = ["BigInt["], i3 = B2(this);
            try {
              for (i3.s(); !(e4 = i3.n()).done; ) {
                var _3 = e4.value;
                t4.push((_3 ? (_3 >>> 0).toString(16) : _3) + ", ");
              }
            } catch (e5) {
              i3.e(e5);
            } finally {
              i3.f();
            }
            return t4.push("]"), t4.join("");
          } }, { key: "toString", value: function() {
            var e4 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10;
            if (2 > e4 || 36 < e4)
              throw new RangeError("toString() radix argument must be between 2 and 36");
            return 0 === this.length ? "0" : 0 == (e4 & e4 - 1) ? a3.__toStringBasePowerOfTwo(this, e4) : a3.__toStringGeneric(this, e4, false);
          } }, { key: "valueOf", value: function() {
            throw new Error("Convert JSBI instances to native numbers using `toNumber`.");
          } }, { key: "__copy", value: function() {
            for (var e4 = new a3(this.length, this.sign), t4 = 0; t4 < this.length; t4++)
              e4[t4] = this[t4];
            return e4;
          } }, { key: "__trim", value: function() {
            for (var e4 = this.length, t4 = this[e4 - 1]; 0 === t4; )
              e4--, t4 = this[e4 - 1], this.pop();
            return 0 === e4 && (this.sign = false), this;
          } }, { key: "__initializeDigits", value: function() {
            for (var e4 = 0; e4 < this.length; e4++)
              this[e4] = 0;
          } }, { key: "__clzmsd", value: function() {
            return a3.__clz30(this.__digit(this.length - 1));
          } }, { key: "__inplaceMultiplyAdd", value: function(e4, t4, _3) {
            _3 > this.length && (_3 = this.length);
            for (var n4 = 32767 & e4, l3 = e4 >>> 15, g3 = 0, o3 = t4, u4 = 0; u4 < _3; u4++) {
              var s3 = this.__digit(u4), r3 = 32767 & s3, d3 = s3 >>> 15, h3 = a3.__imul(r3, n4), b3 = a3.__imul(r3, l3), m3 = a3.__imul(d3, n4), c3 = a3.__imul(d3, l3), v3 = o3 + h3 + g3;
              g3 = v3 >>> 30, v3 &= 1073741823, v3 += ((32767 & b3) << 15) + ((32767 & m3) << 15), g3 += v3 >>> 30, o3 = c3 + (b3 >>> 15) + (m3 >>> 15), this.__setDigit(u4, 1073741823 & v3);
            }
            if (0 !== g3 || 0 !== o3)
              throw new Error("implementation bug");
          } }, { key: "__inplaceAdd", value: function(e4, t4, _3) {
            for (var n4, l3 = 0, g3 = 0; g3 < _3; g3++)
              n4 = this.__halfDigit(t4 + g3) + e4.__halfDigit(g3) + l3, l3 = n4 >>> 15, this.__setHalfDigit(t4 + g3, 32767 & n4);
            return l3;
          } }, { key: "__inplaceSub", value: function(e4, t4, _3) {
            var n4 = 0;
            if (1 & t4) {
              t4 >>= 1;
              for (var l3 = this.__digit(t4), g3 = 32767 & l3, o3 = 0; o3 < _3 - 1 >>> 1; o3++) {
                var a4 = e4.__digit(o3), u4 = (l3 >>> 15) - (32767 & a4) - n4;
                n4 = 1 & u4 >>> 15, this.__setDigit(t4 + o3, (32767 & u4) << 15 | 32767 & g3), l3 = this.__digit(t4 + o3 + 1), g3 = (32767 & l3) - (a4 >>> 15) - n4, n4 = 1 & g3 >>> 15;
              }
              var s3 = e4.__digit(o3), r3 = (l3 >>> 15) - (32767 & s3) - n4;
              n4 = 1 & r3 >>> 15, this.__setDigit(t4 + o3, (32767 & r3) << 15 | 32767 & g3);
              if (t4 + o3 + 1 >= this.length)
                throw new RangeError("out of bounds");
              0 == (1 & _3) && (l3 = this.__digit(t4 + o3 + 1), g3 = (32767 & l3) - (s3 >>> 15) - n4, n4 = 1 & g3 >>> 15, this.__setDigit(t4 + e4.length, 1073709056 & l3 | 32767 & g3));
            } else {
              t4 >>= 1;
              for (var d3 = 0; d3 < e4.length - 1; d3++) {
                var h3 = this.__digit(t4 + d3), b3 = e4.__digit(d3), m3 = (32767 & h3) - (32767 & b3) - n4;
                n4 = 1 & m3 >>> 15;
                var c3 = (h3 >>> 15) - (b3 >>> 15) - n4;
                n4 = 1 & c3 >>> 15, this.__setDigit(t4 + d3, (32767 & c3) << 15 | 32767 & m3);
              }
              var v3 = this.__digit(t4 + d3), y3 = e4.__digit(d3), f3 = (32767 & v3) - (32767 & y3) - n4;
              n4 = 1 & f3 >>> 15;
              var D3 = 0;
              0 == (1 & _3) && (D3 = (v3 >>> 15) - (y3 >>> 15) - n4, n4 = 1 & D3 >>> 15), this.__setDigit(t4 + d3, (32767 & D3) << 15 | 32767 & f3);
            }
            return n4;
          } }, { key: "__inplaceRightShift", value: function(e4) {
            if (0 !== e4) {
              for (var t4, _3 = this.__digit(0) >>> e4, n4 = this.length - 1, l3 = 0; l3 < n4; l3++)
                t4 = this.__digit(l3 + 1), this.__setDigit(l3, 1073741823 & t4 << 30 - e4 | _3), _3 = t4 >>> e4;
              this.__setDigit(n4, _3);
            }
          } }, { key: "__digit", value: function(e4) {
            return this[e4];
          } }, { key: "__unsignedDigit", value: function(e4) {
            return this[e4] >>> 0;
          } }, { key: "__setDigit", value: function(e4, t4) {
            this[e4] = 0 | t4;
          } }, { key: "__setDigitGrow", value: function(e4, t4) {
            this[e4] = 0 | t4;
          } }, { key: "__halfDigitLength", value: function() {
            var e4 = this.length;
            return 32767 >= this.__unsignedDigit(e4 - 1) ? 2 * e4 - 1 : 2 * e4;
          } }, { key: "__halfDigit", value: function(e4) {
            return 32767 & this[e4 >>> 1] >>> 15 * (1 & e4);
          } }, { key: "__setHalfDigit", value: function(e4, t4) {
            var i3 = e4 >>> 1, _3 = this.__digit(i3), n4 = 1 & e4 ? 32767 & _3 | t4 << 15 : 1073709056 & _3 | 32767 & t4;
            this.__setDigit(i3, n4);
          } }], [{ key: "BigInt", value: function(e4) {
            var t4 = Number.isFinite;
            if ("number" == typeof e4) {
              if (0 === e4)
                return a3.__zero();
              if (a3.__isOneDigitInt(e4))
                return 0 > e4 ? a3.__oneDigit(-e4, true) : a3.__oneDigit(e4, false);
              if (!t4(e4) || o2(e4) !== e4)
                throw new RangeError("The number " + e4 + " cannot be converted to BigInt because it is not an integer");
              return a3.__fromDouble(e4);
            }
            if ("string" == typeof e4) {
              var _3 = a3.__fromString(e4);
              if (null === _3)
                throw new SyntaxError("Cannot convert " + e4 + " to a BigInt");
              return _3;
            }
            if ("boolean" == typeof e4)
              return true === e4 ? a3.__oneDigit(1, false) : a3.__zero();
            if ("object" === i2(e4)) {
              if (e4.constructor === a3)
                return e4;
              var n4 = a3.__toPrimitive(e4);
              return a3.BigInt(n4);
            }
            throw new TypeError("Cannot convert " + e4 + " to a BigInt");
          } }, { key: "toNumber", value: function(e4) {
            var t4 = e4.length;
            if (0 === t4)
              return 0;
            if (1 === t4) {
              var i3 = e4.__unsignedDigit(0);
              return e4.sign ? -i3 : i3;
            }
            var _3 = e4.__digit(t4 - 1), n4 = a3.__clz30(_3), l3 = 30 * t4 - n4;
            if (1024 < l3)
              return e4.sign ? -Infinity : 1 / 0;
            var g3 = l3 - 1, o3 = _3, u4 = t4 - 1, s3 = n4 + 3, r3 = 32 === s3 ? 0 : o3 << s3;
            r3 >>>= 12;
            var d3 = s3 - 12, h3 = 12 <= s3 ? 0 : o3 << 20 + s3, b3 = 20 + s3;
            for (0 < d3 && 0 < u4 && (u4--, o3 = e4.__digit(u4), r3 |= o3 >>> 30 - d3, h3 = o3 << d3 + 2, b3 = d3 + 2); 0 < b3 && 0 < u4; )
              u4--, o3 = e4.__digit(u4), h3 |= 30 <= b3 ? o3 << b3 - 30 : o3 >>> 30 - b3, b3 -= 30;
            var m3 = a3.__decideRounding(e4, b3, u4, o3);
            if ((1 === m3 || 0 === m3 && 1 == (1 & h3)) && (h3 = h3 + 1 >>> 0, 0 === h3 && (r3++, 0 != r3 >>> 20 && (r3 = 0, g3++, 1023 < g3))))
              return e4.sign ? -Infinity : 1 / 0;
            var c3 = e4.sign ? -2147483648 : 0;
            return g3 = g3 + 1023 << 20, a3.__kBitConversionInts[1] = c3 | g3 | r3, a3.__kBitConversionInts[0] = h3, a3.__kBitConversionDouble[0];
          } }, { key: "unaryMinus", value: function(e4) {
            if (0 === e4.length)
              return e4;
            var t4 = e4.__copy();
            return t4.sign = !e4.sign, t4;
          } }, { key: "bitwiseNot", value: function(e4) {
            return e4.sign ? a3.__absoluteSubOne(e4).__trim() : a3.__absoluteAddOne(e4, true);
          } }, { key: "exponentiate", value: function(e4, t4) {
            if (t4.sign)
              throw new RangeError("Exponent must be positive");
            if (0 === t4.length)
              return a3.__oneDigit(1, false);
            if (0 === e4.length)
              return e4;
            if (1 === e4.length && 1 === e4.__digit(0))
              return e4.sign && 0 == (1 & t4.__digit(0)) ? a3.unaryMinus(e4) : e4;
            if (1 < t4.length)
              throw new RangeError("BigInt too big");
            var i3 = t4.__unsignedDigit(0);
            if (1 === i3)
              return e4;
            if (i3 >= a3.__kMaxLengthBits)
              throw new RangeError("BigInt too big");
            if (1 === e4.length && 2 === e4.__digit(0)) {
              var _3 = 1 + (0 | i3 / 30), n4 = e4.sign && 0 != (1 & i3), l3 = new a3(_3, n4);
              l3.__initializeDigits();
              var g3 = 1 << i3 % 30;
              return l3.__setDigit(_3 - 1, g3), l3;
            }
            var o3 = null, u4 = e4;
            for (0 != (1 & i3) && (o3 = e4), i3 >>= 1; 0 !== i3; i3 >>= 1)
              u4 = a3.multiply(u4, u4), 0 != (1 & i3) && (null === o3 ? o3 = u4 : o3 = a3.multiply(o3, u4));
            return o3;
          } }, { key: "multiply", value: function(e4, t4) {
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return t4;
            var _3 = e4.length + t4.length;
            30 <= e4.__clzmsd() + t4.__clzmsd() && _3--;
            var n4 = new a3(_3, e4.sign !== t4.sign);
            n4.__initializeDigits();
            for (var l3 = 0; l3 < e4.length; l3++)
              a3.__multiplyAccumulate(t4, e4.__digit(l3), n4, l3);
            return n4.__trim();
          } }, { key: "divide", value: function(e4, t4) {
            if (0 === t4.length)
              throw new RangeError("Division by zero");
            if (0 > a3.__absoluteCompare(e4, t4))
              return a3.__zero();
            var i3, _3 = e4.sign !== t4.sign, n4 = t4.__unsignedDigit(0);
            if (1 === t4.length && 32767 >= n4) {
              if (1 === n4)
                return _3 === e4.sign ? e4 : a3.unaryMinus(e4);
              i3 = a3.__absoluteDivSmall(e4, n4, null);
            } else
              i3 = a3.__absoluteDivLarge(e4, t4, true, false);
            return i3.sign = _3, i3.__trim();
          } }, { key: "remainder", value: function i3(e4, t4) {
            if (0 === t4.length)
              throw new RangeError("Division by zero");
            if (0 > a3.__absoluteCompare(e4, t4))
              return e4;
            var _3 = t4.__unsignedDigit(0);
            if (1 === t4.length && 32767 >= _3) {
              if (1 === _3)
                return a3.__zero();
              var n4 = a3.__absoluteModSmall(e4, _3);
              return 0 === n4 ? a3.__zero() : a3.__oneDigit(n4, e4.sign);
            }
            var i4 = a3.__absoluteDivLarge(e4, t4, false, true);
            return i4.sign = e4.sign, i4.__trim();
          } }, { key: "add", value: function(e4, t4) {
            var i3 = e4.sign;
            return i3 === t4.sign ? a3.__absoluteAdd(e4, t4, i3) : 0 <= a3.__absoluteCompare(e4, t4) ? a3.__absoluteSub(e4, t4, i3) : a3.__absoluteSub(t4, e4, !i3);
          } }, { key: "subtract", value: function(e4, t4) {
            var i3 = e4.sign;
            return i3 === t4.sign ? 0 <= a3.__absoluteCompare(e4, t4) ? a3.__absoluteSub(e4, t4, i3) : a3.__absoluteSub(t4, e4, !i3) : a3.__absoluteAdd(e4, t4, i3);
          } }, { key: "leftShift", value: function(e4, t4) {
            return 0 === t4.length || 0 === e4.length ? e4 : t4.sign ? a3.__rightShiftByAbsolute(e4, t4) : a3.__leftShiftByAbsolute(e4, t4);
          } }, { key: "signedRightShift", value: function(e4, t4) {
            return 0 === t4.length || 0 === e4.length ? e4 : t4.sign ? a3.__leftShiftByAbsolute(e4, t4) : a3.__rightShiftByAbsolute(e4, t4);
          } }, { key: "unsignedRightShift", value: function() {
            throw new TypeError("BigInts have no unsigned right shift; use >> instead");
          } }, { key: "lessThan", value: function(e4, t4) {
            return 0 > a3.__compareToBigInt(e4, t4);
          } }, { key: "lessThanOrEqual", value: function(e4, t4) {
            return 0 >= a3.__compareToBigInt(e4, t4);
          } }, { key: "greaterThan", value: function(e4, t4) {
            return 0 < a3.__compareToBigInt(e4, t4);
          } }, { key: "greaterThanOrEqual", value: function(e4, t4) {
            return 0 <= a3.__compareToBigInt(e4, t4);
          } }, { key: "equal", value: function(e4, t4) {
            if (e4.sign !== t4.sign)
              return false;
            if (e4.length !== t4.length)
              return false;
            for (var _3 = 0; _3 < e4.length; _3++)
              if (e4.__digit(_3) !== t4.__digit(_3))
                return false;
            return true;
          } }, { key: "notEqual", value: function(e4, t4) {
            return !a3.equal(e4, t4);
          } }, { key: "bitwiseAnd", value: function(e4, t4) {
            if (!e4.sign && !t4.sign)
              return a3.__absoluteAnd(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var i3 = n3(e4.length, t4.length) + 1, _3 = a3.__absoluteSubOne(e4, i3), l3 = a3.__absoluteSubOne(t4);
              return _3 = a3.__absoluteOr(_3, l3, _3), a3.__absoluteAddOne(_3, true, _3).__trim();
            }
            if (e4.sign) {
              var g3 = [t4, e4];
              e4 = g3[0], t4 = g3[1];
            }
            return a3.__absoluteAndNot(e4, a3.__absoluteSubOne(t4)).__trim();
          } }, { key: "bitwiseXor", value: function(e4, t4) {
            if (!e4.sign && !t4.sign)
              return a3.__absoluteXor(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var i3 = n3(e4.length, t4.length), _3 = a3.__absoluteSubOne(e4, i3), l3 = a3.__absoluteSubOne(t4);
              return a3.__absoluteXor(_3, l3, _3).__trim();
            }
            var g3 = n3(e4.length, t4.length) + 1;
            if (e4.sign) {
              var o3 = [t4, e4];
              e4 = o3[0], t4 = o3[1];
            }
            var u4 = a3.__absoluteSubOne(t4, g3);
            return u4 = a3.__absoluteXor(u4, e4, u4), a3.__absoluteAddOne(u4, true, u4).__trim();
          } }, { key: "bitwiseOr", value: function(e4, t4) {
            var i3 = n3(e4.length, t4.length);
            if (!e4.sign && !t4.sign)
              return a3.__absoluteOr(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var _3 = a3.__absoluteSubOne(e4, i3), l3 = a3.__absoluteSubOne(t4);
              return _3 = a3.__absoluteAnd(_3, l3, _3), a3.__absoluteAddOne(_3, true, _3).__trim();
            }
            if (e4.sign) {
              var g3 = [t4, e4];
              e4 = g3[0], t4 = g3[1];
            }
            var o3 = a3.__absoluteSubOne(t4, i3);
            return o3 = a3.__absoluteAndNot(o3, e4, o3), a3.__absoluteAddOne(o3, true, o3).__trim();
          } }, { key: "asIntN", value: function(e4, t4) {
            if (0 === t4.length)
              return t4;
            if (e4 = o2(e4), 0 > e4)
              throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === e4)
              return a3.__zero();
            if (e4 >= a3.__kMaxLengthBits)
              return t4;
            var _3 = 0 | (e4 + 29) / 30;
            if (t4.length < _3)
              return t4;
            var l3 = t4.__unsignedDigit(_3 - 1), g3 = 1 << (e4 - 1) % 30;
            if (t4.length === _3 && l3 < g3)
              return t4;
            if (!((l3 & g3) === g3))
              return a3.__truncateToNBits(e4, t4);
            if (!t4.sign)
              return a3.__truncateAndSubFromPowerOfTwo(e4, t4, true);
            if (0 == (l3 & g3 - 1)) {
              for (var u4 = _3 - 2; 0 <= u4; u4--)
                if (0 !== t4.__digit(u4))
                  return a3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
              return t4.length === _3 && l3 === g3 ? t4 : a3.__truncateToNBits(e4, t4);
            }
            return a3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
          } }, { key: "asUintN", value: function(e4, t4) {
            if (0 === t4.length)
              return t4;
            if (e4 = o2(e4), 0 > e4)
              throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === e4)
              return a3.__zero();
            if (t4.sign) {
              if (e4 > a3.__kMaxLengthBits)
                throw new RangeError("BigInt too big");
              return a3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
            }
            if (e4 >= a3.__kMaxLengthBits)
              return t4;
            var i3 = 0 | (e4 + 29) / 30;
            if (t4.length < i3)
              return t4;
            var _3 = e4 % 30;
            if (t4.length == i3) {
              if (0 === _3)
                return t4;
              var l3 = t4.__digit(i3 - 1);
              if (0 == l3 >>> _3)
                return t4;
            }
            return a3.__truncateToNBits(e4, t4);
          } }, { key: "ADD", value: function(e4, t4) {
            if (e4 = a3.__toPrimitive(e4), t4 = a3.__toPrimitive(t4), "string" == typeof e4)
              return "string" != typeof t4 && (t4 = t4.toString()), e4 + t4;
            if ("string" == typeof t4)
              return e4.toString() + t4;
            if (e4 = a3.__toNumeric(e4), t4 = a3.__toNumeric(t4), a3.__isBigInt(e4) && a3.__isBigInt(t4))
              return a3.add(e4, t4);
            if ("number" == typeof e4 && "number" == typeof t4)
              return e4 + t4;
            throw new TypeError("Cannot mix BigInt and other types, use explicit conversions");
          } }, { key: "LT", value: function(e4, t4) {
            return a3.__compare(e4, t4, 0);
          } }, { key: "LE", value: function(e4, t4) {
            return a3.__compare(e4, t4, 1);
          } }, { key: "GT", value: function(e4, t4) {
            return a3.__compare(e4, t4, 2);
          } }, { key: "GE", value: function(e4, t4) {
            return a3.__compare(e4, t4, 3);
          } }, { key: "EQ", value: function(e4, t4) {
            for (; ; ) {
              if (a3.__isBigInt(e4))
                return a3.__isBigInt(t4) ? a3.equal(e4, t4) : a3.EQ(t4, e4);
              if ("number" == typeof e4) {
                if (a3.__isBigInt(t4))
                  return a3.__equalToNumber(t4, e4);
                if ("object" !== i2(t4))
                  return e4 == t4;
                t4 = a3.__toPrimitive(t4);
              } else if ("string" == typeof e4) {
                if (a3.__isBigInt(t4))
                  return e4 = a3.__fromString(e4), null !== e4 && a3.equal(e4, t4);
                if ("object" !== i2(t4))
                  return e4 == t4;
                t4 = a3.__toPrimitive(t4);
              } else if ("boolean" == typeof e4) {
                if (a3.__isBigInt(t4))
                  return a3.__equalToNumber(t4, +e4);
                if ("object" !== i2(t4))
                  return e4 == t4;
                t4 = a3.__toPrimitive(t4);
              } else if ("symbol" === i2(e4)) {
                if (a3.__isBigInt(t4))
                  return false;
                if ("object" !== i2(t4))
                  return e4 == t4;
                t4 = a3.__toPrimitive(t4);
              } else if ("object" === i2(e4)) {
                if ("object" === i2(t4) && t4.constructor !== a3)
                  return e4 == t4;
                e4 = a3.__toPrimitive(e4);
              } else
                return e4 == t4;
            }
          } }, { key: "NE", value: function(e4, t4) {
            return !a3.EQ(e4, t4);
          } }, { key: "DataViewGetBigInt64", value: function(e4, t4) {
            var i3 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
            return a3.asIntN(64, a3.DataViewGetBigUint64(e4, t4, i3));
          } }, { key: "DataViewGetBigUint64", value: function(e4, t4) {
            var i3 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], _3 = i3 ? [4, 0] : [0, 4], n4 = v2(_3, 2), g3 = n4[0], o3 = n4[1], l3 = e4.getUint32(t4 + g3, i3), u4 = e4.getUint32(t4 + o3, i3), s3 = new a3(3, false);
            return s3.__setDigit(0, 1073741823 & u4), s3.__setDigit(1, (268435455 & l3) << 2 | u4 >>> 30), s3.__setDigit(2, l3 >>> 28), s3.__trim();
          } }, { key: "DataViewSetBigInt64", value: function(e4, t4, i3) {
            var _3 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            a3.DataViewSetBigUint64(e4, t4, i3, _3);
          } }, { key: "DataViewSetBigUint64", value: function(e4, t4, i3) {
            var _3 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            i3 = a3.asUintN(64, i3);
            var n4 = 0, g3 = 0;
            if (0 < i3.length && (g3 = i3.__digit(0), 1 < i3.length)) {
              var o3 = i3.__digit(1);
              g3 |= o3 << 30, n4 = o3 >>> 2, 2 < i3.length && (n4 |= i3.__digit(2) << 28);
            }
            var u4 = _3 ? [4, 0] : [0, 4], s3 = v2(u4, 2), r3 = s3[0], d3 = s3[1];
            e4.setUint32(t4 + r3, n4, _3), e4.setUint32(t4 + d3, g3, _3);
          } }, { key: "__zero", value: function() {
            return new a3(0, false);
          } }, { key: "__oneDigit", value: function(e4, t4) {
            var i3 = new a3(1, t4);
            return i3.__setDigit(0, e4), i3;
          } }, { key: "__decideRounding", value: function(e4, t4, i3, _3) {
            if (0 < t4)
              return -1;
            var n4;
            if (0 > t4)
              n4 = -t4 - 1;
            else {
              if (0 === i3)
                return -1;
              i3--, _3 = e4.__digit(i3), n4 = 29;
            }
            var l3 = 1 << n4;
            if (0 == (_3 & l3))
              return -1;
            if (l3 -= 1, 0 != (_3 & l3))
              return 1;
            for (; 0 < i3; )
              if (i3--, 0 !== e4.__digit(i3))
                return 1;
            return 0;
          } }, { key: "__fromDouble", value: function(e4) {
            a3.__kBitConversionDouble[0] = e4;
            var t4, i3 = 2047 & a3.__kBitConversionInts[1] >>> 20, _3 = i3 - 1023, n4 = (0 | _3 / 30) + 1, l3 = new a3(n4, 0 > e4), g3 = 1048575 & a3.__kBitConversionInts[1] | 1048576, o3 = a3.__kBitConversionInts[0], u4 = 20, s3 = _3 % 30, r3 = 0;
            if (s3 < u4) {
              var d3 = u4 - s3;
              r3 = d3 + 32, t4 = g3 >>> d3, g3 = g3 << 32 - d3 | o3 >>> d3, o3 <<= 32 - d3;
            } else if (s3 === u4)
              r3 = 32, t4 = g3, g3 = o3, o3 = 0;
            else {
              var h3 = s3 - u4;
              r3 = 32 - h3, t4 = g3 << h3 | o3 >>> 32 - h3, g3 = o3 << h3, o3 = 0;
            }
            l3.__setDigit(n4 - 1, t4);
            for (var b3 = n4 - 2; 0 <= b3; b3--)
              0 < r3 ? (r3 -= 30, t4 = g3 >>> 2, g3 = g3 << 30 | o3 >>> 2, o3 <<= 30) : t4 = 0, l3.__setDigit(b3, t4);
            return l3.__trim();
          } }, { key: "__isWhitespace", value: function(e4) {
            return !!(13 >= e4 && 9 <= e4) || (159 >= e4 ? 32 == e4 : 131071 >= e4 ? 160 == e4 || 5760 == e4 : 196607 >= e4 ? (e4 &= 131071, 10 >= e4 || 40 == e4 || 41 == e4 || 47 == e4 || 95 == e4 || 4096 == e4) : 65279 == e4);
          } }, { key: "__fromString", value: function(e4) {
            var t4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, i3 = 0, _3 = e4.length, n4 = 0;
            if (n4 === _3)
              return a3.__zero();
            for (var l3 = e4.charCodeAt(n4); a3.__isWhitespace(l3); ) {
              if (++n4 === _3)
                return a3.__zero();
              l3 = e4.charCodeAt(n4);
            }
            if (43 === l3) {
              if (++n4 === _3)
                return null;
              l3 = e4.charCodeAt(n4), i3 = 1;
            } else if (45 === l3) {
              if (++n4 === _3)
                return null;
              l3 = e4.charCodeAt(n4), i3 = -1;
            }
            if (0 === t4) {
              if (t4 = 10, 48 === l3) {
                if (++n4 === _3)
                  return a3.__zero();
                if (l3 = e4.charCodeAt(n4), 88 === l3 || 120 === l3) {
                  if (t4 = 16, ++n4 === _3)
                    return null;
                  l3 = e4.charCodeAt(n4);
                } else if (79 === l3 || 111 === l3) {
                  if (t4 = 8, ++n4 === _3)
                    return null;
                  l3 = e4.charCodeAt(n4);
                } else if (66 === l3 || 98 === l3) {
                  if (t4 = 2, ++n4 === _3)
                    return null;
                  l3 = e4.charCodeAt(n4);
                }
              }
            } else if (16 === t4 && 48 === l3) {
              if (++n4 === _3)
                return a3.__zero();
              if (l3 = e4.charCodeAt(n4), 88 === l3 || 120 === l3) {
                if (++n4 === _3)
                  return null;
                l3 = e4.charCodeAt(n4);
              }
            }
            if (0 !== i3 && 10 !== t4)
              return null;
            for (; 48 === l3; ) {
              if (++n4 === _3)
                return a3.__zero();
              l3 = e4.charCodeAt(n4);
            }
            var g3 = _3 - n4, o3 = a3.__kMaxBitsPerChar[t4], u4 = a3.__kBitsPerCharTableMultiplier - 1;
            if (g3 > 1073741824 / o3)
              return null;
            var s3 = o3 * g3 + u4 >>> a3.__kBitsPerCharTableShift, r3 = new a3(0 | (s3 + 29) / 30, false), h3 = 10 > t4 ? t4 : 10, b3 = 10 < t4 ? t4 - 10 : 0;
            if (0 == (t4 & t4 - 1)) {
              o3 >>= a3.__kBitsPerCharTableShift;
              var c3 = [], v3 = [], y3 = false;
              do {
                for (var f3, D3 = 0, p3 = 0; ; ) {
                  if (f3 = void 0, l3 - 48 >>> 0 < h3)
                    f3 = l3 - 48;
                  else if ((32 | l3) - 97 >>> 0 < b3)
                    f3 = (32 | l3) - 87;
                  else {
                    y3 = true;
                    break;
                  }
                  if (p3 += o3, D3 = D3 << o3 | f3, ++n4 === _3) {
                    y3 = true;
                    break;
                  }
                  if (l3 = e4.charCodeAt(n4), 30 < p3 + o3)
                    break;
                }
                c3.push(D3), v3.push(p3);
              } while (!y3);
              a3.__fillFromParts(r3, c3, v3);
            } else {
              r3.__initializeDigits();
              var k3 = false, B3 = 0;
              do {
                for (var S3, C2 = 0, I2 = 1; ; ) {
                  if (S3 = void 0, l3 - 48 >>> 0 < h3)
                    S3 = l3 - 48;
                  else if ((32 | l3) - 97 >>> 0 < b3)
                    S3 = (32 | l3) - 87;
                  else {
                    k3 = true;
                    break;
                  }
                  var A2 = I2 * t4;
                  if (1073741823 < A2)
                    break;
                  if (I2 = A2, C2 = C2 * t4 + S3, B3++, ++n4 === _3) {
                    k3 = true;
                    break;
                  }
                  l3 = e4.charCodeAt(n4);
                }
                u4 = 30 * a3.__kBitsPerCharTableMultiplier - 1;
                var m3 = 0 | (o3 * B3 + u4 >>> a3.__kBitsPerCharTableShift) / 30;
                r3.__inplaceMultiplyAdd(I2, C2, m3);
              } while (!k3);
            }
            if (n4 !== _3) {
              if (!a3.__isWhitespace(l3))
                return null;
              for (n4++; n4 < _3; n4++)
                if (l3 = e4.charCodeAt(n4), !a3.__isWhitespace(l3))
                  return null;
            }
            return r3.sign = -1 === i3, r3.__trim();
          } }, { key: "__fillFromParts", value: function(e4, t4, _3) {
            for (var n4 = 0, l3 = 0, g3 = 0, o3 = t4.length - 1; 0 <= o3; o3--) {
              var a4 = t4[o3], u4 = _3[o3];
              l3 |= a4 << g3, g3 += u4, 30 === g3 ? (e4.__setDigit(n4++, l3), g3 = 0, l3 = 0) : 30 < g3 && (e4.__setDigit(n4++, 1073741823 & l3), g3 -= 30, l3 = a4 >>> u4 - g3);
            }
            if (0 !== l3) {
              if (n4 >= e4.length)
                throw new Error("implementation bug");
              e4.__setDigit(n4++, l3);
            }
            for (; n4 < e4.length; n4++)
              e4.__setDigit(n4, 0);
          } }, { key: "__toStringBasePowerOfTwo", value: function(e4, t4) {
            var _3 = e4.length, n4 = t4 - 1;
            n4 = (85 & n4 >>> 1) + (85 & n4), n4 = (51 & n4 >>> 2) + (51 & n4), n4 = (15 & n4 >>> 4) + (15 & n4);
            var l3 = n4, g3 = t4 - 1, o3 = e4.__digit(_3 - 1), u4 = a3.__clz30(o3), s3 = 0 | (30 * _3 - u4 + l3 - 1) / l3;
            if (e4.sign && s3++, 268435456 < s3)
              throw new Error("string too long");
            for (var r3 = Array(s3), d3 = s3 - 1, h3 = 0, b3 = 0, m3 = 0; m3 < _3 - 1; m3++) {
              var c3 = e4.__digit(m3), v3 = (h3 | c3 << b3) & g3;
              r3[d3--] = a3.__kConversionChars[v3];
              var y3 = l3 - b3;
              for (h3 = c3 >>> y3, b3 = 30 - y3; b3 >= l3; )
                r3[d3--] = a3.__kConversionChars[h3 & g3], h3 >>>= l3, b3 -= l3;
            }
            var f3 = (h3 | o3 << b3) & g3;
            for (r3[d3--] = a3.__kConversionChars[f3], h3 = o3 >>> l3 - b3; 0 !== h3; )
              r3[d3--] = a3.__kConversionChars[h3 & g3], h3 >>>= l3;
            if (e4.sign && (r3[d3--] = "-"), -1 !== d3)
              throw new Error("implementation bug");
            return r3.join("");
          } }, { key: "__toStringGeneric", value: function(e4, t4, _3) {
            var n4 = e4.length;
            if (0 === n4)
              return "";
            if (1 === n4) {
              var l3 = e4.__unsignedDigit(0).toString(t4);
              return false === _3 && e4.sign && (l3 = "-" + l3), l3;
            }
            var g3 = 30 * n4 - a3.__clz30(e4.__digit(n4 - 1)), o3 = a3.__kMaxBitsPerChar[t4], u4 = o3 - 1, s3 = g3 * a3.__kBitsPerCharTableMultiplier;
            s3 += u4 - 1, s3 = 0 | s3 / u4;
            var r3, d3, h3 = s3 + 1 >> 1, b3 = a3.exponentiate(a3.__oneDigit(t4, false), a3.__oneDigit(h3, false)), m3 = b3.__unsignedDigit(0);
            if (1 === b3.length && 32767 >= m3) {
              r3 = new a3(e4.length, false), r3.__initializeDigits();
              for (var c3, v3 = 0, y3 = 2 * e4.length - 1; 0 <= y3; y3--)
                c3 = v3 << 15 | e4.__halfDigit(y3), r3.__setHalfDigit(y3, 0 | c3 / m3), v3 = 0 | c3 % m3;
              d3 = v3.toString(t4);
            } else {
              var f3 = a3.__absoluteDivLarge(e4, b3, true, true);
              r3 = f3.quotient;
              var D3 = f3.remainder.__trim();
              d3 = a3.__toStringGeneric(D3, t4, true);
            }
            r3.__trim();
            for (var p3 = a3.__toStringGeneric(r3, t4, true); d3.length < h3; )
              d3 = "0" + d3;
            return false === _3 && e4.sign && (p3 = "-" + p3), p3 + d3;
          } }, { key: "__unequalSign", value: function(e4) {
            return e4 ? -1 : 1;
          } }, { key: "__absoluteGreater", value: function(e4) {
            return e4 ? -1 : 1;
          } }, { key: "__absoluteLess", value: function(e4) {
            return e4 ? 1 : -1;
          } }, { key: "__compareToBigInt", value: function(e4, t4) {
            var i3 = e4.sign;
            if (i3 !== t4.sign)
              return a3.__unequalSign(i3);
            var _3 = a3.__absoluteCompare(e4, t4);
            return 0 < _3 ? a3.__absoluteGreater(i3) : 0 > _3 ? a3.__absoluteLess(i3) : 0;
          } }, { key: "__compareToNumber", value: function(e4, i3) {
            if (a3.__isOneDigitInt(i3)) {
              var _3 = e4.sign, n4 = 0 > i3;
              if (_3 !== n4)
                return a3.__unequalSign(_3);
              if (0 === e4.length) {
                if (n4)
                  throw new Error("implementation bug");
                return 0 === i3 ? 0 : -1;
              }
              if (1 < e4.length)
                return a3.__absoluteGreater(_3);
              var l3 = t3(i3), g3 = e4.__unsignedDigit(0);
              return g3 > l3 ? a3.__absoluteGreater(_3) : g3 < l3 ? a3.__absoluteLess(_3) : 0;
            }
            return a3.__compareToDouble(e4, i3);
          } }, { key: "__compareToDouble", value: function(e4, t4) {
            if (t4 !== t4)
              return t4;
            if (t4 === 1 / 0)
              return -1;
            if (t4 === -Infinity)
              return 1;
            var i3 = e4.sign;
            if (i3 !== 0 > t4)
              return a3.__unequalSign(i3);
            if (0 === t4)
              throw new Error("implementation bug: should be handled elsewhere");
            if (0 === e4.length)
              return -1;
            a3.__kBitConversionDouble[0] = t4;
            var _3 = 2047 & a3.__kBitConversionInts[1] >>> 20;
            if (2047 == _3)
              throw new Error("implementation bug: handled elsewhere");
            var n4 = _3 - 1023;
            if (0 > n4)
              return a3.__absoluteGreater(i3);
            var l3 = e4.length, g3 = e4.__digit(l3 - 1), o3 = a3.__clz30(g3), u4 = 30 * l3 - o3, s3 = n4 + 1;
            if (u4 < s3)
              return a3.__absoluteLess(i3);
            if (u4 > s3)
              return a3.__absoluteGreater(i3);
            var r3 = 1048576 | 1048575 & a3.__kBitConversionInts[1], d3 = a3.__kBitConversionInts[0], h3 = 20, b3 = 29 - o3;
            if (b3 !== (0 | (u4 - 1) % 30))
              throw new Error("implementation bug");
            var m3, c3 = 0;
            if (b3 < h3) {
              var v3 = h3 - b3;
              c3 = v3 + 32, m3 = r3 >>> v3, r3 = r3 << 32 - v3 | d3 >>> v3, d3 <<= 32 - v3;
            } else if (b3 === h3)
              c3 = 32, m3 = r3, r3 = d3, d3 = 0;
            else {
              var y3 = b3 - h3;
              c3 = 32 - y3, m3 = r3 << y3 | d3 >>> 32 - y3, r3 = d3 << y3, d3 = 0;
            }
            if (g3 >>>= 0, m3 >>>= 0, g3 > m3)
              return a3.__absoluteGreater(i3);
            if (g3 < m3)
              return a3.__absoluteLess(i3);
            for (var f3 = l3 - 2; 0 <= f3; f3--) {
              0 < c3 ? (c3 -= 30, m3 = r3 >>> 2, r3 = r3 << 30 | d3 >>> 2, d3 <<= 30) : m3 = 0;
              var D3 = e4.__unsignedDigit(f3);
              if (D3 > m3)
                return a3.__absoluteGreater(i3);
              if (D3 < m3)
                return a3.__absoluteLess(i3);
            }
            if (0 !== r3 || 0 !== d3) {
              if (0 === c3)
                throw new Error("implementation bug");
              return a3.__absoluteLess(i3);
            }
            return 0;
          } }, { key: "__equalToNumber", value: function(e4, i3) {
            return a3.__isOneDigitInt(i3) ? 0 === i3 ? 0 === e4.length : 1 === e4.length && e4.sign === 0 > i3 && e4.__unsignedDigit(0) === t3(i3) : 0 === a3.__compareToDouble(e4, i3);
          } }, { key: "__comparisonResultToBool", value: function(e4, t4) {
            return 0 === t4 ? 0 > e4 : 1 === t4 ? 0 >= e4 : 2 === t4 ? 0 < e4 : 3 === t4 ? 0 <= e4 : void 0;
          } }, { key: "__compare", value: function(e4, t4, i3) {
            if (e4 = a3.__toPrimitive(e4), t4 = a3.__toPrimitive(t4), "string" == typeof e4 && "string" == typeof t4)
              switch (i3) {
                case 0:
                  return e4 < t4;
                case 1:
                  return e4 <= t4;
                case 2:
                  return e4 > t4;
                case 3:
                  return e4 >= t4;
              }
            if (a3.__isBigInt(e4) && "string" == typeof t4)
              return t4 = a3.__fromString(t4), null !== t4 && a3.__comparisonResultToBool(a3.__compareToBigInt(e4, t4), i3);
            if ("string" == typeof e4 && a3.__isBigInt(t4))
              return e4 = a3.__fromString(e4), null !== e4 && a3.__comparisonResultToBool(a3.__compareToBigInt(e4, t4), i3);
            if (e4 = a3.__toNumeric(e4), t4 = a3.__toNumeric(t4), a3.__isBigInt(e4)) {
              if (a3.__isBigInt(t4))
                return a3.__comparisonResultToBool(a3.__compareToBigInt(e4, t4), i3);
              if ("number" != typeof t4)
                throw new Error("implementation bug");
              return a3.__comparisonResultToBool(a3.__compareToNumber(e4, t4), i3);
            }
            if ("number" != typeof e4)
              throw new Error("implementation bug");
            if (a3.__isBigInt(t4))
              return a3.__comparisonResultToBool(a3.__compareToNumber(t4, e4), 2 ^ i3);
            if ("number" != typeof t4)
              throw new Error("implementation bug");
            return 0 === i3 ? e4 < t4 : 1 === i3 ? e4 <= t4 : 2 === i3 ? e4 > t4 : 3 === i3 ? e4 >= t4 : void 0;
          } }, { key: "__absoluteAdd", value: function(e4, t4, _3) {
            if (e4.length < t4.length)
              return a3.__absoluteAdd(t4, e4, _3);
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return e4.sign === _3 ? e4 : a3.unaryMinus(e4);
            var n4 = e4.length;
            (0 === e4.__clzmsd() || t4.length === e4.length && 0 === t4.__clzmsd()) && n4++;
            for (var l3, g3 = new a3(n4, _3), o3 = 0, u4 = 0; u4 < t4.length; u4++)
              l3 = e4.__digit(u4) + t4.__digit(u4) + o3, o3 = l3 >>> 30, g3.__setDigit(u4, 1073741823 & l3);
            for (; u4 < e4.length; u4++) {
              var s3 = e4.__digit(u4) + o3;
              o3 = s3 >>> 30, g3.__setDigit(u4, 1073741823 & s3);
            }
            return u4 < g3.length && g3.__setDigit(u4, o3), g3.__trim();
          } }, { key: "__absoluteSub", value: function(e4, t4, _3) {
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return e4.sign === _3 ? e4 : a3.unaryMinus(e4);
            for (var n4, l3 = new a3(e4.length, _3), g3 = 0, o3 = 0; o3 < t4.length; o3++)
              n4 = e4.__digit(o3) - t4.__digit(o3) - g3, g3 = 1 & n4 >>> 30, l3.__setDigit(o3, 1073741823 & n4);
            for (; o3 < e4.length; o3++) {
              var u4 = e4.__digit(o3) - g3;
              g3 = 1 & u4 >>> 30, l3.__setDigit(o3, 1073741823 & u4);
            }
            return l3.__trim();
          } }, { key: "__absoluteAddOne", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n4 = e4.length;
            null === _3 ? _3 = new a3(n4, t4) : _3.sign = t4;
            for (var l3, g3 = 1, o3 = 0; o3 < n4; o3++)
              l3 = e4.__digit(o3) + g3, g3 = l3 >>> 30, _3.__setDigit(o3, 1073741823 & l3);
            return 0 !== g3 && _3.__setDigitGrow(n4, 1), _3;
          } }, { key: "__absoluteSubOne", value: function(e4, t4) {
            var _3 = e4.length;
            t4 = t4 || _3;
            for (var n4, l3 = new a3(t4, false), g3 = 1, o3 = 0; o3 < _3; o3++)
              n4 = e4.__digit(o3) - g3, g3 = 1 & n4 >>> 30, l3.__setDigit(o3, 1073741823 & n4);
            if (0 !== g3)
              throw new Error("implementation bug");
            for (var u4 = _3; u4 < t4; u4++)
              l3.__setDigit(u4, 0);
            return l3;
          } }, { key: "__absoluteAnd", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n4 = e4.length, l3 = t4.length, g3 = l3;
            if (n4 < l3) {
              g3 = n4;
              var o3 = e4, u4 = n4;
              e4 = t4, n4 = l3, t4 = o3, l3 = u4;
            }
            var s3 = g3;
            null === _3 ? _3 = new a3(s3, false) : s3 = _3.length;
            for (var r3 = 0; r3 < g3; r3++)
              _3.__setDigit(r3, e4.__digit(r3) & t4.__digit(r3));
            for (; r3 < s3; r3++)
              _3.__setDigit(r3, 0);
            return _3;
          } }, { key: "__absoluteAndNot", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n4 = e4.length, l3 = t4.length, g3 = l3;
            n4 < l3 && (g3 = n4);
            var o3 = n4;
            null === _3 ? _3 = new a3(o3, false) : o3 = _3.length;
            for (var u4 = 0; u4 < g3; u4++)
              _3.__setDigit(u4, e4.__digit(u4) & ~t4.__digit(u4));
            for (; u4 < n4; u4++)
              _3.__setDigit(u4, e4.__digit(u4));
            for (; u4 < o3; u4++)
              _3.__setDigit(u4, 0);
            return _3;
          } }, { key: "__absoluteOr", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n4 = e4.length, l3 = t4.length, g3 = l3;
            if (n4 < l3) {
              g3 = n4;
              var o3 = e4, u4 = n4;
              e4 = t4, n4 = l3, t4 = o3, l3 = u4;
            }
            var s3 = n4;
            null === _3 ? _3 = new a3(s3, false) : s3 = _3.length;
            for (var r3 = 0; r3 < g3; r3++)
              _3.__setDigit(r3, e4.__digit(r3) | t4.__digit(r3));
            for (; r3 < n4; r3++)
              _3.__setDigit(r3, e4.__digit(r3));
            for (; r3 < s3; r3++)
              _3.__setDigit(r3, 0);
            return _3;
          } }, { key: "__absoluteXor", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n4 = e4.length, l3 = t4.length, g3 = l3;
            if (n4 < l3) {
              g3 = n4;
              var o3 = e4, u4 = n4;
              e4 = t4, n4 = l3, t4 = o3, l3 = u4;
            }
            var s3 = n4;
            null === _3 ? _3 = new a3(s3, false) : s3 = _3.length;
            for (var r3 = 0; r3 < g3; r3++)
              _3.__setDigit(r3, e4.__digit(r3) ^ t4.__digit(r3));
            for (; r3 < n4; r3++)
              _3.__setDigit(r3, e4.__digit(r3));
            for (; r3 < s3; r3++)
              _3.__setDigit(r3, 0);
            return _3;
          } }, { key: "__absoluteCompare", value: function(e4, t4) {
            var _3 = e4.length - t4.length;
            if (0 != _3)
              return _3;
            for (var n4 = e4.length - 1; 0 <= n4 && e4.__digit(n4) === t4.__digit(n4); )
              n4--;
            return 0 > n4 ? 0 : e4.__unsignedDigit(n4) > t4.__unsignedDigit(n4) ? 1 : -1;
          } }, { key: "__multiplyAccumulate", value: function(e4, t4, _3, n4) {
            if (0 !== t4) {
              for (var l3 = 32767 & t4, g3 = t4 >>> 15, o3 = 0, u4 = 0, s3 = 0; s3 < e4.length; s3++, n4++) {
                var r3 = _3.__digit(n4), d3 = e4.__digit(s3), h3 = 32767 & d3, b3 = d3 >>> 15, m3 = a3.__imul(h3, l3), c3 = a3.__imul(h3, g3), v3 = a3.__imul(b3, l3), y3 = a3.__imul(b3, g3);
                r3 += u4 + m3 + o3, o3 = r3 >>> 30, r3 &= 1073741823, r3 += ((32767 & c3) << 15) + ((32767 & v3) << 15), o3 += r3 >>> 30, u4 = y3 + (c3 >>> 15) + (v3 >>> 15), _3.__setDigit(n4, 1073741823 & r3);
              }
              for (; 0 !== o3 || 0 !== u4; n4++) {
                var f3 = _3.__digit(n4);
                f3 += o3 + u4, u4 = 0, o3 = f3 >>> 30, _3.__setDigit(n4, 1073741823 & f3);
              }
            }
          } }, { key: "__internalMultiplyAdd", value: function(e4, t4, _3, l3, g3) {
            for (var o3 = _3, u4 = 0, s3 = 0; s3 < l3; s3++) {
              var d3 = e4.__digit(s3), h3 = a3.__imul(32767 & d3, t4), b3 = a3.__imul(d3 >>> 15, t4), m3 = h3 + ((32767 & b3) << 15) + u4 + o3;
              o3 = m3 >>> 30, u4 = b3 >>> 15, g3.__setDigit(s3, 1073741823 & m3);
            }
            if (g3.length > l3)
              for (g3.__setDigit(l3++, o3 + u4); l3 < g3.length; )
                g3.__setDigit(l3++, 0);
            else if (0 !== o3 + u4)
              throw new Error("implementation bug");
          } }, { key: "__absoluteDivSmall", value: function(e4, t4) {
            var _3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            null === _3 && (_3 = new a3(e4.length, false));
            for (var n4 = 0, l3 = 2 * e4.length - 1; 0 <= l3; l3 -= 2) {
              var g3 = (n4 << 15 | e4.__halfDigit(l3)) >>> 0, o3 = 0 | g3 / t4;
              n4 = 0 | g3 % t4, g3 = (n4 << 15 | e4.__halfDigit(l3 - 1)) >>> 0;
              var u4 = 0 | g3 / t4;
              n4 = 0 | g3 % t4, _3.__setDigit(l3 >>> 1, o3 << 15 | u4);
            }
            return _3;
          } }, { key: "__absoluteModSmall", value: function(e4, t4) {
            for (var _3, n4 = 0, l3 = 2 * e4.length - 1; 0 <= l3; l3--)
              _3 = (n4 << 15 | e4.__halfDigit(l3)) >>> 0, n4 = 0 | _3 % t4;
            return n4;
          } }, { key: "__absoluteDivLarge", value: function(e4, t4, i3, _3) {
            var l3 = t4.__halfDigitLength(), n4 = t4.length, g3 = e4.__halfDigitLength() - l3, o3 = null;
            i3 && (o3 = new a3(g3 + 2 >>> 1, false), o3.__initializeDigits());
            var s3 = new a3(l3 + 2 >>> 1, false);
            s3.__initializeDigits();
            var r3 = a3.__clz15(t4.__halfDigit(l3 - 1));
            0 < r3 && (t4 = a3.__specialLeftShift(t4, r3, 0));
            for (var d3 = a3.__specialLeftShift(e4, r3, 1), u4 = t4.__halfDigit(l3 - 1), h3 = 0, b3 = g3; 0 <= b3; b3--) {
              var m3 = 32767, v3 = d3.__halfDigit(b3 + l3);
              if (v3 !== u4) {
                var y3 = (v3 << 15 | d3.__halfDigit(b3 + l3 - 1)) >>> 0;
                m3 = 0 | y3 / u4;
                for (var f3 = 0 | y3 % u4, D3 = t4.__halfDigit(l3 - 2), p3 = d3.__halfDigit(b3 + l3 - 2); a3.__imul(m3, D3) >>> 0 > (f3 << 16 | p3) >>> 0 && (m3--, f3 += u4, !(32767 < f3)); )
                  ;
              }
              a3.__internalMultiplyAdd(t4, m3, 0, n4, s3);
              var k3 = d3.__inplaceSub(s3, b3, l3 + 1);
              0 !== k3 && (k3 = d3.__inplaceAdd(t4, b3, l3), d3.__setHalfDigit(b3 + l3, 32767 & d3.__halfDigit(b3 + l3) + k3), m3--), i3 && (1 & b3 ? h3 = m3 << 15 : o3.__setDigit(b3 >>> 1, h3 | m3));
            }
            if (_3)
              return d3.__inplaceRightShift(r3), i3 ? { quotient: o3, remainder: d3 } : d3;
            if (i3)
              return o3;
            throw new Error("unreachable");
          } }, { key: "__clz15", value: function(e4) {
            return a3.__clz30(e4) - 15;
          } }, { key: "__specialLeftShift", value: function(e4, t4, _3) {
            var l3 = e4.length, n4 = new a3(l3 + _3, false);
            if (0 === t4) {
              for (var g3 = 0; g3 < l3; g3++)
                n4.__setDigit(g3, e4.__digit(g3));
              return 0 < _3 && n4.__setDigit(l3, 0), n4;
            }
            for (var o3, u4 = 0, s3 = 0; s3 < l3; s3++)
              o3 = e4.__digit(s3), n4.__setDigit(s3, 1073741823 & o3 << t4 | u4), u4 = o3 >>> 30 - t4;
            return 0 < _3 && n4.__setDigit(l3, u4), n4;
          } }, { key: "__leftShiftByAbsolute", value: function(e4, t4) {
            var _3 = a3.__toShiftAmount(t4);
            if (0 > _3)
              throw new RangeError("BigInt too big");
            var n4 = 0 | _3 / 30, l3 = _3 % 30, g3 = e4.length, o3 = 0 !== l3 && 0 != e4.__digit(g3 - 1) >>> 30 - l3, u4 = g3 + n4 + (o3 ? 1 : 0), s3 = new a3(u4, e4.sign);
            if (0 === l3) {
              for (var r3 = 0; r3 < n4; r3++)
                s3.__setDigit(r3, 0);
              for (; r3 < u4; r3++)
                s3.__setDigit(r3, e4.__digit(r3 - n4));
            } else {
              for (var h3 = 0, b3 = 0; b3 < n4; b3++)
                s3.__setDigit(b3, 0);
              for (var m3, c3 = 0; c3 < g3; c3++)
                m3 = e4.__digit(c3), s3.__setDigit(c3 + n4, 1073741823 & m3 << l3 | h3), h3 = m3 >>> 30 - l3;
              if (o3)
                s3.__setDigit(g3 + n4, h3);
              else if (0 !== h3)
                throw new Error("implementation bug");
            }
            return s3.__trim();
          } }, { key: "__rightShiftByAbsolute", value: function(e4, t4) {
            var _3 = e4.length, n4 = e4.sign, l3 = a3.__toShiftAmount(t4);
            if (0 > l3)
              return a3.__rightShiftByMaximum(n4);
            var g3 = 0 | l3 / 30, o3 = l3 % 30, u4 = _3 - g3;
            if (0 >= u4)
              return a3.__rightShiftByMaximum(n4);
            var s3 = false;
            if (n4) {
              if (0 != (e4.__digit(g3) & (1 << o3) - 1))
                s3 = true;
              else
                for (var r3 = 0; r3 < g3; r3++)
                  if (0 !== e4.__digit(r3)) {
                    s3 = true;
                    break;
                  }
            }
            if (s3 && 0 === o3) {
              var h3 = e4.__digit(_3 - 1);
              0 == ~h3 && u4++;
            }
            var b3 = new a3(u4, n4);
            if (0 === o3) {
              b3.__setDigit(u4 - 1, 0);
              for (var m3 = g3; m3 < _3; m3++)
                b3.__setDigit(m3 - g3, e4.__digit(m3));
            } else {
              for (var c3, v3 = e4.__digit(g3) >>> o3, y3 = _3 - g3 - 1, f3 = 0; f3 < y3; f3++)
                c3 = e4.__digit(f3 + g3 + 1), b3.__setDigit(f3, 1073741823 & c3 << 30 - o3 | v3), v3 = c3 >>> o3;
              b3.__setDigit(y3, v3);
            }
            return s3 && (b3 = a3.__absoluteAddOne(b3, true, b3)), b3.__trim();
          } }, { key: "__rightShiftByMaximum", value: function(e4) {
            return e4 ? a3.__oneDigit(1, true) : a3.__zero();
          } }, { key: "__toShiftAmount", value: function(e4) {
            if (1 < e4.length)
              return -1;
            var t4 = e4.__unsignedDigit(0);
            return t4 > a3.__kMaxLengthBits ? -1 : t4;
          } }, { key: "__toPrimitive", value: function(e4) {
            var t4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default";
            if ("object" !== i2(e4))
              return e4;
            if (e4.constructor === a3)
              return e4;
            if ("undefined" != typeof Symbol && "symbol" === i2(Symbol.toPrimitive)) {
              var _3 = e4[Symbol.toPrimitive];
              if (_3) {
                var n4 = _3(t4);
                if ("object" !== i2(n4))
                  return n4;
                throw new TypeError("Cannot convert object to primitive value");
              }
            }
            var l3 = e4.valueOf;
            if (l3) {
              var g3 = l3.call(e4);
              if ("object" !== i2(g3))
                return g3;
            }
            var o3 = e4.toString;
            if (o3) {
              var u4 = o3.call(e4);
              if ("object" !== i2(u4))
                return u4;
            }
            throw new TypeError("Cannot convert object to primitive value");
          } }, { key: "__toNumeric", value: function(e4) {
            return a3.__isBigInt(e4) ? e4 : +e4;
          } }, { key: "__isBigInt", value: function(e4) {
            return "object" === i2(e4) && null !== e4 && e4.constructor === a3;
          } }, { key: "__truncateToNBits", value: function(e4, t4) {
            for (var _3 = 0 | (e4 + 29) / 30, n4 = new a3(_3, t4.sign), l3 = _3 - 1, g3 = 0; g3 < l3; g3++)
              n4.__setDigit(g3, t4.__digit(g3));
            var o3 = t4.__digit(l3);
            if (0 != e4 % 30) {
              var u4 = 32 - e4 % 30;
              o3 = o3 << u4 >>> u4;
            }
            return n4.__setDigit(l3, o3), n4.__trim();
          } }, { key: "__truncateAndSubFromPowerOfTwo", value: function(e4, t4, _3) {
            for (var n4 = Math.min, l3, g3 = 0 | (e4 + 29) / 30, o3 = new a3(g3, _3), u4 = 0, s3 = g3 - 1, d3 = 0, h3 = n4(s3, t4.length); u4 < h3; u4++)
              l3 = 0 - t4.__digit(u4) - d3, d3 = 1 & l3 >>> 30, o3.__setDigit(u4, 1073741823 & l3);
            for (; u4 < s3; u4++)
              o3.__setDigit(u4, 0 | 1073741823 & -d3);
            var b3, m3 = s3 < t4.length ? t4.__digit(s3) : 0, c3 = e4 % 30;
            if (0 === c3)
              b3 = 0 - m3 - d3, b3 &= 1073741823;
            else {
              var v3 = 32 - c3;
              m3 = m3 << v3 >>> v3;
              var y3 = 1 << 32 - v3;
              b3 = y3 - m3 - d3, b3 &= y3 - 1;
            }
            return o3.__setDigit(s3, b3), o3.__trim();
          } }, { key: "__digitPow", value: function(e4, t4) {
            for (var i3 = 1; 0 < t4; )
              1 & t4 && (i3 *= e4), t4 >>>= 1, e4 *= e4;
            return i3;
          } }, { key: "__isOneDigitInt", value: function(e4) {
            return (1073741823 & e4) === e4;
          } }]), a3;
        }(h2(Array));
        return S2.__kMaxLength = 33554432, S2.__kMaxLengthBits = S2.__kMaxLength << 5, S2.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], S2.__kBitsPerCharTableShift = 5, S2.__kBitsPerCharTableMultiplier = 1 << S2.__kBitsPerCharTableShift, S2.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], S2.__kBitConversionBuffer = new ArrayBuffer(8), S2.__kBitConversionDouble = new Float64Array(S2.__kBitConversionBuffer), S2.__kBitConversionInts = new Int32Array(S2.__kBitConversionBuffer), S2.__clz30 = t2 ? function(e3) {
          return t2(e3) - 2;
        } : function(e3) {
          var t3 = Math.LN2, i3 = Math.log;
          return 0 === e3 ? 30 : 0 | 29 - (0 | i3(e3 >>> 0) / t3);
        }, S2.__imul = e2 || function(e3, t3) {
          return 0 | e3 * t3;
        }, S2;
      });
    }
  });

  // node_modules/@js-temporal/polyfill/dist/index.esm.js
  var import_jsbi = __toESM(require_jsbi_umd(), 1);
  var t = {};
  function MakeIntrinsicClass(e2, t2) {
    Object.defineProperty(e2.prototype, Symbol.toStringTag, { value: t2, writable: false, enumerable: false, configurable: true });
    for (const t3 of Object.getOwnPropertyNames(e2)) {
      const o2 = Object.getOwnPropertyDescriptor(e2, t3);
      o2.configurable && o2.enumerable && (o2.enumerable = false, Object.defineProperty(e2, t3, o2));
    }
    for (const t3 of Object.getOwnPropertyNames(e2.prototype)) {
      const o2 = Object.getOwnPropertyDescriptor(e2.prototype, t3);
      o2.configurable && o2.enumerable && (o2.enumerable = false, Object.defineProperty(e2.prototype, t3, o2));
    }
    DefineIntrinsic(t2, e2), DefineIntrinsic(`${t2}.prototype`, e2.prototype);
  }
  function DefineIntrinsic(e2, o2) {
    const n2 = `%${e2}%`;
    if (void 0 !== t[n2])
      throw new Error(`intrinsic ${e2} already exists`);
    t[n2] = o2;
  }
  function GetIntrinsic(e2) {
    return t[e2];
  }
  var o = "slot-epochNanoSeconds";
  var n = "slot-timezone-identifier";
  var r = "slot-year";
  var a = "slot-month";
  var i = "slot-day";
  var s = "slot-hour";
  var l = "slot-minute";
  var d = "slot-second";
  var m = "slot-millisecond";
  var c = "slot-microsecond";
  var h = "slot-nanosecond";
  var T = "slot-calendar";
  var u = "slot-cached-instant";
  var p = "slot-time-zone";
  var f = "slot-years";
  var y = "slot-months";
  var S = "slot-weeks";
  var g = "slot-days";
  var w = "slot-hours";
  var I = "slot-minutes";
  var G = "slot-seconds";
  var D = "slot-milliseconds";
  var v = "slot-microseconds";
  var O = "slot-nanoseconds";
  var C = "slot-calendar-identifier";
  var E = /* @__PURE__ */ new WeakMap();
  function CreateSlots(e2) {
    E.set(e2, /* @__PURE__ */ Object.create(null));
  }
  function GetSlots(e2) {
    return E.get(e2);
  }
  function HasSlot(e2, ...t2) {
    if (!e2 || "object" != typeof e2)
      return false;
    const o2 = GetSlots(e2);
    return !!o2 && t2.reduce((e3, t3) => e3 && t3 in o2, true);
  }
  function GetSlot(e2, t2) {
    const o2 = GetSlots(e2)[t2];
    if (void 0 === o2)
      throw new TypeError(`Missing internal slot ${t2}`);
    return o2;
  }
  function SetSlot(e2, t2, o2) {
    GetSlots(e2)[t2] = o2;
  }
  var b = Array.prototype.includes;
  var R = Array.prototype.push;
  var M = globalThis.Intl.DateTimeFormat;
  var Z = Array.prototype.sort;
  var F = Math.abs;
  var Y = Math.floor;
  var P = Object.entries;
  var j = Object.keys;
  var B = {};
  var Calendar = class {
    constructor(e2) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: id is required");
      const t2 = ToString(e2);
      if (!IsBuiltinCalendar(t2))
        throw new RangeError(`invalid calendar identifier ${t2}`);
      CreateSlots(this), SetSlot(this, C, t2);
    }
    get id() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return ToString(this);
    }
    dateFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const o2 = GetOptionsObject(t2);
      return B[GetSlot(this, C)].dateFromFields(e2, o2, this);
    }
    yearMonthFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const o2 = GetOptionsObject(t2);
      return B[GetSlot(this, C)].yearMonthFromFields(e2, o2, this);
    }
    monthDayFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const o2 = GetOptionsObject(t2);
      return B[GetSlot(this, C)].monthDayFromFields(e2, o2, this);
    }
    fields(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = [], o2 = /* @__PURE__ */ new Set(["year", "month", "monthCode", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"]);
      for (const n2 of e2) {
        if ("string" != typeof n2)
          throw new TypeError("invalid fields");
        if (!o2.has(n2))
          throw new RangeError(`invalid field name ${n2}`);
        o2.delete(n2), R.call(t2, n2);
      }
      return B[GetSlot(this, C)].fields(t2);
    }
    mergeFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return B[GetSlot(this, C)].mergeFields(e2, t2);
    }
    dateAdd(e2, t2, o2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalDate(e2), r2 = ToTemporalDuration(t2), a2 = ToTemporalOverflow(GetOptionsObject(o2)), { days: i2 } = BalanceDuration(GetSlot(r2, g), GetSlot(r2, w), GetSlot(r2, I), GetSlot(r2, G), GetSlot(r2, D), GetSlot(r2, v), GetSlot(r2, O), "day");
      return B[GetSlot(this, C)].dateAdd(n2, GetSlot(r2, f), GetSlot(r2, y), GetSlot(r2, S), i2, a2, this);
    }
    dateUntil(e2, t2, o2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalDate(e2), r2 = ToTemporalDate(t2), a2 = ToLargestTemporalUnit(GetOptionsObject(o2), "auto", ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"], "day"), { years: i2, months: s2, weeks: l2, days: d2 } = B[GetSlot(this, C)].dateUntil(n2, r2, a2);
      return new (GetIntrinsic("%Temporal.Duration%"))(i2, s2, l2, d2, 0, 0, 0, 0, 0, 0);
    }
    year(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].year(t2);
    }
    month(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (IsTemporalMonthDay(t2))
        throw new TypeError("use monthCode on PlainMonthDay instead");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].month(t2);
    }
    monthCode(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || IsTemporalMonthDay(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].monthCode(t2);
    }
    day(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalMonthDay(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].day(t2);
    }
    era(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].era(t2);
    }
    eraYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].eraYear(t2);
    }
    dayOfWeek(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return B[GetSlot(this, C)].dayOfWeek(t2);
    }
    dayOfYear(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return B[GetSlot(this, C)].dayOfYear(t2);
    }
    weekOfYear(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return B[GetSlot(this, C)].weekOfYear(t2);
    }
    daysInWeek(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return B[GetSlot(this, C)].daysInWeek(t2);
    }
    daysInMonth(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].daysInMonth(t2);
    }
    daysInYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].daysInYear(t2);
    }
    monthsInYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].monthsInYear(t2);
    }
    inLeapYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), B[GetSlot(this, C)].inLeapYear(t2);
    }
    toString() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, C);
    }
    toJSON() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return ToString(this);
    }
    static from(e2) {
      return ToTemporalCalendar(e2);
    }
  };
  function monthCodeNumberPart(e2) {
    if (!e2.startsWith("M"))
      throw new RangeError(`Invalid month code: ${e2}.  Month codes must start with M.`);
    const t2 = +e2.slice(1);
    if (isNaN(t2))
      throw new RangeError(`Invalid month code: ${e2}`);
    return t2;
  }
  function buildMonthCode(e2, t2 = false) {
    return `M${e2.toString().padStart(2, "0")}${t2 ? "L" : ""}`;
  }
  function resolveNonLunisolarMonth(e2, t2, o2 = 12) {
    let { month: n2, monthCode: r2 } = e2;
    if (void 0 === r2) {
      if (void 0 === n2)
        throw new TypeError("Either month or monthCode are required");
      "reject" === t2 && RejectToRange(n2, 1, o2), "constrain" === t2 && (n2 = ConstrainToRange(n2, 1, o2)), r2 = buildMonthCode(n2);
    } else {
      const e3 = monthCodeNumberPart(r2);
      if (void 0 !== n2 && n2 !== e3)
        throw new RangeError(`monthCode ${r2} and month ${n2} must match if both are present`);
      if (r2 !== buildMonthCode(e3))
        throw new RangeError(`Invalid month code: ${r2}`);
      if (n2 = e3, n2 < 1 || n2 > o2)
        throw new RangeError(`Invalid monthCode: ${r2}`);
    }
    return { ...e2, month: n2, monthCode: r2 };
  }
  MakeIntrinsicClass(Calendar, "Temporal.Calendar"), DefineIntrinsic("Temporal.Calendar.from", Calendar.from), B.iso8601 = { dateFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2);
    let r2 = PrepareTemporalFields(e2, [["day"], ["month", void 0], ["monthCode", void 0], ["year"]]);
    r2 = resolveNonLunisolarMonth(r2);
    let { year: a2, month: i2, day: s2 } = r2;
    return { year: a2, month: i2, day: s2 } = RegulateISODate(a2, i2, s2, n2), CreateTemporalDate(a2, i2, s2, o2);
  }, yearMonthFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2);
    let r2 = PrepareTemporalFields(e2, [["month", void 0], ["monthCode", void 0], ["year"]]);
    r2 = resolveNonLunisolarMonth(r2);
    let { year: a2, month: i2 } = r2;
    return { year: a2, month: i2 } = function RegulateISOYearMonth(e3, t3, o3) {
      let n3 = e3, r3 = t3;
      const a3 = 1;
      switch (o3) {
        case "reject":
          RejectISODate(n3, r3, a3);
          break;
        case "constrain":
          ({ year: n3, month: r3 } = ConstrainISODate(n3, r3));
      }
      return { year: n3, month: r3 };
    }(a2, i2, n2), CreateTemporalYearMonth(a2, i2, o2, 1);
  }, monthDayFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2);
    let r2 = PrepareTemporalFields(e2, [["day"], ["month", void 0], ["monthCode", void 0], ["year", void 0]]);
    if (void 0 !== r2.month && void 0 === r2.year && void 0 === r2.monthCode)
      throw new TypeError("either year or monthCode required with month");
    const a2 = void 0 === r2.monthCode;
    r2 = resolveNonLunisolarMonth(r2);
    let { month: i2, day: s2, year: l2 } = r2;
    return { month: i2, day: s2 } = RegulateISODate(a2 ? l2 : 1972, i2, s2, n2), CreateTemporalMonthDay(i2, s2, o2, 1972);
  }, fields: (e2) => e2, mergeFields(e2, t2) {
    const o2 = {};
    for (const t3 of j(e2))
      "month" !== t3 && "monthCode" !== t3 && (o2[t3] = e2[t3]);
    const n2 = j(t2);
    for (const e3 of n2)
      o2[e3] = t2[e3];
    if (!b.call(n2, "month") && !b.call(n2, "monthCode")) {
      const { month: t3, monthCode: n3 } = e2;
      void 0 !== t3 && (o2.month = t3), void 0 !== n3 && (o2.monthCode = n3);
    }
    return o2;
  }, dateAdd(e2, t2, o2, n2, s2, l2, d2) {
    let m2 = GetSlot(e2, r), c2 = GetSlot(e2, a), h2 = GetSlot(e2, i);
    return { year: m2, month: c2, day: h2 } = AddISODate(m2, c2, h2, t2, o2, n2, s2, l2), CreateTemporalDate(m2, c2, h2, d2);
  }, dateUntil: (e2, t2, o2) => DifferenceISODate(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), GetSlot(t2, r), GetSlot(t2, a), GetSlot(t2, i), o2), year: (e2) => GetSlot(e2, r), era() {
  }, eraYear() {
  }, month: (e2) => GetSlot(e2, a), monthCode: (e2) => buildMonthCode(GetSlot(e2, a)), day: (e2) => GetSlot(e2, i), dayOfWeek: (e2) => DayOfWeek(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i)), dayOfYear: (e2) => DayOfYear(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i)), weekOfYear: (e2) => function WeekOfYear(e3, t2, o2) {
    const n2 = DayOfYear(e3, t2, o2), r2 = DayOfWeek(e3, t2, o2) || 7, a2 = DayOfWeek(e3, 1, 1), i2 = de((n2 - r2 + 10) / 7);
    if (i2 < 1)
      return 5 === a2 || 6 === a2 && LeapYear(e3 - 1) ? 53 : 52;
    if (53 === i2 && (LeapYear(e3) ? 366 : 365) - n2 < 4 - r2)
      return 1;
    return i2;
  }(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i)), daysInWeek: () => 7, daysInMonth: (e2) => ISODaysInMonth(GetSlot(e2, r), GetSlot(e2, a)), daysInYear(e2) {
    let t2 = e2;
    return HasSlot(t2, r) || (t2 = ToTemporalDate(t2)), LeapYear(GetSlot(t2, r)) ? 366 : 365;
  }, monthsInYear: () => 12, inLeapYear(e2) {
    let t2 = e2;
    return HasSlot(t2, r) || (t2 = ToTemporalDate(t2)), LeapYear(GetSlot(t2, r));
  } };
  var OneObjectCache = class {
    constructor(e2) {
      if (this.map = /* @__PURE__ */ new Map(), this.calls = 0, this.hits = 0, this.misses = 0, this.now = globalThis.performance ? globalThis.performance.now() : Date.now(), void 0 !== e2) {
        let t2 = 0;
        for (const o2 of e2.map.entries()) {
          if (++t2 > OneObjectCache.MAX_CACHE_ENTRIES)
            break;
          this.map.set(...o2);
        }
      }
    }
    get(e2) {
      const t2 = this.map.get(e2);
      return t2 && (this.hits++, this.report()), this.calls++, t2;
    }
    set(e2, t2) {
      this.map.set(e2, t2), this.misses++, this.report();
    }
    report() {
    }
    setObject(e2) {
      if (OneObjectCache.objectMap.get(e2))
        throw new RangeError("object already cached");
      OneObjectCache.objectMap.set(e2, this), this.report();
    }
    static getCacheForObject(e2) {
      let t2 = OneObjectCache.objectMap.get(e2);
      return t2 || (t2 = new OneObjectCache(), OneObjectCache.objectMap.set(e2, t2)), t2;
    }
  };
  function toUtcIsoDateString({ isoYear: e2, isoMonth: t2, isoDay: o2 }) {
    return `${ISOYearString(e2)}-${ISODateTimePartString(t2)}-${ISODateTimePartString(o2)}T00:00Z`;
  }
  function simpleDateDiff(e2, t2) {
    return { years: e2.year - t2.year, months: e2.month - t2.month, days: e2.day - t2.day };
  }
  OneObjectCache.objectMap = /* @__PURE__ */ new WeakMap(), OneObjectCache.MAX_CACHE_ENTRIES = 1e3;
  var HelperBase = class {
    constructor() {
      this.eraLength = "short", this.hasEra = true;
    }
    getFormatter() {
      return void 0 === this.formatter && (this.formatter = new M(`en-US-u-ca-${this.id}`, { day: "numeric", month: "numeric", year: "numeric", era: this.eraLength, timeZone: "UTC" })), this.formatter;
    }
    isoToCalendarDate(e2, t2) {
      const { year: o2, month: n2, day: r2 } = e2, a2 = JSON.stringify({ func: "isoToCalendarDate", isoYear: o2, isoMonth: n2, isoDay: r2, id: this.id }), i2 = t2.get(a2);
      if (i2)
        return i2;
      const s2 = this.getFormatter();
      let l2, d2;
      try {
        d2 = toUtcIsoDateString({ isoYear: o2, isoMonth: n2, isoDay: r2 }), l2 = s2.formatToParts(new Date(d2));
      } catch (e3) {
        throw new RangeError(`Invalid ISO date: ${JSON.stringify({ isoYear: o2, isoMonth: n2, isoDay: r2 })}`);
      }
      const m2 = {};
      for (let { type: e3, value: t3 } of l2) {
        if ("year" === e3 && (m2.eraYear = +t3), "relatedYear" === e3 && (m2.eraYear = +t3), "month" === e3) {
          const e4 = /^([0-9]*)(.*?)$/.exec(t3);
          if (!e4 || 3 != e4.length || !e4[1] && !e4[2])
            throw new RangeError(`Unexpected month: ${t3}`);
          if (m2.month = e4[1] ? +e4[1] : 1, m2.month < 1)
            throw new RangeError(`Invalid month ${t3} from ${d2}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);
          if (m2.month > 13)
            throw new RangeError(`Invalid month ${t3} from ${d2}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
          e4[2] && (m2.monthExtra = e4[2]);
        }
        "day" === e3 && (m2.day = +t3), this.hasEra && "era" === e3 && null != t3 && "" !== t3 && (t3 = t3.split(" (")[0], m2.era = t3.normalize("NFD").replace(/[^-0-9 \p{L}]/gu, "").replace(" ", "-").toLowerCase());
      }
      if (void 0 === m2.eraYear)
        throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
      if (this.reviseIntlEra) {
        const { era: t3, eraYear: o3 } = this.reviseIntlEra(m2, e2);
        m2.era = t3, m2.eraYear = o3;
      }
      this.checkIcuBugs && this.checkIcuBugs(e2);
      const c2 = this.adjustCalendarDate(m2, t2, "constrain", true);
      if (void 0 === c2.year)
        throw new RangeError(`Missing year converting ${JSON.stringify(e2)}`);
      if (void 0 === c2.month)
        throw new RangeError(`Missing month converting ${JSON.stringify(e2)}`);
      if (void 0 === c2.day)
        throw new RangeError(`Missing day converting ${JSON.stringify(e2)}`);
      return t2.set(a2, c2), ["constrain", "reject"].forEach((o3) => {
        const n3 = JSON.stringify({ func: "calendarToIsoDate", year: c2.year, month: c2.month, day: c2.day, overflow: o3, id: this.id });
        t2.set(n3, e2);
      }), c2;
    }
    validateCalendarDate(e2) {
      const { era: t2, month: o2, year: n2, day: r2, eraYear: a2, monthCode: i2, monthExtra: s2 } = e2;
      if (void 0 !== s2)
        throw new RangeError("Unexpected `monthExtra` value");
      if (void 0 === n2 && void 0 === a2)
        throw new TypeError("year or eraYear is required");
      if (void 0 === o2 && void 0 === i2)
        throw new TypeError("month or monthCode is required");
      if (void 0 === r2)
        throw new RangeError("Missing day");
      if (void 0 !== i2) {
        if ("string" != typeof i2)
          throw new RangeError("monthCode must be a string, not " + typeof i2);
        if (!/^M([01]?\d)(L?)$/.test(i2))
          throw new RangeError(`Invalid monthCode: ${i2}`);
      }
      if (this.constantEra) {
        if (void 0 !== t2 && t2 !== this.constantEra)
          throw new RangeError(`era must be ${this.constantEra}, not ${t2}`);
        if (void 0 !== a2 && void 0 !== n2 && a2 !== n2)
          throw new RangeError(`eraYear ${a2} does not match year ${n2}`);
      }
    }
    adjustCalendarDate(e2, t2, o2 = "constrain", n2 = false) {
      if ("lunisolar" === this.calendarType)
        throw new RangeError("Override required for lunisolar calendars");
      let r2 = e2;
      if (this.validateCalendarDate(r2), this.constantEra) {
        const { year: e3, eraYear: t3 } = r2;
        r2 = { ...r2, era: this.constantEra, year: void 0 !== e3 ? e3 : t3, eraYear: void 0 !== t3 ? t3 : e3 };
      }
      const a2 = this.monthsInYear(r2, t2);
      let { month: i2, monthCode: s2 } = r2;
      return { month: i2, monthCode: s2 } = resolveNonLunisolarMonth(r2, o2, a2), { ...r2, month: i2, monthCode: s2 };
    }
    regulateMonthDayNaive(e2, t2, o2) {
      const n2 = this.monthsInYear(e2, o2);
      let { month: r2, day: a2 } = e2;
      return "reject" === t2 ? (RejectToRange(r2, 1, n2), RejectToRange(a2, 1, this.maximumMonthLength(e2))) : (r2 = ConstrainToRange(r2, 1, n2), a2 = ConstrainToRange(a2, 1, this.maximumMonthLength({ ...e2, month: r2 }))), { ...e2, month: r2, day: a2 };
    }
    calendarToIsoDate(e2, t2 = "constrain", o2) {
      const n2 = e2;
      let r2 = this.adjustCalendarDate(e2, o2, t2, false);
      r2 = this.regulateMonthDayNaive(r2, t2, o2);
      const { year: a2, month: i2, day: s2 } = r2, l2 = JSON.stringify({ func: "calendarToIsoDate", year: a2, month: i2, day: s2, overflow: t2, id: this.id });
      let d2, m2 = o2.get(l2);
      if (m2)
        return m2;
      if (void 0 !== n2.year && void 0 !== n2.month && void 0 !== n2.day && (n2.year !== r2.year || n2.month !== r2.month || n2.day !== r2.day) && (d2 = JSON.stringify({ func: "calendarToIsoDate", year: n2.year, month: n2.month, day: n2.day, overflow: t2, id: this.id }), m2 = o2.get(d2), m2))
        return m2;
      let c2 = this.estimateIsoDate({ year: a2, month: i2, day: s2 });
      const calculateSameMonthResult = (e3) => {
        let n3 = this.addDaysIso(c2, e3);
        if (r2.day > this.minimumMonthLength(r2)) {
          let e4 = this.isoToCalendarDate(n3, o2);
          for (; e4.month !== i2 || e4.year !== a2; ) {
            if ("reject" === t2)
              throw new RangeError(`day ${s2} does not exist in month ${i2} of year ${a2}`);
            n3 = this.addDaysIso(n3, -1), e4 = this.isoToCalendarDate(n3, o2);
          }
        }
        return n3;
      };
      let h2 = 0, T2 = this.isoToCalendarDate(c2, o2), u2 = simpleDateDiff(r2, T2);
      if (0 !== u2.years || 0 !== u2.months || 0 !== u2.days) {
        const e3 = 365 * u2.years + 30 * u2.months + u2.days;
        c2 = this.addDaysIso(c2, e3), T2 = this.isoToCalendarDate(c2, o2), u2 = simpleDateDiff(r2, T2), 0 === u2.years && 0 === u2.months ? c2 = calculateSameMonthResult(u2.days) : h2 = this.compareCalendarDates(r2, T2);
      }
      let p2 = 8, f2 = false;
      for (; h2; ) {
        c2 = this.addDaysIso(c2, h2 * p2);
        const e3 = T2;
        T2 = this.isoToCalendarDate(c2, o2);
        const a3 = h2;
        if (h2 = this.compareCalendarDates(r2, T2), h2) {
          if (u2 = simpleDateDiff(r2, T2), 0 === u2.years && 0 === u2.months)
            c2 = calculateSameMonthResult(u2.days), h2 = 0, f2 = r2.day > this.minimumMonthLength(r2);
          else if (a3 && h2 !== a3)
            if (p2 > 1)
              p2 /= 2;
            else {
              if ("reject" === t2)
                throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({ ...n2 })}`);
              this.compareCalendarDates(T2, e3) > 0 && (c2 = this.addDaysIso(c2, -1)), f2 = true, h2 = 0;
            }
        }
      }
      if (o2.set(l2, c2), d2 && o2.set(d2, c2), void 0 === r2.year || void 0 === r2.month || void 0 === r2.day || void 0 === r2.monthCode || this.hasEra && (void 0 === r2.era || void 0 === r2.eraYear))
        throw new RangeError("Unexpected missing property");
      if (!f2) {
        const e3 = JSON.stringify({ func: "isoToCalendarDate", isoYear: c2.year, isoMonth: c2.month, isoDay: c2.day, id: this.id });
        o2.set(e3, r2);
      }
      return c2;
    }
    temporalToCalendarDate(e2, t2) {
      const o2 = { year: GetSlot(e2, r), month: GetSlot(e2, a), day: GetSlot(e2, i) };
      return this.isoToCalendarDate(o2, t2);
    }
    compareCalendarDates(e2, t2) {
      const o2 = PrepareTemporalFields(e2, [["day"], ["month"], ["year"]]), n2 = PrepareTemporalFields(t2, [["day"], ["month"], ["year"]]);
      return o2.year !== n2.year ? ComparisonResult(o2.year - n2.year) : o2.month !== n2.month ? ComparisonResult(o2.month - n2.month) : o2.day !== n2.day ? ComparisonResult(o2.day - n2.day) : 0;
    }
    regulateDate(e2, t2 = "constrain", o2) {
      const n2 = this.calendarToIsoDate(e2, t2, o2);
      return this.isoToCalendarDate(n2, o2);
    }
    addDaysIso(e2, t2) {
      return AddISODate(e2.year, e2.month, e2.day, 0, 0, 0, t2, "constrain");
    }
    addDaysCalendar(e2, t2, o2) {
      const n2 = this.calendarToIsoDate(e2, "constrain", o2), r2 = this.addDaysIso(n2, t2);
      return this.isoToCalendarDate(r2, o2);
    }
    addMonthsCalendar(e2, t2, o2, n2) {
      let r2 = e2;
      const { day: a2 } = r2;
      for (let e3 = 0, o3 = F(t2); e3 < o3; e3++) {
        const { month: e4 } = r2, o4 = r2, i2 = t2 < 0 ? -Math.max(a2, this.daysInPreviousMonth(r2, n2)) : this.daysInMonth(r2, n2), s2 = this.calendarToIsoDate(r2, "constrain", n2);
        let l2 = this.addDaysIso(s2, i2);
        if (r2 = this.isoToCalendarDate(l2, n2), t2 > 0) {
          const t3 = this.monthsInYear(o4, n2);
          for (; r2.month - 1 != e4 % t3; )
            l2 = this.addDaysIso(l2, -1), r2 = this.isoToCalendarDate(l2, n2);
        }
        r2.day !== a2 && (r2 = this.regulateDate({ ...r2, day: a2 }, "constrain", n2));
      }
      if ("reject" === o2 && r2.day !== a2)
        throw new RangeError(`Day ${a2} does not exist in resulting calendar month`);
      return r2;
    }
    addCalendar(e2, { years: t2 = 0, months: o2 = 0, weeks: n2 = 0, days: r2 = 0 }, a2, i2) {
      const { year: s2, month: l2, day: d2 } = e2, m2 = this.addMonthsCalendar({ year: s2 + t2, month: l2, day: d2 }, o2, a2, i2), c2 = r2 + 7 * n2;
      return this.addDaysCalendar(m2, c2, i2);
    }
    untilCalendar(e2, t2, o2, n2) {
      let r2 = 0, a2 = 0, i2 = 0, s2 = 0;
      switch (o2) {
        case "day":
          r2 = this.calendarDaysUntil(e2, t2, n2);
          break;
        case "week": {
          const o3 = this.calendarDaysUntil(e2, t2, n2);
          r2 = o3 % 7, a2 = (o3 - r2) / 7;
          break;
        }
        case "month":
        case "year": {
          const a3 = t2.year - e2.year, l2 = t2.month - e2.month, d2 = t2.day - e2.day, m2 = this.compareCalendarDates(t2, e2);
          if ("year" === o2 && a3) {
            s2 = l2 * m2 < 0 || 0 === l2 && d2 * m2 < 0 ? a3 - m2 : a3;
          }
          let c2, h2 = s2 ? this.addCalendar(e2, { years: s2 }, "constrain", n2) : e2;
          do {
            i2 += m2, c2 = h2, h2 = this.addMonthsCalendar(c2, m2, "constrain", n2), h2.day !== e2.day && (h2 = this.regulateDate({ ...h2, day: e2.day }, "constrain", n2));
          } while (this.compareCalendarDates(t2, h2) * m2 >= 0);
          i2 -= m2;
          r2 = this.calendarDaysUntil(c2, t2, n2);
          break;
        }
      }
      return { years: s2, months: i2, weeks: a2, days: r2 };
    }
    daysInMonth(e2, t2) {
      const { day: o2 } = e2, n2 = this.maximumMonthLength(e2), r2 = this.minimumMonthLength(e2);
      if (r2 === n2)
        return r2;
      const a2 = o2 <= n2 - r2 ? n2 : r2, i2 = this.calendarToIsoDate(e2, "constrain", t2), s2 = this.addDaysIso(i2, a2), l2 = this.isoToCalendarDate(s2, t2), d2 = this.addDaysIso(s2, -l2.day);
      return this.isoToCalendarDate(d2, t2).day;
    }
    daysInPreviousMonth(e2, t2) {
      const { day: o2, month: n2, year: r2 } = e2;
      let a2 = { year: n2 > 1 ? r2 : r2 - 1, month: n2, day: 1 };
      const i2 = n2 > 1 ? n2 - 1 : this.monthsInYear(a2, t2);
      a2 = { ...a2, month: i2 };
      const s2 = this.minimumMonthLength(a2), l2 = this.maximumMonthLength(a2);
      if (s2 === l2)
        return l2;
      const d2 = this.calendarToIsoDate(e2, "constrain", t2), m2 = this.addDaysIso(d2, -o2);
      return this.isoToCalendarDate(m2, t2).day;
    }
    startOfCalendarYear(e2) {
      return { year: e2.year, month: 1, day: 1 };
    }
    startOfCalendarMonth(e2) {
      return { year: e2.year, month: e2.month, day: 1 };
    }
    calendarDaysUntil(e2, t2, o2) {
      const n2 = this.calendarToIsoDate(e2, "constrain", o2), r2 = this.calendarToIsoDate(t2, "constrain", o2);
      return this.isoDaysUntil(n2, r2);
    }
    isoDaysUntil(e2, t2) {
      return DifferenceISODate(e2.year, e2.month, e2.day, t2.year, t2.month, t2.day, "day").days;
    }
    monthDayFromFields(e2, t2, o2) {
      let n2, r2, a2, i2, s2, { year: l2, month: d2, monthCode: m2, day: c2, era: h2, eraYear: T2 } = e2;
      if (void 0 === m2) {
        if (void 0 === l2 && (void 0 === h2 || void 0 === T2))
          throw new TypeError("`monthCode`, `year`, or `era` and `eraYear` is required");
        ({ monthCode: m2, year: l2 } = this.adjustCalendarDate({ year: l2, month: d2, monthCode: m2, day: c2, era: h2, eraYear: T2 }, o2, t2));
      }
      const { year: u2 } = this.isoToCalendarDate({ year: 1972, month: 1, day: 1 }, o2);
      for (let e3 = 0; e3 < 100; e3++) {
        const l3 = this.adjustCalendarDate({ day: c2, monthCode: m2, year: u2 - e3 }, o2), d3 = this.calendarToIsoDate(l3, "constrain", o2), h3 = this.isoToCalendarDate(d3, o2);
        if ({ year: n2, month: r2, day: a2 } = d3, h3.monthCode === m2 && h3.day === c2)
          return { month: r2, day: a2, year: n2 };
        "constrain" === t2 && (void 0 === i2 || h3.monthCode === i2.monthCode && h3.day > i2.day) && (i2 = h3, s2 = d3);
      }
      if ("constrain" === t2 && void 0 !== s2)
        return s2;
      throw new RangeError(`No recent ${this.id} year with monthCode ${m2} and day ${c2}`);
    }
  };
  var HebrewHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "hebrew", this.calendarType = "lunisolar", this.months = { Tishri: { leap: 1, regular: 1, monthCode: "M01", days: 30 }, Heshvan: { leap: 2, regular: 2, monthCode: "M02", days: { min: 29, max: 30 } }, Kislev: { leap: 3, regular: 3, monthCode: "M03", days: { min: 29, max: 30 } }, Tevet: { leap: 4, regular: 4, monthCode: "M04", days: 29 }, Shevat: { leap: 5, regular: 5, monthCode: "M05", days: 30 }, Adar: { leap: void 0, regular: 6, monthCode: "M06", days: 29 }, "Adar I": { leap: 6, regular: void 0, monthCode: "M05L", days: 30 }, "Adar II": { leap: 7, regular: void 0, monthCode: "M06", days: 29 }, Nisan: { leap: 8, regular: 7, monthCode: "M07", days: 30 }, Iyar: { leap: 9, regular: 8, monthCode: "M08", days: 29 }, Sivan: { leap: 10, regular: 9, monthCode: "M09", days: 30 }, Tamuz: { leap: 11, regular: 10, monthCode: "M10", days: 29 }, Av: { leap: 12, regular: 11, monthCode: "M11", days: 30 }, Elul: { leap: 13, regular: 12, monthCode: "M12", days: 29 } }, this.hasEra = false;
    }
    inLeapYear(e2) {
      const { year: t2 } = e2;
      return (7 * t2 + 1) % 19 < 7;
    }
    monthsInYear(e2) {
      return this.inLeapYear(e2) ? 13 : 12;
    }
    minimumMonthLength(e2) {
      return this.minMaxMonthLength(e2, "min");
    }
    maximumMonthLength(e2) {
      return this.minMaxMonthLength(e2, "max");
    }
    minMaxMonthLength(e2, t2) {
      const { month: o2, year: n2 } = e2, r2 = this.getMonthCode(n2, o2), a2 = P(this.months).find((e3) => e3[1].monthCode === r2);
      if (void 0 === a2)
        throw new RangeError(`unmatched Hebrew month: ${o2}`);
      const i2 = a2[1].days;
      return "number" == typeof i2 ? i2 : i2[t2];
    }
    estimateIsoDate(e2) {
      const { year: t2 } = e2;
      return { year: t2 - 3760, month: 1, day: 1 };
    }
    getMonthCode(e2, t2) {
      return this.inLeapYear({ year: e2 }) ? 6 === t2 ? buildMonthCode(5, true) : buildMonthCode(t2 < 6 ? t2 : t2 - 1) : buildMonthCode(t2);
    }
    adjustCalendarDate(e2, t2, o2 = "constrain", n2 = false) {
      let { year: r2, eraYear: a2, month: i2, monthCode: s2, day: l2, monthExtra: d2 } = e2;
      if (void 0 === r2 && void 0 !== a2 && (r2 = a2), void 0 === a2 && void 0 !== r2 && (a2 = r2), n2) {
        if (d2) {
          const e3 = this.months[d2];
          if (!e3)
            throw new RangeError(`Unrecognized month from formatToParts: ${d2}`);
          i2 = this.inLeapYear({ year: r2 }) ? e3.leap : e3.regular;
        }
        s2 = this.getMonthCode(r2, i2);
        return { year: r2, month: i2, day: l2, era: void 0, eraYear: a2, monthCode: s2 };
      }
      if (this.validateCalendarDate(e2), void 0 === i2)
        if (s2.endsWith("L")) {
          if ("M05L" !== s2)
            throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${s2}`);
          if (i2 = 6, !this.inLeapYear({ year: r2 })) {
            if ("reject" === o2)
              throw new RangeError(`Hebrew monthCode M05L is invalid in year ${r2} which is not a leap year`);
            i2 = 5, l2 = 30, s2 = "M05";
          }
        } else {
          i2 = monthCodeNumberPart(s2), this.inLeapYear({ year: r2 }) && i2 > 6 && i2++;
          const e3 = this.monthsInYear({ year: r2 });
          if (i2 < 1 || i2 > e3)
            throw new RangeError(`Invalid monthCode: ${s2}`);
        }
      else if ("reject" === o2 ? (RejectToRange(i2, 1, this.monthsInYear({ year: r2 })), RejectToRange(l2, 1, this.maximumMonthLength({ year: r2, month: i2 }))) : (i2 = ConstrainToRange(i2, 1, this.monthsInYear({ year: r2 })), l2 = ConstrainToRange(l2, 1, this.maximumMonthLength({ year: r2, month: i2 }))), void 0 === s2)
        s2 = this.getMonthCode(r2, i2);
      else {
        if (this.getMonthCode(r2, i2) !== s2)
          throw new RangeError(`monthCode ${s2} doesn't correspond to month ${i2} in Hebrew year ${r2}`);
      }
      return { ...e2, day: l2, month: i2, monthCode: s2, year: r2, eraYear: a2 };
    }
  };
  var IslamicBaseHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.calendarType = "lunar", this.DAYS_PER_ISLAMIC_YEAR = 354 + 11 / 30, this.DAYS_PER_ISO_YEAR = 365.2425, this.constantEra = "ah";
    }
    inLeapYear(e2, t2) {
      return 30 === this.daysInMonth({ year: e2.year, month: 12, day: 1 }, t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    estimateIsoDate(e2) {
      const { year: t2 } = this.adjustCalendarDate(e2);
      return { year: Y(t2 * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622, month: 1, day: 1 };
    }
  };
  var IslamicHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic";
    }
  };
  var IslamicUmalquraHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-umalqura";
    }
  };
  var IslamicTblaHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-tbla";
    }
  };
  var IslamicCivilHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-civil";
    }
  };
  var IslamicRgsaHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-rgsa";
    }
  };
  var IslamicCcHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamicc";
    }
  };
  var PersianHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "persian", this.calendarType = "solar", this.constantEra = "ap";
    }
    inLeapYear(e2, t2) {
      return IslamicHelper.prototype.inLeapYear.call(this, e2, t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 12 === t2 ? 29 : t2 <= 6 ? 31 : 30;
    }
    maximumMonthLength(e2) {
      const { month: t2 } = e2;
      return 12 === t2 ? 30 : t2 <= 6 ? 31 : 30;
    }
    estimateIsoDate(e2) {
      const { year: t2 } = this.adjustCalendarDate(e2);
      return { year: t2 + 621, month: 1, day: 1 };
    }
  };
  var IndianHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "indian", this.calendarType = "solar", this.constantEra = "saka", this.months = { 1: { length: 30, month: 3, day: 22, leap: { length: 31, month: 3, day: 21 } }, 2: { length: 31, month: 4, day: 21 }, 3: { length: 31, month: 5, day: 22 }, 4: { length: 31, month: 6, day: 22 }, 5: { length: 31, month: 7, day: 23 }, 6: { length: 31, month: 8, day: 23 }, 7: { length: 30, month: 9, day: 23 }, 8: { length: 30, month: 10, day: 23 }, 9: { length: 30, month: 11, day: 22 }, 10: { length: 30, month: 12, day: 22 }, 11: { length: 30, month: 1, nextYear: true, day: 21 }, 12: { length: 30, month: 2, nextYear: true, day: 20 } }, this.vulnerableToBceBug = "10/11/-79 Saka" !== new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian", { timeZone: "UTC" });
    }
    inLeapYear(e2) {
      return isGregorianLeapYear(e2.year + 78);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      return this.getMonthInfo(e2).length;
    }
    maximumMonthLength(e2) {
      return this.getMonthInfo(e2).length;
    }
    getMonthInfo(e2) {
      const { month: t2 } = e2;
      let o2 = this.months[t2];
      if (void 0 === o2)
        throw new RangeError(`Invalid month: ${t2}`);
      return this.inLeapYear(e2) && o2.leap && (o2 = o2.leap), o2;
    }
    estimateIsoDate(e2) {
      const t2 = this.adjustCalendarDate(e2), o2 = this.getMonthInfo(t2);
      return AddISODate(t2.year + 78 + (o2.nextYear ? 1 : 0), o2.month, o2.day, 0, 0, 0, t2.day - 1, "constrain");
    }
    checkIcuBugs(e2) {
      if (this.vulnerableToBceBug && e2.year < 1)
        throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
    }
  };
  function isGregorianLeapYear(e2) {
    return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
  }
  var GregorianBaseHelper = class extends HelperBase {
    constructor(e2, t2) {
      super(), this.calendarType = "solar", this.v8IsVulnerableToJulianBug = new Date("+001001-01-01T00:00Z").toLocaleDateString("en-US-u-ca-japanese", { timeZone: "UTC" }).startsWith("12"), this.calendarIsVulnerableToJulianBug = false, this.id = e2;
      const { eras: o2, anchorEra: n2 } = function adjustEras(e3) {
        let t3, o3 = e3;
        if (0 === o3.length)
          throw new RangeError("Invalid era data: eras are required");
        if (1 === o3.length && o3[0].reverseOf)
          throw new RangeError("Invalid era data: anchor era cannot count years backwards");
        if (1 === o3.length && !o3[0].name)
          throw new RangeError("Invalid era data: at least one named era is required");
        if (o3.filter((e4) => null != e4.reverseOf).length > 1)
          throw new RangeError("Invalid era data: only one era can count years backwards");
        o3.forEach((e4) => {
          if (e4.isAnchor || !e4.anchorEpoch && !e4.reverseOf) {
            if (t3)
              throw new RangeError("Invalid era data: cannot have multiple anchor eras");
            t3 = e4, e4.anchorEpoch = { year: e4.hasYearZero ? 0 : 1 };
          } else if (!e4.name)
            throw new RangeError("If era name is blank, it must be the anchor era");
        }), o3 = o3.filter((e4) => e4.name), o3.forEach((e4) => {
          const { reverseOf: t4 } = e4;
          if (t4) {
            const n4 = o3.find((e5) => e5.name === t4);
            if (void 0 === n4)
              throw new RangeError(`Invalid era data: unmatched reverseOf era: ${t4}`);
            e4.reverseOf = n4, e4.anchorEpoch = n4.anchorEpoch, e4.isoEpoch = n4.isoEpoch;
          }
          void 0 === e4.anchorEpoch.month && (e4.anchorEpoch.month = 1), void 0 === e4.anchorEpoch.day && (e4.anchorEpoch.day = 1);
        }), Z.call(o3, (e4, t4) => {
          if (e4.reverseOf)
            return 1;
          if (t4.reverseOf)
            return -1;
          if (!e4.isoEpoch || !t4.isoEpoch)
            throw new RangeError("Invalid era data: missing ISO epoch");
          return t4.isoEpoch.year - e4.isoEpoch.year;
        });
        const n3 = o3[o3.length - 1].reverseOf;
        if (n3 && n3 !== o3[o3.length - 2])
          throw new RangeError("Invalid era data: invalid reverse-sign era");
        return o3.forEach((e4, t4) => {
          e4.genericName = "era" + (o3.length - 1 - t4);
        }), { eras: o3, anchorEra: t3 || o3[0] };
      }(t2);
      this.anchorEra = n2, this.eras = o2;
    }
    inLeapYear(e2) {
      const { year: t2 } = this.estimateIsoDate({ month: 1, day: 1, year: e2.year });
      return isGregorianLeapYear(t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 2 === t2 ? this.inLeapYear(e2) ? 29 : 28 : [4, 6, 9, 11].indexOf(t2) >= 0 ? 30 : 31;
    }
    maximumMonthLength(e2) {
      return this.minimumMonthLength(e2);
    }
    completeEraYear(e2) {
      const checkField = (t3, o3) => {
        const n3 = e2[t3];
        if (null != n3 && n3 != o3)
          throw new RangeError(`Input ${t3} ${n3} doesn't match calculated value ${o3}`);
      }, eraFromYear = (t3) => {
        let o3;
        const n3 = { ...e2, year: t3 }, r2 = this.eras.find((e3, r3) => {
          if (r3 === this.eras.length - 1) {
            if (e3.reverseOf) {
              if (t3 > 0)
                throw new RangeError(`Signed year ${t3} is invalid for era ${e3.name}`);
              return o3 = e3.anchorEpoch.year - t3, true;
            }
            return o3 = t3 - e3.anchorEpoch.year + (e3.hasYearZero ? 0 : 1), true;
          }
          return this.compareCalendarDates(n3, e3.anchorEpoch) >= 0 && (o3 = t3 - e3.anchorEpoch.year + (e3.hasYearZero ? 0 : 1), true);
        });
        if (!r2)
          throw new RangeError(`Year ${t3} was not matched by any era`);
        return { eraYear: o3, era: r2.name };
      };
      let { year: t2, eraYear: o2, era: n2 } = e2;
      if (null != t2)
        ({ eraYear: o2, era: n2 } = eraFromYear(t2)), checkField("era", n2), checkField("eraYear", o2);
      else {
        if (null == o2)
          throw new RangeError("Either `year` or `eraYear` and `era` are required");
        {
          const e3 = void 0 === n2 ? void 0 : this.eras.find((e4) => e4.name === n2 || e4.genericName === n2);
          if (!e3)
            throw new RangeError(`Era ${n2} (ISO year ${o2}) was not matched by any era`);
          if (o2 < 1 && e3.reverseOf)
            throw new RangeError(`Years in ${n2} era must be positive, not ${t2}`);
          t2 = e3.reverseOf ? e3.anchorEpoch.year - o2 : o2 + e3.anchorEpoch.year - (e3.hasYearZero ? 0 : 1), checkField("year", t2), { eraYear: o2, era: n2 } = eraFromYear(t2);
        }
      }
      return { ...e2, year: t2, eraYear: o2, era: n2 };
    }
    adjustCalendarDate(e2, t2, o2 = "constrain") {
      let n2 = e2;
      const { month: r2, monthCode: a2 } = n2;
      return void 0 === r2 && (n2 = { ...n2, month: monthCodeNumberPart(a2) }), this.validateCalendarDate(n2), n2 = this.completeEraYear(n2), super.adjustCalendarDate(n2, t2, o2);
    }
    estimateIsoDate(e2) {
      const t2 = this.adjustCalendarDate(e2), { year: o2, month: n2, day: r2 } = t2, { anchorEra: a2 } = this;
      return RegulateISODate(o2 + a2.isoEpoch.year - (a2.hasYearZero ? 0 : 1), n2, r2, "constrain");
    }
    checkIcuBugs(e2) {
      if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
        if (CompareISODate(e2.year, e2.month, e2.day, 1582, 10, 15) < 0)
          throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 1582-10-15 (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)`);
      }
    }
  };
  var OrthodoxBaseHelper = class extends GregorianBaseHelper {
    constructor(e2, t2) {
      super(e2, t2);
    }
    inLeapYear(e2) {
      const { year: t2 } = e2;
      return (t2 + 1) % 4 == 0;
    }
    monthsInYear() {
      return 13;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 13 === t2 ? this.inLeapYear(e2) ? 6 : 5 : 30;
    }
    maximumMonthLength(e2) {
      return this.minimumMonthLength(e2);
    }
  };
  var EthioaaHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("ethioaa", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }]);
    }
  };
  var CopticHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("coptic", [{ name: "era1", isoEpoch: { year: 284, month: 8, day: 29 } }, { name: "era0", reverseOf: "era1" }]);
    }
  };
  var EthiopicHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("ethiopic", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }, { name: "era1", isoEpoch: { year: 8, month: 8, day: 27 }, anchorEpoch: { year: 5501 } }]);
    }
  };
  var RocHelper = class extends GregorianBaseHelper {
    constructor() {
      super("roc", [{ name: "minguo", isoEpoch: { year: 1912, month: 1, day: 1 } }, { name: "before-roc", reverseOf: "minguo" }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var BuddhistHelper = class extends GregorianBaseHelper {
    constructor() {
      super("buddhist", [{ name: "be", hasYearZero: true, isoEpoch: { year: -543, month: 1, day: 1 } }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var GregoryHelper = class extends GregorianBaseHelper {
    constructor() {
      super("gregory", [{ name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]);
    }
    reviseIntlEra(e2) {
      let { era: t2, eraYear: o2 } = e2;
      return "bc" !== t2 && "b" !== t2 || (t2 = "bce"), "ad" !== t2 && "a" !== t2 || (t2 = "ce"), { era: t2, eraYear: o2 };
    }
  };
  var JapaneseHelper = class extends GregorianBaseHelper {
    constructor() {
      super("japanese", [{ name: "reiwa", isoEpoch: { year: 2019, month: 5, day: 1 }, anchorEpoch: { year: 2019, month: 5, day: 1 } }, { name: "heisei", isoEpoch: { year: 1989, month: 1, day: 8 }, anchorEpoch: { year: 1989, month: 1, day: 8 } }, { name: "showa", isoEpoch: { year: 1926, month: 12, day: 25 }, anchorEpoch: { year: 1926, month: 12, day: 25 } }, { name: "taisho", isoEpoch: { year: 1912, month: 7, day: 30 }, anchorEpoch: { year: 1912, month: 7, day: 30 } }, { name: "meiji", isoEpoch: { year: 1868, month: 9, day: 8 }, anchorEpoch: { year: 1868, month: 9, day: 8 } }, { name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]), this.calendarIsVulnerableToJulianBug = true, this.eraLength = "long";
    }
    reviseIntlEra(e2, t2) {
      const { era: o2, eraYear: n2 } = e2, { year: r2 } = t2;
      return this.eras.find((e3) => e3.name === o2) ? { era: o2, eraYear: n2 } : r2 < 1 ? { era: "bce", eraYear: 1 - r2 } : { era: "ce", eraYear: r2 };
    }
  };
  var ChineseBaseHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.calendarType = "lunisolar", this.hasEra = false;
    }
    inLeapYear(e2, t2) {
      const o2 = this.getMonthList(e2.year, t2);
      return 13 === P(o2).length;
    }
    monthsInYear(e2, t2) {
      return this.inLeapYear(e2, t2) ? 13 : 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    getMonthList(e2, t2) {
      if (void 0 === e2)
        throw new TypeError("Missing year");
      const o2 = JSON.stringify({ func: "getMonthList", calendarYear: e2, id: this.id }), n2 = t2.get(o2);
      if (n2)
        return n2;
      const r2 = this.getFormatter(), getCalendarDate = (e3, t3) => {
        const o3 = toUtcIsoDateString({ isoYear: e3, isoMonth: 2, isoDay: 1 }), n3 = new Date(o3);
        n3.setUTCDate(t3 + 1);
        const a3 = r2.formatToParts(n3), i3 = a3.find((e4) => "month" === e4.type).value, s3 = +a3.find((e4) => "day" === e4.type).value;
        let l3 = a3.find((e4) => "relatedYear" === e4.type);
        if (void 0 === l3)
          throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
        return l3 = +l3.value, { calendarMonthString: i3, calendarDay: s3, calendarYearToVerify: l3 };
      };
      let a2 = 17, { calendarMonthString: i2, calendarDay: s2, calendarYearToVerify: l2 } = getCalendarDate(e2, a2);
      "1" !== i2 && (a2 += 29, { calendarMonthString: i2, calendarDay: s2 } = getCalendarDate(e2, a2)), a2 -= s2 - 5;
      const d2 = {};
      let m2, c2, h2 = 1, T2 = false;
      do {
        ({ calendarMonthString: i2, calendarDay: s2, calendarYearToVerify: l2 } = getCalendarDate(e2, a2)), m2 && (d2[c2].daysInMonth = m2 + 30 - s2), l2 !== e2 ? T2 = true : (d2[i2] = { monthIndex: h2++ }, a2 += 30), m2 = s2, c2 = i2;
      } while (!T2);
      return d2[c2].daysInMonth = m2 + 30 - s2, t2.set(o2, d2), d2;
    }
    estimateIsoDate(e2) {
      const { year: t2, month: o2 } = e2;
      return { year: t2, month: o2 >= 12 ? 12 : o2 + 1, day: 1 };
    }
    adjustCalendarDate(e2, t2, o2 = "constrain", n2 = false) {
      let { year: r2, month: a2, monthExtra: i2, day: s2, monthCode: l2, eraYear: d2 } = e2;
      if (n2) {
        if (r2 = d2, i2 && "bis" !== i2)
          throw new RangeError(`Unexpected leap month suffix: ${i2}`);
        const e3 = buildMonthCode(a2, void 0 !== i2), o3 = `${a2}${i2 || ""}`, n3 = this.getMonthList(r2, t2)[o3];
        if (void 0 === n3)
          throw new RangeError(`Unmatched month ${o3} in Chinese year ${r2}`);
        return a2 = n3.monthIndex, { year: r2, month: a2, day: s2, era: void 0, eraYear: d2, monthCode: e3 };
      }
      if (this.validateCalendarDate(e2), void 0 === r2 && (r2 = d2), void 0 === d2 && (d2 = r2), void 0 === a2) {
        const e3 = this.getMonthList(r2, t2);
        let n3 = l2.replace("L", "bis").slice(1);
        "0" === n3[0] && (n3 = n3.slice(1));
        let i3 = e3[n3];
        if (a2 = i3 && i3.monthIndex, void 0 === a2 && l2.endsWith("L") && !b.call(["M01L", "M12L", "M13L"], l2) && "constrain" === o2) {
          let t3 = l2.slice(1, -1);
          "0" === t3[0] && (t3 = t3.slice(1)), i3 = e3[t3], i3 && ({ daysInMonth: s2, monthIndex: a2 } = i3, l2 = buildMonthCode(t3));
        }
        if (void 0 === a2)
          throw new RangeError(`Unmatched month ${l2} in Chinese year ${r2}`);
      } else if (void 0 === l2) {
        const e3 = this.getMonthList(r2, t2), n3 = P(e3), i3 = n3.length;
        "reject" === o2 ? (RejectToRange(a2, 1, i3), RejectToRange(s2, 1, this.maximumMonthLength())) : (a2 = ConstrainToRange(a2, 1, i3), s2 = ConstrainToRange(s2, 1, this.maximumMonthLength()));
        const d3 = n3.find(([, e4]) => e4.monthIndex === a2);
        if (void 0 === d3)
          throw new RangeError(`Invalid month ${a2} in Chinese year ${r2}`);
        l2 = buildMonthCode(d3[0].replace("bis", ""), -1 !== d3[0].indexOf("bis"));
      } else {
        const e3 = this.getMonthList(r2, t2);
        let o3 = l2.replace("L", "bis").slice(1);
        "0" === o3[0] && (o3 = o3.slice(1));
        const n3 = e3[o3];
        if (!n3)
          throw new RangeError(`Unmatched monthCode ${l2} in Chinese year ${r2}`);
        if (a2 !== n3.monthIndex)
          throw new RangeError(`monthCode ${l2} doesn't correspond to month ${a2} in Chinese year ${r2}`);
      }
      return { ...e2, year: r2, eraYear: d2, month: a2, monthCode: l2, day: s2 };
    }
  };
  var ChineseHelper = class extends ChineseBaseHelper {
    constructor() {
      super(...arguments), this.id = "chinese";
    }
  };
  var DangiHelper = class extends ChineseBaseHelper {
    constructor() {
      super(...arguments), this.id = "dangi";
    }
  };
  var N = { helper: void 0, dateFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2), r2 = new OneObjectCache(), a2 = PrepareTemporalFields(e2, [["day"], ["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]), { year: i2, month: s2, day: l2 } = this.helper.calendarToIsoDate(a2, n2, r2), d2 = CreateTemporalDate(i2, s2, l2, o2);
    return r2.setObject(d2), d2;
  }, yearMonthFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2), r2 = new OneObjectCache(), a2 = PrepareTemporalFields(e2, [["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]), { year: i2, month: s2, day: l2 } = this.helper.calendarToIsoDate({ ...a2, day: 1 }, n2, r2), d2 = CreateTemporalYearMonth(i2, s2, o2, l2);
    return r2.setObject(d2), d2;
  }, monthDayFromFields(e2, t2, o2) {
    const n2 = ToTemporalOverflow(t2), r2 = new OneObjectCache(), a2 = PrepareTemporalFields(e2, [["day"], ["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]), { year: i2, month: s2, day: l2 } = this.helper.monthDayFromFields(a2, n2, r2), d2 = CreateTemporalMonthDay(s2, l2, o2, i2);
    return r2.setObject(d2), d2;
  }, fields(e2) {
    let t2 = e2;
    return b.call(t2, "year") && (t2 = [...t2, "era", "eraYear"]), t2;
  }, mergeFields(e2, t2) {
    const o2 = { ...e2 }, n2 = { ...t2 }, { month: r2, monthCode: a2, year: i2, era: s2, eraYear: l2, ...d2 } = o2, { month: m2, monthCode: c2, year: h2, era: T2, eraYear: u2 } = n2;
    return void 0 === m2 && void 0 === c2 && (d2.month = r2, d2.monthCode = a2), void 0 === h2 && void 0 === T2 && void 0 === u2 && (d2.year = i2), { ...d2, ...n2 };
  }, dateAdd(e2, t2, o2, n2, r2, a2, i2) {
    const s2 = OneObjectCache.getCacheForObject(e2), l2 = this.helper.temporalToCalendarDate(e2, s2), d2 = this.helper.addCalendar(l2, { years: t2, months: o2, weeks: n2, days: r2 }, a2, s2), m2 = this.helper.calendarToIsoDate(d2, "constrain", s2), { year: c2, month: h2, day: T2 } = m2, u2 = CreateTemporalDate(c2, h2, T2, i2);
    return new OneObjectCache(s2).setObject(u2), u2;
  }, dateUntil(e2, t2, o2) {
    const n2 = OneObjectCache.getCacheForObject(e2), r2 = OneObjectCache.getCacheForObject(t2), a2 = this.helper.temporalToCalendarDate(e2, n2), i2 = this.helper.temporalToCalendarDate(t2, r2);
    return this.helper.untilCalendar(a2, i2, o2, n2);
  }, year(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).year;
  }, month(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).month;
  }, day(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).day;
  }, era(e2) {
    if (!this.helper.hasEra)
      return;
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).era;
  }, eraYear(e2) {
    if (!this.helper.hasEra)
      return;
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).eraYear;
  }, monthCode(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2);
    return this.helper.temporalToCalendarDate(e2, t2).monthCode;
  }, dayOfWeek: (e2) => B.iso8601.dayOfWeek(e2), dayOfYear(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2), o2 = this.helper.isoToCalendarDate(e2, t2), n2 = this.helper.startOfCalendarYear(o2);
    return this.helper.calendarDaysUntil(n2, o2, t2) + 1;
  }, weekOfYear: (e2) => B.iso8601.weekOfYear(e2), daysInWeek: (e2) => B.iso8601.daysInWeek(e2), daysInMonth(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2), o2 = this.helper.temporalToCalendarDate(e2, t2), n2 = this.helper.maximumMonthLength(o2);
    if (n2 === this.helper.minimumMonthLength(o2))
      return n2;
    const r2 = this.helper.startOfCalendarMonth(o2), a2 = this.helper.addMonthsCalendar(r2, 1, "constrain", t2);
    return this.helper.calendarDaysUntil(r2, a2, t2);
  }, daysInYear(e2) {
    let t2 = e2;
    HasSlot(t2, r) || (t2 = ToTemporalDate(t2));
    const o2 = OneObjectCache.getCacheForObject(t2), n2 = this.helper.temporalToCalendarDate(t2, o2), a2 = this.helper.startOfCalendarYear(n2), i2 = this.helper.addCalendar(a2, { years: 1 }, "constrain", o2);
    return this.helper.calendarDaysUntil(a2, i2, o2);
  }, monthsInYear(e2) {
    const t2 = OneObjectCache.getCacheForObject(e2), o2 = this.helper.temporalToCalendarDate(e2, t2);
    return this.helper.monthsInYear(o2, t2);
  }, inLeapYear(e2) {
    let t2 = e2;
    HasSlot(t2, r) || (t2 = ToTemporalDate(t2));
    const o2 = OneObjectCache.getCacheForObject(t2), n2 = this.helper.temporalToCalendarDate(t2, o2);
    return this.helper.inLeapYear(n2, o2);
  } };
  for (const e2 of [HebrewHelper, PersianHelper, EthiopicHelper, EthioaaHelper, CopticHelper, ChineseHelper, DangiHelper, RocHelper, IndianHelper, BuddhistHelper, GregoryHelper, JapaneseHelper, IslamicHelper, IslamicUmalquraHelper, IslamicTblaHelper, IslamicCivilHelper, IslamicRgsaHelper, IslamicCcHelper]) {
    const t2 = new e2();
    B[t2.id] = { ...N, helper: t2 };
  }
  var $ = Object.keys(B);
  function IsBuiltinCalendar(e2) {
    return b.call($, e2);
  }
  var k = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
  var L = new RegExp(`(?:(?:${k.source})(?:\\/(?:${k.source}))*|Etc/GMT[-+]\\d{1,2}|${/(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/.source})`);
  var U = /[A-Za-z0-9]{3,8}/;
  var A = new RegExp(`(?:${U.source}(?:-${U.source})*)`);
  var x = /(?:[+\u2212-]\d{6}|\d{4})/;
  var H = /(?:0[1-9]|1[0-2])/;
  var q = /(?:0[1-9]|[12]\d|3[01])/;
  var W = new RegExp(`(${x.source})(?:-(${H.source})-(${q.source})|(${H.source})(${q.source}))`);
  var z = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
  var J = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
  var V = new RegExp(`(?:([zZ])|(?:${J.source})?)(?:\\[(${L.source})\\])?`);
  var _ = new RegExp(`\\[u-ca=(${A.source})\\]`);
  var X = new RegExp(`^${W.source}(?:(?:T|\\s+)${z.source})?${V.source}(?:${_.source})?$`, "i");
  var K = new RegExp(`^T?${z.source}(?:${V.source})?(?:${_.source})?$`, "i");
  var Q = new RegExp(`^(${x.source})-?(${H.source})$`);
  var ee = new RegExp(`^(?:--)?(${H.source})-?(${q.source})$`);
  var te = /(\d+)(?:[.,](\d{1,9}))?/;
  var oe = new RegExp(`(?:${te.source}H)?(?:${te.source}M)?(?:${te.source}S)?`);
  var ne = new RegExp(`^([+\u2212-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${oe.source})?$`, "i");
  var re = Array.prototype.push;
  var ae = globalThis.Intl.DateTimeFormat;
  var ie = Math.min;
  var se = Math.max;
  var le = Math.abs;
  var de = Math.floor;
  var me = Math.sign;
  var ce = Math.trunc;
  var he = Number.isNaN;
  var Te = Number.isFinite;
  var ue = Number;
  var pe = String;
  var fe = Number.MAX_SAFE_INTEGER;
  var ye = Object.create;
  var Se = Object.is;
  var ge = Reflect.apply;
  var we = import_jsbi.default.BigInt(0);
  var Ie = import_jsbi.default.BigInt(1);
  var Ge = import_jsbi.default.BigInt(60);
  var De = import_jsbi.default.BigInt(1e3);
  var ve = import_jsbi.default.BigInt(1e6);
  var Oe = import_jsbi.default.BigInt(1e9);
  var Ce = import_jsbi.default.BigInt(-1);
  var Ee = import_jsbi.default.multiply(import_jsbi.default.BigInt(86400), Oe);
  var be = import_jsbi.default.multiply(import_jsbi.default.BigInt(-86400), import_jsbi.default.BigInt(1e17));
  var Re = import_jsbi.default.multiply(import_jsbi.default.BigInt(86400), import_jsbi.default.BigInt(1e17));
  var Me = import_jsbi.default.multiply(import_jsbi.default.BigInt(-388152), import_jsbi.default.BigInt(1e13));
  var Ze = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(3660));
  var Fe = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(366));
  var Ye = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(14));
  function IsInteger(e2) {
    if ("number" != typeof e2 || !Te(e2))
      return false;
    const t2 = le(e2);
    return de(t2) === t2;
  }
  function IsObject(e2) {
    return "object" == typeof e2 && null !== e2 || "function" == typeof e2;
  }
  function ToNumber(e2) {
    if ("bigint" == typeof e2)
      throw new TypeError("Cannot convert BigInt to number");
    return ue(e2);
  }
  function ToInteger(e2) {
    const t2 = ToNumber(e2);
    if (he(t2))
      return 0;
    const o2 = ce(t2);
    return 0 === t2 ? 0 : o2;
  }
  function ToString(e2) {
    if ("symbol" == typeof e2)
      throw new TypeError("Cannot convert a Symbol value to a String");
    return pe(e2);
  }
  function ToIntegerThrowOnInfinity(e2) {
    const t2 = ToInteger(e2);
    if (!Te(t2))
      throw new RangeError("infinity is out of range");
    return t2;
  }
  function ToPositiveInteger(e2, t2) {
    const o2 = ToInteger(e2);
    if (!Te(o2))
      throw new RangeError("infinity is out of range");
    if (o2 < 1) {
      if (void 0 !== t2)
        throw new RangeError(`property '${t2}' cannot be a a number less than one`);
      throw new RangeError("Cannot convert a number less than one to a positive integer");
    }
    return o2;
  }
  function ToIntegerWithoutRounding(e2) {
    const t2 = ToNumber(e2);
    if (he(t2))
      return 0;
    if (!Te(t2))
      throw new RangeError("infinity is out of range");
    if (!IsInteger(t2))
      throw new RangeError(`unsupported fractional value ${t2}`);
    return ToInteger(t2);
  }
  function divmod(t2, o2) {
    return { quotient: import_jsbi.default.divide(t2, o2), remainder: import_jsbi.default.remainder(t2, o2) };
  }
  function abs(t2) {
    return import_jsbi.default.lessThan(t2, we) ? import_jsbi.default.multiply(t2, Ce) : t2;
  }
  var Pe = /* @__PURE__ */ new Map([["year", ToIntegerThrowOnInfinity], ["month", ToPositiveInteger], ["monthCode", ToString], ["day", ToPositiveInteger], ["hour", ToIntegerThrowOnInfinity], ["minute", ToIntegerThrowOnInfinity], ["second", ToIntegerThrowOnInfinity], ["millisecond", ToIntegerThrowOnInfinity], ["microsecond", ToIntegerThrowOnInfinity], ["nanosecond", ToIntegerThrowOnInfinity], ["years", ToIntegerWithoutRounding], ["months", ToIntegerWithoutRounding], ["weeks", ToIntegerWithoutRounding], ["days", ToIntegerWithoutRounding], ["hours", ToIntegerWithoutRounding], ["minutes", ToIntegerWithoutRounding], ["seconds", ToIntegerWithoutRounding], ["milliseconds", ToIntegerWithoutRounding], ["microseconds", ToIntegerWithoutRounding], ["nanoseconds", ToIntegerWithoutRounding], ["era", ToString], ["eraYear", ToInteger], ["offset", ToString]]);
  var je = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];
  var Be = [["years", "year"], ["months", "month"], ["weeks", "week"], ["days", "day"], ["hours", "hour"], ["minutes", "minute"], ["seconds", "second"], ["milliseconds", "millisecond"], ["microseconds", "microsecond"], ["nanoseconds", "nanosecond"]];
  var Ne = /* @__PURE__ */ new Map();
  function getIntlDateTimeFormatEnUsForTimeZone(e2) {
    let t2 = Ne.get(e2);
    return void 0 === t2 && (t2 = new ae("en-us", { timeZone: pe(e2), hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), Ne.set(e2, t2)), t2;
  }
  function IsTemporalInstant(e2) {
    return HasSlot(e2, o) && !HasSlot(e2, p, T);
  }
  function IsTemporalTimeZone(e2) {
    return HasSlot(e2, n);
  }
  function IsTemporalCalendar(e2) {
    return HasSlot(e2, C);
  }
  function IsTemporalDuration(e2) {
    return HasSlot(e2, f, y, g, w, I, G, D, v, O);
  }
  function IsTemporalDate(e2) {
    return HasSlot(e2, "slot-date-brand");
  }
  function IsTemporalTime(e2) {
    return HasSlot(e2, s, l, d, m, c, h) && !HasSlot(e2, r, a, i);
  }
  function IsTemporalDateTime(e2) {
    return HasSlot(e2, r, a, i, s, l, d, m, c, h);
  }
  function IsTemporalYearMonth(e2) {
    return HasSlot(e2, "slot-year-month-brand");
  }
  function IsTemporalMonthDay(e2) {
    return HasSlot(e2, "slot-month-day-brand");
  }
  function IsTemporalZonedDateTime(e2) {
    return HasSlot(e2, o, p, T);
  }
  function RejectObjectWithCalendarOrTimeZone(e2) {
    if (HasSlot(e2, T) || HasSlot(e2, p))
      throw new TypeError("with() does not support a calendar or timeZone property");
    if (void 0 !== e2.calendar)
      throw new TypeError("with() does not support a calendar property");
    if (void 0 !== e2.timeZone)
      throw new TypeError("with() does not support a timeZone property");
  }
  function ParseTemporalTimeZone(e2) {
    let { ianaName: t2, offset: o2, z: n2 } = function ParseTemporalTimeZoneString(e3) {
      try {
        let t3 = GetCanonicalTimeZoneIdentifier(e3);
        if (t3)
          return t3 = t3.toString(), TestTimeZoneOffsetString(t3) ? { offset: t3 } : { ianaName: t3 };
      } catch {
      }
      try {
        const t3 = ParseISODateTime(e3);
        if (t3.z || t3.offset || t3.ianaName)
          return t3;
      } catch {
      }
      throw new RangeError(`Invalid time zone: ${e3}`);
    }(e2);
    return t2 || (n2 ? "UTC" : o2);
  }
  function FormatCalendarAnnotation(e2, t2) {
    return "never" === t2 || "auto" === t2 && "iso8601" === e2 ? "" : `[u-ca=${e2}]`;
  }
  function ParseISODateTime(e2) {
    const t2 = X.exec(e2);
    if (!t2)
      throw new RangeError(`invalid ISO 8601 string: ${e2}`);
    let o2 = t2[1];
    if ("\u2212" === o2[0] && (o2 = `-${o2.slice(1)}`), "-000000" === o2)
      throw new RangeError(`invalid ISO 8601 string: ${e2}`);
    const n2 = ToInteger(o2), r2 = ToInteger(t2[2] || t2[4]), a2 = ToInteger(t2[3] || t2[5]), i2 = ToInteger(t2[6]), s2 = void 0 !== t2[6], l2 = ToInteger(t2[7] || t2[10]);
    let d2 = ToInteger(t2[8] || t2[11]);
    60 === d2 && (d2 = 59);
    const m2 = (t2[9] || t2[12]) + "000000000", c2 = ToInteger(m2.slice(0, 3)), h2 = ToInteger(m2.slice(3, 6)), T2 = ToInteger(m2.slice(6, 9));
    let u2, p2 = false;
    if (t2[13])
      u2 = void 0, p2 = true;
    else if (t2[14] && t2[15]) {
      const e3 = "-" === t2[14] || "\u2212" === t2[14] ? "-" : "+", o3 = t2[15] || "00", n3 = t2[16] || "00", r3 = t2[17] || "00";
      let a3 = t2[18] || "0";
      if (u2 = `${e3}${o3}:${n3}`, +a3) {
        for (; a3.endsWith("0"); )
          a3 = a3.slice(0, -1);
        u2 += `:${r3}.${a3}`;
      } else
        +r3 && (u2 += `:${r3}`);
      "-00:00" === u2 && (u2 = "+00:00");
    }
    let f2 = t2[19];
    if (f2)
      try {
        f2 = GetCanonicalTimeZoneIdentifier(f2).toString();
      } catch {
      }
    return { year: n2, month: r2, day: a2, hasTime: s2, hour: i2, minute: l2, second: d2, millisecond: c2, microsecond: h2, nanosecond: T2, ianaName: f2, offset: u2, z: p2, calendar: t2[20] };
  }
  function ParseTemporalYearMonthString(e2) {
    const t2 = Q.exec(e2);
    let o2, n2, r2, a2;
    if (t2) {
      let a3 = t2[1];
      if ("\u2212" === a3[0] && (a3 = `-${a3.slice(1)}`), "-000000" === a3)
        throw new RangeError(`invalid ISO 8601 string: ${e2}`);
      o2 = ToInteger(a3), n2 = ToInteger(t2[2]), r2 = t2[3];
    } else {
      let t3;
      if ({ year: o2, month: n2, calendar: r2, day: a2, z: t3 } = ParseISODateTime(e2), t3)
        throw new RangeError("Z designator not supported for PlainYearMonth");
    }
    return { year: o2, month: n2, calendar: r2, referenceISODay: a2 };
  }
  function ParseTemporalMonthDayString(e2) {
    const t2 = ee.exec(e2);
    let o2, n2, r2, a2;
    if (t2)
      o2 = ToInteger(t2[1]), n2 = ToInteger(t2[2]);
    else {
      let t3;
      if ({ month: o2, day: n2, calendar: r2, year: a2, z: t3 } = ParseISODateTime(e2), t3)
        throw new RangeError("Z designator not supported for PlainMonthDay");
    }
    return { month: o2, day: n2, calendar: r2, referenceISOYear: a2 };
  }
  function ParseTemporalDurationString(e2) {
    const t2 = ne.exec(e2);
    if (!t2)
      throw new RangeError(`invalid duration: ${e2}`);
    if (t2.slice(2).every((e3) => void 0 === e3))
      throw new RangeError(`invalid duration: ${e2}`);
    const o2 = "-" === t2[1] || "\u2212" === t2[1] ? -1 : 1, n2 = ToInteger(t2[2]) * o2, r2 = ToInteger(t2[3]) * o2, a2 = ToInteger(t2[4]) * o2, i2 = ToInteger(t2[5]) * o2, s2 = ToInteger(t2[6]) * o2;
    let l2 = t2[7], d2 = ToInteger(t2[8]) * o2, m2 = t2[9], c2 = ToInteger(t2[10]) * o2;
    const h2 = t2[11] + "000000000";
    let T2 = ToInteger(h2.slice(0, 3)) * o2, u2 = ToInteger(h2.slice(3, 6)) * o2, p2 = ToInteger(h2.slice(6, 9)) * o2;
    return l2 = l2 ? o2 * ToInteger(l2) / 10 ** l2.length : 0, m2 = m2 ? o2 * ToInteger(m2) / 10 ** m2.length : 0, { minutes: d2, seconds: c2, milliseconds: T2, microseconds: u2, nanoseconds: p2 } = function DurationHandleFractions(e3, t3, o3, n3, r3, a3, i3) {
      let s3 = e3, l3 = t3, d3 = o3, m3 = n3, c3 = r3, h3 = a3, T3 = i3;
      if (0 !== s3) {
        [l3, d3, m3, c3, h3, T3].forEach((e5) => {
          if (0 !== e5)
            throw new RangeError("only the smallest unit can be fractional");
        });
        const e4 = 60 * s3;
        l3 = ce(e4), d3 = e4 % 1;
      }
      if (0 !== d3) {
        [m3, c3, h3, T3].forEach((e5) => {
          if (0 !== e5)
            throw new RangeError("only the smallest unit can be fractional");
        });
        const e4 = 60 * d3;
        m3 = ce(e4);
        const t4 = e4 % 1;
        if (0 !== t4) {
          const e5 = 1e3 * t4;
          c3 = ce(e5);
          const o4 = e5 % 1;
          if (0 !== o4) {
            const e6 = 1e3 * o4;
            h3 = ce(e6);
            const t5 = e6 % 1;
            if (0 !== t5) {
              T3 = ce(1e3 * t5);
            }
          }
        }
      }
      return { minutes: l3, seconds: m3, milliseconds: c3, microseconds: h3, nanoseconds: T3 };
    }(l2, d2, m2, c2, T2, u2, p2), { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: d2, seconds: c2, milliseconds: T2, microseconds: u2, nanoseconds: p2 };
  }
  function ParseTemporalInstant(t2) {
    const { year: o2, month: n2, day: r2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2, offset: c2, z: h2 } = function ParseTemporalInstantString(e2) {
      const t3 = ParseISODateTime(e2);
      if (!t3.z && !t3.offset)
        throw new RangeError("Temporal.Instant requires a time zone offset");
      return t3;
    }(t2), T2 = GetEpochFromISOParts(o2, n2, r2, a2, i2, s2, l2, d2, m2);
    if (null === T2)
      throw new RangeError("DateTime outside of supported range");
    const u2 = h2 ? 0 : ParseTimeZoneOffsetString(c2);
    return import_jsbi.default.subtract(T2, import_jsbi.default.BigInt(u2));
  }
  function RegulateISODate(e2, t2, o2, n2) {
    let r2 = e2, a2 = t2, i2 = o2;
    switch (n2) {
      case "reject":
        RejectISODate(r2, a2, i2);
        break;
      case "constrain":
        ({ year: r2, month: a2, day: i2 } = ConstrainISODate(r2, a2, i2));
    }
    return { year: r2, month: a2, day: i2 };
  }
  function RegulateTime(e2, t2, o2, n2, r2, a2, i2) {
    let s2 = e2, l2 = t2, d2 = o2, m2 = n2, c2 = r2, h2 = a2;
    switch (i2) {
      case "reject":
        RejectTime(s2, l2, d2, m2, c2, h2);
        break;
      case "constrain":
        ({ hour: s2, minute: l2, second: d2, millisecond: m2, microsecond: c2, nanosecond: h2 } = function ConstrainTime(e3, t3, o3, n3, r3, a3) {
          const i3 = ConstrainToRange(e3, 0, 23), s3 = ConstrainToRange(t3, 0, 59), l3 = ConstrainToRange(o3, 0, 59), d3 = ConstrainToRange(n3, 0, 999), m3 = ConstrainToRange(r3, 0, 999), c3 = ConstrainToRange(a3, 0, 999);
          return { hour: i3, minute: s3, second: l3, millisecond: d3, microsecond: m3, nanosecond: c3 };
        }(s2, l2, d2, m2, c2, h2));
    }
    return { hour: s2, minute: l2, second: d2, millisecond: m2, microsecond: c2, nanosecond: h2 };
  }
  function ToTemporalDurationRecord(e2) {
    if (IsTemporalDuration(e2))
      return { years: GetSlot(e2, f), months: GetSlot(e2, y), weeks: GetSlot(e2, S), days: GetSlot(e2, g), hours: GetSlot(e2, w), minutes: GetSlot(e2, I), seconds: GetSlot(e2, G), milliseconds: GetSlot(e2, D), microseconds: GetSlot(e2, v), nanoseconds: GetSlot(e2, O) };
    const t2 = ToPartialRecord(e2, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"]);
    if (!t2)
      throw new TypeError("invalid duration-like");
    const { years: o2 = 0, months: n2 = 0, weeks: r2 = 0, days: a2 = 0, hours: i2 = 0, minutes: s2 = 0, seconds: l2 = 0, milliseconds: d2 = 0, microseconds: m2 = 0, nanoseconds: c2 = 0 } = t2;
    return { years: o2, months: n2, weeks: r2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 };
  }
  function ToLimitedTemporalDuration(e2, t2 = []) {
    let o2;
    if (IsObject(e2))
      o2 = ToTemporalDurationRecord(e2);
    else {
      o2 = ParseTemporalDurationString(ToString(e2));
    }
    const { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = o2;
    RejectDuration(n2, r2, a2, i2, s2, l2, d2, m2, c2, h2);
    for (const e3 of t2)
      if (0 !== o2[e3])
        throw new RangeError(`Duration field ${e3} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);
    return o2;
  }
  function ToTemporalOverflow(e2) {
    return GetOption(e2, "overflow", ["constrain", "reject"], "constrain");
  }
  function ToTemporalDisambiguation(e2) {
    return GetOption(e2, "disambiguation", ["compatible", "earlier", "later", "reject"], "compatible");
  }
  function ToTemporalRoundingMode(e2, t2) {
    return GetOption(e2, "roundingMode", ["ceil", "floor", "trunc", "halfExpand"], t2);
  }
  function NegateTemporalRoundingMode(e2) {
    switch (e2) {
      case "ceil":
        return "floor";
      case "floor":
        return "ceil";
      default:
        return e2;
    }
  }
  function ToTemporalOffset(e2, t2) {
    return GetOption(e2, "offset", ["prefer", "use", "ignore", "reject"], t2);
  }
  function ToShowCalendarOption(e2) {
    return GetOption(e2, "calendarName", ["auto", "always", "never"], "auto");
  }
  function ToTemporalRoundingIncrement(e2, t2, o2) {
    let n2 = 1 / 0;
    void 0 !== t2 && (n2 = t2), o2 || void 0 === t2 || (n2 = t2 > 1 ? t2 - 1 : 1);
    const r2 = function GetNumberOption(e3, t3, o3, n3, r3) {
      let a2 = e3[t3];
      if (void 0 === a2)
        return r3;
      const i2 = ToNumber(a2);
      if (he(i2) || i2 < o3 || i2 > n3)
        throw new RangeError(`${t3} must be between ${o3} and ${n3}, not ${i2}`);
      return de(i2);
    }(e2, "roundingIncrement", 1, n2, 1);
    if (void 0 !== t2 && t2 % r2 != 0)
      throw new RangeError(`Rounding increment must divide evenly into ${t2}`);
    return r2;
  }
  function ToTemporalDateTimeRoundingIncrement(e2, t2) {
    return ToTemporalRoundingIncrement(e2, { year: void 0, month: void 0, week: void 0, day: void 0, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[t2], false);
  }
  function ToSecondsStringPrecision(e2) {
    switch (ToSmallestTemporalUnit(e2, void 0, ["year", "month", "week", "day", "hour"])) {
      case "minute":
        return { precision: "minute", unit: "minute", increment: 1 };
      case "second":
        return { precision: 0, unit: "second", increment: 1 };
      case "millisecond":
        return { precision: 3, unit: "millisecond", increment: 1 };
      case "microsecond":
        return { precision: 6, unit: "microsecond", increment: 1 };
      case "nanosecond":
        return { precision: 9, unit: "nanosecond", increment: 1 };
    }
    let t2 = e2.fractionalSecondDigits;
    if (void 0 === t2 && (t2 = "auto"), "number" != typeof t2) {
      const e3 = ToString(t2);
      if ("auto" === e3)
        return { precision: "auto", unit: "nanosecond", increment: 1 };
      throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${e3}`);
    }
    if (he(t2) || t2 < 0 || t2 > 9)
      throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t2}`);
    const o2 = de(t2);
    switch (o2) {
      case 0:
        return { precision: o2, unit: "second", increment: 1 };
      case 1:
      case 2:
      case 3:
        return { precision: o2, unit: "millisecond", increment: 10 ** (3 - o2) };
      case 4:
      case 5:
      case 6:
        return { precision: o2, unit: "microsecond", increment: 10 ** (6 - o2) };
      case 7:
      case 8:
      case 9:
        return { precision: o2, unit: "nanosecond", increment: 10 ** (9 - o2) };
      default:
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t2}`);
    }
  }
  function ToLargestTemporalUnit(e2, t2, o2 = [], n2) {
    const r2 = new Map(Be.filter(([, e3]) => !o2.includes(e3))), a2 = new Set(je);
    for (const e3 of o2)
      a2.delete(e3);
    const i2 = GetOption(e2, "largestUnit", ["auto", ...a2, ...r2.keys()], t2);
    return "auto" === i2 && void 0 !== n2 ? n2 : r2.has(i2) ? r2.get(i2) : i2;
  }
  function ToSmallestTemporalUnit(e2, t2, o2 = []) {
    const n2 = new Map(Be.filter(([, e3]) => !o2.includes(e3))), r2 = new Set(je);
    for (const e3 of o2)
      r2.delete(e3);
    const a2 = GetOption(e2, "smallestUnit", [...r2, ...n2.keys()], t2);
    return n2.has(a2) ? n2.get(a2) : a2;
  }
  function ToRelativeTemporalObject(e2) {
    const t2 = e2.relativeTo;
    if (void 0 === t2)
      return t2;
    let o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, T2, u2 = "option", p2 = false;
    if (IsObject(t2)) {
      if (IsTemporalZonedDateTime(t2) || IsTemporalDate(t2))
        return t2;
      if (IsTemporalDateTime(t2))
        return TemporalDateTimeToDate(t2);
      c2 = GetTemporalCalendarWithISODefault(t2);
      const e3 = ToTemporalDateTimeFields(t2, CalendarFields(c2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"])), p3 = ye(null);
      p3.overflow = "constrain", { year: o2, month: n2, day: r2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = InterpretTemporalDateTimeFields(c2, e3, p3), T2 = t2.offset, void 0 === T2 && (u2 = "wall"), h2 = t2.timeZone;
    } else {
      let e3, f2;
      ({ year: o2, month: n2, day: r2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2, calendar: c2, ianaName: e3, offset: T2, z: f2 } = ParseISODateTime(ToString(t2))), e3 && (h2 = e3), f2 ? u2 = "exact" : T2 || (u2 = "wall"), c2 || (c2 = GetISO8601Calendar()), c2 = ToTemporalCalendar(c2), p2 = true;
    }
    if (h2) {
      h2 = ToTemporalTimeZone(h2);
      let e3 = 0;
      "option" === u2 && (e3 = ParseTimeZoneOffsetString(ToString(T2)));
      return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(o2, n2, r2, a2, i2, s2, l2, d2, m2, u2, e3, h2, "compatible", "reject", p2), h2, c2);
    }
    return CreateTemporalDate(o2, n2, r2, c2);
  }
  function ValidateTemporalUnitRange(e2, t2) {
    if (je.indexOf(e2) > je.indexOf(t2))
      throw new RangeError(`largestUnit ${e2} cannot be smaller than smallestUnit ${t2}`);
  }
  function DefaultTemporalLargestUnit(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2) {
    const m2 = new Map(Be);
    for (const [c2, h2] of [["years", e2], ["months", t2], ["weeks", o2], ["days", n2], ["hours", r2], ["minutes", a2], ["seconds", i2], ["milliseconds", s2], ["microseconds", l2], ["nanoseconds", d2]])
      if (0 !== h2)
        return m2.get(c2);
    return "nanosecond";
  }
  function LargerOfTwoTemporalUnits(e2, t2) {
    return je.indexOf(e2) > je.indexOf(t2) ? t2 : e2;
  }
  function ToPartialRecord(e2, t2) {
    const o2 = e2, n2 = t2;
    let r2 = false, a2 = {};
    for (const e3 of n2) {
      const t3 = o2[e3];
      void 0 !== t3 && (r2 = true, Pe.has(e3) ? a2[e3] = Pe.get(e3)(t3) : a2[e3] = t3);
    }
    return !!r2 && a2;
  }
  function PrepareTemporalFields(e2, t2) {
    const o2 = e2, n2 = t2, r2 = {};
    let a2 = false;
    for (const e3 of n2) {
      const [t3, n3] = e3;
      let i2 = o2[t3];
      if (void 0 === i2) {
        if (1 === e3.length)
          throw new TypeError(`required property '${t3}' missing or undefined`);
        i2 = n3;
      } else
        a2 = true, Pe.has(t3) && (i2 = Pe.get(t3)(i2));
      r2[t3] = i2;
    }
    if (!a2)
      throw new TypeError("no supported properties found");
    if (void 0 === r2.era != (void 0 === r2.eraYear))
      throw new RangeError("properties 'era' and 'eraYear' must be provided together");
    return r2;
  }
  function ToTemporalDateFields(e2, t2) {
    const o2 = [["day", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]];
    return t2.forEach((e3) => {
      o2.some(([t3]) => t3 === e3) || o2.push([e3, void 0]);
    }), PrepareTemporalFields(e2, o2);
  }
  function ToTemporalDateTimeFields(e2, t2) {
    const o2 = [["day", void 0], ["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["month", void 0], ["monthCode", void 0], ["nanosecond", 0], ["second", 0], ["year", void 0]];
    return t2.forEach((e3) => {
      o2.some(([t3]) => t3 === e3) || o2.push([e3, void 0]);
    }), PrepareTemporalFields(e2, o2);
  }
  function ToTemporalMonthDayFields(e2, t2) {
    const o2 = [["day", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]];
    return t2.forEach((e3) => {
      o2.some(([t3]) => t3 === e3) || o2.push([e3, void 0]);
    }), PrepareTemporalFields(e2, o2);
  }
  function ToTemporalTimeRecord(e2) {
    return PrepareTemporalFields(e2, [["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["nanosecond", 0], ["second", 0]]);
  }
  function ToTemporalYearMonthFields(e2, t2) {
    const o2 = [["month", void 0], ["monthCode", void 0], ["year", void 0]];
    return t2.forEach((e3) => {
      o2.some(([t3]) => t3 === e3) || o2.push([e3, void 0]);
    }), PrepareTemporalFields(e2, o2);
  }
  function ToTemporalDate(e2, t2 = ye(null)) {
    let o2 = e2;
    if (IsObject(o2)) {
      if (IsTemporalDate(o2))
        return o2;
      if (IsTemporalZonedDateTime(o2) && (o2 = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(o2, p), GetSlot(o2, u), GetSlot(o2, T))), IsTemporalDateTime(o2))
        return CreateTemporalDate(GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(o2, T));
      const e3 = GetTemporalCalendarWithISODefault(o2);
      return DateFromFields(e3, ToTemporalDateFields(o2, CalendarFields(e3, ["day", "month", "monthCode", "year"])), t2);
    }
    ToTemporalOverflow(t2);
    const { year: n2, month: s2, day: l2, calendar: d2, z: m2 } = function ParseTemporalDateString(e3) {
      return ParseISODateTime(e3);
    }(ToString(o2));
    if (m2)
      throw new RangeError("Z designator not supported for PlainDate");
    return new (GetIntrinsic("%Temporal.PlainDate%"))(n2, s2, l2, d2);
  }
  function InterpretTemporalDateTimeFields(e2, t2, o2) {
    let { hour: n2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 } = ToTemporalTimeRecord(t2);
    const h2 = ToTemporalOverflow(o2), T2 = DateFromFields(e2, t2, o2), u2 = GetSlot(T2, r), p2 = GetSlot(T2, a), f2 = GetSlot(T2, i);
    return { hour: n2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 } = RegulateTime(n2, s2, l2, d2, m2, c2, h2), { year: u2, month: p2, day: f2, hour: n2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 };
  }
  function ToTemporalDateTime(e2, t2 = ye(null)) {
    let o2, n2, s2, l2, d2, m2, c2, h2, f2, y2;
    if (IsObject(e2)) {
      if (IsTemporalDateTime(e2))
        return e2;
      if (IsTemporalZonedDateTime(e2))
        return BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(e2, p), GetSlot(e2, u), GetSlot(e2, T));
      if (IsTemporalDate(e2))
        return CreateTemporalDateTime(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), 0, 0, 0, 0, 0, 0, GetSlot(e2, T));
      y2 = GetTemporalCalendarWithISODefault(e2);
      const S2 = ToTemporalDateTimeFields(e2, CalendarFields(y2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]));
      ({ year: o2, month: n2, day: s2, hour: l2, minute: d2, second: m2, millisecond: c2, microsecond: h2, nanosecond: f2 } = InterpretTemporalDateTimeFields(y2, S2, t2));
    } else {
      let r2;
      if (ToTemporalOverflow(t2), { year: o2, month: n2, day: s2, hour: l2, minute: d2, second: m2, millisecond: c2, microsecond: h2, nanosecond: f2, calendar: y2, z: r2 } = function ParseTemporalDateTimeString(e3) {
        return ParseISODateTime(e3);
      }(ToString(e2)), r2)
        throw new RangeError("Z designator not supported for PlainDateTime");
      RejectDateTime(o2, n2, s2, l2, d2, m2, c2, h2, f2), void 0 === y2 && (y2 = GetISO8601Calendar()), y2 = ToTemporalCalendar(y2);
    }
    return CreateTemporalDateTime(o2, n2, s2, l2, d2, m2, c2, h2, f2, y2);
  }
  function ToTemporalDuration(e2) {
    let t2, o2, n2, r2, a2, i2, s2, l2, d2, m2;
    if (IsObject(e2)) {
      if (IsTemporalDuration(e2))
        return e2;
      ({ years: t2, months: o2, weeks: n2, days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = ToTemporalDurationRecord(e2));
    } else
      ({ years: t2, months: o2, weeks: n2, days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = ParseTemporalDurationString(ToString(e2)));
    return new (GetIntrinsic("%Temporal.Duration%"))(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2);
  }
  function ToTemporalInstant(e2) {
    if (IsTemporalInstant(e2))
      return e2;
    if (IsTemporalZonedDateTime(e2)) {
      return new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(e2, o));
    }
    const t2 = ParseTemporalInstant(ToString(e2));
    return new (GetIntrinsic("%Temporal.Instant%"))(t2);
  }
  function ToTemporalMonthDay(e2, t2 = ye(null)) {
    if (IsObject(e2)) {
      if (IsTemporalMonthDay(e2))
        return e2;
      let o3, n3;
      if (HasSlot(e2, T))
        o3 = GetSlot(e2, T), n3 = false;
      else {
        let t3 = e2.calendar;
        n3 = void 0 === t3, void 0 === t3 && (t3 = GetISO8601Calendar()), o3 = ToTemporalCalendar(t3);
      }
      const r3 = ToTemporalMonthDayFields(e2, CalendarFields(o3, ["day", "month", "monthCode", "year"]));
      return n3 && void 0 !== r3.month && void 0 === r3.monthCode && void 0 === r3.year && (r3.year = 1972), MonthDayFromFields(o3, r3, t2);
    }
    ToTemporalOverflow(t2);
    let { month: o2, day: n2, referenceISOYear: r2, calendar: a2 } = ParseTemporalMonthDayString(ToString(e2)), i2 = a2;
    if (void 0 === i2 && (i2 = GetISO8601Calendar()), i2 = ToTemporalCalendar(i2), void 0 === r2)
      return RejectISODate(1972, o2, n2), CreateTemporalMonthDay(o2, n2, i2);
    return MonthDayFromFields(i2, CreateTemporalMonthDay(o2, n2, i2, r2), ye(null));
  }
  function ToTemporalTime(e2, t2 = "constrain") {
    let o2, n2, r2, a2, i2, f2, y2, S2 = e2;
    if (IsObject(S2)) {
      if (IsTemporalTime(S2))
        return S2;
      if (IsTemporalZonedDateTime(S2) && (S2 = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(S2, p), GetSlot(S2, u), GetSlot(S2, T))), IsTemporalDateTime(S2)) {
        return new (GetIntrinsic("%Temporal.PlainTime%"))(GetSlot(S2, s), GetSlot(S2, l), GetSlot(S2, d), GetSlot(S2, m), GetSlot(S2, c), GetSlot(S2, h));
      }
      if (y2 = GetTemporalCalendarWithISODefault(S2), "iso8601" !== ToString(y2))
        throw new RangeError("PlainTime can only have iso8601 calendar");
      ({ hour: o2, minute: n2, second: r2, millisecond: a2, microsecond: i2, nanosecond: f2 } = ToTemporalTimeRecord(S2)), { hour: o2, minute: n2, second: r2, millisecond: a2, microsecond: i2, nanosecond: f2 } = RegulateTime(o2, n2, r2, a2, i2, f2, t2);
    } else if ({ hour: o2, minute: n2, second: r2, millisecond: a2, microsecond: i2, nanosecond: f2, calendar: y2 } = function ParseTemporalTimeString(e3) {
      const t3 = K.exec(e3);
      let o3, n3, r3, a3, i3, s2, l2;
      if (t3) {
        o3 = ToInteger(t3[1]), n3 = ToInteger(t3[2] || t3[5]), r3 = ToInteger(t3[3] || t3[6]), 60 === r3 && (r3 = 59);
        const e4 = (t3[4] || t3[7]) + "000000000";
        a3 = ToInteger(e4.slice(0, 3)), i3 = ToInteger(e4.slice(3, 6)), s2 = ToInteger(e4.slice(6, 9)), l2 = t3[15];
      } else {
        let t4, d2;
        if ({ hasTime: d2, hour: o3, minute: n3, second: r3, millisecond: a3, microsecond: i3, nanosecond: s2, calendar: l2, z: t4 } = ParseISODateTime(e3), !d2)
          throw new RangeError(`time is missing in string: ${e3}`);
        if (t4)
          throw new RangeError("Z designator not supported for PlainTime");
      }
      if (/[tT ][0-9][0-9]/.test(e3))
        return { hour: o3, minute: n3, second: r3, millisecond: a3, microsecond: i3, nanosecond: s2, calendar: l2 };
      try {
        const { month: t4, day: o4 } = ParseTemporalMonthDayString(e3);
        RejectISODate(1972, t4, o4);
      } catch {
        try {
          const { year: t4, month: o4 } = ParseTemporalYearMonthString(e3);
          RejectISODate(t4, o4, 1);
        } catch {
          return { hour: o3, minute: n3, second: r3, millisecond: a3, microsecond: i3, nanosecond: s2, calendar: l2 };
        }
      }
      throw new RangeError(`invalid ISO 8601 time-only string ${e3}; may need a T prefix`);
    }(ToString(S2)), RejectTime(o2, n2, r2, a2, i2, f2), void 0 !== y2 && "iso8601" !== y2)
      throw new RangeError("PlainTime can only have iso8601 calendar");
    return new (GetIntrinsic("%Temporal.PlainTime%"))(o2, n2, r2, a2, i2, f2);
  }
  function ToTemporalYearMonth(e2, t2 = ye(null)) {
    if (IsObject(e2)) {
      if (IsTemporalYearMonth(e2))
        return e2;
      const o3 = GetTemporalCalendarWithISODefault(e2);
      return YearMonthFromFields(o3, ToTemporalYearMonthFields(e2, CalendarFields(o3, ["month", "monthCode", "year"])), t2);
    }
    ToTemporalOverflow(t2);
    let { year: o2, month: n2, referenceISODay: r2, calendar: a2 } = ParseTemporalYearMonthString(ToString(e2)), i2 = a2;
    if (void 0 === i2 && (i2 = GetISO8601Calendar()), i2 = ToTemporalCalendar(i2), void 0 === r2)
      return RejectISODate(o2, n2, 1), CreateTemporalYearMonth(o2, n2, i2);
    return YearMonthFromFields(i2, CreateTemporalYearMonth(o2, n2, i2, r2), ye(null));
  }
  function InterpretISODateTimeOffset(t2, r2, a2, i2, s2, l2, d2, m2, c2, h2, T2, u2, p2, f2, y2) {
    const S2 = new (GetIntrinsic("%Temporal.PlainDateTime%"))(t2, r2, a2, i2, s2, l2, d2, m2, c2);
    if ("wall" === h2 || "ignore" === f2) {
      return GetSlot(BuiltinTimeZoneGetInstantFor(u2, S2, p2), o);
    }
    if ("exact" === h2 || "use" === f2) {
      const o2 = GetEpochFromISOParts(t2, r2, a2, i2, s2, l2, d2, m2, c2);
      if (null === o2)
        throw new RangeError("ZonedDateTime outside of supported range");
      return import_jsbi.default.subtract(o2, import_jsbi.default.BigInt(T2));
    }
    const g2 = GetPossibleInstantsFor(u2, S2);
    for (const t3 of g2) {
      const n2 = GetOffsetNanosecondsFor(u2, t3), r3 = import_jsbi.default.toNumber(RoundNumberToIncrement(import_jsbi.default.BigInt(n2), 6e10, "halfExpand"));
      if (n2 === T2 || y2 && r3 === T2)
        return GetSlot(t3, o);
    }
    if ("reject" === f2) {
      const e2 = FormatTimeZoneOffsetString(T2), t3 = IsTemporalTimeZone(u2) ? GetSlot(u2, n) : "time zone";
      throw new RangeError(`Offset ${e2} is invalid for ${S2.toString()} in ${t3}`);
    }
    return GetSlot(DisambiguatePossibleInstants(g2, u2, S2, p2), o);
  }
  function ToTemporalZonedDateTime(e2, t2 = ye(null)) {
    let o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, T2, u2 = false, p2 = "option";
    if (IsObject(e2)) {
      if (IsTemporalZonedDateTime(e2))
        return e2;
      T2 = GetTemporalCalendarWithISODefault(e2);
      const u3 = function ToTemporalZonedDateTimeFields(e3, t3) {
        const o3 = [["day", void 0], ["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["month", void 0], ["monthCode", void 0], ["nanosecond", 0], ["second", 0], ["year", void 0], ["offset", void 0], ["timeZone"]];
        return t3.forEach((e4) => {
          o3.some(([t4]) => t4 === e4) || o3.push([e4, void 0]);
        }), PrepareTemporalFields(e3, o3);
      }(e2, CalendarFields(T2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]));
      ({ year: o2, month: n2, day: r2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = InterpretTemporalDateTimeFields(T2, u3, t2)), c2 = ToTemporalTimeZone(u3.timeZone), h2 = u3.offset, void 0 === h2 ? p2 = "wall" : h2 = ToString(h2);
    } else {
      let f3, y2;
      if (ToTemporalOverflow(t2), { year: o2, month: n2, day: r2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2, ianaName: f3, offset: h2, z: y2, calendar: T2 } = function ParseTemporalZonedDateTimeString(e3) {
        const t3 = ParseISODateTime(e3);
        if (!t3.ianaName)
          throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");
        return t3;
      }(ToString(e2)), !f3)
        throw new RangeError("time zone ID required in brackets");
      y2 ? p2 = "exact" : h2 || (p2 = "wall");
      c2 = new (GetIntrinsic("%Temporal.TimeZone%"))(f3), T2 || (T2 = GetISO8601Calendar()), T2 = ToTemporalCalendar(T2), u2 = true;
    }
    let f2 = 0;
    "option" === p2 && (f2 = ParseTimeZoneOffsetString(h2));
    return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(o2, n2, r2, a2, i2, s2, l2, d2, m2, p2, f2, c2, ToTemporalDisambiguation(t2), ToTemporalOffset(t2, "reject"), u2), c2, T2);
  }
  function CreateTemporalDateSlots(e2, t2, o2, n2, s2) {
    RejectISODate(t2, o2, n2), RejectDateRange(t2, o2, n2), CreateSlots(e2), SetSlot(e2, r, t2), SetSlot(e2, a, o2), SetSlot(e2, i, n2), SetSlot(e2, T, s2), SetSlot(e2, "slot-date-brand", true);
  }
  function CreateTemporalDate(e2, t2, o2, n2 = GetISO8601Calendar()) {
    const r2 = GetIntrinsic("%Temporal.PlainDate%"), a2 = ye(r2.prototype);
    return CreateTemporalDateSlots(a2, e2, t2, o2, n2), a2;
  }
  function CreateTemporalDateTimeSlots(e2, t2, o2, n2, u2, p2, f2, y2, S2, g2, w2) {
    RejectDateTime(t2, o2, n2, u2, p2, f2, y2, S2, g2), RejectDateTimeRange(t2, o2, n2, u2, p2, f2, y2, S2, g2), CreateSlots(e2), SetSlot(e2, r, t2), SetSlot(e2, a, o2), SetSlot(e2, i, n2), SetSlot(e2, s, u2), SetSlot(e2, l, p2), SetSlot(e2, d, f2), SetSlot(e2, m, y2), SetSlot(e2, c, S2), SetSlot(e2, h, g2), SetSlot(e2, T, w2);
  }
  function CreateTemporalDateTime(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2 = GetISO8601Calendar()) {
    const m2 = GetIntrinsic("%Temporal.PlainDateTime%"), c2 = ye(m2.prototype);
    return CreateTemporalDateTimeSlots(c2, e2, t2, o2, n2, r2, a2, i2, s2, l2, d2), c2;
  }
  function CreateTemporalMonthDaySlots(e2, t2, o2, n2, s2) {
    RejectISODate(s2, t2, o2), RejectDateRange(s2, t2, o2), CreateSlots(e2), SetSlot(e2, a, t2), SetSlot(e2, i, o2), SetSlot(e2, r, s2), SetSlot(e2, T, n2), SetSlot(e2, "slot-month-day-brand", true);
  }
  function CreateTemporalMonthDay(e2, t2, o2 = GetISO8601Calendar(), n2 = 1972) {
    const r2 = GetIntrinsic("%Temporal.PlainMonthDay%"), a2 = ye(r2.prototype);
    return CreateTemporalMonthDaySlots(a2, e2, t2, o2, n2), a2;
  }
  function CreateTemporalYearMonthSlots(e2, t2, o2, n2, s2) {
    RejectISODate(t2, o2, s2), function RejectYearMonthRange(e3, t3) {
      RejectToRange(e3, -271821, 275760), -271821 === e3 ? RejectToRange(t3, 4, 12) : 275760 === e3 && RejectToRange(t3, 1, 9);
    }(t2, o2), CreateSlots(e2), SetSlot(e2, r, t2), SetSlot(e2, a, o2), SetSlot(e2, i, s2), SetSlot(e2, T, n2), SetSlot(e2, "slot-year-month-brand", true);
  }
  function CreateTemporalYearMonth(e2, t2, o2 = GetISO8601Calendar(), n2 = 1) {
    const r2 = GetIntrinsic("%Temporal.PlainYearMonth%"), a2 = ye(r2.prototype);
    return CreateTemporalYearMonthSlots(a2, e2, t2, o2, n2), a2;
  }
  function CreateTemporalZonedDateTimeSlots(e2, t2, n2, r2) {
    ValidateEpochNanoseconds(t2), CreateSlots(e2), SetSlot(e2, o, t2), SetSlot(e2, p, n2), SetSlot(e2, T, r2);
    const a2 = new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(e2, o));
    SetSlot(e2, u, a2);
  }
  function CreateTemporalZonedDateTime(e2, t2, o2 = GetISO8601Calendar()) {
    const n2 = GetIntrinsic("%Temporal.ZonedDateTime%"), r2 = ye(n2.prototype);
    return CreateTemporalZonedDateTimeSlots(r2, e2, t2, o2), r2;
  }
  function GetISO8601Calendar() {
    return new (GetIntrinsic("%Temporal.Calendar%"))("iso8601");
  }
  function CalendarFields(e2, t2) {
    let o2 = t2;
    e2.fields && (o2 = e2.fields(o2));
    const n2 = [];
    for (const e3 of o2) {
      if ("string" != typeof e3)
        throw new TypeError("bad return from calendar.fields()");
      re.call(n2, e3);
    }
    return n2;
  }
  function CalendarMergeFields(e2, t2, o2) {
    const n2 = e2.mergeFields;
    if (!n2)
      return { ...t2, ...o2 };
    const r2 = Reflect.apply(n2, e2, [t2, o2]);
    if (!IsObject(r2))
      throw new TypeError("bad return from calendar.mergeFields()");
    return r2;
  }
  function CalendarDateAdd(e2, t2, o2, n2, r2) {
    let a2 = r2;
    void 0 === a2 && (a2 = e2.dateAdd);
    const i2 = ge(a2, e2, [t2, o2, n2]);
    if (!IsTemporalDate(i2))
      throw new TypeError("invalid result");
    return i2;
  }
  function CalendarDateUntil(e2, t2, o2, n2, r2) {
    let a2 = r2;
    void 0 === a2 && (a2 = e2.dateUntil);
    const i2 = ge(a2, e2, [t2, o2, n2]);
    if (!IsTemporalDuration(i2))
      throw new TypeError("invalid result");
    return i2;
  }
  function CalendarYear(e2, t2) {
    const o2 = e2.year(t2);
    if (void 0 === o2)
      throw new RangeError("calendar year result must be an integer");
    return ToIntegerThrowOnInfinity(o2);
  }
  function CalendarMonth(e2, t2) {
    const o2 = e2.month(t2);
    if (void 0 === o2)
      throw new RangeError("calendar month result must be a positive integer");
    return ToPositiveInteger(o2);
  }
  function CalendarMonthCode(e2, t2) {
    const o2 = e2.monthCode(t2);
    if (void 0 === o2)
      throw new RangeError("calendar monthCode result must be a string");
    return ToString(o2);
  }
  function CalendarDay(e2, t2) {
    const o2 = e2.day(t2);
    if (void 0 === o2)
      throw new RangeError("calendar day result must be a positive integer");
    return ToPositiveInteger(o2);
  }
  function CalendarEra(e2, t2) {
    let o2 = e2.era(t2);
    return void 0 !== o2 && (o2 = ToString(o2)), o2;
  }
  function CalendarEraYear(e2, t2) {
    let o2 = e2.eraYear(t2);
    return void 0 !== o2 && (o2 = ToIntegerThrowOnInfinity(o2)), o2;
  }
  function CalendarDayOfWeek(e2, t2) {
    return e2.dayOfWeek(t2);
  }
  function CalendarDayOfYear(e2, t2) {
    return e2.dayOfYear(t2);
  }
  function CalendarWeekOfYear(e2, t2) {
    return e2.weekOfYear(t2);
  }
  function CalendarDaysInWeek(e2, t2) {
    return e2.daysInWeek(t2);
  }
  function CalendarDaysInMonth(e2, t2) {
    return e2.daysInMonth(t2);
  }
  function CalendarDaysInYear(e2, t2) {
    return e2.daysInYear(t2);
  }
  function CalendarMonthsInYear(e2, t2) {
    return e2.monthsInYear(t2);
  }
  function CalendarInLeapYear(e2, t2) {
    return e2.inLeapYear(t2);
  }
  function ToTemporalCalendar(e2) {
    let t2 = e2;
    if (IsObject(t2)) {
      if (HasSlot(t2, T))
        return GetSlot(t2, T);
      if (!("calendar" in t2))
        return t2;
      if (t2 = t2.calendar, IsObject(t2) && !("calendar" in t2))
        return t2;
    }
    const o2 = ToString(t2), n2 = GetIntrinsic("%Temporal.Calendar%");
    if (IsBuiltinCalendar(o2))
      return new n2(o2);
    let r2;
    try {
      ({ calendar: r2 } = ParseISODateTime(o2));
    } catch {
      throw new RangeError(`Invalid calendar: ${o2}`);
    }
    return r2 || (r2 = "iso8601"), new n2(r2);
  }
  function GetTemporalCalendarWithISODefault(e2) {
    if (HasSlot(e2, T))
      return GetSlot(e2, T);
    const { calendar: t2 } = e2;
    return void 0 === t2 ? GetISO8601Calendar() : ToTemporalCalendar(t2);
  }
  function CalendarEquals(e2, t2) {
    if (e2 === t2)
      return true;
    return ToString(e2) === ToString(t2);
  }
  function ConsolidateCalendars(e2, t2) {
    if (e2 === t2)
      return t2;
    const o2 = ToString(e2), n2 = ToString(t2);
    if (o2 === n2 || "iso8601" === o2)
      return t2;
    if ("iso8601" === n2)
      return e2;
    throw new RangeError("irreconcilable calendars");
  }
  function DateFromFields(e2, t2, o2) {
    const n2 = e2.dateFromFields(t2, o2);
    if (!IsTemporalDate(n2))
      throw new TypeError("invalid result");
    return n2;
  }
  function YearMonthFromFields(e2, t2, o2) {
    const n2 = e2.yearMonthFromFields(t2, o2);
    if (!IsTemporalYearMonth(n2))
      throw new TypeError("invalid result");
    return n2;
  }
  function MonthDayFromFields(e2, t2, o2) {
    const n2 = e2.monthDayFromFields(t2, o2);
    if (!IsTemporalMonthDay(n2))
      throw new TypeError("invalid result");
    return n2;
  }
  function ToTemporalTimeZone(e2) {
    let t2 = e2;
    if (IsObject(t2)) {
      if (IsTemporalZonedDateTime(t2))
        return GetSlot(t2, p);
      if (!("timeZone" in t2))
        return t2;
      if (t2 = t2.timeZone, IsObject(t2) && !("timeZone" in t2))
        return t2;
    }
    const o2 = ParseTemporalTimeZone(ToString(t2));
    return new (GetIntrinsic("%Temporal.TimeZone%"))(o2);
  }
  function TimeZoneEquals(e2, t2) {
    if (e2 === t2)
      return true;
    return ToString(e2) === ToString(t2);
  }
  function TemporalDateTimeToDate(e2) {
    return CreateTemporalDate(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), GetSlot(e2, T));
  }
  function TemporalDateTimeToTime(e2) {
    return new (GetIntrinsic("%Temporal.PlainTime%"))(GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h));
  }
  function GetOffsetNanosecondsFor(e2, t2) {
    let o2 = e2.getOffsetNanosecondsFor;
    if ("function" != typeof o2)
      throw new TypeError("getOffsetNanosecondsFor not callable");
    const n2 = Reflect.apply(o2, e2, [t2]);
    if ("number" != typeof n2)
      throw new TypeError("bad return from getOffsetNanosecondsFor");
    if (!IsInteger(n2) || le(n2) > 864e11)
      throw new RangeError("out-of-range return from getOffsetNanosecondsFor");
    return n2;
  }
  function BuiltinTimeZoneGetOffsetStringFor(e2, t2) {
    return FormatTimeZoneOffsetString(GetOffsetNanosecondsFor(e2, t2));
  }
  function BuiltinTimeZoneGetPlainDateTimeFor(e2, t2, n2) {
    const r2 = GetSlot(t2, o), a2 = GetOffsetNanosecondsFor(e2, t2);
    let { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2, millisecond: h2, microsecond: T2, nanosecond: u2 } = GetISOPartsFromEpoch(r2);
    return { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2, millisecond: h2, microsecond: T2, nanosecond: u2 } = BalanceISODateTime(i2, s2, l2, d2, m2, c2, h2, T2, u2 + a2), CreateTemporalDateTime(i2, s2, l2, d2, m2, c2, h2, T2, u2, n2);
  }
  function BuiltinTimeZoneGetInstantFor(e2, t2, o2) {
    return DisambiguatePossibleInstants(GetPossibleInstantsFor(e2, t2), e2, t2, o2);
  }
  function DisambiguatePossibleInstants(t2, o2, n2, u2) {
    const p2 = GetIntrinsic("%Temporal.Instant%"), f2 = t2.length;
    if (1 === f2)
      return t2[0];
    if (f2)
      switch (u2) {
        case "compatible":
        case "earlier":
          return t2[0];
        case "later":
          return t2[f2 - 1];
        case "reject":
          throw new RangeError("multiple instants found");
      }
    const y2 = GetSlot(n2, r), S2 = GetSlot(n2, a), g2 = GetSlot(n2, i), w2 = GetSlot(n2, s), I2 = GetSlot(n2, l), G2 = GetSlot(n2, d), D2 = GetSlot(n2, m), v2 = GetSlot(n2, c), O2 = GetSlot(n2, h), C2 = GetEpochFromISOParts(y2, S2, g2, w2, I2, G2, D2, v2, O2);
    if (null === C2)
      throw new RangeError("DateTime outside of supported range");
    const E2 = new p2(import_jsbi.default.subtract(C2, Ee)), b2 = new p2(import_jsbi.default.add(C2, Ee)), R2 = GetOffsetNanosecondsFor(o2, E2), M2 = GetOffsetNanosecondsFor(o2, b2) - R2;
    switch (u2) {
      case "earlier": {
        const e2 = GetSlot(n2, T), t3 = GetIntrinsic("%Temporal.PlainDateTime%"), r2 = AddDateTime(y2, S2, g2, w2, I2, G2, D2, v2, O2, e2, 0, 0, 0, 0, 0, 0, 0, 0, 0, -M2, void 0);
        return GetPossibleInstantsFor(o2, new t3(r2.year, r2.month, r2.day, r2.hour, r2.minute, r2.second, r2.millisecond, r2.microsecond, r2.nanosecond, e2))[0];
      }
      case "compatible":
      case "later": {
        const e2 = GetSlot(n2, T), t3 = GetIntrinsic("%Temporal.PlainDateTime%"), r2 = AddDateTime(y2, S2, g2, w2, I2, G2, D2, v2, O2, e2, 0, 0, 0, 0, 0, 0, 0, 0, 0, M2, void 0), a2 = GetPossibleInstantsFor(o2, new t3(r2.year, r2.month, r2.day, r2.hour, r2.minute, r2.second, r2.millisecond, r2.microsecond, r2.nanosecond, e2));
        return a2[a2.length - 1];
      }
      case "reject":
        throw new RangeError("no such instant found");
    }
  }
  function GetPossibleInstantsFor(e2, t2) {
    const o2 = e2.getPossibleInstantsFor(t2), n2 = [];
    for (const e3 of o2) {
      if (!IsTemporalInstant(e3))
        throw new TypeError("bad return from getPossibleInstantsFor");
      re.call(n2, e3);
    }
    return n2;
  }
  function ISOYearString(e2) {
    let t2;
    if (e2 < 1e3 || e2 > 9999) {
      t2 = (e2 < 0 ? "-" : "+") + `000000${le(e2)}`.slice(-6);
    } else
      t2 = `${e2}`;
    return t2;
  }
  function ISODateTimePartString(e2) {
    return `00${e2}`.slice(-2);
  }
  function FormatSecondsStringPart(e2, t2, o2, n2, r2) {
    if ("minute" === r2)
      return "";
    const a2 = `:${ISODateTimePartString(e2)}`;
    let i2, s2 = 1e6 * t2 + 1e3 * o2 + n2;
    if ("auto" === r2) {
      if (0 === s2)
        return a2;
      for (i2 = `${s2}`.padStart(9, "0"); "0" === i2[i2.length - 1]; )
        i2 = i2.slice(0, -1);
    } else {
      if (0 === r2)
        return a2;
      i2 = `${s2}`.padStart(9, "0").slice(0, r2);
    }
    return `${a2}.${i2}`;
  }
  function TemporalInstantToString(e2, t2, o2) {
    let n2 = t2;
    if (void 0 === n2) {
      n2 = new (GetIntrinsic("%Temporal.TimeZone%"))("UTC");
    }
    const T2 = BuiltinTimeZoneGetPlainDateTimeFor(n2, e2, GetISO8601Calendar()), u2 = ISOYearString(GetSlot(T2, r)), p2 = ISODateTimePartString(GetSlot(T2, a)), f2 = ISODateTimePartString(GetSlot(T2, i)), y2 = ISODateTimePartString(GetSlot(T2, s)), S2 = ISODateTimePartString(GetSlot(T2, l)), g2 = FormatSecondsStringPart(GetSlot(T2, d), GetSlot(T2, m), GetSlot(T2, c), GetSlot(T2, h), o2);
    let w2 = "Z";
    if (void 0 !== t2) {
      w2 = FormatISOTimeZoneOffsetString(GetOffsetNanosecondsFor(n2, e2));
    }
    return `${u2}-${p2}-${f2}T${y2}:${S2}${g2}${w2}`;
  }
  function TemporalDurationToString(t2, o2 = "auto", n2) {
    function formatNumber(t3) {
      return t3 <= fe ? t3.toString(10) : import_jsbi.default.BigInt(t3).toString(10);
    }
    const r2 = GetSlot(t2, f), a2 = GetSlot(t2, y), i2 = GetSlot(t2, S), s2 = GetSlot(t2, g), l2 = GetSlot(t2, w), d2 = GetSlot(t2, I);
    let m2 = GetSlot(t2, G), c2 = GetSlot(t2, D), h2 = GetSlot(t2, v), T2 = GetSlot(t2, O);
    const u2 = DurationSign(r2, a2, i2, s2, l2, d2, m2, c2, h2, T2);
    if (n2) {
      const { unit: e2, increment: t3, roundingMode: o3 } = n2;
      ({ seconds: m2, milliseconds: c2, microseconds: h2, nanoseconds: T2 } = RoundDuration(0, 0, 0, 0, 0, 0, m2, c2, h2, T2, t3, e2, o3));
    }
    const p2 = [];
    r2 && p2.push(`${formatNumber(le(r2))}Y`), a2 && p2.push(`${formatNumber(le(a2))}M`), i2 && p2.push(`${formatNumber(le(i2))}W`), s2 && p2.push(`${formatNumber(le(s2))}D`);
    const C2 = [];
    l2 && C2.push(`${formatNumber(le(l2))}H`), d2 && C2.push(`${formatNumber(le(d2))}M`);
    const E2 = [];
    let b2, R2, M2, Z2, F2 = TotalDurationNanoseconds(0, 0, 0, m2, c2, h2, T2, 0);
    ({ quotient: F2, remainder: b2 } = divmod(F2, De)), { quotient: F2, remainder: R2 } = divmod(F2, De), { quotient: Z2, remainder: M2 } = divmod(F2, De);
    const Y2 = 1e6 * le(import_jsbi.default.toNumber(M2)) + 1e3 * le(import_jsbi.default.toNumber(R2)) + le(import_jsbi.default.toNumber(b2));
    let P2;
    if ("auto" === o2) {
      if (0 !== Y2)
        for (P2 = `${Y2}`.padStart(9, "0"); "0" === P2[P2.length - 1]; )
          P2 = P2.slice(0, -1);
    } else
      0 !== o2 && (P2 = `${Y2}`.padStart(9, "0").slice(0, o2));
    return P2 && E2.unshift(".", P2), import_jsbi.default.equal(Z2, we) && !E2.length && "auto" === o2 || E2.unshift(abs(Z2).toString()), E2.length && C2.push(`${E2.join("")}S`), C2.length && C2.unshift("T"), p2.length || C2.length ? `${u2 < 0 ? "-" : ""}P${p2.join("")}${C2.join("")}` : "PT0S";
  }
  function TemporalDateToString(e2, t2 = "auto") {
    return `${ISOYearString(GetSlot(e2, r))}-${ISODateTimePartString(GetSlot(e2, a))}-${ISODateTimePartString(GetSlot(e2, i))}${FormatCalendarAnnotation(ToString(GetSlot(e2, T)), t2)}`;
  }
  function TemporalDateTimeToString(e2, t2, o2 = "auto", n2) {
    let u2 = GetSlot(e2, r), p2 = GetSlot(e2, a), f2 = GetSlot(e2, i), y2 = GetSlot(e2, s), S2 = GetSlot(e2, l), g2 = GetSlot(e2, d), w2 = GetSlot(e2, m), I2 = GetSlot(e2, c), G2 = GetSlot(e2, h);
    if (n2) {
      const { unit: e3, increment: t3, roundingMode: o3 } = n2;
      ({ year: u2, month: p2, day: f2, hour: y2, minute: S2, second: g2, millisecond: w2, microsecond: I2, nanosecond: G2 } = RoundISODateTime(u2, p2, f2, y2, S2, g2, w2, I2, G2, t3, e3, o3));
    }
    return `${ISOYearString(u2)}-${ISODateTimePartString(p2)}-${ISODateTimePartString(f2)}T${ISODateTimePartString(y2)}:${ISODateTimePartString(S2)}${FormatSecondsStringPart(g2, w2, I2, G2, t2)}${FormatCalendarAnnotation(ToString(GetSlot(e2, T)), o2)}`;
  }
  function TemporalMonthDayToString(e2, t2 = "auto") {
    let o2 = `${ISODateTimePartString(GetSlot(e2, a))}-${ISODateTimePartString(GetSlot(e2, i))}`;
    const n2 = ToString(GetSlot(e2, T));
    if ("iso8601" !== n2) {
      o2 = `${ISOYearString(GetSlot(e2, r))}-${o2}`;
    }
    const s2 = FormatCalendarAnnotation(n2, t2);
    return s2 && (o2 += s2), o2;
  }
  function TemporalYearMonthToString(e2, t2 = "auto") {
    let o2 = `${ISOYearString(GetSlot(e2, r))}-${ISODateTimePartString(GetSlot(e2, a))}`;
    const n2 = ToString(GetSlot(e2, T));
    if ("iso8601" !== n2) {
      o2 += `-${ISODateTimePartString(GetSlot(e2, i))}`;
    }
    const s2 = FormatCalendarAnnotation(n2, t2);
    return s2 && (o2 += s2), o2;
  }
  function TemporalZonedDateTimeToString(e2, t2, n2 = "auto", f2 = "auto", y2 = "auto", S2) {
    let g2 = GetSlot(e2, u);
    if (S2) {
      const { unit: t3, increment: n3, roundingMode: r2 } = S2, a2 = RoundInstant(GetSlot(e2, o), n3, t3, r2);
      g2 = new (GetIntrinsic("%Temporal.Instant%"))(a2);
    }
    const w2 = GetSlot(e2, p), I2 = BuiltinTimeZoneGetPlainDateTimeFor(w2, g2, GetISO8601Calendar());
    let G2 = `${ISOYearString(GetSlot(I2, r))}-${ISODateTimePartString(GetSlot(I2, a))}-${ISODateTimePartString(GetSlot(I2, i))}T${ISODateTimePartString(GetSlot(I2, s))}:${ISODateTimePartString(GetSlot(I2, l))}${FormatSecondsStringPart(GetSlot(I2, d), GetSlot(I2, m), GetSlot(I2, c), GetSlot(I2, h), t2)}`;
    if ("never" !== y2) {
      G2 += FormatISOTimeZoneOffsetString(GetOffsetNanosecondsFor(w2, g2));
    }
    "never" !== f2 && (G2 += `[${w2}]`);
    return G2 += FormatCalendarAnnotation(ToString(GetSlot(e2, T)), n2), G2;
  }
  function TestTimeZoneOffsetString(e2) {
    return ke.test(pe(e2));
  }
  function ParseTimeZoneOffsetString(e2) {
    const t2 = ke.exec(pe(e2));
    if (!t2)
      throw new RangeError(`invalid time zone offset: ${e2}`);
    return ("-" === t2[1] || "\u2212" === t2[1] ? -1 : 1) * (1e9 * (60 * (60 * +t2[2] + +(t2[3] || 0)) + +(t2[4] || 0)) + +((t2[5] || 0) + "000000000").slice(0, 9));
  }
  function GetCanonicalTimeZoneIdentifier(e2) {
    if (TestTimeZoneOffsetString(e2)) {
      return FormatTimeZoneOffsetString(ParseTimeZoneOffsetString(e2));
    }
    return getIntlDateTimeFormatEnUsForTimeZone(pe(e2)).resolvedOptions().timeZone;
  }
  function GetIANATimeZoneOffsetNanoseconds(t2, o2) {
    const { year: n2, month: r2, day: a2, hour: i2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 } = GetIANATimeZoneDateTimeParts(t2, o2), h2 = GetEpochFromISOParts(n2, r2, a2, i2, s2, l2, d2, m2, c2);
    if (null === h2)
      throw new RangeError("Date outside of supported range");
    return import_jsbi.default.toNumber(import_jsbi.default.subtract(h2, t2));
  }
  function FormatTimeZoneOffsetString(e2) {
    const t2 = e2 < 0 ? "-" : "+", o2 = le(e2), n2 = o2 % 1e9, r2 = de(o2 / 1e9) % 60, a2 = de(o2 / 6e10) % 60, i2 = ISODateTimePartString(de(o2 / 36e11)), s2 = ISODateTimePartString(a2), l2 = ISODateTimePartString(r2);
    let d2 = "";
    if (n2) {
      let e3 = `${n2}`.padStart(9, "0");
      for (; "0" === e3[e3.length - 1]; )
        e3 = e3.slice(0, -1);
      d2 = `:${l2}.${e3}`;
    } else
      r2 && (d2 = `:${l2}`);
    return `${t2}${i2}:${s2}${d2}`;
  }
  function FormatISOTimeZoneOffsetString(t2) {
    let o2 = import_jsbi.default.toNumber(RoundNumberToIncrement(import_jsbi.default.BigInt(t2), 6e10, "halfExpand"));
    const n2 = o2 < 0 ? "-" : "+";
    o2 = le(o2);
    const r2 = o2 / 6e10 % 60;
    return `${n2}${ISODateTimePartString(de(o2 / 36e11))}:${ISODateTimePartString(r2)}`;
  }
  function GetEpochFromISOParts(t2, o2, n2, r2, a2, i2, s2, l2, d2) {
    const m2 = new Date();
    m2.setUTCHours(r2, a2, i2, s2), m2.setUTCFullYear(t2, o2 - 1, n2);
    const c2 = m2.getTime();
    if (he(c2))
      return null;
    let h2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(c2), ve);
    return h2 = import_jsbi.default.add(h2, import_jsbi.default.multiply(import_jsbi.default.BigInt(l2), De)), h2 = import_jsbi.default.add(h2, import_jsbi.default.BigInt(d2)), import_jsbi.default.lessThan(h2, be) || import_jsbi.default.greaterThan(h2, Re) ? null : h2;
  }
  function GetISOPartsFromEpoch(t2) {
    const { quotient: o2, remainder: n2 } = divmod(t2, ve);
    let r2 = import_jsbi.default.toNumber(o2), a2 = import_jsbi.default.toNumber(n2);
    a2 < 0 && (a2 += 1e6, r2 -= 1);
    const i2 = de(a2 / 1e3) % 1e3, s2 = a2 % 1e3, l2 = new Date(r2);
    return { epochMilliseconds: r2, year: l2.getUTCFullYear(), month: l2.getUTCMonth() + 1, day: l2.getUTCDate(), hour: l2.getUTCHours(), minute: l2.getUTCMinutes(), second: l2.getUTCSeconds(), millisecond: l2.getUTCMilliseconds(), microsecond: i2, nanosecond: s2 };
  }
  function GetIANATimeZoneDateTimeParts(e2, t2) {
    const { epochMilliseconds: o2, millisecond: n2, microsecond: r2, nanosecond: a2 } = GetISOPartsFromEpoch(e2), { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2 } = function GetFormatterParts(e3, t3) {
      const o3 = getIntlDateTimeFormatEnUsForTimeZone(e3);
      return function parseFromEnUsFormat(e4) {
        const t4 = e4.split(/[^\w]+/);
        if (7 !== t4.length)
          throw new RangeError(`expected 7 parts in "${e4}`);
        const o4 = +t4[0], n3 = +t4[1];
        let r3 = +t4[2];
        const a3 = t4[3].toUpperCase();
        if ("B" === a3 || "BC" === a3)
          r3 = 1 - r3;
        else if ("A" !== a3 && "AD" !== a3)
          throw new RangeError(`Unknown era ${a3} in "${e4}`);
        let i3 = +t4[4];
        24 === i3 && (i3 = 0);
        const s3 = +t4[5], l3 = +t4[6];
        if (!(Te(r3) && Te(o4) && Te(n3) && Te(i3) && Te(s3) && Te(l3)))
          throw new RangeError(`Invalid number in "${e4}`);
        return { year: r3, month: o4, day: n3, hour: i3, minute: s3, second: l3 };
      }(o3.format(new Date(t3)));
    }(t2, o2);
    return BalanceISODateTime(i2, s2, l2, d2, m2, c2, n2, r2, a2);
  }
  function maxJSBI(t2, o2) {
    return import_jsbi.default.lessThan(t2, o2) ? o2 : t2;
  }
  function afterLatestPossibleTzdbRuleChange() {
    return import_jsbi.default.add($e(), Ze);
  }
  function GetIANATimeZonePreviousTransition(t2, o2) {
    const n2 = afterLatestPossibleTzdbRuleChange(), r2 = import_jsbi.default.greaterThan(t2, n2), a2 = r2 ? import_jsbi.default.subtract(t2, Fe) : Me;
    let i2 = import_jsbi.default.subtract(t2, Ie);
    const s2 = GetIANATimeZoneOffsetNanoseconds(i2, o2);
    let l2 = i2, d2 = s2;
    for (; s2 === d2 && import_jsbi.default.greaterThan(i2, a2); )
      l2 = import_jsbi.default.subtract(i2, Ye), d2 = GetIANATimeZoneOffsetNanoseconds(l2, o2), s2 === d2 && (i2 = l2);
    if (s2 === d2) {
      if (r2) {
        return GetIANATimeZonePreviousTransition(import_jsbi.default.subtract(n2, Ee), o2);
      }
      return null;
    }
    return bisect((e2) => GetIANATimeZoneOffsetNanoseconds(e2, o2), l2, i2, d2, s2);
  }
  function LeapYear(e2) {
    if (void 0 === e2)
      return false;
    return e2 % 4 == 0 && (!(e2 % 100 == 0) || e2 % 400 == 0);
  }
  function ISODaysInMonth(e2, t2) {
    return { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }[LeapYear(e2) ? "leapyear" : "standard"][t2 - 1];
  }
  function DayOfWeek(e2, t2, o2) {
    const n2 = t2 + (t2 < 3 ? 10 : -2), r2 = e2 - (t2 < 3 ? 1 : 0), a2 = de(r2 / 100), i2 = r2 - 100 * a2, s2 = (o2 + de(2.6 * n2 - 0.2) + (i2 + de(i2 / 4)) + (de(a2 / 4) - 2 * a2)) % 7;
    return s2 + (s2 <= 0 ? 7 : 0);
  }
  function DayOfYear(e2, t2, o2) {
    let n2 = o2;
    for (let o3 = t2 - 1; o3 > 0; o3--)
      n2 += ISODaysInMonth(e2, o3);
    return n2;
  }
  function DurationSign(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2) {
    for (const m2 of [e2, t2, o2, n2, r2, a2, i2, s2, l2, d2])
      if (0 !== m2)
        return m2 < 0 ? -1 : 1;
    return 0;
  }
  function BalanceISOYearMonth(e2, t2) {
    let o2 = e2, n2 = t2;
    if (!Te(o2) || !Te(n2))
      throw new RangeError("infinity is out of range");
    return n2 -= 1, o2 += de(n2 / 12), n2 %= 12, n2 < 0 && (n2 += 12), n2 += 1, { year: o2, month: n2 };
  }
  function BalanceISODate(e2, t2, o2) {
    let n2 = e2, r2 = t2, a2 = o2;
    if (!Te(a2))
      throw new RangeError("infinity is out of range");
    ({ year: n2, month: r2 } = BalanceISOYearMonth(n2, r2));
    let i2 = 0, s2 = r2 > 2 ? n2 : n2 - 1;
    for (; i2 = LeapYear(s2) ? 366 : 365, a2 < -i2; )
      n2 -= 1, s2 -= 1, a2 += i2;
    for (s2 += 1; i2 = LeapYear(s2) ? 366 : 365, a2 > i2; )
      n2 += 1, s2 += 1, a2 -= i2;
    for (; a2 < 1; )
      ({ year: n2, month: r2 } = BalanceISOYearMonth(n2, r2 - 1)), a2 += ISODaysInMonth(n2, r2);
    for (; a2 > ISODaysInMonth(n2, r2); )
      a2 -= ISODaysInMonth(n2, r2), { year: n2, month: r2 } = BalanceISOYearMonth(n2, r2 + 1);
    return { year: n2, month: r2, day: a2 };
  }
  function BalanceISODateTime(e2, t2, o2, n2, r2, a2, i2, s2, l2) {
    const { deltaDays: d2, hour: m2, minute: c2, second: h2, millisecond: T2, microsecond: u2, nanosecond: p2 } = BalanceTime(n2, r2, a2, i2, s2, l2), { year: f2, month: y2, day: S2 } = BalanceISODate(e2, t2, o2 + d2);
    return { year: f2, month: y2, day: S2, hour: m2, minute: c2, second: h2, millisecond: T2, microsecond: u2, nanosecond: p2 };
  }
  function BalanceTime(e2, t2, o2, n2, r2, a2) {
    let i2 = e2, s2 = t2, l2 = o2, d2 = n2, m2 = r2, c2 = a2;
    if (!(Te(i2) && Te(s2) && Te(l2) && Te(d2) && Te(m2) && Te(c2)))
      throw new RangeError("infinity is out of range");
    m2 += de(c2 / 1e3), c2 = NonNegativeModulo(c2, 1e3), d2 += de(m2 / 1e3), m2 = NonNegativeModulo(m2, 1e3), l2 += de(d2 / 1e3), d2 = NonNegativeModulo(d2, 1e3), s2 += de(l2 / 60), l2 = NonNegativeModulo(l2, 60), i2 += de(s2 / 60), s2 = NonNegativeModulo(s2, 60);
    const h2 = de(i2 / 24);
    return i2 = NonNegativeModulo(i2, 24), { deltaDays: h2, hour: i2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 };
  }
  function TotalDurationNanoseconds(t2, o2, n2, r2, a2, i2, s2, l2) {
    const d2 = import_jsbi.default.BigInt(t2);
    let m2 = import_jsbi.default.BigInt(s2);
    0 !== t2 && (m2 = import_jsbi.default.subtract(import_jsbi.default.BigInt(s2), import_jsbi.default.BigInt(l2)));
    const c2 = import_jsbi.default.add(import_jsbi.default.BigInt(o2), import_jsbi.default.multiply(d2, import_jsbi.default.BigInt(24))), h2 = import_jsbi.default.add(import_jsbi.default.BigInt(n2), import_jsbi.default.multiply(c2, Ge)), T2 = import_jsbi.default.add(import_jsbi.default.BigInt(r2), import_jsbi.default.multiply(h2, Ge)), u2 = import_jsbi.default.add(import_jsbi.default.BigInt(a2), import_jsbi.default.multiply(T2, De)), p2 = import_jsbi.default.add(import_jsbi.default.BigInt(i2), import_jsbi.default.multiply(u2, De));
    return import_jsbi.default.add(import_jsbi.default.BigInt(m2), import_jsbi.default.multiply(p2, De));
  }
  function NanosecondsToDays(t2, n2) {
    const f2 = GetIntrinsic("%Temporal.Instant%"), y2 = me(import_jsbi.default.toNumber(t2));
    let S2 = import_jsbi.default.BigInt(t2), g2 = 864e11;
    if (0 === y2)
      return { days: 0, nanoseconds: we, dayLengthNs: g2 };
    if (!IsTemporalZonedDateTime(n2)) {
      let t3;
      return { quotient: t3, remainder: S2 } = divmod(S2, import_jsbi.default.BigInt(g2)), { days: import_jsbi.default.toNumber(t3), nanoseconds: S2, dayLengthNs: g2 };
    }
    const w2 = GetSlot(n2, o), I2 = GetSlot(n2, u), G2 = import_jsbi.default.add(w2, S2), D2 = new f2(G2), v2 = GetSlot(n2, p), O2 = GetSlot(n2, T), C2 = BuiltinTimeZoneGetPlainDateTimeFor(v2, I2, O2), E2 = BuiltinTimeZoneGetPlainDateTimeFor(v2, D2, O2);
    let { days: b2 } = DifferenceISODateTime(GetSlot(C2, r), GetSlot(C2, a), GetSlot(C2, i), GetSlot(C2, s), GetSlot(C2, l), GetSlot(C2, d), GetSlot(C2, m), GetSlot(C2, c), GetSlot(C2, h), GetSlot(E2, r), GetSlot(E2, a), GetSlot(E2, i), GetSlot(E2, s), GetSlot(E2, l), GetSlot(E2, d), GetSlot(E2, m), GetSlot(E2, c), GetSlot(E2, h), O2, "day"), R2 = AddZonedDateTime(I2, v2, O2, 0, 0, 0, b2, 0, 0, 0, 0, 0, 0);
    if (1 === y2)
      for (; b2 > 0 && import_jsbi.default.greaterThan(R2, G2); )
        --b2, R2 = AddZonedDateTime(I2, v2, O2, 0, 0, 0, b2, 0, 0, 0, 0, 0, 0);
    S2 = import_jsbi.default.subtract(G2, R2);
    let M2 = false, Z2 = new f2(R2);
    do {
      const t3 = AddZonedDateTime(Z2, v2, O2, 0, 0, 0, y2, 0, 0, 0, 0, 0, 0), n3 = GetSlot(Z2, o);
      g2 = import_jsbi.default.toNumber(import_jsbi.default.subtract(t3, n3)), M2 = import_jsbi.default.greaterThan(import_jsbi.default.multiply(import_jsbi.default.subtract(S2, import_jsbi.default.BigInt(g2)), import_jsbi.default.BigInt(y2)), we), M2 && (S2 = import_jsbi.default.subtract(S2, import_jsbi.default.BigInt(g2)), Z2 = new f2(t3), b2 += y2);
    } while (M2);
    return { days: b2, nanoseconds: S2, dayLengthNs: le(g2) };
  }
  function BalanceDuration(t2, n2, r2, a2, i2, s2, l2, d2, m2) {
    let c2, h2, f2, y2, S2, g2, w2 = t2;
    if (IsTemporalZonedDateTime(m2)) {
      const t3 = AddZonedDateTime(GetSlot(m2, u), GetSlot(m2, p), GetSlot(m2, T), 0, 0, 0, w2, n2, r2, a2, i2, s2, l2), d3 = GetSlot(m2, o);
      c2 = import_jsbi.default.subtract(t3, d3);
    } else
      c2 = TotalDurationNanoseconds(w2, n2, r2, a2, i2, s2, l2, 0);
    "year" === d2 || "month" === d2 || "week" === d2 || "day" === d2 ? { days: w2, nanoseconds: c2 } = NanosecondsToDays(c2, m2) : w2 = 0;
    const I2 = import_jsbi.default.lessThan(c2, we) ? -1 : 1;
    switch (c2 = abs(c2), h2 = f2 = y2 = S2 = g2 = we, d2) {
      case "year":
      case "month":
      case "week":
      case "day":
      case "hour":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: f2, remainder: h2 } = divmod(h2, De), { quotient: y2, remainder: f2 } = divmod(f2, De), { quotient: S2, remainder: y2 } = divmod(y2, Ge), { quotient: g2, remainder: S2 } = divmod(S2, Ge);
        break;
      case "minute":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: f2, remainder: h2 } = divmod(h2, De), { quotient: y2, remainder: f2 } = divmod(f2, De), { quotient: S2, remainder: y2 } = divmod(y2, Ge);
        break;
      case "second":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: f2, remainder: h2 } = divmod(h2, De), { quotient: y2, remainder: f2 } = divmod(f2, De);
        break;
      case "millisecond":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: f2, remainder: h2 } = divmod(h2, De);
        break;
      case "microsecond":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De));
        break;
      case "nanosecond":
        break;
      default:
        throw new Error("assert not reached");
    }
    return { days: w2, hours: import_jsbi.default.toNumber(g2) * I2, minutes: import_jsbi.default.toNumber(S2) * I2, seconds: import_jsbi.default.toNumber(y2) * I2, milliseconds: import_jsbi.default.toNumber(f2) * I2, microseconds: import_jsbi.default.toNumber(h2) * I2, nanoseconds: import_jsbi.default.toNumber(c2) * I2 };
  }
  function UnbalanceDurationRelative(e2, t2, o2, n2, r2, a2) {
    let i2 = e2, s2 = t2, l2 = o2, d2 = n2;
    const m2 = GetIntrinsic("%Temporal.Duration%"), c2 = DurationSign(i2, s2, l2, d2, 0, 0, 0, 0, 0, 0);
    let h2, u2;
    a2 && (u2 = ToTemporalDate(a2), h2 = GetSlot(u2, T));
    const p2 = new m2(c2), f2 = new m2(0, c2), S2 = new m2(0, 0, c2);
    switch (r2) {
      case "year":
        break;
      case "month":
        {
          if (!h2)
            throw new RangeError("a starting point is required for months balancing");
          const e3 = h2.dateAdd, t3 = h2.dateUntil;
          let o3 = u2;
          for (; le(i2) > 0; ) {
            const n3 = CalendarDateAdd(h2, o3, p2, ye(null), e3), r3 = ye(null);
            r3.largestUnit = "month";
            const a3 = GetSlot(CalendarDateUntil(h2, o3, n3, r3, t3), y);
            o3 = n3, s2 += a3, i2 -= c2;
          }
        }
        break;
      case "week":
        if (!h2)
          throw new RangeError("a starting point is required for weeks balancing");
        for (; le(i2) > 0; ) {
          let e3;
          ({ relativeTo: u2, days: e3 } = MoveRelativeDate(h2, u2, p2)), d2 += e3, i2 -= c2;
        }
        for (; le(s2) > 0; ) {
          let e3;
          ({ relativeTo: u2, days: e3 } = MoveRelativeDate(h2, u2, f2)), d2 += e3, s2 -= c2;
        }
        break;
      default:
        for (; le(i2) > 0; ) {
          if (!h2)
            throw new RangeError("a starting point is required for balancing calendar units");
          let e3;
          ({ relativeTo: u2, days: e3 } = MoveRelativeDate(h2, u2, p2)), d2 += e3, i2 -= c2;
        }
        for (; le(s2) > 0; ) {
          if (!h2)
            throw new RangeError("a starting point is required for balancing calendar units");
          let e3;
          ({ relativeTo: u2, days: e3 } = MoveRelativeDate(h2, u2, f2)), d2 += e3, s2 -= c2;
        }
        for (; le(l2) > 0; ) {
          if (!h2)
            throw new RangeError("a starting point is required for balancing calendar units");
          let e3;
          ({ relativeTo: u2, days: e3 } = MoveRelativeDate(h2, u2, S2)), d2 += e3, l2 -= c2;
        }
    }
    return { years: i2, months: s2, weeks: l2, days: d2 };
  }
  function CalculateOffsetShift(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2) {
    if (IsTemporalZonedDateTime(e2)) {
      const c2 = GetSlot(e2, u), h2 = GetSlot(e2, p), f2 = GetSlot(e2, T), y2 = GetOffsetNanosecondsFor(h2, c2), S2 = AddZonedDateTime(c2, h2, f2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2);
      return GetOffsetNanosecondsFor(h2, new (GetIntrinsic("%Temporal.Instant%"))(S2)) - y2;
    }
    return 0;
  }
  function CreateNegatedTemporalDuration(e2) {
    return new (GetIntrinsic("%Temporal.Duration%"))(-GetSlot(e2, f), -GetSlot(e2, y), -GetSlot(e2, S), -GetSlot(e2, g), -GetSlot(e2, w), -GetSlot(e2, I), -GetSlot(e2, G), -GetSlot(e2, D), -GetSlot(e2, v), -GetSlot(e2, O));
  }
  function ConstrainToRange(e2, t2, o2) {
    return ie(o2, se(t2, e2));
  }
  function ConstrainISODate(e2, t2, o2) {
    const n2 = ConstrainToRange(t2, 1, 12);
    return { year: e2, month: n2, day: ConstrainToRange(o2, 1, ISODaysInMonth(e2, n2)) };
  }
  function RejectToRange(e2, t2, o2) {
    if (e2 < t2 || e2 > o2)
      throw new RangeError(`value out of range: ${t2} <= ${e2} <= ${o2}`);
  }
  function RejectISODate(e2, t2, o2) {
    RejectToRange(t2, 1, 12), RejectToRange(o2, 1, ISODaysInMonth(e2, t2));
  }
  function RejectDateRange(e2, t2, o2) {
    RejectDateTimeRange(e2, t2, o2, 12, 0, 0, 0, 0, 0);
  }
  function RejectTime(e2, t2, o2, n2, r2, a2) {
    RejectToRange(e2, 0, 23), RejectToRange(t2, 0, 59), RejectToRange(o2, 0, 59), RejectToRange(n2, 0, 999), RejectToRange(r2, 0, 999), RejectToRange(a2, 0, 999);
  }
  function RejectDateTime(e2, t2, o2, n2, r2, a2, i2, s2, l2) {
    RejectISODate(e2, t2, o2), RejectTime(n2, r2, a2, i2, s2, l2);
  }
  function RejectDateTimeRange(e2, t2, o2, n2, r2, a2, i2, s2, l2) {
    if (RejectToRange(e2, -271821, 275760), -271821 === e2 && null == GetEpochFromISOParts(e2, t2, o2 + 1, n2, r2, a2, i2, s2, l2 - 1) || 275760 === e2 && null == GetEpochFromISOParts(e2, t2, o2 - 1, n2, r2, a2, i2, s2, l2 + 1))
      throw new RangeError("DateTime outside of supported range");
  }
  function ValidateEpochNanoseconds(t2) {
    if (import_jsbi.default.lessThan(t2, be) || import_jsbi.default.greaterThan(t2, Re))
      throw new RangeError("Instant outside of supported range");
  }
  function RejectDuration(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2) {
    const m2 = DurationSign(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2);
    for (const c2 of [e2, t2, o2, n2, r2, a2, i2, s2, l2, d2]) {
      if (!Te(c2))
        throw new RangeError("infinite values not allowed as duration fields");
      const e3 = me(c2);
      if (0 !== e3 && e3 !== m2)
        throw new RangeError("mixed-sign values not allowed as duration fields");
    }
  }
  function DifferenceISODate(e2, t2, o2, n2, r2, a2, i2) {
    switch (i2) {
      case "year":
      case "month": {
        const s2 = -CompareISODate(e2, t2, o2, n2, r2, a2);
        if (0 === s2)
          return { years: 0, months: 0, weeks: 0, days: 0 };
        const l2 = { year: e2, month: t2, day: o2 }, d2 = { year: n2, month: r2, day: a2 };
        let m2 = d2.year - l2.year, c2 = AddISODate(e2, t2, o2, m2, 0, 0, 0, "constrain"), h2 = -CompareISODate(c2.year, c2.month, c2.day, n2, r2, a2);
        if (0 === h2)
          return "year" === i2 ? { years: m2, months: 0, weeks: 0, days: 0 } : { years: 0, months: 12 * m2, weeks: 0, days: 0 };
        let T2 = d2.month - l2.month;
        if (h2 !== s2 && (m2 -= s2, T2 += 12 * s2), c2 = AddISODate(e2, t2, o2, m2, T2, 0, 0, "constrain"), h2 = -CompareISODate(c2.year, c2.month, c2.day, n2, r2, a2), 0 === h2)
          return "year" === i2 ? { years: m2, months: T2, weeks: 0, days: 0 } : { years: 0, months: T2 + 12 * m2, weeks: 0, days: 0 };
        h2 !== s2 && (T2 -= s2, T2 === -s2 && (m2 -= s2, T2 = 11 * s2), c2 = AddISODate(e2, t2, o2, m2, T2, 0, 0, "constrain"), h2 = -CompareISODate(e2, t2, o2, c2.year, c2.month, c2.day));
        let u2 = 0;
        return u2 = c2.month === d2.month ? d2.day - c2.day : s2 < 0 ? -c2.day - (ISODaysInMonth(d2.year, d2.month) - d2.day) : d2.day + (ISODaysInMonth(c2.year, c2.month) - c2.day), "month" === i2 && (T2 += 12 * m2, m2 = 0), { years: m2, months: T2, weeks: 0, days: u2 };
      }
      case "week":
      case "day": {
        let s2, l2, d2;
        CompareISODate(e2, t2, o2, n2, r2, a2) < 0 ? (l2 = { year: e2, month: t2, day: o2 }, s2 = { year: n2, month: r2, day: a2 }, d2 = 1) : (l2 = { year: n2, month: r2, day: a2 }, s2 = { year: e2, month: t2, day: o2 }, d2 = -1);
        let m2 = DayOfYear(s2.year, s2.month, s2.day) - DayOfYear(l2.year, l2.month, l2.day);
        for (let e3 = l2.year; e3 < s2.year; ++e3)
          m2 += LeapYear(e3) ? 366 : 365;
        let c2 = 0;
        return "week" === i2 && (c2 = de(m2 / 7), m2 %= 7), c2 *= d2, m2 *= d2, { years: 0, months: 0, weeks: c2, days: m2 };
      }
      default:
        throw new Error("assert not reached");
    }
  }
  function DifferenceTime(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2) {
    let h2 = i2 - e2, T2 = s2 - t2, u2 = l2 - o2, p2 = d2 - n2, f2 = m2 - r2, y2 = c2 - a2;
    const S2 = DurationSign(0, 0, 0, 0, h2, T2, u2, p2, f2, y2);
    h2 *= S2, T2 *= S2, u2 *= S2, p2 *= S2, f2 *= S2, y2 *= S2;
    let g2 = 0;
    return { deltaDays: g2, hour: h2, minute: T2, second: u2, millisecond: p2, microsecond: f2, nanosecond: y2 } = BalanceTime(h2, T2, u2, p2, f2, y2), g2 *= S2, h2 *= S2, T2 *= S2, u2 *= S2, p2 *= S2, f2 *= S2, y2 *= S2, { deltaDays: g2, hours: h2, minutes: T2, seconds: u2, milliseconds: p2, microseconds: f2, nanoseconds: y2 };
  }
  function DifferenceInstant(t2, o2, n2, r2, a2) {
    const i2 = import_jsbi.default.subtract(o2, t2), s2 = import_jsbi.default.remainder(i2, import_jsbi.default.BigInt(864e11)), l2 = import_jsbi.default.subtract(i2, s2), d2 = RoundNumberToIncrement(s2, Le[r2] * n2, a2), m2 = import_jsbi.default.add(l2, d2), c2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(m2, De)), h2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(import_jsbi.default.divide(m2, De), De)), T2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(import_jsbi.default.divide(m2, ve), De));
    return { seconds: import_jsbi.default.toNumber(import_jsbi.default.divide(m2, Oe)), milliseconds: T2, microseconds: h2, nanoseconds: c2 };
  }
  function DifferenceISODateTime(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, T2, u2, p2, f2, y2, S2, g2, w2 = ye(null)) {
    let I2 = e2, G2 = t2, D2 = o2, { deltaDays: v2, hours: O2, minutes: C2, seconds: E2, milliseconds: b2, microseconds: R2, nanoseconds: M2 } = DifferenceTime(n2, r2, a2, i2, s2, l2, h2, T2, u2, p2, f2, y2);
    const Z2 = DurationSign(0, 0, 0, v2, O2, C2, E2, b2, R2, M2);
    ({ year: I2, month: G2, day: D2 } = BalanceISODate(I2, G2, D2 + v2));
    CompareISODate(d2, m2, c2, I2, G2, D2) === -Z2 && ({ year: I2, month: G2, day: D2 } = BalanceISODate(I2, G2, D2 - Z2), { hours: O2, minutes: C2, seconds: E2, milliseconds: b2, microseconds: R2, nanoseconds: M2 } = BalanceDuration(-Z2, O2, C2, E2, b2, R2, M2, g2));
    const F2 = CreateTemporalDate(I2, G2, D2, S2), Y2 = CreateTemporalDate(d2, m2, c2, S2), P2 = { ...w2, largestUnit: LargerOfTwoTemporalUnits("day", g2) };
    let { years: j2, months: B2, weeks: N2, days: $2 } = CalendarDateUntil(S2, F2, Y2, P2);
    return { days: $2, hours: O2, minutes: C2, seconds: E2, milliseconds: b2, microseconds: R2, nanoseconds: M2 } = BalanceDuration($2, O2, C2, E2, b2, R2, M2, g2), { years: j2, months: B2, weeks: N2, days: $2, hours: O2, minutes: C2, seconds: E2, milliseconds: b2, microseconds: R2, nanoseconds: M2 };
  }
  function DifferenceZonedDateTime(t2, o2, n2, T2, u2, p2) {
    const f2 = import_jsbi.default.subtract(o2, t2);
    if (import_jsbi.default.equal(f2, we))
      return { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
    const y2 = GetIntrinsic("%Temporal.Instant%"), S2 = new y2(t2), g2 = new y2(o2), w2 = BuiltinTimeZoneGetPlainDateTimeFor(n2, S2, T2), I2 = BuiltinTimeZoneGetPlainDateTimeFor(n2, g2, T2);
    let { years: G2, months: D2, weeks: v2, days: O2 } = DifferenceISODateTime(GetSlot(w2, r), GetSlot(w2, a), GetSlot(w2, i), GetSlot(w2, s), GetSlot(w2, l), GetSlot(w2, d), GetSlot(w2, m), GetSlot(w2, c), GetSlot(w2, h), GetSlot(I2, r), GetSlot(I2, a), GetSlot(I2, i), GetSlot(I2, s), GetSlot(I2, l), GetSlot(I2, d), GetSlot(I2, m), GetSlot(I2, c), GetSlot(I2, h), T2, u2, p2);
    const C2 = AddZonedDateTime(S2, n2, T2, G2, D2, v2, 0, 0, 0, 0, 0, 0, 0);
    let E2 = import_jsbi.default.subtract(o2, C2);
    const b2 = CreateTemporalZonedDateTime(C2, n2, T2);
    ({ nanoseconds: E2, days: O2 } = NanosecondsToDays(E2, b2));
    const { hours: R2, minutes: M2, seconds: Z2, milliseconds: F2, microseconds: Y2, nanoseconds: P2 } = BalanceDuration(0, 0, 0, 0, 0, 0, import_jsbi.default.toNumber(E2), "hour");
    return { years: G2, months: D2, weeks: v2, days: O2, hours: R2, minutes: M2, seconds: Z2, milliseconds: F2, microseconds: Y2, nanoseconds: P2 };
  }
  function AddISODate(e2, t2, o2, n2, r2, a2, i2, s2) {
    let l2 = e2, d2 = t2, m2 = o2, c2 = a2, h2 = i2;
    return l2 += n2, d2 += r2, { year: l2, month: d2 } = BalanceISOYearMonth(l2, d2), { year: l2, month: d2, day: m2 } = RegulateISODate(l2, d2, m2, s2), h2 += 7 * c2, m2 += h2, { year: l2, month: d2, day: m2 } = BalanceISODate(l2, d2, m2), { year: l2, month: d2, day: m2 };
  }
  function AddTime(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2) {
    let h2 = e2, T2 = t2, u2 = o2, p2 = n2, f2 = r2, y2 = a2;
    h2 += i2, T2 += s2, u2 += l2, p2 += d2, f2 += m2, y2 += c2;
    let S2 = 0;
    return { deltaDays: S2, hour: h2, minute: T2, second: u2, millisecond: p2, microsecond: f2, nanosecond: y2 } = BalanceTime(h2, T2, u2, p2, f2, y2), { deltaDays: S2, hour: h2, minute: T2, second: u2, millisecond: p2, microsecond: f2, nanosecond: y2 };
  }
  function AddDuration(e2, t2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, f2, y2, S2, g2, w2, I2, G2, D2, v2) {
    const O2 = LargerOfTwoTemporalUnits(DefaultTemporalLargestUnit(e2, t2, n2, r2, a2, i2, s2, l2, d2, m2), DefaultTemporalLargestUnit(c2, h2, f2, y2, S2, g2, w2, I2, G2, D2));
    let C2, E2, b2, R2, M2, Z2, F2, Y2, P2, j2;
    if (v2)
      if (IsTemporalDate(v2)) {
        const o2 = GetIntrinsic("%Temporal.Duration%"), u2 = GetSlot(v2, T), p2 = new o2(e2, t2, n2, r2, 0, 0, 0, 0, 0, 0), B2 = new o2(c2, h2, f2, y2, 0, 0, 0, 0, 0, 0), N2 = u2.dateAdd, $2 = CalendarDateAdd(u2, v2, p2, ye(null), N2), k2 = CalendarDateAdd(u2, $2, B2, ye(null), N2), L2 = LargerOfTwoTemporalUnits("day", O2), U2 = ye(null);
        U2.largestUnit = L2, { years: C2, months: E2, weeks: b2, days: R2 } = CalendarDateUntil(u2, v2, k2, U2), { days: R2, hours: M2, minutes: Z2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 } = BalanceDuration(R2, a2 + S2, i2 + g2, s2 + w2, l2 + I2, d2 + G2, m2 + D2, O2);
      } else {
        const B2 = GetIntrinsic("%Temporal.Instant%"), N2 = GetSlot(v2, p), $2 = GetSlot(v2, T), k2 = AddZonedDateTime(GetSlot(v2, u), N2, $2, e2, t2, n2, r2, a2, i2, s2, l2, d2, m2), L2 = AddZonedDateTime(new B2(k2), N2, $2, c2, h2, f2, y2, S2, g2, w2, I2, G2, D2);
        "year" !== O2 && "month" !== O2 && "week" !== O2 && "day" !== O2 ? (C2 = 0, E2 = 0, b2 = 0, R2 = 0, { seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 } = DifferenceInstant(GetSlot(v2, o), L2, 1, "nanosecond", "halfExpand"), { hours: M2, minutes: Z2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 } = BalanceDuration(0, 0, 0, F2, Y2, P2, j2, O2)) : { years: C2, months: E2, weeks: b2, days: R2, hours: M2, minutes: Z2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 } = DifferenceZonedDateTime(GetSlot(v2, o), L2, N2, $2, O2);
      }
    else {
      if ("year" === O2 || "month" === O2 || "week" === O2)
        throw new RangeError("relativeTo is required for years, months, or weeks arithmetic");
      C2 = E2 = b2 = 0, { days: R2, hours: M2, minutes: Z2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 } = BalanceDuration(r2 + y2, a2 + S2, i2 + g2, s2 + w2, l2 + I2, d2 + G2, m2 + D2, O2);
    }
    return RejectDuration(C2, E2, b2, R2, M2, Z2, F2, Y2, P2, j2), { years: C2, months: E2, weeks: b2, days: R2, hours: M2, minutes: Z2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: j2 };
  }
  function AddInstant(t2, o2, n2, r2, a2, i2, s2) {
    let l2 = we;
    l2 = import_jsbi.default.add(l2, import_jsbi.default.BigInt(s2)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(i2), De)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(a2), ve)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(r2), Oe)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(n2), import_jsbi.default.BigInt(6e10))), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(o2), import_jsbi.default.BigInt(36e11)));
    const d2 = import_jsbi.default.add(t2, l2);
    return ValidateEpochNanoseconds(d2), d2;
  }
  function AddDateTime(e2, t2, o2, n2, s2, l2, d2, m2, c2, h2, T2, u2, p2, f2, y2, S2, g2, w2, I2, G2, D2) {
    let v2 = f2, { deltaDays: O2, hour: C2, minute: E2, second: b2, millisecond: R2, microsecond: M2, nanosecond: Z2 } = AddTime(n2, s2, l2, d2, m2, c2, y2, S2, g2, w2, I2, G2);
    v2 += O2;
    const F2 = GetIntrinsic("%Temporal.Duration%"), Y2 = CalendarDateAdd(h2, CreateTemporalDate(e2, t2, o2, h2), new F2(T2, u2, p2, v2, 0, 0, 0, 0, 0, 0), D2);
    return { year: GetSlot(Y2, r), month: GetSlot(Y2, a), day: GetSlot(Y2, i), hour: C2, minute: E2, second: b2, millisecond: R2, microsecond: M2, nanosecond: Z2 };
  }
  function AddZonedDateTime(e2, t2, n2, T2, u2, p2, f2, y2, S2, g2, w2, I2, G2, D2) {
    const v2 = GetIntrinsic("%Temporal.Duration%");
    if (0 === DurationSign(T2, u2, p2, f2, 0, 0, 0, 0, 0, 0))
      return AddInstant(GetSlot(e2, o), y2, S2, g2, w2, I2, G2);
    const O2 = BuiltinTimeZoneGetPlainDateTimeFor(t2, e2, n2), C2 = CalendarDateAdd(n2, CreateTemporalDate(GetSlot(O2, r), GetSlot(O2, a), GetSlot(O2, i), n2), new v2(T2, u2, p2, f2, 0, 0, 0, 0, 0, 0), D2), E2 = CreateTemporalDateTime(GetSlot(C2, r), GetSlot(C2, a), GetSlot(C2, i), GetSlot(O2, s), GetSlot(O2, l), GetSlot(O2, d), GetSlot(O2, m), GetSlot(O2, c), GetSlot(O2, h), n2);
    return AddInstant(GetSlot(BuiltinTimeZoneGetInstantFor(t2, E2, "compatible"), o), y2, S2, g2, w2, I2, G2);
  }
  function RoundNumberToIncrement(t2, o2, n2) {
    if (1 === o2)
      return t2;
    let { quotient: r2, remainder: a2 } = divmod(t2, import_jsbi.default.BigInt(o2));
    if (import_jsbi.default.equal(a2, we))
      return t2;
    const i2 = import_jsbi.default.lessThan(a2, we) ? -1 : 1;
    switch (n2) {
      case "ceil":
        i2 > 0 && (r2 = import_jsbi.default.add(r2, import_jsbi.default.BigInt(i2)));
        break;
      case "floor":
        i2 < 0 && (r2 = import_jsbi.default.add(r2, import_jsbi.default.BigInt(i2)));
        break;
      case "trunc":
        break;
      case "halfExpand":
        import_jsbi.default.toNumber(abs(import_jsbi.default.multiply(a2, import_jsbi.default.BigInt(2)))) >= o2 && (r2 = import_jsbi.default.add(r2, import_jsbi.default.BigInt(i2)));
    }
    return import_jsbi.default.multiply(r2, import_jsbi.default.BigInt(o2));
  }
  function RoundInstant(t2, o2, n2, r2) {
    let a2 = import_jsbi.default.remainder(t2, import_jsbi.default.BigInt(864e11));
    import_jsbi.default.lessThan(a2, we) && (a2 = import_jsbi.default.add(a2, import_jsbi.default.BigInt(864e11)));
    const i2 = import_jsbi.default.subtract(t2, a2), s2 = RoundNumberToIncrement(a2, Le[n2] * o2, r2);
    return import_jsbi.default.add(i2, s2);
  }
  function RoundISODateTime(e2, t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2 = 864e11) {
    const { deltaDays: T2, hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 } = RoundTime(n2, r2, a2, i2, s2, l2, d2, m2, c2, h2), { year: w2, month: I2, day: G2 } = BalanceISODate(e2, t2, o2 + T2);
    return { year: w2, month: I2, day: G2, hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 };
  }
  function RoundTime(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2 = 864e11) {
    let c2 = we;
    switch (l2) {
      case "day":
      case "hour":
        c2 = import_jsbi.default.BigInt(t2);
      case "minute":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, Ge), import_jsbi.default.BigInt(o2));
      case "second":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, Ge), import_jsbi.default.BigInt(n2));
      case "millisecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(r2));
      case "microsecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(a2));
      case "nanosecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(i2));
    }
    const h2 = "day" === l2 ? m2 : Le[l2], T2 = RoundNumberToIncrement(c2, h2 * s2, d2), u2 = import_jsbi.default.toNumber(import_jsbi.default.divide(T2, import_jsbi.default.BigInt(h2)));
    switch (l2) {
      case "day":
        return { deltaDays: u2, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 };
      case "hour":
        return BalanceTime(u2, 0, 0, 0, 0, 0);
      case "minute":
        return BalanceTime(t2, u2, 0, 0, 0, 0);
      case "second":
        return BalanceTime(t2, o2, u2, 0, 0, 0);
      case "millisecond":
        return BalanceTime(t2, o2, n2, u2, 0, 0);
      case "microsecond":
        return BalanceTime(t2, o2, n2, r2, u2, 0);
      case "nanosecond":
        return BalanceTime(t2, o2, n2, r2, a2, u2);
      default:
        throw new Error(`Invalid unit ${l2}`);
    }
  }
  function DaysUntil(e2, t2) {
    return DifferenceISODate(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), GetSlot(t2, r), GetSlot(t2, a), GetSlot(t2, i), "day").days;
  }
  function MoveRelativeDate(e2, t2, o2) {
    const n2 = CalendarDateAdd(e2, t2, o2, ye(null));
    return { relativeTo: n2, days: DaysUntil(t2, n2) };
  }
  function MoveRelativeZonedDateTime(e2, t2, o2, n2, r2) {
    const a2 = GetSlot(e2, p), i2 = GetSlot(e2, T);
    return CreateTemporalZonedDateTime(AddZonedDateTime(GetSlot(e2, u), a2, i2, t2, o2, n2, r2, 0, 0, 0, 0, 0, 0), a2, i2);
  }
  function AdjustRoundedDurationDays(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, f2, y2) {
    let S2 = t2, g2 = o2, w2 = n2, I2 = r2, G2 = a2, D2 = i2, v2 = s2, O2 = l2, C2 = d2, E2 = m2;
    if (!IsTemporalZonedDateTime(y2) || "year" === h2 || "month" === h2 || "week" === h2 || "day" === h2 || "nanosecond" === h2 && 1 === c2)
      return { years: S2, months: g2, weeks: w2, days: I2, hours: G2, minutes: D2, seconds: v2, milliseconds: O2, microseconds: C2, nanoseconds: E2 };
    let b2 = TotalDurationNanoseconds(0, G2, D2, v2, O2, C2, E2, 0);
    const R2 = me(import_jsbi.default.toNumber(b2)), M2 = GetSlot(y2, p), Z2 = GetSlot(y2, T), F2 = AddZonedDateTime(GetSlot(y2, u), M2, Z2, S2, g2, w2, I2, 0, 0, 0, 0, 0, 0), Y2 = AddZonedDateTime(new (GetIntrinsic("%Temporal.Instant%"))(F2), M2, Z2, 0, 0, 0, R2, 0, 0, 0, 0, 0, 0), P2 = import_jsbi.default.subtract(Y2, F2);
    return import_jsbi.default.greaterThanOrEqual(import_jsbi.default.multiply(import_jsbi.default.subtract(b2, P2), import_jsbi.default.BigInt(R2)), we) && ({ years: S2, months: g2, weeks: w2, days: I2 } = AddDuration(S2, g2, w2, I2, 0, 0, 0, 0, 0, 0, 0, 0, 0, R2, 0, 0, 0, 0, 0, 0, y2), b2 = RoundInstant(import_jsbi.default.subtract(b2, P2), c2, h2, f2), { hours: G2, minutes: D2, seconds: v2, milliseconds: O2, microseconds: C2, nanoseconds: E2 } = BalanceDuration(0, 0, 0, 0, 0, 0, import_jsbi.default.toNumber(b2), "hour")), { years: S2, months: g2, weeks: w2, days: I2, hours: G2, minutes: D2, seconds: v2, milliseconds: O2, microseconds: C2, nanoseconds: E2 };
  }
  function RoundDuration(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, u2, p2) {
    let f2 = t2, y2 = o2, S2 = n2, g2 = r2, w2 = a2, I2 = i2, G2 = s2, D2 = l2, v2 = d2, O2 = import_jsbi.default.BigInt(m2);
    const C2 = GetIntrinsic("%Temporal.Duration%");
    let E2, b2, R2, M2, Z2 = p2;
    if (Z2) {
      if (IsTemporalZonedDateTime(Z2))
        b2 = Z2, Z2 = ToTemporalDate(Z2);
      else if (!IsTemporalDate(Z2))
        throw new TypeError("starting point must be PlainDate or ZonedDateTime");
      E2 = GetSlot(Z2, T);
    }
    if ("year" === h2 || "month" === h2 || "week" === h2 || "day" === h2) {
      let t3, o3, n3;
      O2 = TotalDurationNanoseconds(0, w2, I2, G2, D2, v2, m2, 0), b2 && (t3 = MoveRelativeZonedDateTime(b2, f2, y2, S2, g2)), { days: o3, nanoseconds: O2, dayLengthNs: n3 } = NanosecondsToDays(O2, t3), R2 = import_jsbi.default.BigInt(n3), g2 += o3, w2 = I2 = G2 = D2 = v2 = 0;
    }
    switch (h2) {
      case "year": {
        if (!E2)
          throw new RangeError("A starting point is required for years rounding");
        const t3 = new C2(f2), o3 = E2.dateAdd, n3 = CalendarDateAdd(E2, Z2, t3, ye(null), o3), r3 = CalendarDateAdd(E2, Z2, new C2(f2, y2, S2), ye(null), o3);
        Z2 = n3, g2 += DaysUntil(n3, r3);
        const a3 = CalendarDateAdd(E2, Z2, { days: g2 }, ye(null), o3), i3 = ye(null);
        i3.largestUnit = "year";
        const s3 = CalendarDateUntil(E2, Z2, a3, i3).years;
        f2 += s3;
        const l3 = Z2;
        Z2 = CalendarDateAdd(E2, Z2, { years: s3 }, ye(null), o3);
        g2 -= DaysUntil(l3, Z2);
        const d3 = new C2(g2 < 0 ? -1 : 1);
        let { days: m3 } = MoveRelativeDate(E2, Z2, d3);
        m3 = le(m3);
        const h3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(m3), R2);
        O2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(h3, import_jsbi.default.BigInt(f2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(g2), R2)), O2);
        const T2 = RoundNumberToIncrement(O2, import_jsbi.default.toNumber(import_jsbi.default.multiply(h3, import_jsbi.default.BigInt(c2))), u2);
        M2 = import_jsbi.default.toNumber(O2) / import_jsbi.default.toNumber(h3), f2 = import_jsbi.default.toNumber(import_jsbi.default.divide(T2, h3)), O2 = we, y2 = S2 = g2 = 0;
        break;
      }
      case "month": {
        if (!E2)
          throw new RangeError("A starting point is required for months rounding");
        const t3 = new C2(f2, y2), o3 = E2.dateAdd, n3 = CalendarDateAdd(E2, Z2, t3, ye(null), o3), r3 = CalendarDateAdd(E2, Z2, new C2(f2, y2, S2), ye(null), o3);
        Z2 = n3, g2 += DaysUntil(n3, r3);
        const a3 = me(g2), i3 = new C2(0, g2 < 0 ? -1 : 1);
        let s3;
        for ({ relativeTo: Z2, days: s3 } = MoveRelativeDate(E2, Z2, i3); le(g2) >= le(s3); )
          y2 += a3, g2 -= s3, { relativeTo: Z2, days: s3 } = MoveRelativeDate(E2, Z2, i3);
        s3 = le(s3);
        const l3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(s3), R2);
        O2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(l3, import_jsbi.default.BigInt(y2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(g2), R2)), O2);
        const d3 = RoundNumberToIncrement(O2, import_jsbi.default.toNumber(import_jsbi.default.multiply(l3, import_jsbi.default.BigInt(c2))), u2);
        M2 = import_jsbi.default.toNumber(O2) / import_jsbi.default.toNumber(l3), y2 = import_jsbi.default.toNumber(import_jsbi.default.divide(d3, l3)), O2 = we, S2 = g2 = 0;
        break;
      }
      case "week": {
        if (!E2)
          throw new RangeError("A starting point is required for weeks rounding");
        const t3 = me(g2), o3 = new C2(0, 0, g2 < 0 ? -1 : 1);
        let n3;
        for ({ relativeTo: Z2, days: n3 } = MoveRelativeDate(E2, Z2, o3); le(g2) >= le(n3); )
          S2 += t3, g2 -= n3, { relativeTo: Z2, days: n3 } = MoveRelativeDate(E2, Z2, o3);
        n3 = le(n3);
        const r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(n3), R2);
        O2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(r3, import_jsbi.default.BigInt(S2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(g2), R2)), O2);
        const a3 = RoundNumberToIncrement(O2, import_jsbi.default.toNumber(import_jsbi.default.multiply(r3, import_jsbi.default.BigInt(c2))), u2);
        M2 = import_jsbi.default.toNumber(O2) / import_jsbi.default.toNumber(r3), S2 = import_jsbi.default.toNumber(import_jsbi.default.divide(a3, r3)), O2 = we, g2 = 0;
        break;
      }
      case "day": {
        const t3 = R2;
        O2 = import_jsbi.default.add(import_jsbi.default.multiply(t3, import_jsbi.default.BigInt(g2)), O2);
        const o3 = RoundNumberToIncrement(O2, import_jsbi.default.toNumber(import_jsbi.default.multiply(t3, import_jsbi.default.BigInt(c2))), u2);
        M2 = import_jsbi.default.toNumber(O2) / import_jsbi.default.toNumber(t3), g2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, t3)), O2 = we;
        break;
      }
      case "hour": {
        const t3 = 36e11;
        let o3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(w2), import_jsbi.default.BigInt(36e11));
        o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(I2), import_jsbi.default.BigInt(6e10))), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Oe)), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve)), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), o3 = import_jsbi.default.add(o3, O2), M2 = import_jsbi.default.toNumber(o3) / t3;
        const n3 = RoundNumberToIncrement(o3, t3 * c2, u2);
        w2 = import_jsbi.default.toNumber(import_jsbi.default.divide(n3, import_jsbi.default.BigInt(t3))), O2 = we, I2 = G2 = D2 = v2 = 0;
        break;
      }
      case "minute": {
        const t3 = 6e10;
        let o3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(I2), import_jsbi.default.BigInt(6e10));
        o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Oe)), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve)), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), o3 = import_jsbi.default.add(o3, O2), M2 = import_jsbi.default.toNumber(o3) / t3;
        const n3 = RoundNumberToIncrement(o3, t3 * c2, u2);
        I2 = import_jsbi.default.toNumber(import_jsbi.default.divide(n3, import_jsbi.default.BigInt(t3))), O2 = we, G2 = D2 = v2 = 0;
        break;
      }
      case "second": {
        const t3 = 1e9;
        let o3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Oe);
        o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve)), o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), o3 = import_jsbi.default.add(o3, O2), M2 = import_jsbi.default.toNumber(o3) / t3;
        const n3 = RoundNumberToIncrement(o3, t3 * c2, u2);
        G2 = import_jsbi.default.toNumber(import_jsbi.default.divide(n3, import_jsbi.default.BigInt(t3))), O2 = we, D2 = v2 = 0;
        break;
      }
      case "millisecond": {
        const t3 = 1e6;
        let o3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve);
        o3 = import_jsbi.default.add(o3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), o3 = import_jsbi.default.add(o3, O2), M2 = import_jsbi.default.toNumber(o3) / t3;
        const n3 = RoundNumberToIncrement(o3, t3 * c2, u2);
        D2 = import_jsbi.default.toNumber(import_jsbi.default.divide(n3, import_jsbi.default.BigInt(t3))), O2 = we, v2 = 0;
        break;
      }
      case "microsecond": {
        const t3 = 1e3;
        let o3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De);
        o3 = import_jsbi.default.add(o3, O2), M2 = import_jsbi.default.toNumber(o3) / t3;
        const n3 = RoundNumberToIncrement(o3, t3 * c2, u2);
        v2 = import_jsbi.default.toNumber(import_jsbi.default.divide(n3, import_jsbi.default.BigInt(t3))), O2 = we;
        break;
      }
      case "nanosecond":
        M2 = import_jsbi.default.toNumber(O2), O2 = RoundNumberToIncrement(O2, c2, u2);
    }
    return { years: f2, months: y2, weeks: S2, days: g2, hours: w2, minutes: I2, seconds: G2, milliseconds: D2, microseconds: v2, nanoseconds: import_jsbi.default.toNumber(O2), total: M2 };
  }
  function CompareISODate(e2, t2, o2, n2, r2, a2) {
    for (const [i2, s2] of [[e2, n2], [t2, r2], [o2, a2]])
      if (i2 !== s2)
        return ComparisonResult(i2 - s2);
    return 0;
  }
  function NonNegativeModulo(e2, t2) {
    let o2 = e2 % t2;
    return Se(o2, -0) ? 0 : (o2 < 0 && (o2 += t2), o2);
  }
  function ToBigIntExternal(e2) {
    const t2 = ToBigInt(e2);
    return void 0 !== globalThis.BigInt ? globalThis.BigInt(t2.toString(10)) : t2;
  }
  function ToBigInt(t2) {
    if (t2 instanceof import_jsbi.default)
      return t2;
    let o2 = t2;
    if ("object" == typeof t2) {
      const e2 = t2[Symbol.toPrimitive];
      e2 && "function" == typeof e2 && (o2 = ge(e2, t2, ["number"]));
    }
    switch (typeof o2) {
      case "undefined":
      case "object":
      case "number":
      case "symbol":
      default:
        throw new TypeError(`cannot convert ${typeof t2} to bigint`);
      case "string":
        if (!o2.match(/^\s*(?:[+-]?\d+\s*)?$/))
          throw new SyntaxError("invalid BigInt syntax");
      case "bigint":
        try {
          return import_jsbi.default.BigInt(o2.toString());
        } catch (e2) {
          if (e2 instanceof Error && e2.message.startsWith("Invalid integer"))
            throw new SyntaxError(e2.message);
          throw e2;
        }
      case "boolean":
        return o2 ? Ie : we;
    }
  }
  var $e = (() => {
    let t2 = import_jsbi.default.BigInt(Date.now() % 1e6);
    return () => {
      const o2 = import_jsbi.default.BigInt(Date.now()), n2 = import_jsbi.default.add(import_jsbi.default.multiply(o2, ve), t2);
      return t2 = import_jsbi.default.divide(o2, ve), import_jsbi.default.greaterThan(n2, Re) ? Re : import_jsbi.default.lessThan(n2, be) ? be : n2;
    };
  })();
  function ComparisonResult(e2) {
    return e2 < 0 ? -1 : e2 > 0 ? 1 : e2;
  }
  function GetOptionsObject(e2) {
    if (void 0 === e2)
      return ye(null);
    if (IsObject(e2) && null !== e2)
      return e2;
    throw new TypeError("Options parameter must be an object, not " + (null === e2 ? "null" : typeof e2));
  }
  function CreateOnePropObject(e2, t2) {
    const o2 = ye(null);
    return o2[e2] = t2, o2;
  }
  function GetOption(e2, t2, o2, n2) {
    let r2 = e2[t2];
    if (void 0 !== r2) {
      if (r2 = ToString(r2), !o2.includes(r2))
        throw new RangeError(`${t2} must be one of ${o2.join(", ")}, not ${r2}`);
      return r2;
    }
    return n2;
  }
  var ke = new RegExp(`^${J.source}$`);
  function bisect(t2, o2, n2, r2 = t2(o2), a2 = t2(n2)) {
    let i2 = import_jsbi.default.BigInt(o2), s2 = import_jsbi.default.BigInt(n2), l2 = r2, d2 = a2;
    for (; import_jsbi.default.greaterThan(import_jsbi.default.subtract(s2, i2), Ie); ) {
      const o3 = import_jsbi.default.divide(import_jsbi.default.add(i2, s2), import_jsbi.default.BigInt(2)), n3 = t2(o3);
      if (n3 === l2)
        i2 = o3, l2 = n3;
      else {
        if (n3 !== d2)
          throw new Error(`invalid state in bisection ${l2} - ${n3} - ${d2}`);
        s2 = o3, d2 = n3;
      }
    }
    return s2;
  }
  var Le = { hour: 36e11, minute: 6e10, second: 1e9, millisecond: 1e6, microsecond: 1e3, nanosecond: 1 };
  var Ue = Symbol("date");
  var Ae = Symbol("ym");
  var xe = Symbol("md");
  var He = Symbol("time");
  var qe = Symbol("datetime");
  var We = Symbol("zoneddatetime");
  var ze = Symbol("instant");
  var Je = Symbol("original");
  var Ve = Symbol("timezone");
  var _e = Symbol("timezone-id-given");
  var Xe = Symbol("calendar-id");
  var Ke = Symbol("locale");
  var Qe = Symbol("options");
  var descriptor = (e2) => ({ value: e2, enumerable: true, writable: false, configurable: true });
  var et = globalThis.Intl.DateTimeFormat;
  var tt = Object.assign;
  var ot = Object.prototype.hasOwnProperty;
  var nt = Reflect.apply;
  function getPropLazy(e2, t2) {
    let o2 = e2[t2];
    return "function" == typeof o2 && (o2 = new et(e2[Ke], o2(e2[Qe])), e2[t2] = o2), o2;
  }
  function getResolvedTimeZoneLazy(e2) {
    let t2 = e2[Ve];
    return "string" == typeof t2 && (t2 = ToTemporalTimeZone(t2), e2[Ve] = t2), t2;
  }
  function DateTimeFormatImpl(e2, t2 = {}) {
    if (!(this instanceof DateTimeFormatImpl))
      return new DateTimeFormatImpl(e2, t2);
    const o2 = void 0 !== t2, n2 = o2 ? tt({}, t2) : {}, r2 = new et(e2, n2), a2 = r2.resolvedOptions();
    if (o2) {
      const e3 = tt({}, a2);
      for (const t3 in e3)
        nt(ot, n2, [t3]) || delete e3[t3];
      this[Qe] = e3;
    } else
      this[Qe] = n2;
    this[_e] = n2.timeZone ? n2.timeZone : null, this[Ke] = a2.locale, this[Je] = r2, this[Ve] = a2.timeZone, this[Xe] = a2.calendar, this[Ue] = dateAmend, this[Ae] = yearMonthAmend, this[xe] = monthDayAmend, this[He] = timeAmend, this[qe] = datetimeAmend, this[We] = zonedDateTimeAmend, this[ze] = instantAmend;
  }
  Object.defineProperty(DateTimeFormatImpl, "name", { writable: true, value: "DateTimeFormat" }), DateTimeFormatImpl.supportedLocalesOf = function(e2, t2) {
    return et.supportedLocalesOf(e2, t2);
  };
  var rt = { resolvedOptions: descriptor(function resolvedOptions() {
    return this[Je].resolvedOptions();
  }), format: descriptor(function format(e2, ...t2) {
    let { instant: o2, formatter: n2, timeZone: r2 } = extractOverrides(e2, this);
    if (o2 && n2)
      return n2 = adjustFormatterTimeZone(n2, r2), n2.format(o2.epochMilliseconds);
    return this[Je].format(e2, ...t2);
  }), formatRange: descriptor(function formatRange(e2, t2) {
    if (isTemporalObject(e2) || isTemporalObject(t2)) {
      if (!sameTemporalType(e2, t2))
        throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");
      const { instant: o2, formatter: n2, timeZone: r2 } = extractOverrides(e2, this), { instant: a2, formatter: i2, timeZone: s2 } = extractOverrides(t2, this);
      if (r2 && s2 && r2 !== s2)
        throw new RangeError("cannot format range between different time zones");
      if (o2 && a2 && n2 && i2 && n2 === i2) {
        return adjustFormatterTimeZone(n2, r2).formatRange(o2.epochMilliseconds, a2.epochMilliseconds);
      }
    }
    return this[Je].formatRange(e2, t2);
  }) };
  "formatToParts" in et.prototype && (rt.formatToParts = descriptor(function formatToParts(e2, ...t2) {
    let { instant: o2, formatter: n2, timeZone: r2 } = extractOverrides(e2, this);
    if (o2 && n2)
      return n2 = adjustFormatterTimeZone(n2, r2), n2.formatToParts(o2.epochMilliseconds);
    return this[Je].formatToParts(e2, ...t2);
  })), "formatRangeToParts" in et.prototype && (rt.formatRangeToParts = descriptor(function formatRangeToParts(e2, t2) {
    if (isTemporalObject(e2) || isTemporalObject(t2)) {
      if (!sameTemporalType(e2, t2))
        throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");
      const { instant: o2, formatter: n2, timeZone: r2 } = extractOverrides(e2, this), { instant: a2, formatter: i2, timeZone: s2 } = extractOverrides(t2, this);
      if (r2 && s2 && r2 !== s2)
        throw new RangeError("cannot format range between different time zones");
      if (o2 && a2 && n2 && i2 && n2 === i2) {
        return adjustFormatterTimeZone(n2, r2).formatRangeToParts(o2.epochMilliseconds, a2.epochMilliseconds);
      }
    }
    return this[Je].formatRangeToParts(e2, t2);
  })), DateTimeFormatImpl.prototype = Object.create(et.prototype, rt), Object.defineProperty(DateTimeFormatImpl, "prototype", { writable: false, enumerable: false, configurable: false });
  var at = DateTimeFormatImpl;
  function adjustFormatterTimeZone(e2, t2) {
    if (!t2)
      return e2;
    const o2 = e2.resolvedOptions();
    return o2.timeZone === t2 ? e2 : ((o2.dateStyle || o2.timeStyle) && (delete o2.weekday, delete o2.era, delete o2.year, delete o2.month, delete o2.day, delete o2.hour, delete o2.minute, delete o2.second, delete o2.timeZoneName, delete o2.hourCycle, delete o2.hour12, delete o2.dayPeriod), new et(o2.locale, { ...o2, timeZone: t2 }));
  }
  function amend(e2 = {}, t2 = {}) {
    const o2 = tt({}, e2);
    for (const e3 of ["year", "month", "day", "hour", "minute", "second", "weekday", "dayPeriod", "timeZoneName", "dateStyle", "timeStyle"])
      o2[e3] = e3 in t2 ? t2[e3] : o2[e3], false !== o2[e3] && void 0 !== o2[e3] || delete o2[e3];
    return o2;
  }
  function timeAmend(e2) {
    let t2 = amend(e2, { year: false, month: false, day: false, weekday: false, timeZoneName: false, dateStyle: false });
    return hasTimeOptions(t2) || (t2 = tt({}, t2, { hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function yearMonthAmend(e2) {
    let t2 = amend(e2, { day: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "year" in t2 || "month" in t2 || (t2 = tt(t2, { year: "numeric", month: "numeric" })), t2;
  }
  function monthDayAmend(e2) {
    let t2 = amend(e2, { year: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "month" in t2 || "day" in t2 || (t2 = tt({}, t2, { month: "numeric", day: "numeric" })), t2;
  }
  function dateAmend(e2) {
    let t2 = amend(e2, { hour: false, minute: false, second: false, dayPeriod: false, timeZoneName: false, timeStyle: false });
    return hasDateOptions(t2) || (t2 = tt({}, t2, { year: "numeric", month: "numeric", day: "numeric" })), t2;
  }
  function datetimeAmend(e2) {
    let t2 = amend(e2, { timeZoneName: false });
    return hasTimeOptions(t2) || hasDateOptions(t2) || (t2 = tt({}, t2, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function zonedDateTimeAmend(e2) {
    let t2 = e2;
    return hasTimeOptions(t2) || hasDateOptions(t2) || (t2 = tt({}, t2, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), void 0 === t2.timeZoneName && (t2.timeZoneName = "short")), t2;
  }
  function instantAmend(e2) {
    let t2 = e2;
    return hasTimeOptions(t2) || hasDateOptions(t2) || (t2 = tt({}, t2, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function hasDateOptions(e2) {
    return "year" in e2 || "month" in e2 || "day" in e2 || "weekday" in e2 || "dateStyle" in e2;
  }
  function hasTimeOptions(e2) {
    return "hour" in e2 || "minute" in e2 || "second" in e2 || "timeStyle" in e2 || "dayPeriod" in e2;
  }
  function isTemporalObject(e2) {
    return IsTemporalDate(e2) || IsTemporalTime(e2) || IsTemporalDateTime(e2) || IsTemporalZonedDateTime(e2) || IsTemporalYearMonth(e2) || IsTemporalMonthDay(e2) || IsTemporalInstant(e2);
  }
  function sameTemporalType(e2, t2) {
    return !(!isTemporalObject(e2) || !isTemporalObject(t2)) && (!(IsTemporalTime(e2) && !IsTemporalTime(t2)) && (!(IsTemporalDate(e2) && !IsTemporalDate(t2)) && (!(IsTemporalDateTime(e2) && !IsTemporalDateTime(t2)) && (!(IsTemporalZonedDateTime(e2) && !IsTemporalZonedDateTime(t2)) && (!(IsTemporalYearMonth(e2) && !IsTemporalYearMonth(t2)) && (!(IsTemporalMonthDay(e2) && !IsTemporalMonthDay(t2)) && !(IsTemporalInstant(e2) && !IsTemporalInstant(t2))))))));
  }
  function extractOverrides(e2, t2) {
    const o2 = GetIntrinsic("%Temporal.PlainDateTime%");
    if (IsTemporalTime(e2)) {
      const n2 = new o2(1970, 1, 1, GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), t2[Xe]);
      return { instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(t2), n2, "compatible"), formatter: getPropLazy(t2, He) };
    }
    if (IsTemporalYearMonth(e2)) {
      const n2 = GetSlot(e2, r), s2 = GetSlot(e2, a), l2 = GetSlot(e2, i), d2 = ToString(GetSlot(e2, T));
      if (d2 !== t2[Xe])
        throw new RangeError(`cannot format PlainYearMonth with calendar ${d2} in locale with calendar ${t2[Xe]}`);
      const m2 = new o2(n2, s2, l2, 12, 0, 0, 0, 0, 0, d2);
      return { instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(t2), m2, "compatible"), formatter: getPropLazy(t2, Ae) };
    }
    if (IsTemporalMonthDay(e2)) {
      const n2 = GetSlot(e2, r), s2 = GetSlot(e2, a), l2 = GetSlot(e2, i), d2 = ToString(GetSlot(e2, T));
      if (d2 !== t2[Xe])
        throw new RangeError(`cannot format PlainMonthDay with calendar ${d2} in locale with calendar ${t2[Xe]}`);
      const m2 = new o2(n2, s2, l2, 12, 0, 0, 0, 0, 0, d2);
      return { instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(t2), m2, "compatible"), formatter: getPropLazy(t2, xe) };
    }
    if (IsTemporalDate(e2)) {
      const n2 = GetSlot(e2, r), s2 = GetSlot(e2, a), l2 = GetSlot(e2, i), d2 = ToString(GetSlot(e2, T));
      if ("iso8601" !== d2 && d2 !== t2[Xe])
        throw new RangeError(`cannot format PlainDate with calendar ${d2} in locale with calendar ${t2[Xe]}`);
      const m2 = new o2(n2, s2, l2, 12, 0, 0, 0, 0, 0, t2[Xe]);
      return { instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(t2), m2, "compatible"), formatter: getPropLazy(t2, Ue) };
    }
    if (IsTemporalDateTime(e2)) {
      const n2 = GetSlot(e2, r), u2 = GetSlot(e2, a), p2 = GetSlot(e2, i), f2 = GetSlot(e2, s), y2 = GetSlot(e2, l), S2 = GetSlot(e2, d), g2 = GetSlot(e2, m), w2 = GetSlot(e2, c), I2 = GetSlot(e2, h), G2 = ToString(GetSlot(e2, T));
      if ("iso8601" !== G2 && G2 !== t2[Xe])
        throw new RangeError(`cannot format PlainDateTime with calendar ${G2} in locale with calendar ${t2[Xe]}`);
      let D2 = e2;
      return "iso8601" === G2 && (D2 = new o2(n2, u2, p2, f2, y2, S2, g2, w2, I2, t2[Xe])), { instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(t2), D2, "compatible"), formatter: getPropLazy(t2, qe) };
    }
    if (IsTemporalZonedDateTime(e2)) {
      const o3 = ToString(GetSlot(e2, T));
      if ("iso8601" !== o3 && o3 !== t2[Xe])
        throw new RangeError(`cannot format ZonedDateTime with calendar ${o3} in locale with calendar ${t2[Xe]}`);
      const n2 = ToString(GetSlot(e2, p));
      if (t2[_e] && t2[_e] !== n2)
        throw new RangeError(`timeZone option ${t2[_e]} doesn't match actual time zone ${n2}`);
      return { instant: GetSlot(e2, u), formatter: getPropLazy(t2, We), timeZone: n2 };
    }
    return IsTemporalInstant(e2) ? { instant: e2, formatter: getPropLazy(t2, ze) } : {};
  }
  var it = Object.freeze({ __proto__: null, DateTimeFormat: at });
  var st = ["year", "month", "week", "day"];
  var lt = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 };
  var Instant = class {
    constructor(e2) {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      const t2 = ToBigInt(e2);
      ValidateEpochNanoseconds(t2), CreateSlots(this), SetSlot(this, o, t2);
    }
    get epochSeconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, o);
      return import_jsbi.default.toNumber(import_jsbi.default.divide(t2, Oe));
    }
    get epochMilliseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = import_jsbi.default.BigInt(GetSlot(this, o));
      return import_jsbi.default.toNumber(import_jsbi.default.divide(t2, ve));
    }
    get epochMicroseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = import_jsbi.default.BigInt(GetSlot(this, o));
      return ToBigIntExternal(import_jsbi.default.divide(t2, De));
    }
    get epochNanoseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(import_jsbi.default.BigInt(GetSlot(this, o)));
    }
    add(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const { hours: t2, minutes: n2, seconds: r2, milliseconds: a2, microseconds: i2, nanoseconds: s2 } = ToLimitedTemporalDuration(e2, ["years", "months", "weeks", "days"]), l2 = AddInstant(GetSlot(this, o), t2, n2, r2, a2, i2, s2);
      return new Instant(l2);
    }
    subtract(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const { hours: t2, minutes: n2, seconds: r2, milliseconds: a2, microseconds: i2, nanoseconds: s2 } = ToLimitedTemporalDuration(e2, ["years", "months", "weeks", "days"]), l2 = AddInstant(GetSlot(this, o), -t2, -n2, -r2, -a2, -i2, -s2);
      return new Instant(l2);
    }
    until(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalInstant(e2), r2 = GetOptionsObject(t2), a2 = ToSmallestTemporalUnit(r2, "nanosecond", st), i2 = LargerOfTwoTemporalUnits("second", a2), s2 = ToLargestTemporalUnit(r2, "auto", st, i2);
      ValidateTemporalUnitRange(s2, a2);
      const l2 = ToTemporalRoundingMode(r2, "trunc"), d2 = ToTemporalRoundingIncrement(r2, lt[a2], false), m2 = GetSlot(this, o), c2 = GetSlot(n2, o);
      let h2, T2, { seconds: u2, milliseconds: p2, microseconds: f2, nanoseconds: y2 } = DifferenceInstant(m2, c2, d2, a2, l2);
      ({ hours: h2, minutes: T2, seconds: u2, milliseconds: p2, microseconds: f2, nanoseconds: y2 } = BalanceDuration(0, 0, 0, u2, p2, f2, y2, s2));
      return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, h2, T2, u2, p2, f2, y2);
    }
    since(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalInstant(e2), r2 = GetOptionsObject(t2), a2 = ToSmallestTemporalUnit(r2, "nanosecond", st), i2 = LargerOfTwoTemporalUnits("second", a2), s2 = ToLargestTemporalUnit(r2, "auto", st, i2);
      ValidateTemporalUnitRange(s2, a2);
      const l2 = ToTemporalRoundingMode(r2, "trunc"), d2 = ToTemporalRoundingIncrement(r2, lt[a2], false), m2 = GetSlot(n2, o), c2 = GetSlot(this, o);
      let h2, T2, { seconds: u2, milliseconds: p2, microseconds: f2, nanoseconds: y2 } = DifferenceInstant(m2, c2, d2, a2, l2);
      ({ hours: h2, minutes: T2, seconds: u2, milliseconds: p2, microseconds: f2, nanoseconds: y2 } = BalanceDuration(0, 0, 0, u2, p2, f2, y2, s2));
      return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, h2, T2, u2, p2, f2, y2);
    }
    round(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), n2 = ToSmallestTemporalUnit(t2, void 0, st);
      if (void 0 === n2)
        throw new RangeError("smallestUnit is required");
      const r2 = ToTemporalRoundingMode(t2, "halfExpand"), a2 = ToTemporalRoundingIncrement(t2, { hour: 24, minute: 1440, second: 86400, millisecond: 864e5, microsecond: 864e8, nanosecond: 864e11 }[n2], true), i2 = RoundInstant(GetSlot(this, o), a2, n2, r2);
      return new Instant(i2);
    }
    equals(t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalInstant(t2), r2 = GetSlot(this, o), a2 = GetSlot(n2, o);
      return import_jsbi.default.equal(import_jsbi.default.BigInt(r2), import_jsbi.default.BigInt(a2));
    }
    toString(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2);
      let n2 = t2.timeZone;
      void 0 !== n2 && (n2 = ToTemporalTimeZone(n2));
      const { precision: r2, unit: a2, increment: i2 } = ToSecondsStringPrecision(t2), s2 = ToTemporalRoundingMode(t2, "trunc"), l2 = RoundInstant(GetSlot(this, o), i2, a2, s2);
      return TemporalInstantToString(new Instant(l2), n2, r2);
    }
    toJSON() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return TemporalInstantToString(this, void 0, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.Instant");
    }
    toZonedDateTime(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument in toZonedDateTime");
      const t2 = e2.calendar;
      if (void 0 === t2)
        throw new TypeError("missing calendar property in toZonedDateTime");
      const n2 = ToTemporalCalendar(t2), r2 = e2.timeZone;
      if (void 0 === r2)
        throw new TypeError("missing timeZone property in toZonedDateTime");
      const a2 = ToTemporalTimeZone(r2);
      return CreateTemporalZonedDateTime(GetSlot(this, o), a2, n2);
    }
    toZonedDateTimeISO(e2) {
      let t2 = e2;
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      if (IsObject(t2)) {
        const e3 = t2.timeZone;
        void 0 !== e3 && (t2 = e3);
      }
      const n2 = ToTemporalTimeZone(t2), r2 = GetISO8601Calendar();
      return CreateTemporalZonedDateTime(GetSlot(this, o), n2, r2);
    }
    static fromEpochSeconds(t2) {
      const o2 = ToNumber(t2), n2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(o2), Oe);
      return ValidateEpochNanoseconds(n2), new Instant(n2);
    }
    static fromEpochMilliseconds(t2) {
      const o2 = ToNumber(t2), n2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(o2), ve);
      return ValidateEpochNanoseconds(n2), new Instant(n2);
    }
    static fromEpochMicroseconds(t2) {
      const o2 = ToBigInt(t2), n2 = import_jsbi.default.multiply(o2, De);
      return ValidateEpochNanoseconds(n2), new Instant(n2);
    }
    static fromEpochNanoseconds(e2) {
      const t2 = ToBigInt(e2);
      return ValidateEpochNanoseconds(t2), new Instant(t2);
    }
    static from(e2) {
      return IsTemporalInstant(e2) ? new Instant(GetSlot(e2, o)) : ToTemporalInstant(e2);
    }
    static compare(t2, n2) {
      const r2 = ToTemporalInstant(t2), a2 = ToTemporalInstant(n2), i2 = GetSlot(r2, o), s2 = GetSlot(a2, o);
      return import_jsbi.default.lessThan(i2, s2) ? -1 : import_jsbi.default.greaterThan(i2, s2) ? 1 : 0;
    }
  };
  MakeIntrinsicClass(Instant, "Temporal.Instant");
  var dt = ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];
  var PlainDate = class {
    constructor(e2, t2, o2, n2 = GetISO8601Calendar()) {
      const r2 = ToIntegerThrowOnInfinity(e2), a2 = ToIntegerThrowOnInfinity(t2), i2 = ToIntegerThrowOnInfinity(o2), s2 = ToTemporalCalendar(n2);
      if (arguments.length < 3)
        throw new RangeError("missing argument: isoYear, isoMonth and isoDay are required");
      CreateTemporalDateSlots(this, r2, a2, i2, s2);
    }
    get calendar() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get era() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, T), this);
    }
    get eraYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, T), this);
    }
    get year() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, T), this);
    }
    get month() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, T), this);
    }
    get monthCode() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, T), this);
    }
    get day() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, T), this);
    }
    get dayOfWeek() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, T), this);
    }
    get dayOfYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, T), this);
    }
    get weekOfYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, T), this);
    }
    get daysInWeek() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, T), this);
    }
    get daysInMonth() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, T), this);
    }
    get daysInYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, T), this);
    }
    get monthsInYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, T), this);
    }
    get inLeapYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, T), this);
    }
    with(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = GetSlot(this, T), n2 = CalendarFields(o2, ["day", "month", "monthCode", "year"]), r2 = ToPartialRecord(e2, n2);
      if (!r2)
        throw new TypeError("invalid date-like");
      let a2 = ToTemporalDateFields(this, n2);
      a2 = CalendarMergeFields(o2, a2, r2), a2 = ToTemporalDateFields(a2, n2);
      return DateFromFields(o2, a2, GetOptionsObject(t2));
    }
    withCalendar(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendar(e2);
      return new PlainDate(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), t2);
    }
    add(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDuration(e2), n2 = GetOptionsObject(t2);
      return CalendarDateAdd(GetSlot(this, T), this, o2, n2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const o2 = CreateNegatedTemporalDuration(ToTemporalDuration(e2)), n2 = GetOptionsObject(t2);
      return CalendarDateAdd(GetSlot(this, T), this, o2, n2);
    }
    until(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDate(e2), n2 = GetSlot(this, T), r2 = GetSlot(o2, T), a2 = ToString(n2), i2 = ToString(r2);
      if (a2 !== i2)
        throw new RangeError(`cannot compute difference between dates of ${a2} and ${i2} calendars`);
      const s2 = GetOptionsObject(t2), l2 = ToSmallestTemporalUnit(s2, "day", dt), d2 = LargerOfTwoTemporalUnits("day", l2), m2 = ToLargestTemporalUnit(s2, "auto", dt, d2);
      ValidateTemporalUnitRange(m2, l2);
      const c2 = ToTemporalRoundingMode(s2, "trunc"), h2 = ToTemporalRoundingIncrement(s2, void 0, false), u2 = CalendarDateUntil(n2, this, o2, { ...s2, largestUnit: m2 });
      if ("day" === l2 && 1 === h2)
        return u2;
      let { years: p2, months: f2, weeks: y2, days: S2 } = u2;
      ({ years: p2, months: f2, weeks: y2, days: S2 } = RoundDuration(p2, f2, y2, S2, 0, 0, 0, 0, 0, 0, h2, l2, c2, this));
      return new (GetIntrinsic("%Temporal.Duration%"))(p2, f2, y2, S2, 0, 0, 0, 0, 0, 0);
    }
    since(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDate(e2), n2 = GetSlot(this, T), r2 = GetSlot(o2, T), a2 = ToString(n2), i2 = ToString(r2);
      if (a2 !== i2)
        throw new RangeError(`cannot compute difference between dates of ${a2} and ${i2} calendars`);
      const s2 = GetOptionsObject(t2), l2 = ToSmallestTemporalUnit(s2, "day", dt), d2 = LargerOfTwoTemporalUnits("day", l2), m2 = ToLargestTemporalUnit(s2, "auto", dt, d2);
      ValidateTemporalUnitRange(m2, l2);
      const c2 = ToTemporalRoundingMode(s2, "trunc"), h2 = ToTemporalRoundingIncrement(s2, void 0, false), u2 = { ...s2, largestUnit: m2 };
      let { years: p2, months: f2, weeks: y2, days: S2 } = CalendarDateUntil(n2, this, o2, u2);
      const g2 = GetIntrinsic("%Temporal.Duration%");
      return "day" === l2 && 1 === h2 || ({ years: p2, months: f2, weeks: y2, days: S2 } = RoundDuration(p2, f2, y2, S2, 0, 0, 0, 0, 0, 0, h2, l2, NegateTemporalRoundingMode(c2), this)), new g2(-p2, -f2, -y2, -S2, 0, 0, 0, 0, 0, 0);
    }
    equals(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      for (const e3 of [r, a, i]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, T), GetSlot(t2, T));
    }
    toString(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return TemporalDateToString(this, ToShowCalendarOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return TemporalDateToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDate");
    }
    toPlainDateTime(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, r), o2 = GetSlot(this, a), n2 = GetSlot(this, i), u2 = GetSlot(this, T);
      if (void 0 === e2)
        return CreateTemporalDateTime(t2, o2, n2, 0, 0, 0, 0, 0, 0, u2);
      const p2 = ToTemporalTime(e2);
      return CreateTemporalDateTime(t2, o2, n2, GetSlot(p2, s), GetSlot(p2, l), GetSlot(p2, d), GetSlot(p2, m), GetSlot(p2, c), GetSlot(p2, h), u2);
    }
    toZonedDateTime(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      let t2, n2;
      if (IsObject(e2)) {
        const o2 = e2.timeZone;
        void 0 === o2 ? t2 = ToTemporalTimeZone(e2) : (t2 = ToTemporalTimeZone(o2), n2 = e2.plainTime);
      } else
        t2 = ToTemporalTimeZone(e2);
      const u2 = GetSlot(this, r), p2 = GetSlot(this, a), f2 = GetSlot(this, i), y2 = GetSlot(this, T);
      let S2 = 0, g2 = 0, w2 = 0, I2 = 0, G2 = 0, D2 = 0;
      void 0 !== n2 && (n2 = ToTemporalTime(n2), S2 = GetSlot(n2, s), g2 = GetSlot(n2, l), w2 = GetSlot(n2, d), I2 = GetSlot(n2, m), G2 = GetSlot(n2, c), D2 = GetSlot(n2, h));
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(t2, CreateTemporalDateTime(u2, p2, f2, S2, g2, w2, I2, G2, D2, y2), "compatible"), o), t2, y2);
    }
    toPlainYearMonth() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return YearMonthFromFields(e2, ToTemporalYearMonthFields(this, CalendarFields(e2, ["monthCode", "year"])));
    }
    toPlainMonthDay() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return MonthDayFromFields(e2, ToTemporalMonthDayFields(this, CalendarFields(e2, ["day", "monthCode"])));
    }
    getISOFields() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, T), isoDay: GetSlot(this, i), isoMonth: GetSlot(this, a), isoYear: GetSlot(this, r) };
    }
    static from(e2, t2) {
      const o2 = GetOptionsObject(t2);
      return IsTemporalDate(e2) ? (ToTemporalOverflow(o2), CreateTemporalDate(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), GetSlot(e2, T))) : ToTemporalDate(e2, o2);
    }
    static compare(e2, t2) {
      const o2 = ToTemporalDate(e2), n2 = ToTemporalDate(t2);
      return CompareISODate(GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(n2, r), GetSlot(n2, a), GetSlot(n2, i));
    }
  };
  MakeIntrinsicClass(PlainDate, "Temporal.PlainDate");
  var PlainDateTime = class {
    constructor(e2, t2, o2, n2 = 0, r2 = 0, a2 = 0, i2 = 0, s2 = 0, l2 = 0, d2 = GetISO8601Calendar()) {
      const m2 = ToIntegerThrowOnInfinity(e2), c2 = ToIntegerThrowOnInfinity(t2), h2 = ToIntegerThrowOnInfinity(o2), T2 = ToIntegerThrowOnInfinity(n2), u2 = ToIntegerThrowOnInfinity(r2), p2 = ToIntegerThrowOnInfinity(a2), f2 = ToIntegerThrowOnInfinity(i2), y2 = ToIntegerThrowOnInfinity(s2), S2 = ToIntegerThrowOnInfinity(l2), g2 = ToTemporalCalendar(d2);
      if (arguments.length < 3)
        throw new RangeError("missing argument: isoYear, isoMonth and isoDay are required");
      CreateTemporalDateTimeSlots(this, m2, c2, h2, T2, u2, p2, f2, y2, S2, g2);
    }
    get calendar() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get year() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, T), this);
    }
    get month() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, T), this);
    }
    get monthCode() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, T), this);
    }
    get day() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, T), this);
    }
    get hour() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, s);
    }
    get minute() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, l);
    }
    get second() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, d);
    }
    get millisecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, m);
    }
    get microsecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, c);
    }
    get nanosecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, h);
    }
    get era() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, T), this);
    }
    get eraYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, T), this);
    }
    get dayOfWeek() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, T), this);
    }
    get dayOfYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, T), this);
    }
    get weekOfYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, T), this);
    }
    get daysInWeek() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, T), this);
    }
    get daysInYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, T), this);
    }
    get daysInMonth() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, T), this);
    }
    get monthsInYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, T), this);
    }
    get inLeapYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, T), this);
    }
    with(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = GetOptionsObject(t2), n2 = GetSlot(this, T), r2 = CalendarFields(n2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]), a2 = ToPartialRecord(e2, r2);
      if (!a2)
        throw new TypeError("invalid date-time-like");
      let i2 = ToTemporalDateTimeFields(this, r2);
      i2 = CalendarMergeFields(n2, i2, a2), i2 = ToTemporalDateTimeFields(i2, r2);
      const { year: s2, month: l2, day: d2, hour: m2, minute: c2, second: h2, millisecond: u2, microsecond: p2, nanosecond: f2 } = InterpretTemporalDateTimeFields(n2, i2, o2);
      return CreateTemporalDateTime(s2, l2, d2, m2, c2, h2, u2, p2, f2, n2);
    }
    withPlainTime(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, r), o2 = GetSlot(this, a), n2 = GetSlot(this, i), u2 = GetSlot(this, T);
      if (void 0 === e2)
        return CreateTemporalDateTime(t2, o2, n2, 0, 0, 0, 0, 0, 0, u2);
      const p2 = ToTemporalTime(e2);
      return CreateTemporalDateTime(t2, o2, n2, GetSlot(p2, s), GetSlot(p2, l), GetSlot(p2, d), GetSlot(p2, m), GetSlot(p2, c), GetSlot(p2, h), u2);
    }
    withPlainDate(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), o2 = GetSlot(t2, r), n2 = GetSlot(t2, a), u2 = GetSlot(t2, i);
      let p2 = GetSlot(t2, T);
      const f2 = GetSlot(this, s), y2 = GetSlot(this, l), S2 = GetSlot(this, d), g2 = GetSlot(this, m), w2 = GetSlot(this, c), I2 = GetSlot(this, h);
      return p2 = ConsolidateCalendars(GetSlot(this, T), p2), CreateTemporalDateTime(o2, n2, u2, f2, y2, S2, g2, w2, I2, p2);
    }
    withCalendar(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendar(e2);
      return new PlainDateTime(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), t2);
    }
    add(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToLimitedTemporalDuration(e2), { years: n2, months: u2, weeks: p2, days: f2, hours: y2, minutes: S2, seconds: g2, milliseconds: w2, microseconds: I2, nanoseconds: G2 } = o2, D2 = GetOptionsObject(t2), v2 = GetSlot(this, T), { year: O2, month: C2, day: E2, hour: b2, minute: R2, second: M2, millisecond: Z2, microsecond: F2, nanosecond: Y2 } = AddDateTime(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), v2, n2, u2, p2, f2, y2, S2, g2, w2, I2, G2, D2);
      return CreateTemporalDateTime(O2, C2, E2, b2, R2, M2, Z2, F2, Y2, v2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToLimitedTemporalDuration(e2), { years: n2, months: u2, weeks: p2, days: f2, hours: y2, minutes: S2, seconds: g2, milliseconds: w2, microseconds: I2, nanoseconds: G2 } = o2, D2 = GetOptionsObject(t2), v2 = GetSlot(this, T), { year: O2, month: C2, day: E2, hour: b2, minute: R2, second: M2, millisecond: Z2, microsecond: F2, nanosecond: Y2 } = AddDateTime(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), v2, -n2, -u2, -p2, -f2, -y2, -S2, -g2, -w2, -I2, -G2, D2);
      return CreateTemporalDateTime(O2, C2, E2, b2, R2, M2, Z2, F2, Y2, v2);
    }
    until(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDateTime(e2), n2 = GetSlot(this, T), u2 = GetSlot(o2, T), p2 = ToString(n2), f2 = ToString(u2);
      if (p2 !== f2)
        throw new RangeError(`cannot compute difference between dates of ${p2} and ${f2} calendars`);
      const y2 = GetOptionsObject(t2), S2 = ToSmallestTemporalUnit(y2, "nanosecond"), g2 = ToLargestTemporalUnit(y2, "auto", [], LargerOfTwoTemporalUnits("day", S2));
      ValidateTemporalUnitRange(g2, S2);
      const w2 = ToTemporalRoundingMode(y2, "trunc"), I2 = ToTemporalDateTimeRoundingIncrement(y2, S2);
      let { years: G2, months: D2, weeks: v2, days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = DifferenceISODateTime(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h), n2, g2, y2);
      const F2 = TemporalDateTimeToDate(this);
      ({ years: G2, months: D2, weeks: v2, days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = RoundDuration(G2, D2, v2, O2, C2, E2, b2, R2, M2, Z2, I2, S2, w2, F2)), { days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = BalanceDuration(O2, C2, E2, b2, R2, M2, Z2, g2);
      return new (GetIntrinsic("%Temporal.Duration%"))(G2, D2, v2, O2, C2, E2, b2, R2, M2, Z2);
    }
    since(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDateTime(e2), n2 = GetSlot(this, T), u2 = GetSlot(o2, T), p2 = ToString(n2), f2 = ToString(u2);
      if (p2 !== f2)
        throw new RangeError(`cannot compute difference between dates of ${p2} and ${f2} calendars`);
      const y2 = GetOptionsObject(t2), S2 = ToSmallestTemporalUnit(y2, "nanosecond"), g2 = ToLargestTemporalUnit(y2, "auto", [], LargerOfTwoTemporalUnits("day", S2));
      ValidateTemporalUnitRange(g2, S2);
      const w2 = ToTemporalRoundingMode(y2, "trunc"), I2 = ToTemporalDateTimeRoundingIncrement(y2, S2);
      let { years: G2, months: D2, weeks: v2, days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = DifferenceISODateTime(GetSlot(this, r), GetSlot(this, a), GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h), n2, g2, y2);
      const F2 = TemporalDateTimeToDate(this);
      ({ years: G2, months: D2, weeks: v2, days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = RoundDuration(G2, D2, v2, O2, C2, E2, b2, R2, M2, Z2, I2, S2, NegateTemporalRoundingMode(w2), F2)), { days: O2, hours: C2, minutes: E2, seconds: b2, milliseconds: R2, microseconds: M2, nanoseconds: Z2 } = BalanceDuration(O2, C2, E2, b2, R2, M2, Z2, g2);
      return new (GetIntrinsic("%Temporal.Duration%"))(-G2, -D2, -v2, -O2, -C2, -E2, -b2, -R2, -M2, -Z2);
    }
    round(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), o2 = ToSmallestTemporalUnit(t2, void 0, ["year", "month", "week"]);
      if (void 0 === o2)
        throw new RangeError("smallestUnit is required");
      const n2 = ToTemporalRoundingMode(t2, "halfExpand"), u2 = ToTemporalRoundingIncrement(t2, { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[o2], false);
      let p2 = GetSlot(this, r), f2 = GetSlot(this, a), y2 = GetSlot(this, i), S2 = GetSlot(this, s), g2 = GetSlot(this, l), w2 = GetSlot(this, d), I2 = GetSlot(this, m), G2 = GetSlot(this, c), D2 = GetSlot(this, h);
      return { year: p2, month: f2, day: y2, hour: S2, minute: g2, second: w2, millisecond: I2, microsecond: G2, nanosecond: D2 } = RoundISODateTime(p2, f2, y2, S2, g2, w2, I2, G2, D2, u2, o2, n2), CreateTemporalDateTime(p2, f2, y2, S2, g2, w2, I2, G2, D2, GetSlot(this, T));
    }
    equals(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDateTime(e2);
      for (const e3 of [r, a, i, s, l, d, m, c, h]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, T), GetSlot(t2, T));
    }
    toString(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), { precision: o2, unit: n2, increment: r2 } = ToSecondsStringPrecision(t2);
      return TemporalDateTimeToString(this, o2, ToShowCalendarOption(t2), { unit: n2, increment: r2, roundingMode: ToTemporalRoundingMode(t2, "trunc") });
    }
    toJSON() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToString(this, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDateTime");
    }
    toZonedDateTime(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalTimeZone(e2);
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(n2, this, ToTemporalDisambiguation(GetOptionsObject(t2))), o), n2, GetSlot(this, T));
    }
    toPlainDate() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToDate(this);
    }
    toPlainYearMonth() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return YearMonthFromFields(e2, ToTemporalYearMonthFields(this, CalendarFields(e2, ["monthCode", "year"])));
    }
    toPlainMonthDay() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return MonthDayFromFields(e2, ToTemporalMonthDayFields(this, CalendarFields(e2, ["day", "monthCode"])));
    }
    toPlainTime() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToTime(this);
    }
    getISOFields() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, T), isoDay: GetSlot(this, i), isoHour: GetSlot(this, s), isoMicrosecond: GetSlot(this, c), isoMillisecond: GetSlot(this, m), isoMinute: GetSlot(this, l), isoMonth: GetSlot(this, a), isoNanosecond: GetSlot(this, h), isoSecond: GetSlot(this, d), isoYear: GetSlot(this, r) };
    }
    static from(e2, t2) {
      const o2 = GetOptionsObject(t2);
      return IsTemporalDateTime(e2) ? (ToTemporalOverflow(o2), CreateTemporalDateTime(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), GetSlot(e2, T))) : ToTemporalDateTime(e2, o2);
    }
    static compare(e2, t2) {
      const o2 = ToTemporalDateTime(e2), n2 = ToTemporalDateTime(t2);
      for (const e3 of [r, a, i, s, l, d, m, c, h]) {
        const t3 = GetSlot(o2, e3), r2 = GetSlot(n2, e3);
        if (t3 !== r2)
          return ComparisonResult(t3 - r2);
      }
      return 0;
    }
  };
  MakeIntrinsicClass(PlainDateTime, "Temporal.PlainDateTime");
  var Duration = class {
    constructor(e2 = 0, t2 = 0, o2 = 0, n2 = 0, r2 = 0, a2 = 0, i2 = 0, s2 = 0, l2 = 0, d2 = 0) {
      const m2 = ToIntegerWithoutRounding(e2), c2 = ToIntegerWithoutRounding(t2), h2 = ToIntegerWithoutRounding(o2), T2 = ToIntegerWithoutRounding(n2), u2 = ToIntegerWithoutRounding(r2), p2 = ToIntegerWithoutRounding(a2), C2 = ToIntegerWithoutRounding(i2), E2 = ToIntegerWithoutRounding(s2), b2 = ToIntegerWithoutRounding(l2), R2 = ToIntegerWithoutRounding(d2), M2 = DurationSign(m2, c2, h2, T2, u2, p2, C2, E2, b2, R2);
      for (const e3 of [m2, c2, h2, T2, u2, p2, C2, E2, b2, R2]) {
        if (!Number.isFinite(e3))
          throw new RangeError("infinite values not allowed as duration fields");
        const t3 = Math.sign(e3);
        if (0 !== t3 && t3 !== M2)
          throw new RangeError("mixed-sign values not allowed as duration fields");
      }
      CreateSlots(this), SetSlot(this, f, m2), SetSlot(this, y, c2), SetSlot(this, S, h2), SetSlot(this, g, T2), SetSlot(this, w, u2), SetSlot(this, I, p2), SetSlot(this, G, C2), SetSlot(this, D, E2), SetSlot(this, v, b2), SetSlot(this, O, R2);
    }
    get years() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, f);
    }
    get months() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, y);
    }
    get weeks() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, S);
    }
    get days() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, g);
    }
    get hours() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, w);
    }
    get minutes() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, I);
    }
    get seconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, G);
    }
    get milliseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, D);
    }
    get microseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, v);
    }
    get nanoseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, O);
    }
    get sign() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return DurationSign(GetSlot(this, f), GetSlot(this, y), GetSlot(this, S), GetSlot(this, g), GetSlot(this, w), GetSlot(this, I), GetSlot(this, G), GetSlot(this, D), GetSlot(this, v), GetSlot(this, O));
    }
    get blank() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return 0 === DurationSign(GetSlot(this, f), GetSlot(this, y), GetSlot(this, S), GetSlot(this, g), GetSlot(this, w), GetSlot(this, I), GetSlot(this, G), GetSlot(this, D), GetSlot(this, v), GetSlot(this, O));
    }
    with(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      const t2 = ToPartialRecord(e2, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"]);
      if (!t2)
        throw new TypeError("invalid duration-like");
      const { years: o2 = GetSlot(this, f), months: n2 = GetSlot(this, y), weeks: r2 = GetSlot(this, S), days: a2 = GetSlot(this, g), hours: i2 = GetSlot(this, w), minutes: s2 = GetSlot(this, I), seconds: l2 = GetSlot(this, G), milliseconds: d2 = GetSlot(this, D), microseconds: m2 = GetSlot(this, v), nanoseconds: c2 = GetSlot(this, O) } = t2;
      return new Duration(o2, n2, r2, a2, i2, s2, l2, d2, m2, c2);
    }
    negated() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return CreateNegatedTemporalDuration(this);
    }
    abs() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return new Duration(Math.abs(GetSlot(this, f)), Math.abs(GetSlot(this, y)), Math.abs(GetSlot(this, S)), Math.abs(GetSlot(this, g)), Math.abs(GetSlot(this, w)), Math.abs(GetSlot(this, I)), Math.abs(GetSlot(this, G)), Math.abs(GetSlot(this, D)), Math.abs(GetSlot(this, v)), Math.abs(GetSlot(this, O)));
    }
    add(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      let { years: o2, months: n2, weeks: r2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = ToLimitedTemporalDuration(e2);
      const h2 = ToRelativeTemporalObject(GetOptionsObject(t2));
      return { years: o2, months: n2, weeks: r2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = AddDuration(GetSlot(this, f), GetSlot(this, y), GetSlot(this, S), GetSlot(this, g), GetSlot(this, w), GetSlot(this, I), GetSlot(this, G), GetSlot(this, D), GetSlot(this, v), GetSlot(this, O), o2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2), new Duration(o2, n2, r2, a2, i2, s2, l2, d2, m2, c2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      let { years: o2, months: n2, weeks: r2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = ToLimitedTemporalDuration(e2);
      const h2 = ToRelativeTemporalObject(GetOptionsObject(t2));
      return { years: o2, months: n2, weeks: r2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = AddDuration(GetSlot(this, f), GetSlot(this, y), GetSlot(this, S), GetSlot(this, g), GetSlot(this, w), GetSlot(this, I), GetSlot(this, G), GetSlot(this, D), GetSlot(this, v), GetSlot(this, O), -o2, -n2, -r2, -a2, -i2, -s2, -l2, -d2, -m2, -c2, h2), new Duration(o2, n2, r2, a2, i2, s2, l2, d2, m2, c2);
    }
    round(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      let t2 = GetSlot(this, f), o2 = GetSlot(this, y), n2 = GetSlot(this, S), r2 = GetSlot(this, g), a2 = GetSlot(this, w), i2 = GetSlot(this, I), s2 = GetSlot(this, G), l2 = GetSlot(this, D), d2 = GetSlot(this, v), m2 = GetSlot(this, O), c2 = DefaultTemporalLargestUnit(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2);
      const h2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2);
      let u2 = ToSmallestTemporalUnit(h2, void 0), p2 = true;
      u2 || (p2 = false, u2 = "nanosecond"), c2 = LargerOfTwoTemporalUnits(c2, u2);
      let C2 = ToLargestTemporalUnit(h2, void 0), E2 = true;
      if (C2 || (E2 = false, C2 = c2), "auto" === C2 && (C2 = c2), !p2 && !E2)
        throw new RangeError("at least one of smallestUnit or largestUnit is required");
      ValidateTemporalUnitRange(C2, u2);
      const b2 = ToTemporalRoundingMode(h2, "halfExpand"), R2 = ToTemporalDateTimeRoundingIncrement(h2, u2);
      let M2 = ToRelativeTemporalObject(h2);
      return { years: t2, months: o2, weeks: n2, days: r2 } = UnbalanceDurationRelative(t2, o2, n2, r2, C2, M2), { years: t2, months: o2, weeks: n2, days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = RoundDuration(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, R2, u2, b2, M2), { years: t2, months: o2, weeks: n2, days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = AdjustRoundedDurationDays(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, R2, u2, b2, M2), { years: t2, months: o2, weeks: n2, days: r2 } = function BalanceDurationRelative(e3, t3, o3, n3, r3, a3) {
        let i3 = e3, s3 = t3, l3 = o3, d3 = n3;
        const m3 = GetIntrinsic("%Temporal.Duration%"), c3 = DurationSign(i3, s3, l3, d3, 0, 0, 0, 0, 0, 0);
        if (0 === c3)
          return { years: i3, months: s3, weeks: l3, days: d3 };
        let h3, u3;
        a3 && (u3 = ToTemporalDate(a3), h3 = GetSlot(u3, T));
        const p3 = new m3(c3), f2 = new m3(0, c3), S2 = new m3(0, 0, c3);
        switch (r3) {
          case "year": {
            if (!h3)
              throw new RangeError("a starting point is required for years balancing");
            let e4, t4, o4;
            for ({ relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, p3); le(d3) >= le(t4); )
              d3 -= t4, i3 += c3, u3 = e4, { relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, p3);
            for ({ relativeTo: e4, days: o4 } = MoveRelativeDate(h3, u3, f2); le(d3) >= le(o4); )
              d3 -= o4, s3 += c3, u3 = e4, { relativeTo: e4, days: o4 } = MoveRelativeDate(h3, u3, f2);
            const n4 = h3.dateAdd;
            e4 = CalendarDateAdd(h3, u3, p3, ye(null), n4);
            const r4 = h3.dateUntil, a4 = ye(null);
            a4.largestUnit = "month";
            let l4 = CalendarDateUntil(h3, u3, e4, a4, r4), m4 = GetSlot(l4, y);
            for (; le(s3) >= le(m4); ) {
              s3 -= m4, i3 += c3, u3 = e4, e4 = CalendarDateAdd(h3, u3, p3, ye(null), n4);
              const t5 = ye(null);
              t5.largestUnit = "month", l4 = CalendarDateUntil(h3, u3, e4, t5, r4), m4 = GetSlot(l4, y);
            }
            break;
          }
          case "month": {
            if (!h3)
              throw new RangeError("a starting point is required for months balancing");
            let e4, t4;
            for ({ relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, f2); le(d3) >= le(t4); )
              d3 -= t4, s3 += c3, u3 = e4, { relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, f2);
            break;
          }
          case "week": {
            if (!h3)
              throw new RangeError("a starting point is required for weeks balancing");
            let e4, t4;
            for ({ relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, S2); le(d3) >= le(t4); )
              d3 -= t4, l3 += c3, u3 = e4, { relativeTo: e4, days: t4 } = MoveRelativeDate(h3, u3, S2);
            break;
          }
        }
        return { years: i3, months: s3, weeks: l3, days: d3 };
      }(t2, o2, n2, r2, C2, M2), IsTemporalZonedDateTime(M2) && (M2 = MoveRelativeZonedDateTime(M2, t2, o2, n2, 0)), { days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = BalanceDuration(r2, a2, i2, s2, l2, d2, m2, C2, M2), new Duration(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2);
    }
    total(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      let t2 = GetSlot(this, f), o2 = GetSlot(this, y), n2 = GetSlot(this, S), r2 = GetSlot(this, g), a2 = GetSlot(this, w), i2 = GetSlot(this, I), s2 = GetSlot(this, G), l2 = GetSlot(this, D), d2 = GetSlot(this, v), m2 = GetSlot(this, O);
      if (void 0 === e2)
        throw new TypeError("options argument is required");
      const c2 = "string" == typeof e2 ? CreateOnePropObject("unit", e2) : GetOptionsObject(e2), h2 = function ToTemporalDurationTotalUnit(e3) {
        const t3 = new Map(Be), o3 = GetOption(e3, "unit", [...t3.values(), ...t3.keys()], void 0);
        return t3.has(o3) ? t3.get(o3) : o3;
      }(c2);
      if (void 0 === h2)
        throw new RangeError("unit option is required");
      const T2 = ToRelativeTemporalObject(c2);
      let u2;
      ({ years: t2, months: o2, weeks: n2, days: r2 } = UnbalanceDurationRelative(t2, o2, n2, r2, h2, T2)), IsTemporalZonedDateTime(T2) && (u2 = MoveRelativeZonedDateTime(T2, t2, o2, n2, 0)), { days: r2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = BalanceDuration(r2, a2, i2, s2, l2, d2, m2, h2, u2);
      const { total: p2 } = RoundDuration(t2, o2, n2, r2, a2, i2, s2, l2, d2, m2, 1, h2, "trunc", T2);
      return p2;
    }
    toString(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), { precision: o2, unit: n2, increment: r2 } = ToSecondsStringPrecision(t2);
      if ("minute" === o2)
        throw new RangeError('smallestUnit must not be "minute"');
      return TemporalDurationToString(this, o2, { unit: n2, increment: r2, roundingMode: ToTemporalRoundingMode(t2, "trunc") });
    }
    toJSON() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return TemporalDurationToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return "undefined" != typeof Intl && void 0 !== Intl.DurationFormat ? new Intl.DurationFormat(e2, t2).format(this) : (console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."), TemporalDurationToString(this));
    }
    valueOf() {
      throw new TypeError("use compare() to compare Temporal.Duration");
    }
    static from(e2) {
      return IsTemporalDuration(e2) ? new Duration(GetSlot(e2, f), GetSlot(e2, y), GetSlot(e2, S), GetSlot(e2, g), GetSlot(e2, w), GetSlot(e2, I), GetSlot(e2, G), GetSlot(e2, D), GetSlot(e2, v), GetSlot(e2, O)) : ToTemporalDuration(e2);
    }
    static compare(t2, o2, n2) {
      const r2 = ToTemporalDuration(t2), a2 = ToTemporalDuration(o2), i2 = ToRelativeTemporalObject(GetOptionsObject(n2)), s2 = GetSlot(r2, f), l2 = GetSlot(r2, y), d2 = GetSlot(r2, S);
      let m2 = GetSlot(r2, g);
      const c2 = GetSlot(r2, w), h2 = GetSlot(r2, I), T2 = GetSlot(r2, G), u2 = GetSlot(r2, D), p2 = GetSlot(r2, v);
      let C2 = GetSlot(r2, O);
      const E2 = GetSlot(a2, f), b2 = GetSlot(a2, y), R2 = GetSlot(a2, S);
      let M2 = GetSlot(a2, g);
      const Z2 = GetSlot(a2, w), F2 = GetSlot(a2, I), Y2 = GetSlot(a2, G), P2 = GetSlot(a2, D), j2 = GetSlot(a2, v);
      let B2 = GetSlot(a2, O);
      const N2 = CalculateOffsetShift(i2, s2, l2, d2, m2, c2, h2, T2, u2, p2, C2), $2 = CalculateOffsetShift(i2, E2, b2, R2, M2, Z2, F2, Y2, P2, j2, B2);
      0 === s2 && 0 === E2 && 0 === l2 && 0 === b2 && 0 === d2 && 0 === R2 || ({ days: m2 } = UnbalanceDurationRelative(s2, l2, d2, m2, "day", i2), { days: M2 } = UnbalanceDurationRelative(E2, b2, R2, M2, "day", i2));
      const k2 = TotalDurationNanoseconds(m2, c2, h2, T2, u2, p2, C2, N2), L2 = TotalDurationNanoseconds(M2, Z2, F2, Y2, P2, j2, B2, $2);
      return ComparisonResult(import_jsbi.default.toNumber(import_jsbi.default.subtract(k2, L2)));
    }
  };
  MakeIntrinsicClass(Duration, "Temporal.Duration");
  var mt = Object.create;
  var PlainMonthDay = class {
    constructor(e2, t2, o2 = GetISO8601Calendar(), n2 = 1972) {
      const r2 = ToIntegerThrowOnInfinity(e2), a2 = ToIntegerThrowOnInfinity(t2), i2 = ToTemporalCalendar(o2), s2 = ToIntegerThrowOnInfinity(n2);
      if (arguments.length < 2)
        throw new RangeError("missing argument: isoMonth and isoDay are required");
      CreateTemporalMonthDaySlots(this, r2, a2, i2, s2);
    }
    get monthCode() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, T), this);
    }
    get day() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, T), this);
    }
    get calendar() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    with(e2, t2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = GetSlot(this, T), n2 = CalendarFields(o2, ["day", "month", "monthCode", "year"]), r2 = ToPartialRecord(e2, n2);
      if (!r2)
        throw new TypeError("invalid month-day-like");
      let a2 = ToTemporalMonthDayFields(this, n2);
      a2 = CalendarMergeFields(o2, a2, r2), a2 = ToTemporalMonthDayFields(a2, n2);
      return MonthDayFromFields(o2, a2, GetOptionsObject(t2));
    }
    equals(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalMonthDay(e2);
      for (const e3 of [a, i, r]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, T), GetSlot(t2, T));
    }
    toString(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return TemporalMonthDayToString(this, ToShowCalendarOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return TemporalMonthDayToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use equals() to compare Temporal.PlainMonthDay");
    }
    toPlainDate(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("argument should be an object");
      const t2 = GetSlot(this, T), o2 = CalendarFields(t2, ["day", "monthCode"]), n2 = ToTemporalMonthDayFields(this, o2), r2 = CalendarFields(t2, ["year"]), a2 = [["year", void 0]];
      r2.forEach((e3) => {
        a2.some(([t3]) => t3 === e3) || a2.push([e3, void 0]);
      });
      let i2 = CalendarMergeFields(t2, n2, PrepareTemporalFields(e2, a2));
      const s2 = [.../* @__PURE__ */ new Set([...o2, ...r2])], l2 = [];
      s2.forEach((e3) => {
        l2.some(([t3]) => t3 === e3) || l2.push([e3, void 0]);
      }), i2 = PrepareTemporalFields(i2, l2);
      const d2 = mt(null);
      return d2.overflow = "reject", DateFromFields(t2, i2, d2);
    }
    getISOFields() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, T), isoDay: GetSlot(this, i), isoMonth: GetSlot(this, a), isoYear: GetSlot(this, r) };
    }
    static from(e2, t2) {
      const o2 = GetOptionsObject(t2);
      return IsTemporalMonthDay(e2) ? (ToTemporalOverflow(o2), CreateTemporalMonthDay(GetSlot(e2, a), GetSlot(e2, i), GetSlot(e2, T), GetSlot(e2, r))) : ToTemporalMonthDay(e2, o2);
    }
  };
  MakeIntrinsicClass(PlainMonthDay, "Temporal.PlainMonthDay");
  var instant = () => new (GetIntrinsic("%Temporal.Instant%"))($e());
  var plainDateTime = (e2, t2 = timeZone()) => {
    const o2 = ToTemporalTimeZone(t2), n2 = ToTemporalCalendar(e2);
    return BuiltinTimeZoneGetPlainDateTimeFor(o2, instant(), n2);
  };
  var plainDateTimeISO = (e2 = timeZone()) => {
    const t2 = ToTemporalTimeZone(e2), o2 = GetISO8601Calendar();
    return BuiltinTimeZoneGetPlainDateTimeFor(t2, instant(), o2);
  };
  var zonedDateTime = (e2, t2 = timeZone()) => {
    const o2 = ToTemporalTimeZone(t2), n2 = ToTemporalCalendar(e2);
    return CreateTemporalZonedDateTime($e(), o2, n2);
  };
  var timeZone = () => function SystemTimeZone() {
    const e2 = new ae("en-us");
    return new (GetIntrinsic("%Temporal.TimeZone%"))(ParseTemporalTimeZone(e2.resolvedOptions().timeZone));
  }();
  var ct = { instant, plainDateTime, plainDateTimeISO, plainDate: (e2, t2 = timeZone()) => TemporalDateTimeToDate(plainDateTime(e2, t2)), plainDateISO: (e2 = timeZone()) => TemporalDateTimeToDate(plainDateTimeISO(e2)), plainTimeISO: (e2 = timeZone()) => TemporalDateTimeToTime(plainDateTimeISO(e2)), timeZone, zonedDateTime, zonedDateTimeISO: (e2 = timeZone()) => zonedDateTime(GetISO8601Calendar(), e2), [Symbol.toStringTag]: "Temporal.Now" };
  Object.defineProperty(ct, Symbol.toStringTag, { value: "Temporal.Now", writable: false, enumerable: false, configurable: true });
  var ht = Object.assign;
  var Tt = ["year", "month", "week", "day"];
  var ut = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 };
  function TemporalTimeToString(e2, t2, o2) {
    let n2 = GetSlot(e2, s), r2 = GetSlot(e2, l), a2 = GetSlot(e2, d), i2 = GetSlot(e2, m), T2 = GetSlot(e2, c), u2 = GetSlot(e2, h);
    if (o2) {
      const { unit: e3, increment: t3, roundingMode: s2 } = o2;
      ({ hour: n2, minute: r2, second: a2, millisecond: i2, microsecond: T2, nanosecond: u2 } = RoundTime(n2, r2, a2, i2, T2, u2, t3, e3, s2));
    }
    return `${ISODateTimePartString(n2)}:${ISODateTimePartString(r2)}${FormatSecondsStringPart(a2, i2, T2, u2, t2)}`;
  }
  var PlainTime = class {
    constructor(e2 = 0, t2 = 0, o2 = 0, n2 = 0, r2 = 0, a2 = 0) {
      const i2 = ToIntegerThrowOnInfinity(e2), u2 = ToIntegerThrowOnInfinity(t2), p2 = ToIntegerThrowOnInfinity(o2), f2 = ToIntegerThrowOnInfinity(n2), y2 = ToIntegerThrowOnInfinity(r2), S2 = ToIntegerThrowOnInfinity(a2);
      RejectTime(i2, u2, p2, f2, y2, S2), CreateSlots(this), SetSlot(this, s, i2), SetSlot(this, l, u2), SetSlot(this, d, p2), SetSlot(this, m, f2), SetSlot(this, c, y2), SetSlot(this, h, S2), SetSlot(this, T, GetISO8601Calendar());
    }
    get calendar() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get hour() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, s);
    }
    get minute() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, l);
    }
    get second() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, d);
    }
    get millisecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, m);
    }
    get microsecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, c);
    }
    get nanosecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, h);
    }
    with(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = ToTemporalOverflow(GetOptionsObject(t2)), n2 = ToPartialRecord(e2, ["hour", "microsecond", "millisecond", "minute", "nanosecond", "second"]);
      if (!n2)
        throw new TypeError("invalid time-like");
      const r2 = ToTemporalTimeRecord(this);
      let { hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = ht(r2, n2);
      return { hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = RegulateTime(a2, i2, s2, l2, d2, m2, o2), new PlainTime(a2, i2, s2, l2, d2, m2);
    }
    add(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToLimitedTemporalDuration(e2), { hours: o2, minutes: n2, seconds: r2, milliseconds: a2, microseconds: i2, nanoseconds: T2 } = t2;
      let u2 = GetSlot(this, s), p2 = GetSlot(this, l), f2 = GetSlot(this, d), y2 = GetSlot(this, m), S2 = GetSlot(this, c), g2 = GetSlot(this, h);
      return { hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 } = AddTime(u2, p2, f2, y2, S2, g2, o2, n2, r2, a2, i2, T2), { hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 } = RegulateTime(u2, p2, f2, y2, S2, g2, "reject"), new PlainTime(u2, p2, f2, y2, S2, g2);
    }
    subtract(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToLimitedTemporalDuration(e2), { hours: o2, minutes: n2, seconds: r2, milliseconds: a2, microseconds: i2, nanoseconds: T2 } = t2;
      let u2 = GetSlot(this, s), p2 = GetSlot(this, l), f2 = GetSlot(this, d), y2 = GetSlot(this, m), S2 = GetSlot(this, c), g2 = GetSlot(this, h);
      return { hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 } = AddTime(u2, p2, f2, y2, S2, g2, -o2, -n2, -r2, -a2, -i2, -T2), { hour: u2, minute: p2, second: f2, millisecond: y2, microsecond: S2, nanosecond: g2 } = RegulateTime(u2, p2, f2, y2, S2, g2, "reject"), new PlainTime(u2, p2, f2, y2, S2, g2);
    }
    until(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalTime(e2), n2 = GetOptionsObject(t2), r2 = ToLargestTemporalUnit(n2, "auto", Tt, "hour"), a2 = ToSmallestTemporalUnit(n2, "nanosecond", Tt);
      ValidateTemporalUnitRange(r2, a2);
      const i2 = ToTemporalRoundingMode(n2, "trunc"), T2 = ToTemporalRoundingIncrement(n2, ut[a2], false);
      let { hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = DifferenceTime(GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h));
      ({ hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = RoundDuration(0, 0, 0, 0, u2, p2, f2, y2, S2, g2, T2, a2, i2)), { hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = BalanceDuration(0, u2, p2, f2, y2, S2, g2, r2);
      return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, u2, p2, f2, y2, S2, g2);
    }
    since(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalTime(e2), n2 = GetOptionsObject(t2), r2 = ToLargestTemporalUnit(n2, "auto", Tt, "hour"), a2 = ToSmallestTemporalUnit(n2, "nanosecond", Tt);
      ValidateTemporalUnitRange(r2, a2);
      const i2 = ToTemporalRoundingMode(n2, "trunc"), T2 = ToTemporalRoundingIncrement(n2, ut[a2], false);
      let { hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = DifferenceTime(GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h));
      ({ hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = RoundDuration(0, 0, 0, 0, -u2, -p2, -f2, -y2, -S2, -g2, T2, a2, NegateTemporalRoundingMode(i2))), u2 = -u2, p2 = -p2, f2 = -f2, y2 = -y2, S2 = -S2, g2 = -g2, { hours: u2, minutes: p2, seconds: f2, milliseconds: y2, microseconds: S2, nanoseconds: g2 } = BalanceDuration(0, u2, p2, f2, y2, S2, g2, r2);
      return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, u2, p2, f2, y2, S2, g2);
    }
    round(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), o2 = ToSmallestTemporalUnit(t2, void 0, Tt);
      if (void 0 === o2)
        throw new RangeError("smallestUnit is required");
      const n2 = ToTemporalRoundingMode(t2, "halfExpand"), r2 = ToTemporalRoundingIncrement(t2, ut[o2], false);
      let a2 = GetSlot(this, s), i2 = GetSlot(this, l), T2 = GetSlot(this, d), u2 = GetSlot(this, m), p2 = GetSlot(this, c), f2 = GetSlot(this, h);
      return { hour: a2, minute: i2, second: T2, millisecond: u2, microsecond: p2, nanosecond: f2 } = RoundTime(a2, i2, T2, u2, p2, f2, r2, o2, n2), new PlainTime(a2, i2, T2, u2, p2, f2);
    }
    equals(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalTime(e2);
      for (const e3 of [s, l, d, m, c, h]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return true;
    }
    toString(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), { precision: o2, unit: n2, increment: r2 } = ToSecondsStringPrecision(t2);
      return TemporalTimeToString(this, o2, { unit: n2, increment: r2, roundingMode: ToTemporalRoundingMode(t2, "trunc") });
    }
    toJSON() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return TemporalTimeToString(this, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainTime");
    }
    toPlainDateTime(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), o2 = GetSlot(t2, r), n2 = GetSlot(t2, a), u2 = GetSlot(t2, i), p2 = GetSlot(t2, T);
      return CreateTemporalDateTime(o2, n2, u2, GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), p2);
    }
    toZonedDateTime(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      const t2 = e2.plainDate;
      if (void 0 === t2)
        throw new TypeError("missing date property");
      const n2 = ToTemporalDate(t2), u2 = e2.timeZone;
      if (void 0 === u2)
        throw new TypeError("missing timeZone property");
      const p2 = ToTemporalTimeZone(u2), f2 = GetSlot(n2, r), y2 = GetSlot(n2, a), S2 = GetSlot(n2, i), g2 = GetSlot(n2, T), w2 = GetSlot(this, s), I2 = GetSlot(this, l), G2 = GetSlot(this, d), D2 = GetSlot(this, m), v2 = GetSlot(this, c), O2 = GetSlot(this, h);
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(p2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(f2, y2, S2, w2, I2, G2, D2, v2, O2, g2), "compatible"), o), p2, g2);
    }
    getISOFields() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, T), isoHour: GetSlot(this, s), isoMicrosecond: GetSlot(this, c), isoMillisecond: GetSlot(this, m), isoMinute: GetSlot(this, l), isoNanosecond: GetSlot(this, h), isoSecond: GetSlot(this, d) };
    }
    static from(e2, t2) {
      const o2 = ToTemporalOverflow(GetOptionsObject(t2));
      return IsTemporalTime(e2) ? new PlainTime(GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h)) : ToTemporalTime(e2, o2);
    }
    static compare(e2, t2) {
      const o2 = ToTemporalTime(e2), n2 = ToTemporalTime(t2);
      for (const e3 of [s, l, d, m, c, h]) {
        const t3 = GetSlot(o2, e3), r2 = GetSlot(n2, e3);
        if (t3 !== r2)
          return ComparisonResult(t3 - r2);
      }
      return 0;
    }
  };
  MakeIntrinsicClass(PlainTime, "Temporal.PlainTime");
  var TimeZone = class {
    constructor(e2) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: identifier is required");
      const t2 = GetCanonicalTimeZoneIdentifier(e2);
      CreateSlots(this), SetSlot(this, n, t2);
    }
    get id() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return ToString(this);
    }
    getOffsetNanosecondsFor(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalInstant(e2), r2 = GetSlot(this, n);
      return TestTimeZoneOffsetString(r2) ? ParseTimeZoneOffsetString(r2) : GetIANATimeZoneOffsetNanoseconds(GetSlot(t2, o), r2);
    }
    getOffsetStringFor(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return BuiltinTimeZoneGetOffsetStringFor(this, ToTemporalInstant(e2));
    }
    getPlainDateTimeFor(e2, t2 = GetISO8601Calendar()) {
      return BuiltinTimeZoneGetPlainDateTimeFor(this, ToTemporalInstant(e2), ToTemporalCalendar(t2));
    }
    getInstantFor(e2, t2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return BuiltinTimeZoneGetInstantFor(this, ToTemporalDateTime(e2), ToTemporalDisambiguation(GetOptionsObject(t2)));
    }
    getPossibleInstantsFor(t2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDateTime(t2), T2 = GetIntrinsic("%Temporal.Instant%"), u2 = GetSlot(this, n);
      if (TestTimeZoneOffsetString(u2)) {
        const t3 = GetEpochFromISOParts(GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h));
        if (null === t3)
          throw new RangeError("DateTime outside of supported range");
        const n2 = ParseTimeZoneOffsetString(u2);
        return [new T2(import_jsbi.default.subtract(t3, import_jsbi.default.BigInt(n2)))];
      }
      return function GetIANATimeZoneEpochValue(t3, o3, n2, r2, a2, i2, s2, l2, d2, m2) {
        const c2 = GetEpochFromISOParts(o3, n2, r2, a2, i2, s2, l2, d2, m2);
        if (null === c2)
          throw new RangeError("DateTime outside of supported range");
        let h2 = import_jsbi.default.subtract(c2, Ee);
        import_jsbi.default.lessThan(h2, be) && (h2 = c2);
        let T3 = import_jsbi.default.add(c2, Ee);
        import_jsbi.default.greaterThan(T3, Re) && (T3 = c2);
        const u3 = GetIANATimeZoneOffsetNanoseconds(h2, t3), p2 = GetIANATimeZoneOffsetNanoseconds(T3, t3);
        return (u3 === p2 ? [u3] : [u3, p2]).map((h3) => {
          const T4 = import_jsbi.default.subtract(c2, import_jsbi.default.BigInt(h3)), u4 = GetIANATimeZoneDateTimeParts(T4, t3);
          if (o3 === u4.year && n2 === u4.month && r2 === u4.day && a2 === u4.hour && i2 === u4.minute && s2 === u4.second && l2 === u4.millisecond && d2 === u4.microsecond && m2 === u4.nanosecond)
            return T4;
        }).filter((e2) => void 0 !== e2);
      }(u2, GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l), GetSlot(o2, d), GetSlot(o2, m), GetSlot(o2, c), GetSlot(o2, h)).map((e2) => new T2(e2));
    }
    getNextTransition(t2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalInstant(t2), a2 = GetSlot(this, n);
      if (TestTimeZoneOffsetString(a2) || "UTC" === a2)
        return null;
      let i2 = GetSlot(r2, o);
      const s2 = GetIntrinsic("%Temporal.Instant%");
      return i2 = function GetIANATimeZoneNextTransition(t3, o2) {
        const n2 = import_jsbi.default.add(t3, Fe), r3 = maxJSBI(afterLatestPossibleTzdbRuleChange(), n2);
        let a3 = maxJSBI(Me, t3);
        const i3 = GetIANATimeZoneOffsetNanoseconds(a3, o2);
        let s3 = a3, l2 = i3;
        for (; i3 === l2 && import_jsbi.default.lessThan(import_jsbi.default.BigInt(a3), r3); )
          s3 = import_jsbi.default.add(a3, Ye), l2 = GetIANATimeZoneOffsetNanoseconds(s3, o2), i3 === l2 && (a3 = s3);
        return i3 === l2 ? null : bisect((e2) => GetIANATimeZoneOffsetNanoseconds(e2, o2), a3, s3, i3, l2);
      }(i2, a2), null === i2 ? null : new s2(i2);
    }
    getPreviousTransition(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalInstant(e2), r2 = GetSlot(this, n);
      if (TestTimeZoneOffsetString(r2) || "UTC" === r2)
        return null;
      let a2 = GetSlot(t2, o);
      const i2 = GetIntrinsic("%Temporal.Instant%");
      return a2 = GetIANATimeZonePreviousTransition(a2, r2), null === a2 ? null : new i2(a2);
    }
    toString() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return ToString(GetSlot(this, n));
    }
    toJSON() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return ToString(this);
    }
    static from(e2) {
      return ToTemporalTimeZone(e2);
    }
  };
  MakeIntrinsicClass(TimeZone, "Temporal.TimeZone");
  var pt = Object.create;
  var ft = ["week", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];
  var PlainYearMonth = class {
    constructor(e2, t2, o2 = GetISO8601Calendar(), n2 = 1) {
      const r2 = ToIntegerThrowOnInfinity(e2), a2 = ToIntegerThrowOnInfinity(t2), i2 = ToTemporalCalendar(o2), s2 = ToIntegerThrowOnInfinity(n2);
      if (arguments.length < 2)
        throw new RangeError("missing argument: isoYear and isoMonth are required");
      CreateTemporalYearMonthSlots(this, r2, a2, i2, s2);
    }
    get year() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, T), this);
    }
    get month() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, T), this);
    }
    get monthCode() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, T), this);
    }
    get calendar() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get era() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, T), this);
    }
    get eraYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, T), this);
    }
    get daysInMonth() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, T), this);
    }
    get daysInYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, T), this);
    }
    get monthsInYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, T), this);
    }
    get inLeapYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, T), this);
    }
    with(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = GetSlot(this, T), n2 = CalendarFields(o2, ["month", "monthCode", "year"]), r2 = ToPartialRecord(e2, n2);
      if (!r2)
        throw new TypeError("invalid year-month-like");
      let a2 = ToTemporalYearMonthFields(this, n2);
      a2 = CalendarMergeFields(o2, a2, r2), a2 = ToTemporalYearMonthFields(a2, n2);
      return YearMonthFromFields(o2, a2, GetOptionsObject(t2));
    }
    add(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      const o2 = ToLimitedTemporalDuration(e2);
      let { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = o2;
      ({ days: i2 } = BalanceDuration(i2, s2, l2, d2, m2, c2, h2, "day"));
      const u2 = GetOptionsObject(t2), p2 = GetSlot(this, T), f2 = CalendarFields(p2, ["monthCode", "year"]), y2 = DateFromFields(p2, { ...ToTemporalYearMonthFields(this, f2), day: DurationSign(n2, r2, a2, i2, 0, 0, 0, 0, 0, 0) < 0 ? ToPositiveInteger(CalendarDaysInMonth(p2, this)) : 1 }), S2 = { ...u2 };
      return YearMonthFromFields(p2, ToTemporalYearMonthFields(CalendarDateAdd(p2, y2, { ...o2, days: i2 }, u2), f2), S2);
    }
    subtract(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      let o2 = ToLimitedTemporalDuration(e2);
      o2 = { years: -o2.years, months: -o2.months, weeks: -o2.weeks, days: -o2.days, hours: -o2.hours, minutes: -o2.minutes, seconds: -o2.seconds, milliseconds: -o2.milliseconds, microseconds: -o2.microseconds, nanoseconds: -o2.nanoseconds };
      let { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = o2;
      ({ days: i2 } = BalanceDuration(i2, s2, l2, d2, m2, c2, h2, "day"));
      const u2 = GetOptionsObject(t2), p2 = GetSlot(this, T), f2 = CalendarFields(p2, ["monthCode", "year"]), y2 = DateFromFields(p2, { ...ToTemporalYearMonthFields(this, f2), day: DurationSign(n2, r2, a2, i2, 0, 0, 0, 0, 0, 0) < 0 ? ToPositiveInteger(CalendarDaysInMonth(p2, this)) : 1 }), S2 = { ...u2 };
      return YearMonthFromFields(p2, ToTemporalYearMonthFields(CalendarDateAdd(p2, y2, { ...o2, days: i2 }, u2), f2), S2);
    }
    until(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalYearMonth(e2), n2 = GetSlot(this, T), r2 = GetSlot(o2, T), a2 = ToString(n2), i2 = ToString(r2);
      if (a2 !== i2)
        throw new RangeError(`cannot compute difference between months of ${a2} and ${i2} calendars`);
      const s2 = GetOptionsObject(t2), l2 = ToSmallestTemporalUnit(s2, "month", ft), d2 = ToLargestTemporalUnit(s2, "auto", ft, "year");
      ValidateTemporalUnitRange(d2, l2);
      const m2 = ToTemporalRoundingMode(s2, "trunc"), c2 = ToTemporalRoundingIncrement(s2, void 0, false), h2 = CalendarFields(n2, ["monthCode", "year"]), u2 = ToTemporalYearMonthFields(o2, h2), p2 = ToTemporalYearMonthFields(this, h2), f2 = DateFromFields(n2, { ...u2, day: 1 }), y2 = DateFromFields(n2, { ...p2, day: 1 }), S2 = CalendarDateUntil(n2, y2, f2, { ...s2, largestUnit: d2 });
      if ("month" === l2 && 1 === c2)
        return S2;
      let { years: g2, months: w2 } = S2;
      ({ years: g2, months: w2 } = RoundDuration(g2, w2, 0, 0, 0, 0, 0, 0, 0, 0, c2, l2, m2, y2));
      return new (GetIntrinsic("%Temporal.Duration%"))(g2, w2, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    since(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalYearMonth(e2), n2 = GetSlot(this, T), r2 = GetSlot(o2, T), a2 = ToString(n2), i2 = ToString(r2);
      if (a2 !== i2)
        throw new RangeError(`cannot compute difference between months of ${a2} and ${i2} calendars`);
      const s2 = GetOptionsObject(t2), l2 = ToSmallestTemporalUnit(s2, "month", ft), d2 = ToLargestTemporalUnit(s2, "auto", ft, "year");
      ValidateTemporalUnitRange(d2, l2);
      const m2 = ToTemporalRoundingMode(s2, "trunc"), c2 = ToTemporalRoundingIncrement(s2, void 0, false), h2 = CalendarFields(n2, ["monthCode", "year"]), u2 = ToTemporalYearMonthFields(o2, h2), p2 = ToTemporalYearMonthFields(this, h2), f2 = DateFromFields(n2, { ...u2, day: 1 }), y2 = DateFromFields(n2, { ...p2, day: 1 }), S2 = { ...s2, largestUnit: d2 };
      let { years: g2, months: w2 } = CalendarDateUntil(n2, y2, f2, S2);
      const I2 = GetIntrinsic("%Temporal.Duration%");
      return "month" === l2 && 1 === c2 || ({ years: g2, months: w2 } = RoundDuration(g2, w2, 0, 0, 0, 0, 0, 0, 0, 0, c2, l2, NegateTemporalRoundingMode(m2), y2)), new I2(-g2, -w2, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    equals(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalYearMonth(e2);
      for (const e3 of [r, a, i]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, T), GetSlot(t2, T));
    }
    toString(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return TemporalYearMonthToString(this, ToShowCalendarOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return TemporalYearMonthToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainYearMonth");
    }
    toPlainDate(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("argument should be an object");
      const t2 = GetSlot(this, T), o2 = CalendarFields(t2, ["monthCode", "year"]), n2 = ToTemporalYearMonthFields(this, o2), r2 = CalendarFields(t2, ["day"]), a2 = [["day"]];
      r2.forEach((e3) => {
        a2.some(([t3]) => t3 === e3) || a2.push([e3, void 0]);
      });
      let i2 = CalendarMergeFields(t2, n2, PrepareTemporalFields(e2, a2));
      const s2 = [.../* @__PURE__ */ new Set([...o2, ...r2])], l2 = [];
      s2.forEach((e3) => {
        l2.some(([t3]) => t3 === e3) || l2.push([e3, void 0]);
      }), i2 = PrepareTemporalFields(i2, l2);
      const d2 = pt(null);
      return d2.overflow = "reject", DateFromFields(t2, i2, d2);
    }
    getISOFields() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, T), isoDay: GetSlot(this, i), isoMonth: GetSlot(this, a), isoYear: GetSlot(this, r) };
    }
    static from(e2, t2) {
      const o2 = GetOptionsObject(t2);
      return IsTemporalYearMonth(e2) ? (ToTemporalOverflow(o2), CreateTemporalYearMonth(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, T), GetSlot(e2, i))) : ToTemporalYearMonth(e2, o2);
    }
    static compare(e2, t2) {
      const o2 = ToTemporalYearMonth(e2), n2 = ToTemporalYearMonth(t2);
      return CompareISODate(GetSlot(o2, r), GetSlot(o2, a), GetSlot(o2, i), GetSlot(n2, r), GetSlot(n2, a), GetSlot(n2, i));
    }
  };
  MakeIntrinsicClass(PlainYearMonth, "Temporal.PlainYearMonth");
  var yt = Array.prototype.push;
  var ZonedDateTime = class {
    constructor(e2, t2, o2 = GetISO8601Calendar()) {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      CreateTemporalZonedDateTimeSlots(this, ToBigInt(e2), ToTemporalTimeZone(t2), ToTemporalCalendar(o2));
    }
    get calendar() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get timeZone() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, p);
    }
    get year() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, T), dateTime(this));
    }
    get month() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, T), dateTime(this));
    }
    get monthCode() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, T), dateTime(this));
    }
    get day() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, T), dateTime(this));
    }
    get hour() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), s);
    }
    get minute() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), l);
    }
    get second() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), d);
    }
    get millisecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), m);
    }
    get microsecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), c);
    }
    get nanosecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), h);
    }
    get era() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, T), dateTime(this));
    }
    get eraYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, T), dateTime(this));
    }
    get epochSeconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, o);
      return import_jsbi.default.toNumber(import_jsbi.default.divide(t2, Oe));
    }
    get epochMilliseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, o);
      return import_jsbi.default.toNumber(import_jsbi.default.divide(t2, ve));
    }
    get epochMicroseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, o);
      return ToBigIntExternal(import_jsbi.default.divide(t2, De));
    }
    get epochNanoseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(GetSlot(this, o));
    }
    get dayOfWeek() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, T), dateTime(this));
    }
    get dayOfYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, T), dateTime(this));
    }
    get weekOfYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, T), dateTime(this));
    }
    get hoursInDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = dateTime(this), n2 = GetIntrinsic("%Temporal.PlainDateTime%"), s2 = GetSlot(t2, r), l2 = GetSlot(t2, a), d2 = GetSlot(t2, i), m2 = new n2(s2, l2, d2, 0, 0, 0, 0, 0, 0), c2 = AddISODate(s2, l2, d2, 0, 0, 0, 1, "reject"), h2 = new n2(c2.year, c2.month, c2.day, 0, 0, 0, 0, 0, 0), T2 = GetSlot(this, p), u2 = GetSlot(BuiltinTimeZoneGetInstantFor(T2, m2, "compatible"), o), f2 = GetSlot(BuiltinTimeZoneGetInstantFor(T2, h2, "compatible"), o);
      return import_jsbi.default.toNumber(import_jsbi.default.subtract(f2, u2)) / 36e11;
    }
    get daysInWeek() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, T), dateTime(this));
    }
    get daysInMonth() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, T), dateTime(this));
    }
    get daysInYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, T), dateTime(this));
    }
    get monthsInYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, T), dateTime(this));
    }
    get inLeapYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, T), dateTime(this));
    }
    get offset() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return BuiltinTimeZoneGetOffsetStringFor(GetSlot(this, p), GetSlot(this, u));
    }
    get offsetNanoseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetOffsetNanosecondsFor(GetSlot(this, p), GetSlot(this, u));
    }
    with(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid zoned-date-time-like");
      RejectObjectWithCalendarOrTimeZone(e2);
      const o2 = GetOptionsObject(t2), n2 = ToTemporalDisambiguation(o2), r2 = ToTemporalOffset(o2, "prefer"), a2 = GetSlot(this, p), i2 = GetSlot(this, T), s2 = CalendarFields(i2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      yt.call(s2, "offset");
      const l2 = ToPartialRecord(e2, s2);
      if (!l2)
        throw new TypeError("invalid zoned-date-time-like");
      const d2 = [["day", void 0], ["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["month", void 0], ["monthCode", void 0], ["nanosecond", 0], ["second", 0], ["year", void 0], ["offset"], ["timeZone"]];
      s2.forEach((e3) => {
        d2.some(([t3]) => t3 === e3) || d2.push([e3, void 0]);
      });
      let m2 = PrepareTemporalFields(this, d2);
      m2 = CalendarMergeFields(i2, m2, l2), m2 = PrepareTemporalFields(m2, d2);
      const { year: c2, month: h2, day: u2, hour: f2, minute: y2, second: S2, millisecond: g2, microsecond: w2, nanosecond: I2 } = InterpretTemporalDateTimeFields(i2, m2, o2);
      return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(c2, h2, u2, f2, y2, S2, g2, w2, I2, "option", ParseTimeZoneOffsetString(m2.offset), a2, n2, r2, false), GetSlot(this, p), i2);
    }
    withPlainDate(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), n2 = GetSlot(t2, r), u2 = GetSlot(t2, a), f2 = GetSlot(t2, i);
      let y2 = GetSlot(t2, T);
      const S2 = dateTime(this), g2 = GetSlot(S2, s), w2 = GetSlot(S2, l), I2 = GetSlot(S2, d), G2 = GetSlot(S2, m), D2 = GetSlot(S2, c), v2 = GetSlot(S2, h);
      y2 = ConsolidateCalendars(GetSlot(this, T), y2);
      const O2 = GetSlot(this, p);
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(O2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(n2, u2, f2, g2, w2, I2, G2, D2, v2, y2), "compatible"), o), O2, y2);
    }
    withPlainTime(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetIntrinsic("%Temporal.PlainTime%"), n2 = null == e2 ? new t2() : ToTemporalTime(e2), u2 = dateTime(this), f2 = GetSlot(u2, r), y2 = GetSlot(u2, a), S2 = GetSlot(u2, i), g2 = GetSlot(this, T), w2 = GetSlot(n2, s), I2 = GetSlot(n2, l), G2 = GetSlot(n2, d), D2 = GetSlot(n2, m), v2 = GetSlot(n2, c), O2 = GetSlot(n2, h), C2 = GetSlot(this, p);
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(C2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(f2, y2, S2, w2, I2, G2, D2, v2, O2, g2), "compatible"), o), C2, g2);
    }
    withTimeZone(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalTimeZone(e2);
      return CreateTemporalZonedDateTime(GetSlot(this, o), t2, GetSlot(this, T));
    }
    withCalendar(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendar(e2);
      return CreateTemporalZonedDateTime(GetSlot(this, o), GetSlot(this, p), t2);
    }
    add(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToLimitedTemporalDuration(e2), { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = o2, f2 = GetOptionsObject(t2), y2 = GetSlot(this, p), S2 = GetSlot(this, T);
      return CreateTemporalZonedDateTime(AddZonedDateTime(GetSlot(this, u), y2, S2, n2, r2, a2, i2, s2, l2, d2, m2, c2, h2, f2), y2, S2);
    }
    subtract(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const o2 = ToLimitedTemporalDuration(e2), { years: n2, months: r2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = o2, f2 = GetOptionsObject(t2), y2 = GetSlot(this, p), S2 = GetSlot(this, T);
      return CreateTemporalZonedDateTime(AddZonedDateTime(GetSlot(this, u), y2, S2, -n2, -r2, -a2, -i2, -s2, -l2, -d2, -m2, -c2, -h2, f2), y2, S2);
    }
    until(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalZonedDateTime(e2), r2 = GetSlot(this, T), a2 = GetSlot(n2, T), i2 = ToString(r2), s2 = ToString(a2);
      if (i2 !== s2)
        throw new RangeError(`cannot compute difference between dates of ${i2} and ${s2} calendars`);
      const l2 = GetOptionsObject(t2), d2 = ToSmallestTemporalUnit(l2, "nanosecond"), m2 = ToLargestTemporalUnit(l2, "auto", [], LargerOfTwoTemporalUnits("hour", d2));
      ValidateTemporalUnitRange(m2, d2);
      const c2 = ToTemporalRoundingMode(l2, "trunc"), h2 = ToTemporalDateTimeRoundingIncrement(l2, d2), u2 = GetSlot(this, o), f2 = GetSlot(n2, o);
      let y2, S2, g2, w2, I2, G2, D2, v2, O2, C2;
      if ("year" !== m2 && "month" !== m2 && "week" !== m2 && "day" !== m2)
        y2 = 0, S2 = 0, g2 = 0, w2 = 0, { seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = DifferenceInstant(u2, f2, h2, d2, c2), { hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = BalanceDuration(0, 0, 0, D2, v2, O2, C2, m2);
      else {
        const e3 = GetSlot(this, p);
        if (!TimeZoneEquals(e3, GetSlot(n2, p)))
          throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
        const t3 = { ...l2, largestUnit: m2 };
        ({ years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = DifferenceZonedDateTime(u2, f2, e3, r2, m2, t3)), { years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = RoundDuration(y2, S2, g2, w2, I2, G2, D2, v2, O2, C2, h2, d2, c2, this), { years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = AdjustRoundedDurationDays(y2, S2, g2, w2, I2, G2, D2, v2, O2, C2, h2, d2, c2, this);
      }
      return new (GetIntrinsic("%Temporal.Duration%"))(y2, S2, g2, w2, I2, G2, D2, v2, O2, C2);
    }
    since(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalZonedDateTime(e2), r2 = GetSlot(this, T), a2 = GetSlot(n2, T), i2 = ToString(r2), s2 = ToString(a2);
      if (i2 !== s2)
        throw new RangeError(`cannot compute difference between dates of ${i2} and ${s2} calendars`);
      const l2 = GetOptionsObject(t2), d2 = ToSmallestTemporalUnit(l2, "nanosecond"), m2 = ToLargestTemporalUnit(l2, "auto", [], LargerOfTwoTemporalUnits("hour", d2));
      ValidateTemporalUnitRange(m2, d2);
      let c2 = ToTemporalRoundingMode(l2, "trunc");
      c2 = NegateTemporalRoundingMode(c2);
      const h2 = ToTemporalDateTimeRoundingIncrement(l2, d2), u2 = GetSlot(this, o), f2 = GetSlot(n2, o);
      let y2, S2, g2, w2, I2, G2, D2, v2, O2, C2;
      if ("year" !== m2 && "month" !== m2 && "week" !== m2 && "day" !== m2)
        y2 = 0, S2 = 0, g2 = 0, w2 = 0, { seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = DifferenceInstant(u2, f2, h2, d2, c2), { hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = BalanceDuration(0, 0, 0, D2, v2, O2, C2, m2);
      else {
        const e3 = GetSlot(this, p);
        if (!TimeZoneEquals(e3, GetSlot(n2, p)))
          throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
        const t3 = { ...l2, largestUnit: m2 };
        ({ years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = DifferenceZonedDateTime(u2, f2, e3, r2, m2, t3)), { years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = RoundDuration(y2, S2, g2, w2, I2, G2, D2, v2, O2, C2, h2, d2, c2, this), { years: y2, months: S2, weeks: g2, days: w2, hours: I2, minutes: G2, seconds: D2, milliseconds: v2, microseconds: O2, nanoseconds: C2 } = AdjustRoundedDurationDays(y2, S2, g2, w2, I2, G2, D2, v2, O2, C2, h2, d2, c2, this);
      }
      return new (GetIntrinsic("%Temporal.Duration%"))(-y2, -S2, -g2, -w2, -I2, -G2, -D2, -v2, -O2, -C2);
    }
    round(t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === t2)
        throw new TypeError("options parameter is required");
      const n2 = "string" == typeof t2 ? CreateOnePropObject("smallestUnit", t2) : GetOptionsObject(t2), f2 = ToSmallestTemporalUnit(n2, void 0, ["year", "month", "week"]);
      if (void 0 === f2)
        throw new RangeError("smallestUnit is required");
      const y2 = ToTemporalRoundingMode(n2, "halfExpand"), S2 = ToTemporalRoundingIncrement(n2, { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[f2], false), g2 = dateTime(this);
      let w2 = GetSlot(g2, r), I2 = GetSlot(g2, a), G2 = GetSlot(g2, i), D2 = GetSlot(g2, s), v2 = GetSlot(g2, l), O2 = GetSlot(g2, d), C2 = GetSlot(g2, m), E2 = GetSlot(g2, c), b2 = GetSlot(g2, h);
      const R2 = GetIntrinsic("%Temporal.PlainDateTime%"), M2 = GetSlot(this, p), Z2 = GetSlot(this, T), F2 = BuiltinTimeZoneGetInstantFor(M2, new R2(GetSlot(g2, r), GetSlot(g2, a), GetSlot(g2, i), 0, 0, 0, 0, 0, 0), "compatible"), Y2 = AddZonedDateTime(F2, M2, Z2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0), P2 = import_jsbi.default.subtract(Y2, import_jsbi.default.BigInt(GetSlot(F2, o)));
      if (import_jsbi.default.equal(P2, we))
        throw new RangeError("cannot round a ZonedDateTime in a calendar with zero-length days");
      ({ year: w2, month: I2, day: G2, hour: D2, minute: v2, second: O2, millisecond: C2, microsecond: E2, nanosecond: b2 } = RoundISODateTime(w2, I2, G2, D2, v2, O2, C2, E2, b2, S2, f2, y2, import_jsbi.default.toNumber(P2)));
      return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(w2, I2, G2, D2, v2, O2, C2, E2, b2, "option", GetOffsetNanosecondsFor(M2, GetSlot(this, u)), M2, "compatible", "prefer", false), M2, GetSlot(this, T));
    }
    equals(t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const n2 = ToTemporalZonedDateTime(t2), r2 = GetSlot(this, o), a2 = GetSlot(n2, o);
      return !!import_jsbi.default.equal(import_jsbi.default.BigInt(r2), import_jsbi.default.BigInt(a2)) && (!!TimeZoneEquals(GetSlot(this, p), GetSlot(n2, p)) && CalendarEquals(GetSlot(this, T), GetSlot(n2, T)));
    }
    toString(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), { precision: o2, unit: n2, increment: r2 } = ToSecondsStringPrecision(t2), a2 = ToTemporalRoundingMode(t2, "trunc");
      return TemporalZonedDateTimeToString(this, o2, ToShowCalendarOption(t2), function ToShowTimeZoneNameOption(e3) {
        return GetOption(e3, "timeZoneName", ["auto", "never"], "auto");
      }(t2), function ToShowOffsetOption(e3) {
        return GetOption(e3, "offset", ["auto", "never"], "auto");
      }(t2), { unit: n2, increment: r2, roundingMode: a2 });
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return new at(e2, t2).format(this);
    }
    toJSON() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalZonedDateTimeToString(this, "auto");
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.ZonedDateTime");
    }
    startOfDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = dateTime(this), t2 = GetIntrinsic("%Temporal.PlainDateTime%"), n2 = GetSlot(this, T), s2 = new t2(GetSlot(e2, r), GetSlot(e2, a), GetSlot(e2, i), 0, 0, 0, 0, 0, 0, n2), l2 = GetSlot(this, p);
      return CreateTemporalZonedDateTime(GetSlot(BuiltinTimeZoneGetInstantFor(l2, s2, "compatible"), o), l2, n2);
    }
    toInstant() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(this, o));
    }
    toPlainDate() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToDate(dateTime(this));
    }
    toPlainTime() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToTime(dateTime(this));
    }
    toPlainDateTime() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return dateTime(this);
    }
    toPlainYearMonth() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return YearMonthFromFields(e2, ToTemporalYearMonthFields(this, CalendarFields(e2, ["monthCode", "year"])));
    }
    toPlainMonthDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, T);
      return MonthDayFromFields(e2, ToTemporalMonthDayFields(this, CalendarFields(e2, ["day", "monthCode"])));
    }
    getISOFields() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = dateTime(this), t2 = GetSlot(this, p);
      return { calendar: GetSlot(this, T), isoDay: GetSlot(e2, i), isoHour: GetSlot(e2, s), isoMicrosecond: GetSlot(e2, c), isoMillisecond: GetSlot(e2, m), isoMinute: GetSlot(e2, l), isoMonth: GetSlot(e2, a), isoNanosecond: GetSlot(e2, h), isoSecond: GetSlot(e2, d), isoYear: GetSlot(e2, r), offset: BuiltinTimeZoneGetOffsetStringFor(t2, GetSlot(this, u)), timeZone: t2 };
    }
    static from(e2, t2) {
      const n2 = GetOptionsObject(t2);
      return IsTemporalZonedDateTime(e2) ? (ToTemporalOverflow(n2), ToTemporalDisambiguation(n2), ToTemporalOffset(n2, "reject"), CreateTemporalZonedDateTime(GetSlot(e2, o), GetSlot(e2, p), GetSlot(e2, T))) : ToTemporalZonedDateTime(e2, n2);
    }
    static compare(t2, n2) {
      const r2 = ToTemporalZonedDateTime(t2), a2 = ToTemporalZonedDateTime(n2), i2 = GetSlot(r2, o), s2 = GetSlot(a2, o);
      return import_jsbi.default.lessThan(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(s2)) ? -1 : import_jsbi.default.greaterThan(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(s2)) ? 1 : 0;
    }
  };
  function dateTime(e2) {
    return BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(e2, p), GetSlot(e2, u), GetSlot(e2, T));
  }
  MakeIntrinsicClass(ZonedDateTime, "Temporal.ZonedDateTime");
  var St = Object.freeze({ __proto__: null, Instant, Calendar, PlainDate, PlainDateTime, Duration, PlainMonthDay, Now: ct, PlainTime, TimeZone, PlainYearMonth, ZonedDateTime });
  var gt = [Instant, Calendar, PlainDate, PlainDateTime, Duration, PlainMonthDay, PlainTime, TimeZone, PlainYearMonth, ZonedDateTime];
  for (const e2 of gt) {
    const t2 = Object.getOwnPropertyDescriptor(e2, "prototype");
    (t2.configurable || t2.enumerable || t2.writable) && (t2.configurable = false, t2.enumerable = false, t2.writable = false, Object.defineProperty(e2, "prototype", t2));
  }

  // src/main.js
  var api = "http://localhost:3000/api/v1";
  var countdowns = [];
  var data_needs_update = true;
  document.addEventListener("DOMContentLoaded", () => {
    updateDateField();
    updateTimezoneField();
    document.querySelector("#year-input").addEventListener("change", updateDateField);
    document.querySelector("#month-select").addEventListener("change", updateDateField);
    document.querySelector("#submit-button").addEventListener("click", submitCountdownForm);
    setTimeout(fetchCountdowns, 100);
    setTimeout(updateCountdownList, 50);
  });
  async function submitCountdownForm() {
    const title = document.querySelector("#title-input").value;
    const description = document.querySelector("#description-input").value;
    const createdBy = document.querySelector("#name-input").value;
    const createdDate = St.Now.zonedDateTimeISO();
    const targetDate = (() => {
      const year = document.querySelector("#year-input").value;
      const month = document.querySelector("#month-select").value;
      const day = document.querySelector("#date-select").value;
      const [hour, minute] = document.querySelector("#time-input").value.split(":");
      const timeZone2 = document.querySelector("#timezone-select").value;
      return St.ZonedDateTime.from({ year, month, day, hour, minute, timeZone: timeZone2 });
    })();
    const body = JSON.stringify({ title, description, createdBy, createdDate, targetDate });
    const method = "post";
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    fetch(
      `${api}/countdowns`,
      { method, headers, body }
    ).then(() => {
      data_needs_update = true;
    });
  }
  function updateDateField() {
    const date_select = document.querySelector("#date-select");
    const year = document.querySelector("#year-input").value;
    const month = document.querySelector("#month-select").value;
    const partial_date = St.PlainYearMonth.from({ year, month });
    date_select.innerHTML = "";
    for (let i2 = 1; i2 <= partial_date.daysInMonth; i2++) {
      date_select.innerHTML += `<option value="${i2}">${i2}</option>`;
    }
  }
  function updateTimezoneField() {
    const timezones = Intl.supportedValuesOf("timeZone").reduce((prev, curr) => {
      const timezones2 = { ...prev };
      if (!curr.includes("/")) {
        timezones2[curr] = curr;
        return timezones2;
      }
      const [region, place] = curr.split("/");
      if (timezones2[region] === void 0)
        timezones2[region] = {};
      timezones2[region][place] = curr;
      return timezones2;
    }, {});
    const options = Object.entries(timezones).map(([region, place]) => {
      if (typeof place === "string") {
        return `<option value="${place}">${place}</option>`;
      }
      const places = Object.entries(place).map(([place2, timezone]) => {
        return `<option value="${timezone}">${place2}</option>`;
      });
      return `<optgroup label="${region}">${places.join("")}</optgroup>`;
    }).join("");
    document.querySelector("#timezone-select").innerHTML = options;
  }
  function updateCountdownList() {
    const countdownList = document.querySelector("#countdown-list");
    countdownList.innerHTML = "";
    countdowns.forEach((countdown) => {
      const countdownElement = createCountdown(countdown);
      countdownList.innerHTML += countdownElement;
    });
    setTimeout(updateCountdownList, 50);
  }
  async function fetchCountdowns() {
    if (!data_needs_update) {
      setTimeout(fetchCountdowns, 100);
      return;
    }
    const response = await fetch(
      `${api}/countdowns`,
      { method: "get" }
    );
    const json = await response.json();
    countdowns = json.map((countdown) => {
      return {
        title: countdown.title,
        description: countdown.description,
        createdBy: countdown.createdBy,
        createdDate: St.ZonedDateTime.from(countdown.createdDate),
        targetDate: St.ZonedDateTime.from(countdown.targetDate)
      };
    });
    data_needs_update = false;
    setTimeout(fetchCountdowns, 100);
  }
  function createCountdown(countdown) {
    const userDateTimeOptions = Intl.DateTimeFormat().resolvedOptions();
    const durationFormatter = new Intl.RelativeTimeFormat("da", { numeric: "auto", style: "long" });
    const now = St.Now.zonedDateTimeISO(userDateTimeOptions.timeZone);
    const created = St.ZonedDateTime.from(countdown.createdDate);
    const sinceCreated = now.until(created);
    const target = St.ZonedDateTime.from(countdown.targetDate);
    const untilTarget = now.until(target);
    return `<div class="flex flex-col flex-shrink flex-grow p-3 md:basis-full lg:basis-6/12 xl:basis-4/12 gap-1 items-center rounded-3xl bg-blue-500 text-white">
                <span>${countdown.title} ${durationFormatter.format(Math.ceil(untilTarget.total("seconds")), "seconds")}</span>
                <span>${countdown.description}</span>
                <span>Oprettet af ${countdown.createdBy}, ${durationFormatter.format(Math.ceil(sinceCreated.total("seconds")), "seconds")}.</span>
            </div>`;
  }
})();
//# sourceMappingURL=main.js.map
