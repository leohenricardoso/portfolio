const
  express = require('express'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 3000

const app = express()

app.use(serveStatic('/dist/spa'))
app.listen(port)
