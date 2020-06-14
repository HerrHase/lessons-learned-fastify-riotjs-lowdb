/**
 *  parent class for Repository
 *
 *  @author Björn Hase, Tentakelfabrik
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://github.com/tentakelfabrik/fastify-lowdb-riotjs-lessons-learned
 *
 */

class Repository {

    /**
     *
     *  @param {object} db
     *
     */
    constructor(db) {
        this.db = db;
    }

}

module.exports = Repository