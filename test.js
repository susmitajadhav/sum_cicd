import express from 'express';
import http from 'http';


const app = express();


app.get('/health', (req, res) => {
res.json({ status: 'ok' });
});


const server = app.listen(4000, () => {
http.get('http://localhost:4000/health', res => {
if (res.statusCode !== 200) {
throw new Error('Health check failed');
}


console.log('Test passed');
server.close();
});
});