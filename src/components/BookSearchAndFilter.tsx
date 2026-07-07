import React from "react"

function BookSearchAndFilter() {
    return (
        <>
            <input type="search" placeholder="Search book by title" />

            <select name="status">
                <option value="">Filter by status</option>
                <option value='available'>Available</option>
                <option value='unavailable'>Un - Available</option>
            </select>

            <br /> <br />

        </>
    )
}

export default React.memo(BookSearchAndFilter)