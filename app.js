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
const operacion = async (num1, num2, mod) => {
    try {
        mod = "./" + mod[0].toUpperCase() + mod.slice(1);
        const { default: Mod } = await Promise.resolve().then(() => __importStar(require(mod)));
        const calculo = new Mod(num1, num2);
        return calculo.operacion();
    }
    catch (err) {
        console.error(err);
    }
    ;
};
const operaciones = () => {
    operacion(4, 3, "suma")
        .then(console.log); // 7
    operacion(4, 3, "resta")
        .then(console.log); // 1
    operacion(62, 31, "suma")
        .then(console.log); // 93
    operacion(62, 31, "resta")
        .then(console.log); // 31
    operacion(42, 33, "suma")
        .then(console.log); // 75
    operacion(42, 33, "resta")
        .then(console.log); // 9
};
operaciones();
