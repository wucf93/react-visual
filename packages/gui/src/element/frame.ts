import { VisualElement, Attributes } from "./element";

export interface FrameAttributes extends Attributes {
    width?: number;
    height?: number;
    clip?: boolean;
}

export class VisualFrameElement extends VisualElement<FrameAttributes> {
    render(ctx: CanvasRenderingContext2D) {
        const width = this.getAttribute("width") || 0;
        const height = this.getAttribute("height") || 0;
        ctx.save();
        const path = new Path2D(`M0 0 h ${width} v ${height} h ${-width} Z`)
        ctx.fill(path);
        ctx.stroke(path);
        this.getAttribute("clip") && ctx.clip(path);
        ctx.restore();
        super.render(ctx);
    }
}