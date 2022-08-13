import { PropertyLocation } from "./location.interface";

export interface Property {
    public_id: string;
    title: string;
    property_images: any[];
    description: string;
    bedrooms: number;
    bathrooms: number;
    half_bathrooms: number;
    parking_spaces: number;
    lot_size: number;
    construction_size:	number;
    lot_length: number;
    lot_width: number;
    covered_space: number;
    floors: number;
    floor: number;
    age: string;
    internal_id: string;
    expenses: string;
    property_type: string;
    agent: any;
    created_at: Date;
    updated_at: Date;
    published_at: Date;
    features: any[];
    public_url: string;
    collaboration_notes: string;
    property_files: any[];
    videos: any[];
    virtual_tour: string;
    location: PropertyLocation;
    tags: any[];
    show_prices: boolean;
    share_commission: boolean;
    operations: any[];
}