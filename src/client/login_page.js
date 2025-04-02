const loginLogic = async (inputTargets) => {
  try {
    const response = await fetch("http://localhost:5000/user/loginUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputTargets.email,
        password: inputTargets.password,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        alert("로그인 실패! 이메일과 비밀번호를 확인해주세요.");
      }
      if (response.status === 500) {
        alert("로그인 실패! 서버 에러입니다 재 시도 해주세요");
      }
    }

    window.location.href = "/board.html";
    return;
  } catch (err) {
    alert(
      "네트워크 오류가 발생했습니다. 다시 시도 후 문제가 계속되면 관리자에게 문의해주세요."
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const loginTarget = document.querySelector("#loginBtn");
  const emailTarget = document.querySelector("#emailInput");
  const passwordTarget = document.querySelector("#passwordInput");

  loginTarget.addEventListener("click", () => {
    const inputTargets = {
      email: emailTarget.value,
      password: passwordTarget.value,
    };

    loginLogic(inputTargets);
  });
});
