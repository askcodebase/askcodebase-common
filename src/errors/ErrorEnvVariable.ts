import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorEnvVariable extends AskCodebaseError {
  public static code = AskCodebaseErrorCode.E10009;

  constructor(message: string = "Environment variable not set") {
    super(ErrorEnvVariable.code, message);
  }
}
