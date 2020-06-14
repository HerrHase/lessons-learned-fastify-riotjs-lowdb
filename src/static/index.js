/**
 *  handle static 
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 *
 */

const path = require('path')

module.exports = async function (fastify, opts) {

    // adding public directory
    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, '../../public')
    })

    // adding route for serve html
    fastify.get('/', function(request, reply) {
        reply.sendFile('index.html')
    })

}