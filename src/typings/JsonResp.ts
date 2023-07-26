import { AskCodebaseErrorCode } from "../errors";

export type JsonResp<T> = { data: T, error: string, errcode: AskCodebaseErrorCode }