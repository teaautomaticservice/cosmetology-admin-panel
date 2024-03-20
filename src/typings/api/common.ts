export interface Pagination {
  count: number,
  page: number,
  pageSize: number,
}

export interface List<CurrentType> {
  data: CurrentType[];
  meta: Pagination;
}
