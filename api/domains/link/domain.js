// Esse cara aqui é uma classe

// Então ele tem métodos (lerLink, salvarLink, buscarLink...)

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export function createLink({ url, title, author, price }) {
    return {
        url,
        title,
        author,
        price,
        createdAt: new Date().toISOString()
    };
}

export async function buildLinkDocumentWithAttachment({ url, title, author, price, coverUrl }) {
    const id = uuidv4();
    const doc = {
        _id: id,
        url,
        title,
        author,
        price
    };

    if (!coverUrl) return { doc, attachment: null };

    try {
        const response = await axios.get(coverUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'] || 'image/webp';

        const attachment = {
            name: 'cover.webp',
            contentType,
            data: Buffer.from(response.data).toString('base64')
        };

        return { doc, attachment };
    } catch (err) {
        console.warn(`⚠️ Falha ao baixar imagem: ${coverUrl}`);
        return { doc, attachment: null };
    }
}
