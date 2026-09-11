const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "I am Bea, I drink tea. Won't you, Won't you, Won't you dance around with me? - Ross",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Microservice is running on port ${PORT}`);
});
