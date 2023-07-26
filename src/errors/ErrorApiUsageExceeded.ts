import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorApiUsageExceeded extends AskCodebaseError {
    constructor(message: string) {
        super(AskCodebaseErrorCode.E1002, message);
    }
}