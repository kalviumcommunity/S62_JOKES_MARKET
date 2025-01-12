if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');

const connectDatabase = () => {
    const dbURL = process.env.DB_URL; 
    if (!dbURL) {
        console.log("Error: DB_URL environment variable is missing.");
        process.exit(1); 
    }

    mongoose
        .connect(dbURL, {
        })
        .then((data) => {
            console.log(`Database connected successfully: ${data.connection.host}`);
        })
        .catch((er) => {
            console.log('Database connection failed...', er.message);
            process.exit(1); // Exit if DB connection fails
        });
};

module.exports = connectDatabase;