import { ILogger } from "./logger";

export interface Winston {
    log(...msg: any[]):void;
    error(...err: any[]):void;
}

export class WinstonLog implements ILogger {

    private winston:Winston;
    private isDebbug:boolean;
    constructor(winston:Winston, isDebbug:boolean){
        this.winston = winston;
        this.isDebbug = isDebbug;
    }

    logError(err:Error){
        this.winston.error(`${err.name}: ${err.message}`);
    }

    logMessage(msg:string){
        this.winston.log(msg);
    }

    debbugError(err:Error){
        this.isDebbug && this.logError(err);
    }

    debbugMessage(err:string){
        this.isDebbug && this.logMessage(err);
    }
}