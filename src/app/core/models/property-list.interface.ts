import { Pagination } from "./pagination.interface";
import { PropertyForList } from "./property-for-list.interface";

export interface PropertyList {
    pagination: Pagination;
    content: PropertyForList[];
}