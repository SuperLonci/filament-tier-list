import type { Material, Filament, Image, TierList } from '../interfaces'

export class FilamentData implements Filament {
    constructor(
        public name: string,
        public tier: string,
        public description: string,
        public material: Material,
        public pros: string[],
        public cons: string[],
        public useCase: string,
        public image?: Image,
    ) {}
}

export class Tier {
constructor(public name: string, public filaments: Filament[]) {}
}

export class TierListData implements TierList {
    constructor(
        public tiers: TierList['tiers']
    ) {}
  
    public getTier(tierName: string): { name: string; filaments: Filament[] } | undefined {
      return this.tiers[tierName];
    }
  
    public get length(): number {
      return Object.keys(this.tiers).length;
    }
  }
