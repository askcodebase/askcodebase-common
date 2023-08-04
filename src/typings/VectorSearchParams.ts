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
  score_threshold: number;
};

export type VectorSearchParams = {
  searches: Searches[];
};
