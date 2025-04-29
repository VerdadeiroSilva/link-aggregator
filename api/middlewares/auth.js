export default function auth(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ error: 'Token ausente' });
    }

    // Exemplo simples com token fixo
    const validToken = process.env.API_TOKEN || 'seu_token_aqui';

    if (token !== validToken) {
        return res.status(403).json({ error: 'Token inválido' });
    }

    next();
}