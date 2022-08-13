export interface PropertyForList{
    agent: string;
    public_id: string;
    title: string;
    title_image_full: string;
    title_image_thumb: string;
    bedrooms: number;
    bathrooms: number;
    parking_spaces: number;
    location: string;
    property_type: string;
    updated_at: Date;
    show_prices: boolean;
    share_commission: boolean;
    operations: any[];
}