import React, { FC, useMemo } from "react";
import { isValidPoint } from "../utils";

import type { VisualProps, Point } from "../types";
import type { Attributes } from "visual-gui";

interface LineProps extends Attributes {
  /**
   * @description 线段开始点坐标
   */
  start?: Point;
  /**
   * @description 线段结束点坐标
   */
  end?: Point;
}

export const Line: FC<VisualProps<LineProps>> = ({ start, end, ...props }) => {
  const path = useMemo(
    () =>
      isValidPoint(start) && isValidPoint(end)
        ? new Path2D(`M ${start[0]} ${start[1]} L ${end[0]} ${end[1]}}`)
        : undefined,
    [end, start]
  );
  return <shape {...props} path={path} />;
};
