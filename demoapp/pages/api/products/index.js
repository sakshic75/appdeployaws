import { sql, sqlConfig } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const results = await sql.query("SELECT * FROM product");
    return res.status(200).json(results.recordset);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    await sql.connect(sqlConfig);
    const result = await sql.query(
      `INSERT INTO product (name,description,price) VALUES ('${name}','${description}','${price}')`
    );

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
