import axios from 'axios';

// TODO -  isolar url em variável no github workflow 
const DB_URL = 'http://admin:admin@localhost:5984/links';

export async function getAllDocuments() {
    const res = await axios.get(`${DB_URL}/_all_docs`, {
        params: { include_docs: true }
    });

    return res.data.rows.map(row => row.doc);
}
