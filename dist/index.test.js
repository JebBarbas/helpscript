"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var hs = __importStar(require("."));
test('escapeNumbers()', function () {
    expect(hs.escapeNumbers('80 years')).toBe('eighty years');
    expect(hs.escapeNumbers('5 Dollars', true)).toBe('Five Dollars');
    expect(hs.escapeNumbers('1 2 3')).toBe('one two three');
});
test('numberName()', function () {
    expect(hs.numberName(5)).toBe('five');
    expect(hs.numberName(10, true)).toBe('Ten');
});
test('repeat()', function () {
    var num = 0;
    var addOne = function () { ++num; };
    hs.repeat(addOne, 5, 100);
    expect(num).toBe(5);
});
test('repeatAsync()', function () { return __awaiter(void 0, void 0, void 0, function () {
    var num, addOne;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                num = 0;
                addOne = function () { ++num; };
                return [4 /*yield*/, hs.repeat(addOne, 10, 100)];
            case 1:
                _a.sent();
                expect(num).toBe(10);
                return [2 /*return*/];
        }
    });
}); });
test('sleep()', function () {
    expect(hs.sleep(2500)).toBe(undefined);
});
test('sleepAsync()', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, hs.sleepAsync(2500)];
            case 1:
                _a.apply(void 0, [_b.sent()]).toBe(undefined);
                return [2 /*return*/];
        }
    });
}); });
test('testif()', function () {
    expect(hs.testif('hello', '<', 'helloworld')).toBe(true);
    expect(hs.testif([1, 2, 3, 4, 5], '>', [1, 2])).toBe(true);
    expect(hs.testif({ length: 10 }, '!=', { length: 10 })).toBe(false);
});
test('toBoolean()', function () {
    expect(hs.toBoolean([])).toBe(true);
    expect(hs.toBoolean(0)).toBe(false);
    expect(hs.toBoolean("")).toBe(false);
    expect(hs.toBoolean([1].length)).toBe(true);
});
test('toNumber()', function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = '';
            this.age = 0;
            this.length = 0;
            this.name = name;
            this.age = age;
            this.length = age;
        }
        return Person;
    }());
    expect(hs.toNumber(100)).toBe(100);
    expect(hs.toNumber(true)).toBe(1);
    expect(hs.toNumber([1, 2, 3])).toBe(3);
    expect(hs.toNumber("hola")).toBe(4);
    expect(hs.toNumber(new Person('Pedro', 12))).toBe(12);
    expect(hs.toNumber(new Person('Juan', 69))).toBe(69);
});
test('type()', function () {
    expect(hs.type('hola')).toBe('string');
    expect(hs.type(4)).toBe('number');
    expect(hs.type(undefined)).toBe('undefined');
});
test('unsymbol()', function () {
    expect(hs.unsymbol('Red + Blue')).toBe('Red Plus Blue');
    expect(hs.unsymbol('me & you', true)).toBe('me Ampersand you');
    expect(hs.unsymbol('5!', false, { '!': 'Factorial', '5': 'Cinco' })).toBe('CincoFactorial');
    expect(hs.unsymbol('Hot & Cold')).toBe('Hot And Cold');
});
test('variablelify()', function () {
    expect(hs.variablelify("10 Dollars + 50 Shades (Plus)")).toBe("tenDollarsPlusFiftyShadesPlus");
    expect(hs.variablelify("Red & Blue 4 ever")).toBe('redAndBlueFourEver');
});
//# sourceMappingURL=index.test.js.map