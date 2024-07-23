export interface Material {
    type: 'PLA' | 'ABS' | 'PETG' | string;
    color: string;
}
  
export interface Filament {
    name: string;
    tier: string;
    image?: Image;
    description?: string;
    material?: Material;
    pros?: string[];
    cons?: string[];
    useCase?: string;
}

export interface TierList {
    tiers: {
        [tierName: string]: {
        name: string; // Tier name (matches key)
        filaments: Filament[]; // Array of filament objects
        };
    };
}

export interface Image {
    src: string;
    alt: string; // Description for accessibility
    width?: number; // Optional width
    height?: number; // Optional height
}

export interface FilamentDetailsProps {
    filament: Filament;
    on: (event: CloseEvent) => void;
}