export interface ILogger {
    debbug(msg:string):void,
    info(msg:string):void,
    warn(msg:Error | string):void,
    error(err:Error | string):void,
} 


export class Logger implements ILogger {
    private logConfig: ILogger[];
    constructor(...logConfig:ILogger[]){
        this.logConfig = logConfig;
    }

    debbug(msg:string){
        this.logConfig.map((log)=>log.debbug(msg))
    }
    
    info(msg:string){
        this.logConfig.map((log)=>log.info(msg))
    }

    warn(err:Error | string){
        this.logConfig.map((log)=>log.warn(err))
    }

    error(err:Error | string){
        this.logConfig.map((log)=>log.error(err))
    }
}