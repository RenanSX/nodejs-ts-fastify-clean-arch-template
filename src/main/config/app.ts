import 'dotenv/config'
import { FastifyAdapter, IFastifyAdapter } from '@/main/adapters'
import env from '@/main/config/env'
import { routes } from '@/main/routes'
import { Routes } from '@/presentation/protocols'

const main = async (): Promise<void> => {
  const fastifyAdapter: IFastifyAdapter = new FastifyAdapter(routes as Routes[], env.port)
  await fastifyAdapter.start()
}

main()
