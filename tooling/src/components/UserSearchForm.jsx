import { useState, createRef, useEffect } from 'react'

export default function UserSearchForm({ onSearch = () => {} }) {
    const [query, setQuery] = useState('')
    const searchInputRef = createRef()

    useEffect(() => {
        searchInputRef.current.focus()
    })

    return (
        <form
            name="user-search"
            className="user-search"
            onSubmit={(e) => {
                e.preventDefault()
                onSearch(searchInputRef.current.value)
            }}
        >
            <label className="sr-only" htmlFor="q">
                Search
            </label>
            <input
                ref={searchInputRef}
                type="text"
                name="q"
                id="q"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    onSearch(e.target.value)
                }}
                placeholder="Search a user..."
                autoComplete="off"
            />
            <button type="submit">search</button>
        </form>
    )
}
