import { CheckHealthUseCase } from '@/application/usecases/check-health.usecase'

export const makeCheckHealthUseCase = (): CheckHealthUseCase => {
  return new CheckHealthUseCase()
}
