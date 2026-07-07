export interface BookSearchAndFilterProps {
    searchTerm: string,
    selectTerm: string,
    setSearchTerm: (value : string) => void,
    setSelectTerm: (value: string) => void
}