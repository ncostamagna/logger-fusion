export interface ILogger {
    logError(err:Error):void,
    logMessage(msg:string):void,
    debbugError(err:Error):void,
    debbugMessage(err:string):void,
} 


export class Logger implements ILogger {
    private logConfig: ILogger[];
    constructor(...logConfig:ILogger[]){
        this.logConfig = logConfig;
    }

    logError(err:Error){
        this.logConfig.map((config)=>config.logError(err));
    }

    logMessage(msg:string){
        this.logConfig.map((config)=>config.logMessage(msg));
    }

    debbugError(err:Error){
        this.logConfig.map((config) => config.debbugError(err));
    }

    debbugMessage(msg:string){
        this.logConfig.map((config) => config.debbugMessage(msg));
    }
}