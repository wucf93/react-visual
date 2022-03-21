import { VisualDocumentNode, VisualNode } from "./node";
import { elementMap, ElementMap, VisualElement } from "./element";

export interface VisualGuiOptions {
    width?: number;
    height?: number;
}

const _draw = (rootNode: VisualNode, ctx: CanvasRenderingContext2D) => {
    const stack = [rootNode];
    while (stack.length > 0) {
        const node = stack.shift();
        if (node instanceof VisualElement && ctx) node.render(ctx);
        if (node && node.childNodes?.length > 0) node.childNodes.forEach(childNode => stack.push(childNode));
    }
}

export class VisualGui extends VisualDocumentNode {
    readonly view = document.createElement("canvas");
    readonly ctx = this.view.getContext("2d");
    private _isRender = false;

    constructor(options?: VisualGuiOptions) {
        super();
        this.view.width = options?.width || 500;
        this.view.height = options?.height || 500;
        if (!this.ctx) throw new Error("getContext(2d) 获取失败，请检查方法调用时机");
    }

    createElement<K extends keyof ElementMap>(name: K): ElementMap[K] {
        const Ctor = elementMap[name]
        if (!Ctor) throw new Error("not fond" + name)
        return new Ctor()
    }

    draw() {
        if (this._isRender) return;
        window.requestAnimationFrame(() => {
            this._isRender = true;
            if (this.ctx) _draw(this, this.ctx)
            this._isRender = false;
        })
    }
}

export * from './node';
export * from './element';
