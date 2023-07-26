import { JsonResp } from "../typings";
import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorNone<T> extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E0000;

  constructor(public data: T, message: string = "Success") {
    super(ErrorNone.code, message);
  }

  public serialize(): JsonResp<T> {
    return {
      data: this.data,
      error: null,
      errcode: this.code,
    };
  }
}
