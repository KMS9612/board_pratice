// 파일을 분할해서 작성할 시 이곳에 import해야 번들링이 이루어집니다.
import "./styles/global.css";
import "./styles/index.css";
import "./styles/signup.css";
import "./styles/board.css";

document.addEventListener("DOMContentLoaded", () => {
  const apiTestTarget = document.getElementById("API");

  console.log("apiTestTarget", apiTestTarget);

  apiTestTarget.addEventListener("click", async function () {
    try {
      const response = await fetch("http://localhost:5000/api", {
        method: "GET",
        headers: {
          "Contents-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
    } catch (err) {
      console.log(err);
    }
  });
});
