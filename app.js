// const express = require('express');
import express from 'express';
import cors from 'cors';
import UserRoutes from './users/routes.js';
// import LikesRoutes from './likes/routes.js';
import mongoose from 'mongoose';
import session from 'express-session';


mongoose.connect('mongodb://127.0.0.1:27017/gameit');

const app = express();
app.use(cors());
// app.use(
//     cors(
//         {
//             origin: "http://localhost:3000",
//             credentials: true
//         }
//     )
// );

// const sessionOptions = {
//     secret:"any string",
//     resave:false,
//     saveUninitialized:false,
// };
// app.use(session(sessionOptions));
app.use(express.json());


UserRoutes(app);
// LikesRoutes(app);


app.listen(4000);
