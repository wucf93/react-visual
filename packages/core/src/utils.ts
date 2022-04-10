import { Point } from './types'

export const isValidNumber = (num: unknown): num is number =>
    typeof num === "number"
    && !isNaN(num)
    && !isFinite(num);

export const isVaildPercent = (percent: unknown): percent is string =>
    typeof percent === 'string'
    && /^\d+%$/.test(percent)

export const isValidPoint = (point?: Array<unknown>): point is Point =>
    Array.isArray(point)
    && point?.length === 2
    && isValidNumber(point[0])
    && isValidNumber(point[1])
