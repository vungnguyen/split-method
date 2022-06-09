"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
class Cylinder {
    static getParameter(radius) {
        return 2 * Math.PI * radius;
    }
    static getBaseArea(radius) {
        return Math.PI * radius * radius;
    }
    static getTotalArea(radius, height) {
        let baseArea = this.getBaseArea(radius);
        let parameter = this.getParameter(radius);
        let totalArea = 2 * baseArea + parameter * height;
        return totalArea;
    }
}
exports.Cylinder = Cylinder;
