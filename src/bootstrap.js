const fastify = require('fastify')({
    logger: true
})

// adding files and plugins
fastify
    .register(require('./plugins/lowdb.js'))
    .register(require('./api/note.js'), { 'prefix': '/api' })
    .register(require('./static/index.js'))

// let it rain
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()