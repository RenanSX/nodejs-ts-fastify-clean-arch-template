import { ICheckHealth } from '@/domain/usecases/health'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class CheckHealthController implements Controller {
  constructor(private readonly _checkHealthUseCase: ICheckHealth) {}

  public async handle(): Promise<HttpResponse> {
    try {
      const result = this._checkHealthUseCase.handle()
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
