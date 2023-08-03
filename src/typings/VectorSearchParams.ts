export type Match = {
  value: string;
};

export type Must = {
  key: string;
  match: Match;
};

export type Filter = {
  must: Must[];
};

export type Searches = {
  vector: number[];
  limit: number;
  with_payload: boolean;
  filter: Filter;
};

export type VectorSearchParams = {
  searches: Searches[];
};
