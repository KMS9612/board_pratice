const signUpLogic = async (inputTargets) => {
  if (!checkSignUpInputs(inputTargets)) {
    return;
  }
  const { userName, email, password, passwordCheck } = inputTargets;

  try {
    const response = await fetch("http://localhost:5000/user/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error("Error");
    }
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

/** 회원가입에 필요한 정보가 충족되었는지 확인하는 함수
 * 충족되었다면 true 아니라면 false
 */
const checkSignUpInputs = (inputTargets) => {
  const { userName, email, password, passwordCheck } = inputTargets;

  if (!userName) {
    alert("이름을 입력 해 주세요");
    return false;
  }
  if (!email) {
    alert("이메일을 입력 해 주세요");
    return false;
  }
  if (!password) {
    alert("비밀번호를 입력 해 주세요");
    return false;
  }
  if (password !== passwordCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }

  return true;
};

document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.querySelector("#signUpBtn");
  const userName = document.querySelector("#userNameInput");
  const email = document.querySelector("#emailInput");
  const password = document.querySelector("#passwordInput");
  const passwordCheck = document.querySelector("#passwordCheckInput");

  signUpBtn.addEventListener("click", () => {
    const inputTargets = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      passwordCheck: passwordCheck.value,
    };

    const response = signUpLogic(inputTargets);
  });
});
