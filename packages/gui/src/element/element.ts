import { VisualChildNode } from "../node";

export interface Attributes {
  x?: number;
  y?: number;
  fillStyle?: CanvasRenderingContext2D["fillStyle"];
  strokeStyle?: CanvasRenderingContext2D["fillStyle"];
}

export class VisualElement<T extends Attributes = Attributes> extends VisualChildNode {
  readonly attributes = new Map();

  render(ctx: CanvasRenderingContext2D) {
    const { x, y, fillStyle, strokeStyle } = this.getAttributes();
    ctx.save();
    fillStyle && (ctx.fillStyle = fillStyle);
    strokeStyle && (ctx.strokeStyle = strokeStyle);
    ctx.translate(x || 0, y || 0);
    ctx.restore();
  }

  setAttribute<K extends keyof T>(key: K, value: T[K]) {
    this.attributes.set(key, value);
    this.getRootNode()?.draw();
  }

  setAttributes(values: Partial<T>) {
    for (const key in values) {
      this.attributes.set(key, values[key])
    }
    this.getRootNode()?.draw();
  }

  getAttribute<K extends keyof T>(key: K): T[K] {
    return this.attributes.get(key);
  }

  getAttributes(): Partial<T> {
    const result: Partial<T> = {};
    this.attributes.forEach((value, key: keyof T) => result[key] = value)
    return result;
  }

}
