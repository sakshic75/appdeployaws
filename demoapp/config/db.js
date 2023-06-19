import sql from "mssql";

const sqlConfig = {
  //user: "sa",
  //password: "Passw@rd2022",
  user: "admin",
  password: "Password123",
  database: "Temp",
  //server: "demo-rds-rdsinstance-fn7fgoy4cbhq.cllyrwnpctog.ap-southeast-2.rds.amazonaws.com",
  server: "aws-dxl-database-1-rdsinstance-kbobfq754ine.cllyrwnpctog.ap-southeast-2.rds.amazonaws.com",
  // server: process.env.DBHOST || "localhost",
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
