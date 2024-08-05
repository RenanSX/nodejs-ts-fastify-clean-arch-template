import * as HealthRoute from '@/main/routes/health'
import { Handler, Request, Response } from '@/presentation/protocols'

import { makeEnsureAuthenticatedMiddleware } from '../factories/middlewares/authenticate.factory'

const createRouteHandler = (handler: Handler) => async (request: Request, reply: Response) => {
  const result = await handler(request)
  reply.code(result.statusCode).send(result)
}

const createAuthMiddleware = () => {
  const authMiddleware = makeEnsureAuthenticatedMiddleware()
  return authMiddleware.handle.bind(authMiddleware)
}

export const HealthRoutes = [
  {
    method: 'GET',
    url: '/healthcheck',
    handler: createRouteHandler(HealthRoute.CheckHealthHandler),
    preHandler: createAuthMiddleware()
  }
]

export const routes = [...HealthRoutes]
