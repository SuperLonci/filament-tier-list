import type { TierList } from "$lib/interfaces";

export async function fetchDataFromCode(): Promise<TierList> {
    let tierData: TierList
    return tierData = {
        tiers: {
            "S-Tier": {
                "name": "S-Tier Filaments",
                "filaments": [
                    {
                        "name": "Brand X Filament A",
                        "tier": "S-Tier",
                        "image": {
                            "src": "path/to/imageA.jpg",
                            "alt": "Brand X Filament A - Red PLA"
                        },
                        "description": "A high-quality PLA filament known for its excellent printing performance and vibrant red color.",
                        "material": {
                            "type": "PLA",
                            "color": "Red"
                        },
                        "pros": [
                            "Strong and durable prints",
                            "Easy to print with",
                            "Vivid color"
                        ],
                        "cons": [
                            "Slightly more expensive than some other PLA filaments"
                        ],
                        "useCase": "General printing, detailed models, functional parts"
                    },
                    {
                        "name": "Brand Y Filament B",
                        "tier": "S-Tier",
                        "image": {
                            "src": "path/to/imageB.png",
                            "alt": "Brand Y Filament B - Blue ABS"
                        }
                    }
                ]
            },
            "A-Tier": {
                "name": "A-Tier Filaments",
                "filaments": []
            },
            "B-Tier": {
                "name": "B-Tier Filaments",
                "filaments": []
            }
        }
    }
}