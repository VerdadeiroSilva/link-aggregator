import { fetchAllLinks, fetchByCategory } from '../../adapters/couchdb/adapter.js';

export async function getAllLinks() {
    return await fetchAllLinks();
}

export async function getByCategory() {
    return await fetchByCategory();
}