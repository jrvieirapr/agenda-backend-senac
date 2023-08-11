const mongoose = require('mongoose')

async function main() {
    try {

        mongoose.set("strictQuery",true)
      
        await mongoose.connect("mongodb+srv://metratonpr:IlaUJbEk1pxY9kGA@cluster0.v2ptr2x.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao Banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main

