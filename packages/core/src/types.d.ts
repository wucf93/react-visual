import type { ClassAttributes, ReactNode } from 'react';
import type { FrameAttributes, GroupAttributes, Attributes } from 'visual-gui';
import { VisualFrameElement, VisualGroupElement } from "visual-gui";

export type VisualProps<T extends Attributes> = {
    children?: ReactNode;
} & T;

export type DetailedVisualProps<E extends Attributes, T> = ClassAttributes<T> & VisualProps<E>

declare global {
    namespace JSX {
        interface IntrinsicElements {
            frame: DetailedVisualProps<FrameAttributes, VisualFrameElement>,
            group: DetailedVisualProps<GroupAttributes, VisualGroupElement>
        }
    }
}