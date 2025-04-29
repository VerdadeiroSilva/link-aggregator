
import SERVER from './enums/server.js';
import RouteHandler from './routes/index.js'
import express from 'express';
import cors from 'cors';

import rateLimit from './middlewares/rateLimit.js';
import auth from './middlewares/auth.js';
const app = express();

app.use(cors());
app.use(rateLimit);
app.use(express.json());

app.get('/links', RouteHandler.getAll);
app.get('/links/:category', RouteHandler.getByCategory);

app.post('/links/:id', auth, RouteHandler.postLink);

app.delete('/links/:id', auth, RouteHandler.deleteLink);

app.listen(SERVER.PORT, () => console.log(`🚀 API rodando em ${SERVER.PROTOCOL}://${SERVER.URL}:${SERVER.PORT}`));
