import fetch from 'node-fetch';

async function downloadImageBuffer(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao baixar imagem');

    const buffer = await response.buffer();
    return buffer;
}