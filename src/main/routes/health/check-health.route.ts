import { makeCheckHealthController } from '@/main/factories/controllers/health'
import { HttpResponse, Request } from '@/presentation/protocols'

export const CheckHealthHandler = async (request: Request): Promise<HttpResponse> => {
  const checkhealthController = makeCheckHealthController()
  return checkhealthController.handle(request)
}
