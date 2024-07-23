export interface Material {
    type: 'PLA' | 'ABS' | 'PETG' | string;
    color: string;
}
  
export interface Filament {
    name: string;
    tier: string;
    image: string;
    description: string;
    material: Material;
    pros: string[];
    cons: string[];
    useCase: string;
}
  