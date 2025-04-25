import express from 'express';
import { getAllLinks } from './interfaces/http/input.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/links', async (req, res) => {
    try {
        const links = await getAllLinks();
        res.json(links);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar links' });
    }
});

app.listen(PORT, () => console.log(`🚀 API rodando em http://localhost:${PORT}`));
