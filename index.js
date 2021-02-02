const app = require('./src/app')

const port  = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Aplicação executando na porta ${port}`)
})

// https://dev.to/azure/desenvolvendo-uma-aplicacao-crud-node-js-com-postgresql-3clk -->site para o estudo