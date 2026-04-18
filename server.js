const express = require('express');
const app = express();
const port = 11000;

app.get('/tulip', (req, res) => {
    res.json({
        flower: "Tulip",
        season: "Spring",
        status: "Blooming"
    });
});

app.listen(port, () => {
    console.log(`Tulip API server running at http://localhost:${port}`);
});
