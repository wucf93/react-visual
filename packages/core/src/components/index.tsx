import React, { FC } from "react";
import type { GroupAttributes, FrameAttributes, ShapeAttributes } from "visual-gui";
import type { VisualProps } from "../types";

export const Group: FC<VisualProps<GroupAttributes>> = (props) => {
  return <group {...props}></group>;
};

export const Frame: FC<VisualProps<FrameAttributes>> = (props) => {
  return <frame {...props}></frame>;
};

export const Shape: FC<VisualProps<ShapeAttributes>> = (props) => {
  return <shape {...props} />;
};
