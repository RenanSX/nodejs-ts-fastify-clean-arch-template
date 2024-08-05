export default {
  openapi: {
    info: {
      title: 'Templatae NodeJS APi',
      contact: {
        name: 'Github',
        url: 'https://github.com/RenanSX/desafio-renan-task-list'
      },
      version: '1.0',
      description: 'Backend template nodeJs Fastify typescript'
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development'
      }
    ],
    paths: {
      '/healthcheck': {
        get: {
          tags: ['Saúde'],
          summary: 'Verificar saúde da aplicação',
          description: 'Rota responsável por verificar se a aplacação está funcionando corretamente.',
          operationId: 'health-check',
          parameters: [],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              basicAuth: []
            }
          ]
        }
      }
    },
    components: {
      securitySchemes: {
        basicAuth: {
          type: 'http',
          scheme: 'basic'
        }
      }
    },
    tags: [
      {
        name: 'Saúde'
      }
    ]
  }
}
