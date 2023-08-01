const express = require('express')

const app = express()

// settings
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {

  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Web de Popino</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <h1>Bienvenid@s a la web de Popino! Ahora con Nodemon :D</h1>
        <p>Influencer y buscador de perritas receptivas en el parque</p>
        <hr>
        <p>Ven a verle <a href="/galeria">en su galería</a></p>
      </body>
    </html>
  `)
})

app.get('/galeria', (req, res) => {

  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Galería de Popino</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <h1>Popino photo shoots</h1>
        <p>Elige tu fav y comparte!</p>
        <hr>
        <img src="/img/popino.jpeg" alt="Popino playero">
        <hr>
        <p><a href="/">Volver a inicio</a></p>
      </body>
    </html>
  `)
})

app.listen(5005, () => console.log('SERVER RUNNING ON PORT 5005'))