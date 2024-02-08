export class Result<T, E> {
    private readonly _value?: T | null;
    private readonly _error?: E | null;
  
    protected constructor(value?: T | null, error?: E | null) {
      this._value = value;
      this._error = error;
    }
  
    static ok<T, E>(value?: T): Result<T, E> {
      return new Result<T, E>(value, null);
    }
  
    static fail<T, E>(error?: NonNullable<E>): Result<T, E> {
      // the error cannot be null because it's the value we use to determine if the result is a failure or a success
      return new Result<T, E>(null, error);
    }
  
    get isSuccess(): boolean {
      return this._error === null;
    }
  
    get isFailure(): boolean {
      return this._error !== null;
    }
  
    get success(): T {
      if (this.isFailure) {
        throw new Error('Cannot get the value from an error');
      }
  
      return this._value!;
    }
  
    get failure(): E {
      if (this.isSuccess) {
        throw new Error('Cannot get the error from a success');
      }
  
      return this._error!;
    }
  
    map<U>(fn: (value: T) => U): Result<U, E> {
      if (this.isSuccess) {
        return Result.ok(fn(this._value!));
      }
  
      return Result.fail<U, E>(this._error!);
    }
}
  