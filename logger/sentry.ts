import { ILogger } from "./logger";
import {TRACE} from './trace';

export interface Sentry {
    captureMessage(msg: any):void;
    captureException(err: any):void;
}

export class SentryLog implements ILogger {

    private sentry:Sentry;
    private trace:number;
    constructor(sentry:Sentry, trace:number){
        this.sentry = sentry;
        this.trace = trace;
    }

    debbug(msg:string){
        (this.trace & TRACE.DEBBUG_LOG) && this.sentry.captureMessage(msg);
    }

    info(msg:string){
        (this.trace & TRACE.INFO_LOG) && this.sentry.captureMessage(msg);
    }

    warn(err:Error | string){
        (this.trace & TRACE.WARNING_LOG) && this.sentry.captureException(err);
    }

    error(err:Error | string){
        (this.trace & TRACE.ERROR_LOG) && this.sentry.captureException(err);
    }
}