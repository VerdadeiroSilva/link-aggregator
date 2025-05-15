import axios from 'axios';

const DB_URL = 'http://admin:admin@localhost:5984/links';

export async function fetchPending() {
    const res = await axios.get(`${DB_URL}/_design/books/_view/by_status`, {
        params: {
            key: "pending",
            include_docs: true,
        }
    });
    return res.data.rows.map(row => row.doc);
}

export async function fetchAllLinks() {
    const res = await axios.get(`${DB_URL}/_all_docs`, {
        params: { include_docs: true }
    });

    return res.data.rows.map(row => row.doc);
}

export async function fetchByCategory() {
    const res = await axios.get(`${DB_URL}/_all_docs`, {
        params: { include_docs: true }
    });

    return res.data.rows.map(row => row.doc);
}