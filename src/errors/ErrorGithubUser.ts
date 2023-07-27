import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorGithubUser extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10007;

  constructor(message: string = "Authentication error.") {
    super(ErrorGithubUser.code, message);
  }
}
