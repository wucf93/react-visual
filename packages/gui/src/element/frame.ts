import { VisualElement, Attributes } from "./element";

export interface FrameAttributes extends Attributes {
    width?: number;
    height?: number;
    clip?: boolean;
}

export class VisualFrameElement extends VisualElement<FrameAttributes> {
    render(ctx: CanvasRenderingContext2D) {
        const { x, y, fillStyle, strokeStyle, width = 0, height = 0, clip = false } = this.getAttributes();
        ctx.save();
        fillStyle && (ctx.fillStyle = fillStyle);
        strokeStyle && (ctx.strokeStyle = strokeStyle);
        ctx.translate(x || 0, y || 0);
        const path = new Path2D(`M0 0 h ${width} v ${height} h ${-width} Z`)
        ctx.fill(path);
        ctx.stroke(path);
        clip && ctx.clip(path);
        ctx.restore();
    }
}