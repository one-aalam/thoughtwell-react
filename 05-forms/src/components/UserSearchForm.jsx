import { useState } from "react"

export default function UserSearchForm({ onSearch = () => {} }) {
    const [ query, setQuery ] = useState("")
    return (
        <form name="user-search" className="user-search">
            <label className="sr-only" htmlFor="q">Search</label>
            <input type="text" name="q" id="q" value={query} onChange={(e) => {
                setQuery(e.target.value)
                onSearch(e.target.value)
            }} placeholder="Search a user..." autoComplete="off" />
        </form>
    )
}
