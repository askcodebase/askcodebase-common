export type ChatRequest = {
  project_id: string;

  /**
   * @deprecated Use `question` instead
   */
  question?: string;

  message: string;
};
