import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorTokenExpired extends AskCodebaseError {
    constructor(message: string) {
        super(AskCodebaseErrorCode.E1001, message);
    }
}