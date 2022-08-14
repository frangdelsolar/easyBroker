export interface Pagination {
    limit: number,
    page: number,
    total: number,
    next_page: string | null
}