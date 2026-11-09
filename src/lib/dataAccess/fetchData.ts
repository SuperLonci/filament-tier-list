import type { TierList } from '../interfaces';

export abstract class FetchData<TierList> {
    abstract fetchData(): Promise<TierList>;
}