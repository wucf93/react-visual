import Reconciler from 'react-reconciler';
import { VisualGui, VisualElement, Attributes } from "visual-gui";

import type { VisualProps } from './types';
import type { ElementMap } from 'visual-gui';

export type Type = keyof ElementMap;
export type Props = VisualProps<Attributes>;
export type Container = VisualGui & { rootElement: Element };
type Instance = VisualElement;
type TextInstance = any;
type SuspenseInstance = Comment;
type HydratableInstance = Instance | TextInstance | SuspenseInstance;
type PublicInstance = Element | Text;
type HostContext = any;
type UpdatePayload = Array<any>;
type _ChildSet = void;
type TimeoutHandle = number;
type NoTimeout = -1;

export type HostConfig = Reconciler.HostConfig<Type, Props, Container, Instance, TextInstance, SuspenseInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, _ChildSet, TimeoutHandle, NoTimeout>;

const NO_CONTEXT = {};

export const now = Date.now;

export const supportsMutation: HostConfig["supportsMutation"] = true;

export const getRootHostContext: HostConfig["getRootHostContext"] = () => NO_CONTEXT;

export const getChildHostContext: HostConfig["getChildHostContext"] = () => NO_CONTEXT;

export const shouldSetTextContent: HostConfig["shouldSetTextContent"] = (type, props) => typeof props.children === 'string' || typeof props.children === 'number'

export const prepareForCommit: HostConfig["prepareForCommit"] = () => null;

export const clearContainer: HostConfig["clearContainer"] = (container) => {
    while (container.rootElement.firstChild) {
        container.rootElement.removeChild(container.rootElement.firstChild);
    }
};

export const resetAfterCommit: HostConfig["resetAfterCommit"] = () => void 0;

export const createInstance: HostConfig["createInstance"] = (type, props, rootContainer) => {
    const instance = rootContainer.createElement(type);
    instance.setAttributes(props);
    return instance;
}

export const finalizeInitialChildren: HostConfig["finalizeInitialChildren"] = () => false;

export const appendChildToContainer: HostConfig["appendChildToContainer"] = (container, child) => {
    container.rootElement.appendChild(container.view)
    container.appendChild(child);
};

export const appendInitialChild: HostConfig["appendInitialChild"] = (parentInstance, child) => {
    parentInstance.appendChild(child)
}

export const removeChildFromContainer: HostConfig["removeChildFromContainer"] = (container, child) => {
    container.removeChild(child);
}
