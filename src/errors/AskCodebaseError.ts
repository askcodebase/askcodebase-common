import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class AskCodebaseError extends Error {
    public code: AskCodebaseErrorCode = AskCodebaseErrorCode.E1000;

    constructor(code: AskCodebaseErrorCode, message: string) {
        super(message);
        this.code = code;
    }

    public getCode() {
        return this.code
    }

    public toString() {
        return `${this.code}: ${this.message}`;
    }
}