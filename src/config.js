import {config} from 'dotenv';
config();

//console.log();
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://SuusTony:admin12@cluster0.wqvv7a6.mongodb.net/?retryWrites=true&w=majority"

export  const PORT = process.env.PORT || 443;
