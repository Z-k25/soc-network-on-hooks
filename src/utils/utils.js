import { parse } from "query-string"

export const range = (start, end) => {
    return [...Array(end - start + 1).keys()].map(el => el + start)
}

export const urlParser = (url, key) => {
    const parsed = parse(url)
    return +parsed[key]
}

export const getUsersStartPage = (url, key, maxCount) => {
    const parsed = urlParser(url, key)

    if (!parsed || parsed < 1) {
        return 1
    }

    if (parsed > maxCount) {
        return maxCount
    }
    return parsed
}