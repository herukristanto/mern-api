const express = require('express');

const app = express();

app.use(() => {
    console.log("hero");
})

app.listen(4000);