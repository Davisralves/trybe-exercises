"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = void 0;
function length(value, baseUnit, unitConvertion) {
    const convertTable = {
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 0.001,
    };
    const convertWeigth = convertTable[baseUnit] / convertTable[unitConvertion];
    return convertWeigth * value;
}
exports.length = length;
