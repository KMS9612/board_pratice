import db from "../db.js";

export const createUser = async (req, res) => {
  try {
    const { userName, email, password, hashed_password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "잘못된 요청입니다." });
    }

    // SQL Injection 방지를 위한 Prepare Statement 사용
    // Place Holder를 사용해 mysql이 자동으로 Escape처리
    const CREATE_USER_QUERY = `
      INSERT INTO users (email, pw_hashed, name)
      VALUES (?, ?, ?)
    `;

    await db.query(CREATE_USER_QUERY, [email, hashed_password, userName]);

    return res
      .status(201)
      .json({ message: "사용자가 정상적으로 생성되었습니다." });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "이미 사용중인 이메일 입니다." });
    }
    console.error("서버 에러 발생:", err);
    return res.status(500).json({ message: "서버 내부 에러가 발생했습니다." });
  }
};
