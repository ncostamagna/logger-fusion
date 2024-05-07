
const DEBBUG_LOG =  1;      // 0001
const INFO_LOG =    1 << 1; // 0010
const WARNING_LOG = 1 << 2; // 0100
const ERROR_LOG =   1 << 3; // 1000

const ALL_LOG = DEBBUG_LOG + INFO_LOG + WARNING_LOG + ERROR_LOG;

export const TRACE = {
    DEBBUG_LOG,
    INFO_LOG,
    WARNING_LOG,
    ERROR_LOG,
    ALL_LOG
}

export const formatStringToTrace = (trace?:string):number => {

    if (!trace) return 0;

    const numTrace = Number(trace);

    return (Number.isNaN(numTrace) || numTrace < DEBBUG_LOG || numTrace > ALL_LOG)?0:numTrace
}