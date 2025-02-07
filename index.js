const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const home = require("./src/routers/home");

require('dotenv').config();
const URI = process.env.MONGODB_URL;
// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", home);

mongoose.connect(URI)
  .then(() => console.log("✅ Kết nối Database MongoDB thành công!"))
  .catch(err => console.log("❌ Kết nối với Database MongoDB không thành công", err));
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}`));