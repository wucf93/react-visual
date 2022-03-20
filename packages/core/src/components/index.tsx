import { FC } from "react";
import type { GroupAttributes, FrameAttributes } from "visual-gui";
import type { VisualProps } from "../types";

export const Group: FC<VisualProps<GroupAttributes>> = (props) => {
  return <group {...props}></group>;
};

export const Frame: FC<VisualProps<FrameAttributes>> = (props) => {
  return <frame {...props}></frame>;
};
