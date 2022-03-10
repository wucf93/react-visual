import { ReactNode } from 'react';
import Reconciler from 'react-reconciler';
import { hostConfig } from './hostconfig';

const ReactReconcilerInst = Reconciler(hostConfig);

let container;

export default {
    render: (reactElement: ReactNode, domElement: HTMLCanvasElement | null) => {
        if (!domElement) return;
        console.log(reactElement);
        console.log(ReactReconcilerInst)

        container = ReactReconcilerInst.createContainer(domElement, 0, false, null)

        // update the root Container
        return ReactReconcilerInst.updateContainer(reactElement, container, null);
    }
};  