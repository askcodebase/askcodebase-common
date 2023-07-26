import { JsonResp } from "../typings";
import { AskCodebaseErrorCode } from "./AskCodebaseErrorCode";

export class AskCodebaseError extends Error {
    public code: AskCodebaseErrorCode = AskCodebaseErrorCode.E10001;

    constructor(code: AskCodebaseErrorCode, message: string) {
        super(message)
        this.code = code
    }

    public serialize(): JsonResp<null> {
        return {
            data: null,
            error: this.message,
            errcode: this.code
        }
    }

    public toString() {
        return `${this.code}: ${this.message}`;
    }
}