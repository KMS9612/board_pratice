import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import fs from "fs";
// __filename 및 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTML 파일 검색
const htmlFiles = fs
  .readdirSync(path.resolve(__dirname, "src/client"))
  .filter((file) => file.endsWith(".html"));

// HtmlWebpackPlugin 생성
const htmlPlugins = htmlFiles.map(
  (file) =>
    new HtmlWebpackPlugin({
      template: `./src/client/${file}`,
      filename: file, // 동일한 파일명으로 생성
    })
);

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
  mode: "production",
  // Plugins
  plugins: [
    ...htmlPlugins, // 동적으로 생성된 html파일 추가
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  devServer: {
    static: {
      // 참고할 정적파일의 경로
      directory: path.join(__dirname, "dist"),
    },
    // DevServer에서 변경점을 감지할 파일들
    watchFiles: ["src/client/**/*", "dist/**/*"],
    // 로컬서버로 사용할 포트
    port: 3000,
    // 실행시 브라우저를 실행시킬건지
    open: true,
    hot: true,
    liveReload: true,
    proxy: [
      {
        // API 서버와의 통신중 CORS에러를 해결하기 위해 프록시 서버 설정
        context: ["/api"],
        target: "http://localhost:5000",
      },
    ],
  },
};
