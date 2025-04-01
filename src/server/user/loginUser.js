import bcrypt from "bcrypt";
import db from "../db";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const FIND_USER_QUERY = `
    SELECT * FROM users WHERE email = ?
    `;

    db.query(FIND_USER_QUERY, [email], (err, result) => {
      if (err) {
        console.log("로그인 쿼리 실행중 에러발생", err);
      }

      res.status(200).json({
        accessToken: "TOKEN",
        refreshToken: "REFRESH_TOKEN",
        message: "로그인성공",
      });
    });

    const isMatchPassword = await bcrypt.compare(password);
  } catch (err) {}
};
