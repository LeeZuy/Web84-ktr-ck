import express from 'express';
import { config } from 'dotenv';
import RootRouter from './routes/index.js';
import mongoose from 'mongoose';
config();
await mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log('Connected database!');
});
const app = express();
app.use(express.json());

app.get('',(req,res) =>{
    req.send({
        message: 'Connected!'
    })
});

app.use('/api',RootRouter)

app.listen(8080, () => {
    console.log('Server is running!');
})