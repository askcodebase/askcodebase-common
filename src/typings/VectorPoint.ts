export type VectorPoint = {
  id: string | number;
  version: number;
  score: number;
  payload?:
    | Record<string, unknown>
    | {
        [key: string]: unknown;
      }
    | null
    | undefined;
  vector?:
    | Record<string, unknown>
    | number[]
    | {
        [key: string]: number[] | undefined;
      }
    | null
    | undefined;
};
