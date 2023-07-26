import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class AskCodebaseError extends Error {
    public code: AskCodebaseErrorCode = AskCodebaseErrorCode.E1000;

    constructor(code: AskCodebaseErrorCode, message: string) {
        super(message);
        this.code = code;
    }
}