const express = require('express')
const next = require('next')
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/travel/', (req, res) => {
    let content;
    const readFile = fs.readFile('./database.json', (err, data)=>{
      if ( err ) throw err;
      console.log(data);
      console.log("funkar!", content);
      content = data.toString();
      res.send(content);
    });
  });


  server.get('/travel/:id', (req,res) =>{
    const id = req.params.id;
    const readFile = fs.readFile('./database.json', (err, data)=>{
      if ( err ) throw err;
      let travels = JSON.parse(data.toString().trim());
      if( travels[id] ) {
        let responseObjet = data.toString().trim();
        res.status(200).send(responseObjet)
      } else {
        res.status(200).send("finns ej")
      }
    })
  })

  server.delete('/travel/:id', (req,res) =>{
    const file = './database.json'
    const id = req.params.id;
    const readFile = fs.readFile(file, (err, data) => {
      if ( err ) throw err;
      let travels = JSON.parse(data.toString().trim());
      if( travels[id] ) {
        delete travels[id];
        fs.writeFile(file, JSON.stringify(travels));
        res.status(200).send("Borttagen!")
      } else {
        res.status(200).send("finns ej")
      }
    })
  })

  server.put('/travel/:id', (req,res) =>{
    const file = './database.json'
    console.log(req);
    const id = req.params.id;
    const { body } = req;
    console.log("body is: ", req.body);

    const readFile = fs.readFile(file, (err, data) => {
      if ( err ) throw err;
      let travels = JSON.parse(data.toString().trim());
      if( travels[id] ) {
        res.status(200).send("uppdaterad88!")
      } else {
        res.status(200).send("finns ej")
      }
    })
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
