import { fetchAllLinks } from '../../adapters/couchdb/adapter.js';

export async function getAllLinks() {
    return await fetchAllLinks();
}