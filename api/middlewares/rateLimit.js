import { HttpStatusCode } from 'axios';
import MESSAGES from '../enums/messages.js';
import LIMITS from '../enums/limits.js';

const ipRequests = new Map();

export default function rateLimit(req, res, next) {
    const ip = req.ip;
    const now = Date.now();

    if (!ipRequests.has(ip)) {
        ipRequests.set(ip, []);
    }

    const timestamps = ipRequests.get(ip).filter(ts => now - ts < LIMITS.RATE_LIMIT_WINDOW_MS);
    timestamps.push(now);

    ipRequests.set(ip, timestamps);

    if (timestamps.length > LIMITS.MAX_REQUESTS) {
        return res.status(HttpStatusCode.TooManyRequests).json({ error: MESSAGES.TOO_MANY_REQUESTS });
    }

    next();
}