import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import commentsRouter from './api/comments';
import './db';
import loadComments from './commentsData';

dotenv.config();

if (process.env.seedDb) {
    loadComments();
}

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/comments', commentsRouter);
app.use(express.static('public'));

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});