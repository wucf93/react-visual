import Reconciler from 'react-reconciler';

type Type = string;
type Props = { children: any }
type Container = Element;
type Instance = Node;
type TextInstance = Text;
type SuspenseInstance = Comment;
type HydratableInstance = Instance | TextInstance | SuspenseInstance;
type PublicInstance = Element | Text;
type HostContext = any;
type UpdatePayload = Array<any>;
type _ChildSet = void;
type TimeoutHandle = number;
type NoTimeout = -1;

type HostConfig = Reconciler.HostConfig<Type, Props, Container, Instance, TextInstance, SuspenseInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, _ChildSet, TimeoutHandle, NoTimeout>;

const NO_CONTEXT = {};

export const hostConfig: HostConfig = {
    now: Date.now,
    supportsMutation: true,
    getRootHostContext() {
        return NO_CONTEXT;
    },
    getChildHostContext() {
        return NO_CONTEXT;
    },
    shouldSetTextContent(type, props) {
        return typeof props.children === 'string' || typeof props.children === 'number'
    },
    prepareForCommit() {
        return null;
    },
    clearContainer(container) {
        // TODO Implement this
    },
    resetAfterCommit() {
        // Noop
    },
    createInstance(type, props, internalInstanceHandle) {
        let instance;
        switch (type) {
            case "Text":
                instance = document.createTextNode('hello');
                break;
        }
        if (!instance) {
            throw new Error(`ReactART does not support the type "${type}"`);
        }
        return instance;
    },
    finalizeInitialChildren(domElement, type, props) {
        return false;
    },
    appendChildToContainer(parentInstance, child) {
        // if (child.parentNode === parentInstance) {
        //     child.eject();
        // }
        // child.inject(parentInstance);
    }
};