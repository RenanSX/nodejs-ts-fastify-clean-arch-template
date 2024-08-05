import { ICheckHealth } from '@/domain/usecases/health'

export class CheckHealthUseCase implements ICheckHealth {
  constructor() {}

  handle(): ICheckHealth.Result {
    return 'ok'
  }
}
