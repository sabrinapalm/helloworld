const express = require('express')
const next = require('next')
const fs = require('fs');

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

  //GET information from database
  server.get('/alltravels', (req, res) => {
    let content;
    const readFile = fs.readFile('./database.json', (err, data)=>{
      if ( err ) throw err;
      content = data.toString();
      console.log(content);
      res.send(content);
    });
  })

  // TODO:
  //POST information to database
  //UPDATE information in database
  //DELETE information in database

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
