import { useCallback, useState } from 'react'
import { range as getRange } from '../utils/utils'

export const useRange = (startValue, totalCount, rangeLength) => {
    const [range, setRange] = useState(() => getRange(startValue, startValue + rangeLength))

    const changeRange = useCallback((newStartValue) => {
        const endValue = newStartValue + rangeLength

        if (endValue <= totalCount) {
            setRange(() => getRange(newStartValue, endValue))
        }
        if (endValue > totalCount) {
            setRange(() => getRange(newStartValue, totalCount))
        }
        if (newStartValue < 1) {
            setRange(() => getRange(1, 1 + rangeLength))
        }
    }, [rangeLength, totalCount])

    return [range, changeRange]
}