import { PropertyLocation } from "./location.interface";

export interface Property {
    public_id: string;
    title: string;
    property_images: any[];
    description?: string;
    bedrooms?: number;
    bathrooms?: number;
    half_bathrooms?: number | null;
    parking_spaces?: number | null;
    lot_size?: number | null;
    construction_size?:	number | null;
    lot_length?: number | null;
    lot_width?: number | null;
    covered_space?: number | null;
    floors?: number | null;
    floor?: number | null;
    age?: string | null;
    internal_id?: string | null;
    expenses?: string | null;
    property_type?: string | null;
    agent?: any | null;
    created_at?: string | null;
    updated_at?: string | null;
    published_at?: string | null;
    features?: any[] | null;
    public_url?: string | null;
    collaboration_notes?: string | null;
    property_files?: any[] | null;
    videos?: any[] | null;
    virtual_tour?: string | null;
    location?: PropertyLocation | null;
    tags?: any[] | null;
    show_prices?: boolean | null;
    share_commission?: boolean | null;
    operations?: any[] | null;
}