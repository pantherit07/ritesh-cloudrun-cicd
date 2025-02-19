const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello Ritesh, from Cloud Run CI/CD!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});