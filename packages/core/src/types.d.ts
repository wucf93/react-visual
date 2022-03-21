import type { ClassAttributes, ReactNode } from 'react';
import type { FrameAttributes, GroupAttributes, ShapeAttributes, Attributes } from 'visual-gui';
import { VisualFrameElement, VisualGroupElement, VisualShapeElement } from "visual-gui";

export type VisualProps<T extends Attributes> = {
    children?: ReactNode;
} & T;

export type DetailedVisualProps<E extends Attributes, T> = ClassAttributes<T> & VisualProps<E>

declare global {
    namespace JSX {
        interface IntrinsicElements {
            frame: DetailedVisualProps<FrameAttributes, VisualFrameElement>,
            group: DetailedVisualProps<GroupAttributes, VisualGroupElement>,
            shape: DetailedVisualProps<ShapeAttributes, VisualShapeElement>,
        }
    }
}