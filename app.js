const express = require('express'); //importamos o express para criar um servidor web
const app = express(); // criamos uma instância do express para configurar o servidor
const port = 3000; //definimos a porta onde o servidor irá escutar as requisições

//definição de rotas
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1> <p>Bem-vindo ao meu site!</p>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre Nós</h1> <p>Esta é uma simples aplicação Express!</p>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1> <p>Entre em contato conosco pelo email: contato@meusite.com</p>');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  // Access parameters using req.params
  res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

//iniciamos o servidor para escutar as requisições na porta definida e imprimimos uma mensagem no console quando o servidor estiver rodando
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});