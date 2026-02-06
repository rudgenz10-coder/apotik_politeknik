import express from 'express';
import User from './src/models/User.js';
import db from './src/config/db.js';
import Index from './src/models/Index.js';
import app from './app.js'

Index()
db.sync().then(() => {
    console.log('db ws di gawe')
}).catch((err) => {
    console.log('error koh kaya giyeee', err);
});

app.listen(3000, () => {
    console.log('server dalan teng mriki: 3000');
})