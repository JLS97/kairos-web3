export class ErrorBase<T extends string> extends Error {
    type: T;
    message: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cause: any;
  
    constructor({
      type,
      message,
      cause,
    }: {
      type: T;
      message: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cause?: any;
    }) {
      super();
      this.type = type;
      this.message = message;
      this.cause = cause;
    }
}
  