const fastifyPlugin = require('fastify-plugin')

/**
 *  adding lowdb to fastify
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 *
 */

module.exports = fastifyPlugin((fastify, opts, done) => {

    const fileDB = './storage/db.json'

    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')

    const adapter = new FileSync(fileDB)
    const db = low(adapter)

    db.defaults({
        notes: []
    }).write()

    // adding
    fastify.decorate('db', db)
    done()

})