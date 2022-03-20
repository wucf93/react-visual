export class ChildNodesList<T extends VisualNode> extends Set<T> {
    get length() {
        return this.size;
    }
}

export class VisualNode {
    readonly childNodes: ChildNodesList<VisualChildNode> = new ChildNodesList();
    protected parentNode: VisualNode | null = null;

    appendChild<T extends VisualChildNode>(child: T) {
        if (child instanceof VisualNode) {
            child.parentNode = this;
            this.childNodes.add(child);
        }
        this.getRootNode()?.draw();
    }

    getRootNode(): VisualDocumentNode | null {
        let parentNode: VisualNode = this.parentNode || this;
        while (parentNode?.parentNode) parentNode = parentNode.parentNode;
        return parentNode instanceof VisualDocumentNode ? parentNode : null;
    }

    removeChild<T extends VisualChildNode>(child: T) {
        if (this.childNodes.delete(child)) child.parentNode = null;
        this.getRootNode()?.draw();
        return child;
    }
}

export class VisualChildNode extends VisualNode {
    remove() {
        this.parentNode?.removeChild(this);
    }
}

export abstract class VisualDocumentNode extends VisualNode {
    // draw element to canvas
    abstract draw(): void;
}