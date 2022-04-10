import React, { FC, useMemo } from "react";
import { isValidPoint } from "../utils";

import type { VisualProps, Point } from "../types";
import type { Attributes } from "visual-gui";

interface EllipseProps extends Attributes {
  /**
   * @description 线段开始点坐标
   */
  start?: Point;
  /**
   * @description 线段结束点坐标
   */
  end?: Point;
}

export const Ellipse: FC<VisualProps<EllipseProps>> = ({ start, end, ...props }) => {
  const path = useMemo(() => {
    const path2d = new Path2D();
    path2d.ellipse()
    return path2d;
  }, [end, start]);
  return <shape {...props} path={path} />;
};
