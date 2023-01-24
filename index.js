const mongoose = require('mongoose');

//configurando o mongoose
    mongoose.set('strictQuery', false);
    mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/nodelearning').then(() => {
    console.log("MongoDB conectado com sucesso")
}).catch((error) => {
    console.log(`Erro ao se conectar com o MongoDB: ${error}`)
});

// Model - Usuarios

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
});
// Collection
mongoose.model('usuarios', UsuarioSchema);

const Usuario = mongoose.model('usuarios');

// new Usuario({
//     nome: "Wesley",
//     sobrenome: "Rocha",
//     idade: 18
// }).save().then(() => {
//     console.log("Cadastrado com sucesso")
// }).catch((error) => {
//     console.log(`Error ao registrar: ${error}`)
// })