// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sql, sqlConfig } from "config/db";

export default async function handler(req, res) {
  await sql.connect(sqlConfig);
  const results = await sql.query("SELECT CAST( GETDATE() AS Date ) Date");

  res.status(200).json({ result: results.recordset[0].Date });
}
