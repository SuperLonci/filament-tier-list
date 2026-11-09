import type { TierList } from '../interfaces';
import { FetchData } from './fetchData';

const url = '/src/lib/dataAccess/data.json';

export class fetchDataFromJSON extends FetchData<TierList> {
    async fetchData(): Promise<TierList> {
        try {
            const response = await fetch(url); // Fetch data from JSON file
            if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            return data.tiers as TierList; // Cast data.tiers to TierList type
        } catch (error) {
            console.error('Error fetching tier list data:', error);
            throw error;
        }
    }
}
