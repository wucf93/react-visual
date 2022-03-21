import { VisualElement, Attributes } from "./element";

export type GroupAttributes = Attributes

export class VisualGroupElement extends VisualElement<GroupAttributes> {
    render(ctx: CanvasRenderingContext2D) {
        const { x, y, fillStyle, strokeStyle } = this.getAttributes();
        ctx.save();
        fillStyle && (ctx.fillStyle = fillStyle);
        strokeStyle && (ctx.strokeStyle = strokeStyle);
        ctx.translate(x || 0, y || 0);
        ctx.restore();
    }
}