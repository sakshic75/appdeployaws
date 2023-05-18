import sql from "mssql";

const sqlConfig = {
  user: "sa",
  password: "Passw@rd2022",
  database: "Temp",
  server: process.env.DBHOST || "localhost",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export { sql, sqlConfig };
