import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorTokenExpired extends AskCodebaseError {
    public static code = AskCodebaseErrorCode.E10002

    constructor(message: string = 'Access token is expired') {
        super(ErrorTokenExpired.code, message);
    }
}