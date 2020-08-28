const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.all("*", (req, res) => {
  console.log(req.method, req.url)
  res.status(200).jsonp({
    welcome: 'Welcome to Application Services v1.0',
    url: req.url,
    heades: req.headers,
    body: req.body,
  })
})

app.listen(port, () => {
  console.log("Apps Listen at port", port)
})
