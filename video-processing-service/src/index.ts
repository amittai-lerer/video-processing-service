import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World! yaffa hamalca wwowwww  ');
});

app.listen(port, () => {
    console.log(`Server is starting...`);
    console.log(`Server running at http://localhost:${port}`);
});

