import bcrypt from "bcrypt";

export const hashingPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    //   hashing횟수
    const saltRounds = 10;

    //   Hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.hashed_password = hashedPassword;
    next();
  } catch (err) {
    res.status(500).json({ message: "비밀번호 암호화 중 에러발생" });
    return;
  }
};
