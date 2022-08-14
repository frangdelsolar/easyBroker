export interface PropertyForList{
    agent?: string|null;
    public_id: string;
    title?: string|null;
    title_image_full?: string|null;
    title_image_thumb?: string|null;
    bedrooms?: number|null;
    bathrooms?: number|null;
    parking_spaces?: number|null;
    location?: string|null;
    property_type?: string|null;
    updated_at?: string|null;
    show_prices?: boolean|null;
    share_commission?: boolean|null;
    operations?: any[]|null;
    lot_size?: number|null;
    construction_size?: number|null;
}