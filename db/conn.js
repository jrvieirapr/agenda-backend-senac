const mongoose = require('mongoose')

async function main() {
    try {

        mongoose.set("strictQuery",true)
      
        await mongoose.connect("mongodb+srv://metratonpr:<password>@cluster0.eszrvb7.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao Banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main

