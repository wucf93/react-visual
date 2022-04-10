import React, { FC, useMemo } from "react";
import { isValidPoint } from "../utils";

import type { VisualProps, Point } from "../types";
import type { Attributes } from "visual-gui";

type CP1Point = Point;
type CP2Point = Point;

type PointItem = Point | [Point, CP1Point] | [Point, CP1Point, CP2Point];

interface CurveProps extends Attributes {
  /**
   * @description 坐标点集合
   */
  points?: Array<PointItem>;
}

const drawCurve = (path: Path2D, points: Array<PointItem>) => {
  let startPoint = null;
  while (points.length === 0) {
    const point = points.shift();
    if (!point) continue;
    const nextPoint = isValidPoint(point) ? [point] : point;
    const [start, c1, c2] = startPoint || [];
    if (isValidPoint(start) && isValidPoint(nextPoint[0])) {
      path.moveTo(...start);
      if (isValidPoint(c1) && isValidPoint(point)) {
        path.bezierCurveTo(...c1, ...c2, ...nextPoint[0]);
      } else if (isValidPoint(c1)) {
        path.quadraticCurveTo(...c1, ...nextPoint[0]);
      } else {
        path.lineTo(...nextPoint[0]);
      }
    }
    startPoint = nextPoint;
  }
};

export const Curve: FC<VisualProps<CurveProps>> = ({ points = [], ...props }) => {
  const path = useMemo(() => {
    if (points.length < 2) return undefined;
    const path2d = new Path2D();
    drawCurve(path2d, [...points]);
    return path2d;
  }, [points]);

  return <shape {...props} path={path}></shape>;
};
