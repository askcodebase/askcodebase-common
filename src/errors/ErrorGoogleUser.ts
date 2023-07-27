import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorGoogleUser extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10008;

  constructor(message: string = "Authentication error.") {
    super(ErrorGoogleUser.code, message);
  }
}
