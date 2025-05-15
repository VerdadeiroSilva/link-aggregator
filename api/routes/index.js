import { HttpStatusCode } from 'axios';
import { getAllLinks, getByCategory, getPending } from '../interfaces/http/input.js';

const getPendingLinksHandler = async (req, res) => {
    try {
        const links = await getPending();
        res.json(links);
    } catch (err) {
        console.error(err);
        res.status(HttpStatusCode.InternalServerError).json({ error: 'Erro ao buscar links pendentes' })
    }
}

const getAllLinksHandler = async (req, res) => {
    try {
        const links = await getAllLinks();
        res.json(links);
    } catch (err) {
        console.error(err);
        res.status(HttpStatusCode.InternalServerError).json({ error: 'Erro ao buscar links' });
    }
}

const getByCategoryHandler = async (req, res) => {
    try {
        const links = await getByCategory();
        res.json(links);
    } catch (err) {
        console.log(err);
        res.status(HttpStatusCode.InternalServerError).json({ error: 'Erro ao buscar por categoria' });
    }
}

const postLinkByIdHandler = async (req, res) => {
    // Request vem autenticada por Bearer...

    // TODO - implementar POST no CouchDB, usando um basic que vai estar como segredo no Github
    res.json(req.body)
}

const deleteLinkByIdHandler = async (req, res) => {
    // DELETE /{nome_do_banco}/{_id}?rev={_rev}
    // Request vem autenticada por Bearer...

    // TODO - implementar DELETE no CouchDB, usando um basic que vai estar como segredo no Github
    res.json(req.body._rev)
}

const RouteHandlers = {
    getPending: getPendingLinksHandler,
    getAll: getAllLinksHandler,
    getByCategory: getByCategoryHandler,
    postLink: postLinkByIdHandler,
    deleteLink: deleteLinkByIdHandler,
}
export default RouteHandlers;