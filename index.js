const app = require('express');
const port =5000;


app.get('/', function (req, res) {
  res.send('<h1> Hello World!</h1>');
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

