"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 2000;
app.use(express_1.default.json({ limit: '25mb' }));
app.use((0, cors_1.default)({
    origin: [
        'http://localhost',
        'http://localhost:3000',
        'https://weatherapp-production-ae78.up.railway.app',
        '*'
    ],
    credentials: true,
    methods: ['HEAD', 'OPTIONS', 'GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use('/api', routes_1.router);
app.all('/', (req, res) => {
    res.status(200).send('API server id active...!');
});
app.all("*", (req, res) => {
    res.status(404).send('(¯\\_(ツ)_/¯) : API not found...!');
});
app.listen(port, () => console.log(`Listening on port ${port}`));
