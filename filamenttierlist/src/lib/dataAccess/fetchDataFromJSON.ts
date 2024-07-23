import type { TierList } from '../interfaces';

const url = '../../../data.json';

export async function fetchDataFromJSON(): Promise<TierList> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        return data.tiers as TierList; // Cast data.tiers to TierListData type
    } catch (error) {
        console.error('Error fetching tier list data:', error);
        throw error;
    }
}
