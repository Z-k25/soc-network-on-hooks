import { useCallback, useState } from 'react'
import {range as getRange} from '../utils/utils'

export const useRange = (startValue, totalCount, changeValue) => {
    const [range, setRange] = useState(() => getRange(startValue, startValue + changeValue))
    const changeRange = useCallback((start) => {
        if (start + changeValue <= totalCount ) {
            setRange(() => {
                const value = getRange(start, start + changeValue)
                console.log(value)
                return value
            })
        }
        if (start + changeValue > totalCount) {
            setRange(() => getRange(totalCount - changeValue, totalCount))        
        }
        if (start < 1) {
            setRange(() => getRange(1, 1 + changeValue))
        }
    }, [changeValue, totalCount])

    return [range, changeRange]
}