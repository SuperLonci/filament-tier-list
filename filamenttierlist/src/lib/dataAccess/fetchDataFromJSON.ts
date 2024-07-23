// fetchDataFromJSON.ts
import type { TierList } from '../interfaces';

const url = 'data.json';

export async function fetchDataFromJSON(): Promise<TierList> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.tiers as TierList; // Cast data.tiers to TierListData type
}
