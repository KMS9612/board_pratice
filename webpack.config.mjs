import path from "path";
import { fileURLToPath } from "url";
// __filename 및 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // 진입점
  entry: "./src/client/index.js",
  // 번들링 결과물에 대한 설정
  output: {
    // 결과물의 파일네임
    filename: "bundle.js",
    // 결과물의 파일이 저장될 디렉토리
    path: path.resolve(__dirname, "dist"),
  },
  // development와 production 중 택1
  // development는 디버깅
  // production은 최적화된 결과물에 특화
  mode: "development",
  devServer: {
    static: {
      // 참고할 정적파일의 경로
      directory: path.join(__dirname, "dist"),
    },
    // 로컬서버로 사용할 포트
    port: 3000,
    // 실행시 브라우저를 실행시킬건지
    open: true,
    proxy: [
      {
        // API 서버와의 통신중 CORS에러를 해결하기 위해 프록시 서버 설정
        context: ["/api"],
        target: "http://localhost:5000",
      },
    ],
  },
};
