export type Delta = {
  role: string;
  content: string;
};

export type Choice = {
  index: number;
  delta: Delta;
  finishReason: string | null;
};

export type ChatCompletionResp = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<Choice>;
};
