import mysql from 'mysql2'


const db = mysql.createConnection({
    host: process.env.APP_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME
  });
  
  db.connect((error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Successfully connected to PHPMyAdmin');
  });

export default db