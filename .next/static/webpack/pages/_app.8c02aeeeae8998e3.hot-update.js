"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-rgb: 161, 161, 161;\\r\\n  --button-rgb: 150, 150, 150;\\r\\n  --button-hover-rgb: 30, 144, 255;\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n\\r\\n  --input-background-rgb: 241, 241, 241;\\r\\n  --input-border-rgb: 225, 225, 225;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-rgb: 59, 59, 59;\\r\\n    --button-rgb: 201, 201, 201;\\r\\n    --button-hover-rgb: 74, 144, 226;\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n    --input-background-rgb: 51, 51, 51;\\r\\n    --input-border-rgb: 76, 76, 76;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background-color: rgb(var(--background-rgb));\\r\\n  font-family: var(--font-mono);\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: rgb(var(--button-rgb));\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: var(--border-radius);\\r\\n  font-size: 14px;\\r\\n  font-weight: 600;\\r\\n  padding: 10px 16px;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: rgb(var(--button-hover-rgb));\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  border-radius: var(--border-radius);\\r\\n  padding: 10px 12px;\\r\\n  margin: 8px 0;\\r\\n  width: 100%;\\r\\n  background-color: rgb(var(--input-background-rgb));\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  font-family: var(--font-mono);\\r\\n  font-size: 14px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  box-shadow: none;\\r\\n  border: 1px solid rgb(var(--input-border-rgb));\\r\\n}\\r\\n\\r\\n.ChatContainer {\\r\\n  max-width: 1000px;\\r\\n  margin: 0 auto;\\r\\n  padding: 24px;\\r\\n  height: 400px;\\r\\n  border-radius: var(--border-radius);\\r\\n  background-color: rgb(var(--card-rgb));\\r\\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.ChatMessage {\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.ChatMessage .Username {\\r\\n  margin-right: 8px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.ChatMessage .Timestamp {\\r\\n  margin-left: 8px;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.ChatMessage .Content {\\r\\n  margin-top: 4px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.loading-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.loading-spinner {\\r\\n  border: 0.5rem solid rgba(0, 0, 0, 0.1);\\r\\n  border-top: 0.5rem solid #2196f3;\\r\\n  border-radius: 50%;\\r\\n  width: 4rem;\\r\\n  height: 4rem;\\r\\n  animation: spin 1s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  }\\r\\n  \\r\\n  .ProfilePhoto {\\r\\n  display: block;\\r\\n  margin: 16px 0;\\r\\n  }\\r\\n  \\r\\n  .Title {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 8px;\\r\\n  }\\r\\n  \\r\\n  .Subtitle {\\r\\n  font-size: 14px;\\r\\n  margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .InputBox {\\r\\n  width: 100%;\\r\\n  margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .ChatContainer {\\r\\n  width: 100%;\\r\\n  border-radius: 0;\\r\\n  box-shadow: none;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  }\\r\\n  }\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,qBAAqB;EACrB;;4DAE0D;;EAE1D,yBAAyB;EACzB,+BAA+B;EAC/B,2BAA2B;EAC3B,gCAAgC;;EAEhC,4BAA4B;EAC5B,mCAAmC;EACnC,yBAAyB;EACzB,gCAAgC;;EAEhC,qCAAqC;EACrC,iCAAiC;AACnC;;AAEA;EACE;IACE,+BAA+B;IAC/B,4BAA4B;IAC5B,2BAA2B;IAC3B,gCAAgC;IAChC,yBAAyB;IACzB,mCAAmC;IACnC,yBAAyB;IACzB,gCAAgC;IAChC,kCAAkC;IAClC,8BAA8B;EAChC;AACF;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,4CAA4C;EAC5C,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,kDAAkD;EAClD,iCAAiC;EACjC,6BAA6B;EAC7B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,yCAAyC;EACzC,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,uCAAuC;EACvC,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;EACA,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB;;EAEA;EACA,cAAc;EACd,cAAc;EACd;;EAEA;EACA,eAAe;EACf,kBAAkB;EAClB;;EAEA;EACA,eAAe;EACf,mBAAmB;EACnB;;EAEA;EACA,WAAW;EACX,mBAAmB;EACnB;;EAEA;EACA,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB;EACA\",\"sourcesContent\":[\":root {\\r\\n  --border-radius: 12px;\\r\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\r\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\r\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\r\\n\\r\\n  --foreground-rgb: 0, 0, 0;\\r\\n  --background-rgb: 161, 161, 161;\\r\\n  --button-rgb: 150, 150, 150;\\r\\n  --button-hover-rgb: 30, 144, 255;\\r\\n\\r\\n  --callout-rgb: 238, 240, 241;\\r\\n  --callout-border-rgb: 172, 175, 176;\\r\\n  --card-rgb: 180, 185, 188;\\r\\n  --card-border-rgb: 131, 134, 135;\\r\\n\\r\\n  --input-background-rgb: 241, 241, 241;\\r\\n  --input-border-rgb: 225, 225, 225;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --foreground-rgb: 255, 255, 255;\\r\\n    --background-rgb: 59, 59, 59;\\r\\n    --button-rgb: 201, 201, 201;\\r\\n    --button-hover-rgb: 74, 144, 226;\\r\\n    --callout-rgb: 20, 20, 20;\\r\\n    --callout-border-rgb: 108, 108, 108;\\r\\n    --card-rgb: 100, 100, 100;\\r\\n    --card-border-rgb: 200, 200, 200;\\r\\n    --input-background-rgb: 51, 51, 51;\\r\\n    --input-border-rgb: 76, 76, 76;\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  background-color: rgb(var(--background-rgb));\\r\\n  font-family: var(--font-mono);\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: rgb(var(--button-rgb));\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: var(--border-radius);\\r\\n  font-size: 14px;\\r\\n  font-weight: 600;\\r\\n  padding: 10px 16px;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: rgb(var(--button-hover-rgb));\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  border-radius: var(--border-radius);\\r\\n  padding: 10px 12px;\\r\\n  margin: 8px 0;\\r\\n  width: 100%;\\r\\n  background-color: rgb(var(--input-background-rgb));\\r\\n  color: rgb(var(--foreground-rgb));\\r\\n  font-family: var(--font-mono);\\r\\n  font-size: 14px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  box-shadow: none;\\r\\n  border: 1px solid rgb(var(--input-border-rgb));\\r\\n}\\r\\n\\r\\n.ChatContainer {\\r\\n  max-width: 1000px;\\r\\n  margin: 0 auto;\\r\\n  padding: 24px;\\r\\n  height: 400px;\\r\\n  border-radius: var(--border-radius);\\r\\n  background-color: rgb(var(--card-rgb));\\r\\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.ChatMessage {\\r\\n  margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.ChatMessage .Username {\\r\\n  margin-right: 8px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.ChatMessage .Timestamp {\\r\\n  margin-left: 8px;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.ChatMessage .Content {\\r\\n  margin-top: 4px;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.loading-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.loading-spinner {\\r\\n  border: 0.5rem solid rgba(0, 0, 0, 0.1);\\r\\n  border-top: 0.5rem solid #2196f3;\\r\\n  border-radius: 50%;\\r\\n  width: 4rem;\\r\\n  height: 4rem;\\r\\n  animation: spin 1s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  }\\r\\n  \\r\\n  .ProfilePhoto {\\r\\n  display: block;\\r\\n  margin: 16px 0;\\r\\n  }\\r\\n  \\r\\n  .Title {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 8px;\\r\\n  }\\r\\n  \\r\\n  .Subtitle {\\r\\n  font-size: 14px;\\r\\n  margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .InputBox {\\r\\n  width: 100%;\\r\\n  margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .ChatContainer {\\r\\n  width: 100%;\\r\\n  border-radius: 0;\\r\\n  box-shadow: none;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  }\\r\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlEQUFpRCw0QkFBNEIsOE5BQThOLG9DQUFvQyxzQ0FBc0Msa0NBQWtDLHVDQUF1Qyx1Q0FBdUMsMENBQTBDLGdDQUFnQyx1Q0FBdUMsZ0RBQWdELHdDQUF3QyxLQUFLLDZDQUE2QyxhQUFhLHdDQUF3QyxxQ0FBcUMsb0NBQW9DLHlDQUF5QyxrQ0FBa0MsNENBQTRDLGtDQUFrQyx5Q0FBeUMsMkNBQTJDLHVDQUF1QyxPQUFPLEtBQUssV0FBVyw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLGNBQWMsc0JBQXNCLEtBQUssY0FBYyx3Q0FBd0MsbURBQW1ELG9DQUFvQyxLQUFLLFdBQVcscUJBQXFCLDRCQUE0QixLQUFLLGdCQUFnQiwrQ0FBK0Msa0JBQWtCLG1CQUFtQiwwQ0FBMEMsc0JBQXNCLHVCQUF1Qix5QkFBeUIsc0JBQXNCLG9EQUFvRCxLQUFLLHNCQUFzQixxREFBcUQsS0FBSyxlQUFlLG1CQUFtQiwwQ0FBMEMseUJBQXlCLG9CQUFvQixrQkFBa0IseURBQXlELHdDQUF3QyxvQ0FBb0Msc0JBQXNCLG9CQUFvQixLQUFLLHFCQUFxQix1QkFBdUIscURBQXFELEtBQUssd0JBQXdCLHdCQUF3QixxQkFBcUIsb0JBQW9CLG9CQUFvQiwwQ0FBMEMsNkNBQTZDLGdEQUFnRCxxQkFBcUIsS0FBSyxzQkFBc0IsMEJBQTBCLEtB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QUFpQyx1QkFBdUIsc0JBQXNCLEtBQUssK0JBQStCLHNCQUFzQixzQkFBc0IsS0FBSyw0QkFBNEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsb0JBQW9CLGdDQUFnQyxLQUFLLDBCQUEwQiw4Q0FBOEMsdUNBQXVDLHlCQUF5QixrQkFBa0IsbUJBQW1CLHlDQUF5QyxLQUFLLHlCQUF5QixZQUFZLGdDQUFnQyxPQUFPLFVBQVUsa0NBQWtDLE9BQU8sS0FBSyxtQ0FBbUMsWUFBWSxvQkFBb0IsNkJBQTZCLDBCQUEwQixPQUFPLDJCQUEyQixxQkFBcUIscUJBQXFCLE9BQU8sb0JBQW9CLHNCQUFzQix5QkFBeUIsT0FBTyx1QkFBdUIsc0JBQXNCLDBCQUEwQixPQUFPLHVCQUF1QixrQkFBa0IsMEJBQTBCLE9BQU8sNEJBQTRCLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsT0FBTyxPQUFPLG1CQUFtQjtBQUM5c1M7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/M2E4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxyXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxyXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcclxcblxcclxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXHJcXG4gIC0tYmFja2dyb3VuZC1yZ2I6IDE2MSwgMTYxLCAxNjE7XFxyXFxuICAtLWJ1dHRvbi1yZ2I6IDE1MCwgMTUwLCAxNTA7XFxyXFxuICAtLWJ1dHRvbi1ob3Zlci1yZ2I6IDMwLCAxNDQsIDI1NTtcXHJcXG5cXHJcXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxyXFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXHJcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXHJcXG5cXHJcXG4gIC0taW5wdXQtYmFja2dyb3VuZC1yZ2I6IDI0MSwgMjQxLCAyNDE7XFxyXFxuICAtLWlucHV0LWJvcmRlci1yZ2I6IDIyNSwgMjI1LCAyMjU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1mb3JlZ3JvdW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLXJnYjogNTksIDU5LCA1OTtcXHJcXG4gICAgLS1idXR0b24tcmdiOiAyMDEsIDIwMSwgMjAxO1xcclxcbiAgICAtLWJ1dHRvbi1ob3Zlci1yZ2I6IDc0LCAxNDQsIDIyNjtcXHJcXG4gICAgLS1jYWxsb3V0LXJnYjogMjAsIDIwLCAyMDtcXHJcXG4gICAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDEwOCwgMTA4LCAxMDg7XFxyXFxuICAgIC0tY2FyZC1yZ2I6IDEwMCwgMTAwLCAxMDA7XFxyXFxuICAgIC0tY2FyZC1ib3JkZXItcmdiOiAyMDAsIDIwMCwgMjAwO1xcclxcbiAgICAtLWlucHV0LWJhY2tncm91bmQtcmdiOiA1MSwgNTEsIDUxO1xcclxcbiAgICAtLWlucHV0LWJvcmRlci1yZ2I6IDc2LCA3NiwgNzY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1iYWNrZ3JvdW5kLXJnYikpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tYnV0dG9uLXJnYikpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tYnV0dG9uLWhvdmVyLXJnYikpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIG1hcmdpbjogOHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kLXJnYikpO1xcclxcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKHZhcigtLWlucHV0LWJvcmRlci1yZ2IpKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNoYXRDb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tY2FyZC1yZ2IpKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5DaGF0TWVzc2FnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2hhdE1lc3NhZ2UgLlVzZXJuYW1lIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5DaGF0TWVzc2FnZSAuVGltZXN0YW1wIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5DaGF0TWVzc2FnZSAuQ29udGVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nLXNwaW5uZXIge1xcclxcbiAgYm9yZGVyOiAwLjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYm9yZGVyLXRvcDogMC41cmVtIHNvbGlkICMyMTk2ZjM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5Qcm9maWxlUGhvdG8ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDE2cHggMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlN1YnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5JbnB1dEJveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5DaGF0Q29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzs0REFFMEQ7O0VBRTFELHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLGdDQUFnQzs7RUFFaEMsNEJBQTRCO0VBQzVCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsZ0NBQWdDOztFQUVoQyxxQ0FBcUM7RUFDckMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw0Q0FBNEM7RUFDNUMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrREFBa0Q7RUFDbEQsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtFQUNBLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25COztFQUVBO0VBQ0EsY0FBYztFQUNkLGNBQWM7RUFDZDs7RUFFQTtFQUNBLGVBQWU7RUFDZixrQkFBa0I7RUFDbEI7O0VBRUE7RUFDQSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25COztFQUVBO0VBQ0EsV0FBVztFQUNYLG1CQUFtQjtFQUNuQjs7RUFFQTtFQUNBLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEI7RUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCAnQ2FzY2FkaWEgTW9ubycsICdTZWdvZSBVSSBNb25vJyxcXHJcXG4gICAgJ1JvYm90byBNb25vJywgJ094eWdlbiBNb25vJywgJ1VidW50dSBNb25vc3BhY2UnLCAnU291cmNlIENvZGUgUHJvJyxcXHJcXG4gICAgJ0ZpcmEgTW9ubycsICdEcm9pZCBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxyXFxuXFxyXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcclxcbiAgLS1iYWNrZ3JvdW5kLXJnYjogMTYxLCAxNjEsIDE2MTtcXHJcXG4gIC0tYnV0dG9uLXJnYjogMTUwLCAxNTAsIDE1MDtcXHJcXG4gIC0tYnV0dG9uLWhvdmVyLXJnYjogMzAsIDE0NCwgMjU1O1xcclxcblxcclxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXHJcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcclxcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcclxcblxcclxcbiAgLS1pbnB1dC1iYWNrZ3JvdW5kLXJnYjogMjQxLCAyNDEsIDI0MTtcXHJcXG4gIC0taW5wdXQtYm9yZGVyLXJnYjogMjI1LCAyMjUsIDIyNTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcclxcbiAgICAtLWJhY2tncm91bmQtcmdiOiA1OSwgNTksIDU5O1xcclxcbiAgICAtLWJ1dHRvbi1yZ2I6IDIwMSwgMjAxLCAyMDE7XFxyXFxuICAgIC0tYnV0dG9uLWhvdmVyLXJnYjogNzQsIDE0NCwgMjI2O1xcclxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcclxcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXHJcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXHJcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxyXFxuICAgIC0taW5wdXQtYmFja2dyb3VuZC1yZ2I6IDUxLCA1MSwgNTE7XFxyXFxuICAgIC0taW5wdXQtYm9yZGVyLXJnYjogNzYsIDc2LCA3NjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLWJhY2tncm91bmQtcmdiKSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1idXR0b24tcmdiKSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1idXR0b24taG92ZXItcmdiKSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLWlucHV0LWJhY2tncm91bmQtcmdiKSk7XFxyXFxuICBjb2xvcjogcmdiKHZhcigtLWZvcmVncm91bmQtcmdiKSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0taW5wdXQtYm9yZGVyLXJnYikpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2hhdENvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jYXJkLXJnYikpO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLkNoYXRNZXNzYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5DaGF0TWVzc2FnZSAuVXNlcm5hbWUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLkNoYXRNZXNzYWdlIC5UaW1lc3RhbXAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNoYXRNZXNzYWdlIC5Db250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxyXFxuICBib3JkZXI6IDAuNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgIzIxOTZmMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlByb2ZpbGVQaG90byB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMTZweCAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuU3VidGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLklucHV0Qm94IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkNoYXRDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});