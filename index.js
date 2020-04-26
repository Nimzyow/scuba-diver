const app = require("./server");

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
