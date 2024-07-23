import type { TierList } from '../interfaces';

const url = '/lib/dataAccess/data.json';

export async function fetchDataFromJSON(): Promise<TierList> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        if (!data || !data.tiers) {
            throw new Error('No data or tiers in the data');
        }
        console.log('Data fetched:', data);
        return data.tiers as TierList; // Cast data.tiers to TierListData type
    } catch (error) {
        console.error('Error fetching tier list data:', error);
        throw error;
    }
}
