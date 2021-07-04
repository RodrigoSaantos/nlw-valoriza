import express from 'express';

const app = express();
app.use(express.json())

app.get('/test', (request, response) => {
  return response.json({ message: 'Hello world'})
})

app.listen(3000, () => {
  console.log('Server is running 🚀');
})