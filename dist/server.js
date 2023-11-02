"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
// server.ts
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const businessLogic = __importStar(require("./index"));
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/postales/api/v1/create/postal', (req, res) => {
    const newItem = req.body.name; //{name:nombreindice} 
    const response = businessLogic.createFichaPostal(newItem);
    res.json(response);
});
app.post('/postales/api/v1/imagenes/celebracion', (req, res) => {
    const newItem = req.body.namecelebracion; //{name:namecelebracion} 
    const response = businessLogic.getImagenesCelebracion(newItem);
    res.json(response);
});
app.get('/', (req, res) => {
    console.log("diony");
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});
function startServer(PORT = process.env.PORT) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
exports.startServer = startServer;
