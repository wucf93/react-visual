import { ReactNode } from 'react';
import Reconciler from 'react-reconciler';
import * as hostConfig from './hostconfig';
import { VisualGui, VisualGuiOptions } from "visual-gui";
import type { HostConfig, Container } from './hostconfig';

const ReactReconcilerInst = Reconciler(hostConfig as unknown as HostConfig);

export interface RenderOptions extends VisualGuiOptions {
    rootElement?: Element | null;
}

let container: Container;

export default {
    render(reactElement: ReactNode, options: RenderOptions, callback?: (() => void) | null) {
        if (!container) {
            if (!(options.rootElement instanceof Element)) {
                options.rootElement = document.body;
                console.warn("rootElement not a Element,will replace document.body")
            }

            const gui: Container = Object.assign(new VisualGui(options), { rootElement: options.rootElement });
            container = ReactReconcilerInst.createContainer(gui, 0, false, null);
        }

        return ReactReconcilerInst.updateContainer(reactElement, container, null, callback);
    }
}

export * from './components';