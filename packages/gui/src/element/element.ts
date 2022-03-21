import { VisualChildNode } from "../node";

export interface Attributes {
  x?: number;
  y?: number;
  fillStyle?: CanvasRenderingContext2D["fillStyle"];
  strokeStyle?: CanvasRenderingContext2D["fillStyle"];
}

export abstract class VisualElement<T extends Attributes = Attributes> extends VisualChildNode {
  readonly attributes = new Map();

  abstract render(ctx: CanvasRenderingContext2D): void;

  setAttribute<K extends keyof T>(key: K, value: T[K] | undefined | null) {
    this.attributes.set(key, value);
    this.getRootNode()?.draw();
  }

  setAttributes(values: Partial<T>) {
    for (const key in values) {
      this.setAttribute<typeof key>(key, values[key])
    }
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
