/**
 *  schemas for note-routes
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 */

const postSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['text'],
            properties: {
                text: {
                    type: 'string'
                }
            },
            additionalProperties: false
        }
    }
}

const deleteSchema = {
    schema: {
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: {
                    type: 'string',
                    pattern: '^[a-zA-Z0-9]*$'
                }
            },
            additionalProperties: false
        }
    }
}

module.exports = {
    postSchema: postSchema,
    deleteSchema: deleteSchema
}