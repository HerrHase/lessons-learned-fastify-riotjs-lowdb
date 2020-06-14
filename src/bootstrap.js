const fastify = require('fastify')({
    logger: true
})

// adding files and plugins
fastify
    .register(require('./plugins/lowdb.js'))
    .register(require('./api/note.js'), { 'prefix': '/api' })
    .register(require('./static/index.js'))

// let it rain
fastify.listen(3000, (error, address) => {
    if (error) {
        throw error
    }

    fastify.log.info(`server listening on ${address}`)
})