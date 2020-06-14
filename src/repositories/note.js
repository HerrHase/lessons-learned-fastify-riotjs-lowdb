const Repository = require('./repository.js')
const uniqid = require('uniqid')


/**
 *  NoteRepository
 *
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 *
 */

class NoteRepository extends Repository {

    /**
     *  get all notes
     *
     *
     */
    findAll() {
        return this.db
            .get('notes')
            .value()
    }

    /**
     *  add note to db
     *
     *  @param  {object} note
     *  @return {object}
     *
     */
    add(note) {

        note._id = uniqid()

        return this.db
            .get('notes')
            .push(note)
            .write()
    }

    /**
     *  remove note with _id
     *
     *  @param  {object} note
     *  @return {object}
     *
     */
    remove(id) {
        return this.db
            .get('notes')
            .remove({ '_id': id })
            .write()
    }
}

module.exports = NoteRepository