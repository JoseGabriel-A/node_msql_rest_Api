const express = require('express'); // creo el server  
const app = express();


// settings configuraciones del servidor

app.set('port', process.env.PORT | 3000);




// Middlewares funciones que se ejecutan antes de que lleguen a las rutas 

app.use(express.json()) // para que reconozca los datos enviados por la api






//Routes urls de nuestro servidor
app.use(require('./routes/employees'))






// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});
