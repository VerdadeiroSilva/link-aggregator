import { fetchAllLinks, fetchByCategory, fetchPending } from '../../adapters/couchdb/adapter.js';

export async function getPending() {
    return await fetchPending();
}

export async function getAllLinks() {
    return await fetchAllLinks();
}

export async function getByCategory() {
    return await fetchByCategory();
}