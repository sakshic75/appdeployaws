import { sql, sqlConfig } from "config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getTask(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getTask = async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query(
      `SELECT * FROM product WHERE id = ${req.query.id}`
    );
    return res
      .status(200)
      .json(result.recordset.length > 0 ? result.recordset[0] : {});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    await sql.query(`DELETE FROM product WHERE id = ${req.query.id}`);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, description, price } = req.body;
    await sql.connect(sqlConfig);
    await sql.query(
      `UPDATE product SET name = '${name} ', description = '${description} ', price = ${price}  WHERE id = ${req.query.id}`
    );
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
