import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorStateNull extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10006;

  constructor(message: string = "State is null") {
    super(ErrorStateNull.code, message);
  }
}
