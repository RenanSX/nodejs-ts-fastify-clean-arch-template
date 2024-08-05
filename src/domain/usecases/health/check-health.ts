export namespace ICheckHealth {
  export type Result = string
}

export interface ICheckHealth {
  handle(): ICheckHealth.Result
}
