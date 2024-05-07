import { ILogger } from "./logger";
import {TRACE} from './trace';

export interface Winston {
    debug(msg: string):void;
    info(msg: string):void;
    warn(err: Error | string):void;
    error(err: Error | string):void;
}

export class WinstonLog implements ILogger {

    private winston:Winston;
    private trace:number;

    constructor(winston:Winston, trace:number){
        this.winston = winston;
        this.trace = trace;
    }

    debbug(msg:string){
        (this.trace & TRACE.DEBBUG_LOG) && this.winston.debug(msg);
    }

    info(msg:string){
        (this.trace & TRACE.INFO_LOG) && this.winston.info(msg);
    }

    warn(err:Error | string){
        (this.trace & TRACE.WARNING_LOG) && this.winston.warn(err);
    }

    error(err:Error | string){
        (this.trace & TRACE.ERROR_LOG) && this.winston.error(err);
    }
}