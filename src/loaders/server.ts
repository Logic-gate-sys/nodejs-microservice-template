import express from 'express'; 

const app = express(); 

app.use(express.json()) // parsing json request body
app.use(express.urlencoded({ extended: true })) // allow express to decipher url encoding to handle path paramenters












export { app }; 