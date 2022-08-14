export interface PropertyLocation{
    name: string;
    latitude?: number | null;
    longitude?: number | null;
    street?: string | null;
    postal_code?: string | null;
    show_exact_location?: boolean | null;
    exterior_number?: string | null;
    interior_number?: string | null;
}