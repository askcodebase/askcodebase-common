import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorInternal extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10010;

  constructor(message: string = "Internal error") {
    super(ErrorInternal.code, message);
  }
}
