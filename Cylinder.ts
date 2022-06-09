export class Cylinder {
    private static getParameter(radius: number): number{
        return 2*Math.PI * radius;
    }
    private static getBaseArea(radius: number): number {
        return Math.PI * radius *radius;
    }
    public static getTotalArea(radius: number,height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let parameter: number = this.getParameter(radius);
        let totalArea: number = 2*baseArea + parameter*height;
        return totalArea;
    }
}