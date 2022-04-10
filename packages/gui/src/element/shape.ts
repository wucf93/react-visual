import { VisualChildNode } from "../node";
import { VisualElement, Attributes } from "./element";

export interface ShapeAttributes extends Attributes {
    path?: Path2D
}

export class VisualShapeElement extends VisualElement<ShapeAttributes> {
    render(ctx: CanvasRenderingContext2D) {
        const { x, y, fillStyle, strokeStyle, path } = this.getAttributes();
        if (!path) return;

        ctx.save();
        fillStyle && (ctx.fillStyle = fillStyle);
        strokeStyle && (ctx.strokeStyle = strokeStyle);
        ctx.translate(x || 0, y || 0);
        ctx.fill(path);
        ctx.stroke(path);
        ctx.restore();
    }

    appendChild<T extends VisualChildNode>(child: T) {
        console.warn("请使用 group 或者 frame 包裹元素")
    }
}

