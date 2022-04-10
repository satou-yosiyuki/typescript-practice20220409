export const logMessage = (message: string): void => {
  console.log("Function basic sample1", message);
};

export function logMessage2(message: string) {
  console.log("Function basic sample2", message);
}

export const logMessage3 = function (message: string): void {
  console.log("Function basic sample3", message);
};

export const logMesssage4 = (message: string): void =>
  console.log("Function basic sample4", message);

export const alwaysAllNever = (message: string): void => {
  console.log("Function basic sample5", message);
};

// 呼び出しシグナチャ
type LogMessage = (message: string) => void;
export const LogMessage6: LogMessage = (message: string) => {
  console.log("Function basic sample 6:", message);
};

// 完全な呼び出しシグナチャ
type FullLogMessage = { (message: string): void };

export const logMessage7: FullLogMessage = (message) => {
  console.log("Function basic sample 7");
};
