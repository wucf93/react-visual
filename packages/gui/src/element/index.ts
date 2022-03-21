import { VisualFrameElement } from './frame';
import { VisualGroupElement } from './group';
import { VisualShapeElement } from './shape';

export const elementMap = {
  frame: VisualFrameElement,
  group: VisualGroupElement,
  shape: VisualShapeElement,
}

export type ElementMap = {
  [K in keyof typeof elementMap]: InstanceType<typeof elementMap[K]>
}

export * from './element';
export * from './frame';
export * from './group';
export * from './shape';

