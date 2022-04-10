import React, { FC, useMemo } from "react";
import { isValidNumber, isVaildPercent } from "../utils";

import type { VisualProps } from "../types";
import type { Attributes } from "visual-gui";

interface RectProps extends Attributes {
  /**
   * @description 矩形宽度
   */
  width?: number;
  /**
   * @description 矩形高度
   */
  height?: number;
  /**
   * @description 圆角
   * @default 0
   */
  radius?: number;
  radiusTopLeft?: number | string;
  radiusTopRight?: number | string;
  radiusBottomLeft?: number | string;
  radiusBottomRight?: number | string;
}

const getRadius = (radius?: number | string, width?: number, height?: number) => {
  if (!radius || !width || !height) return 0;
  const min = Math.min(width, height);
  const res = isValidNumber(radius)
    ? radius
    : isVaildPercent(radius)
    ? Math.round((Number(radius.replace("%", "")) * min) / 100)
    : 0;
  return Math.min(min, res);
};

export const Rect: FC<VisualProps<RectProps>> = ({
  width,
  height,
  radius,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomLeft,
  radiusBottomRight,
  x = 0,
  y = 0,
  ...props
}) => {
  const tlRadius = useMemo(
    () => getRadius(radiusTopLeft || radius, width, height),
    [radius, radiusTopLeft, width, height]
  );

  const trRadius = useMemo(
    () => getRadius(radiusTopRight || radius, width, height),
    [radius, radiusTopRight, width, height]
  );

  const blRadius = useMemo(
    () => getRadius(radiusBottomLeft || radius, width, height),
    [radius, radiusBottomLeft, width, height]
  );

  const brRadius = useMemo(
    () => getRadius(radiusBottomRight || radius, width, height),
    [radius, radiusBottomRight, width, height]
  );

  const path = useMemo(() => {
    if (isValidNumber(width) && width > 0 && isValidNumber(height) && height > 0) {
      const path = new Path2D();

      path.arc(x + tlRadius, y + tlRadius, 2 * Math.PI, 3 * Math.PI, tlRadius);
      path.moveTo(x + tlRadius, y);
      path.lineTo(x - trRadius, y);

      path.arc(x + width - trRadius, y + trRadius, 3 * Math.PI, 0, trRadius);
      path.moveTo(x + width, y + trRadius);
      path.lineTo(x, y + height - brRadius);

      path.arc(x + width - brRadius, y + height - brRadius, 0, Math.PI, brRadius);
      path.moveTo(x + width - brRadius, y + height);
      path.lineTo(x + height - blRadius, y + height);

      path.arc(x + blRadius, y + height - blRadius, Math.PI, Math.PI * 2, blRadius);
      path.moveTo(x, y + height - blRadius);
      path.lineTo(x, y + tlRadius);

      return path;
    }
    return undefined;
  }, [width, height, x, y, tlRadius, trRadius, blRadius, brRadius]);
  return <shape {...props} path={path} x={x} y={y} />;
};
