import { VisualFrameElement } from './frame';
import { VisualGroupElement } from './group';

export const elementMap = {
  frame: VisualFrameElement,
  group: VisualGroupElement
}

export type ElementMap = {
  [K in keyof typeof elementMap]: InstanceType<typeof elementMap[K]>
}

export * from './element';
export * from './frame';
export * from './group';

