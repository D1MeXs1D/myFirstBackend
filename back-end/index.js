const express = require("express");
const cors = require("cors");
const app = express();

// промежуточное значение
app.use(cors());
app.use(express.json());

// навигация апи
app.use("/api/auth", require("./routes/auth"));

// старт сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));