import express from 'express';
import cors from 'cors';

import filmRouter from './router/filmRouter.js';
import actorRouter from './router/actorRouter.js';
import directorRouter from './router/directorRouter.js';
import connection from './db.js'

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use('/film', filmRouter);
app.use('/director', directorRouter);
app.use('/actor', actorRouter);



//connection.end();
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

