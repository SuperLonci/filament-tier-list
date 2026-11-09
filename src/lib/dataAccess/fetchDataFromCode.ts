import type { TierList } from "$lib/interfaces";
import { FetchData } from "./fetchData";


export class fetchDataFromCode extends FetchData<TierList> {
    async fetchData(): Promise<TierList> {
        const tierData: TierList = {
            tiers: {
                "S": {
                    name: "S",
                    filaments: [
                        {
                            name: "PLA + Carbon Fiber",
                            tier: "S",
                            pros: ["Stiffer", "looks good"],
                            cons: ["More brittle", "hardened steel nozzle needed"]
                        },
                        {
                            name: "PLA + PBT (tough)",
                            tier: "S",
                            pros: ["slightly flexible", "tough", "higher temperatures", "wont shatter", "better PLA"],
                            cons: [""]
                        },
                        {
                            name: "PLA High speed",
                            tier: "S",
                            useCase: "lower temperatures",
                            pros: ["can be printed fast"],
                            cons: ["melts faster"]
                        },
                        {
                            name: "PETG + Carbon Fiber (CF PETG)",
                            tier: "S",
                            price: "35",
                            pros: ["stability", "support quality", "the fiber stiffens", "print looks glorious", "allmost always the choice for functional prototypes", "good at everything"],
                            cons: ["not exeling at something"]
                        },
                        {
                            name: "PCTG",
                            tier: "S",
                            useCase: "close to perfect",
                            pros: ["does everything better than PETG", "takes insane beating", "easy to print", "no warping", "no sagging", "good layer adhesion"],
                            cons: ["Supports are hard to remove", "expensive", "hard to find", "prints hot (250-270)"]
                        },
                        {
                            name: "PA + Glass Fibre (Glass filled nylon)",
                            tier: "S",
                            useCase: "heavy duty",
                            pros: ["heavy duty", "stiff", "tough", "fairly easy to print"],
                            cons: ["tungsten or gemstone tip needed", "high temperature", "needs high end printer"]
                        },
                        {
                            name: "TPU",
                            tier: "S",
                            useCase: "Flexible",
                            pros: ["tough", "cheap", "can use support", "perfect layer adhesion", "immune to shatter", "combat gear"],
                            cons: ["absorbs water like crazy", "only prints when dry (dehidrator needed)"]
                        }
                    ]
                },
                "A": {
                    name: "A",
                    filaments: [
                        {
                            name: "PLA",
                            tier: "A",
                            price: "15",
                            pros: ["low cost"],
                            cons: ["softens fast", "brittle"]
                        },
                        {
                            name: "PETG",
                            tier: "A",
                            pros: ["tougher", "handles higher temperatures", "survives a lot of punishment", "transparent", "low friction"],
                            cons: ["harder to print than PLA", "overhangs has problems", "absorbs water fast"]
                        },
                        {
                            name: "PET + Carbon Fiber (CF PET)",
                            tier: "A",
                            price: "expensive",
                            pros: ["way better than PET", "easy to print", "extremely stiff"],
                            cons: ["Flex"]
                        },
                        {
                            name: "ASA",
                            tier: "A",
                            pros: ["tough as ABS", "high speed"],
                            cons: ["not easy to print", "warps a little", "stinks"]
                        }
                    ]
                },
                "B": {
                    name: "B",
                    filaments: [
                        {
                            name: "Silk PLA",
                            tier: "B",
                            price: "15",
                            pros: ["shiny"],
                            cons: ["weaker"]
                        },
                        {
                            name: "PLA + Wood",
                            tier: "B",
                            price: "15",
                            pros: ["feels like wood", "nice effect"],
                            cons: ["not amazing to print", "weaker"]
                        },
                        {
                            name: "Matt PLA",
                            tier: "B",
                            price: "cheap",
                            pros: ["looks matt", "scan be sanded, painted", "semi flexible"]
                        },
                        {
                            name: "PCL/ PLA flex",
                            tier: "B",
                            useCase: "",
                            pros: ["can be contoured with hair dryier", "prints at 100°C"],
                            cons: ["softens fast", "waxy consistency"]
                        },
                        {
                            name: "PET",
                            tier: "B",
                            pros: ["sitff", "tough", "shiny", "very resistant"],
                            cons: ["prints min 275°C", "warping", "humidity"]
                        },
                        {
                            name: "PVB",
                            tier: "B",
                            pros: ["Flexibility makes it break less", "can be melted with alcohol to looks smooth"],
                            cons: ["weaker than PETG"]
                        },
                        {
                            name: "HIPS",
                            tier: "B",
                            pros: [""],
                            cons: [""]
                        }
                    ]
                },
                "C": {
                    name: "C",
                    filaments: [
                        {
                            name: "ABS",
                            tier: "C",
                            price: "cheap",
                            useCase: "good for outdoor prints",
                            pros: ["vaper chamber to get to get smoth surface", "tough", "cheap", "high temperature", "doesnt get too brittle in cold temps"],
                            cons: ["warps like crazy", "stinks"]
                        }
                    ]
                },
                "F": {
                    name: "F",
                    filaments: [
                        {
                            name: "PLA + Metal",
                            tier: "F",
                            price: "expensive",
                            pros: ["Cool looks when rosting e.g."],
                            cons: ["brittle", "expensive"]
                        }
                    ]
                }
            }
        };
        return tierData
    }
}
