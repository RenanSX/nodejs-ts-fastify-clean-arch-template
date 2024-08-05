import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { Controller } from '@/presentation/protocols'
import { makeCheckHealthUseCase } from '../../usecases/health'
import { CheckHealthController } from '@/presentation/controllers/health/check-health.controller'

export const makeCheckHealthController = (): Controller => {
  const checkHealthController = new CheckHealthController(makeCheckHealthUseCase())
  return makeLogControllerDecorator(checkHealthController)
}
