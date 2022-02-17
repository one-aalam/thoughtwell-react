import { useState, useEffect } from 'react'

const STATE_PREFIX = `thoughtwell`

const useBrowserState = (key = `state`, initValue = []) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(`${STATE_PREFIX}_${key}`)) || initValue
    )

    useEffect(() => {
        localStorage.setItem(`${STATE_PREFIX}_${key}`, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useBrowserState
