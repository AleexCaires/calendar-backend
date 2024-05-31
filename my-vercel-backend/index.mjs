import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world new version!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
 