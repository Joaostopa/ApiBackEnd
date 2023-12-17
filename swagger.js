const swaggerAutogen = require('swagger-autogen')


output = './swagger_doc.json'
endpoints = ['./routes/rest.js', './routes/usuario.js']

swaggerAutogen(output, endpoints)