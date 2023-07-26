import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorApiUsageExceeded extends AskCodebaseError {
    public static code = AskCodebaseErrorCode.E10003

    constructor(message: string = 'Your API usage is exceeded') {
        super(ErrorApiUsageExceeded.code, message);
    }
}