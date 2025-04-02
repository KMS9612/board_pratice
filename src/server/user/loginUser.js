import bcrypt from "bcrypt";
import db from "../db.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../functions/generateToken.js";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const FIND_USER_QUERY = `
    SELECT * FROM users WHERE email = ?
    `;

    const accessToken = generateAccessToken(email);
    const refreshToken = generateRefreshToken(email);

    const [rows] = await db.query(FIND_USER_QUERY, [email]);

    // 이메일을 찾지 못함
    if (rows.length === 0) {
      return res
        .status(401)
        .json({ message: "로그인에 실패했습니다. 입력을 확인해주세요" });
    }

    const passwordHashed = rows[0].pw_hashed;

    // 해쉬된 비밀번호와 입력된 비밀번호의 대조
    const isMatchPassword = await bcrypt.compare(password, passwordHashed);

    // 대조 결과에 따른 처리
    if (isMatchPassword) {
      return res
        .status(200)
        .json({ message: "로그인에 성공했습니다.", accessToken, refreshToken });
    } else {
      return res
        .status(401)
        .json({ message: "로그인에 실패했습니다. 입력을 확인해 주세요" });
    }
  } catch (err) {
    return res.status(500).json({ message: "서버 요청에 실패했습니다." });
  }
};
