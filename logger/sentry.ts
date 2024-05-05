import { ILogger } from "./logger";

export interface Sentry {
    captureMessage(msg: any):void;
    captureException(err: any):void;
}

export class SentryLog implements ILogger {

    private sentry:Sentry;
    private isDebbug:boolean;
    constructor(sentry:Sentry, isDebbug:boolean){
        this.sentry = sentry;
        this.isDebbug = isDebbug;
    }

    logError(err:Error){
        this.sentry.captureException(err);
    }

    logMessage(msg:string){
        this.sentry.captureMessage(msg);
    }

    debbugError(err:Error){
        this.isDebbug && this.logError(err);
    }

    debbugMessage(err:string){
        this.isDebbug && this.logMessage(err);
    }
}