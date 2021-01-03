const express = require('express'),
      app = express(),
      ejs = require('ejs')
      port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



















app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
