import { useState, createRef } from "react"

export default function UserSearchForm({ onSearch = () => {} }) {
    const searchInputRef = createRef()

    return (
        <form name="user-search" className="user-search" onSubmit={(e) => {
            e.preventDefault()
            onSearch(searchInputRef.current.value)
        }}>
            <label className="sr-only" htmlFor="q">Search</label>
            <input ref={searchInputRef} type="text" name="q" id="q" placeholder="Search a user..." autoComplete="off" />
            <button type="submit">search</button>
        </form>
    )
}
