const express = require('express')
const next = require('next')
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/alltravels', (req, res) => {
    let content;
    const readFile = fs.readFile('./database.json', (err, data)=>{
      if ( err ) throw err;
      console.log(data);
      console.log("funkar!", content);
      content = data.toString();
      res.send(content);
    });


  })








  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
