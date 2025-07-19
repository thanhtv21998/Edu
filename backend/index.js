require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API hoạt động!');
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Kết nối DB Sequelize thành công!');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Kết nối DB Sequelize thất bại:', err);
  });
