const NoteRepository = require('../repositories/note.js')

/**
 *  adding routes for Note
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 *
 */

module.exports = async function (fastify, opts) {

    // create repository
    const repository = new NoteRepository(fastify.db)

    /**
     *  handle get
     *
     *
     *  @param  {object} request
     *  @param  {object} reply
     *  @return {object}
     */
    fastify.get('/note', function(request, reply) {

        results = repository.findAll()

        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(results)
    })

    /**
     *  handle post
     *
     *  @param  {object} request
     *  @param  {object} reply
     *  @return {object}
     */
    fastify.post('/note', function(request, reply) {

        results = repository.add(request.body)

        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
                'succes': true
            })
    })

    /**
     *  handle delete
     *
     *  @param  {object} request
     *  @param  {object} reply
     *  @return {object}
     */
    fastify.delete('/note/:id', function(request, reply) {

        repository.remove(request.params.id)

        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
                'succes': true
            })
    })

}