import { AskCodebaseError } from "./AskCodebaseError";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class ErrorUserNull extends AskCodebaseError {
    public static code = AskCodebaseErrorCode.E10004

    constructor(message: string) {
        super(ErrorUserNull.code, message);
    }
}