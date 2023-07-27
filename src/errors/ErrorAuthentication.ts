import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorAuthentication extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10005;

  constructor(message: string = "Authentication error.") {
    super(ErrorAuthentication.code, message);
  }
}
