import React from "react"
import type { BookSearchAndFilterProps } from "../types/types.BookSearchAndFilterProps"

function BookSearchAndFilter({
    searchTerm,
    selectTerm,
    setSearchTerm,
    setSelectTerm
}: BookSearchAndFilterProps) {

    return (
        <>
            <input type="search" placeholder="Search book by title" value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />

            <select name="status" value={selectTerm} onChange={
                (e: React.ChangeEvent<HTMLSelectElement>) => setSelectTerm(e.target.value)}>
                <option value="">Filter by status</option>
                <option value='true'>Available</option>
                <option value='false'>Un - Available</option>
            </select>

            <br /> <br />

        </>
    )
}

export default React.memo(BookSearchAndFilter)