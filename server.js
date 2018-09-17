const express = require('express')
const next = require('next')
const fs = require('fs');

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

<<<<<<< HEAD
  server.get('/travel/', (req, res) => {
=======
  //GET information from database
  server.get('/alltravels', (req, res) => {
>>>>>>> 4b09475a9e41faf280713eb30d76c3229fc03e66
    let content;
    const readFile = fs.readFile('./database.json', (err, data)=>{
      if ( err ) throw err;
      content = data.toString();
      console.log(content);
      res.send(content);
    });
<<<<<<< HEAD
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
=======
  })

  // TODO:
  //POST information to database
  //UPDATE information in database
  //DELETE information in database
>>>>>>> 4b09475a9e41faf280713eb30d76c3229fc03e66

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
