
import express, {json} from 'express';
import authRouter from './authors.js'
import bookRouter from './books.js'
import bookstoreRouter from './bookstores.js'

const server = express();

server.use(json());

server.use('/api/auths', authRouter);
server.use('/api/books', bookRouter);
server.use('/api/bookstores', bookstoreRouter);

export default server;