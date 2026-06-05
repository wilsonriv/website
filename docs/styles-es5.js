(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, ":root {\n  --bg-primary: #0d1117;\n  --bg-surface: #161b22;\n  --bg-elevated: #1c2128;\n  --border: #30363d;\n  --accent: #4f9cf9;\n  --accent-hover: #6aadfa;\n  --accent-glow: rgba(79, 156, 249, 0.15);\n  --accent-glow-strong: rgba(79, 156, 249, 0.3);\n  --text-primary: #e6edf3;\n  --text-muted: #8b949e;\n  --font: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;\n  --nav-height: 64px;\n  --section-padding: 5rem 1.5rem;\n  --max-width: 1100px;\n  --radius: 10px;\n  --transition: 0.2s ease;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-family: var(--font);\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\n\na {\n  color: var(--accent);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n\na:hover {\n  color: var(--accent-hover);\n}\n\nimg {\n  max-width: 100%;\n}\n\n/* ── Shared section styles ───────────────────────────── */\n\n.section {\n  padding: var(--section-padding);\n}\n\n.section__inner {\n  max-width: var(--max-width);\n  margin: 0 auto;\n}\n\n.section-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n\n.section-title::after {\n  content: '';\n  display: block;\n  width: 48px;\n  height: 3px;\n  background: var(--accent);\n  border-radius: 2px;\n  margin-top: 0.5rem;\n  margin-bottom: 2rem;\n}\n\n/* ── Buttons ──────────────────────────────────────────── */\n\n.btn-primary {\n  display: inline-block;\n  background: var(--accent);\n  color: #fff;\n  padding: 0.75rem 1.75rem;\n  border-radius: 8px;\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 0.95rem;\n  letter-spacing: 0.01em;\n  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);\n  cursor: pointer;\n  border: none;\n}\n\n.btn-primary:hover {\n  background: var(--accent-hover);\n  color: #fff;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 20px var(--accent-glow-strong);\n}\n\n.btn-outline {\n  display: inline-block;\n  border: 1.5px solid var(--accent);\n  color: var(--accent);\n  padding: 0.75rem 1.75rem;\n  border-radius: 8px;\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 0.95rem;\n  letter-spacing: 0.01em;\n  transition: background var(--transition), color var(--transition), transform var(--transition);\n  cursor: pointer;\n}\n\n.btn-outline:hover {\n  background: var(--accent-glow);\n  color: var(--accent-hover);\n  transform: translateY(-1px);\n}\n\n/* ── Skill tags ───────────────────────────────────────── */\n\n.skill-tag {\n  display: inline-block;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  color: var(--accent);\n  padding: 0.3rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  transition: border-color var(--transition), background var(--transition);\n}\n\n.skill-tag:hover {\n  border-color: var(--accent);\n  background: var(--accent-glow);\n}\n\n/* ── Footer ───────────────────────────────────────────── */\n\n/* ── Bootstrap compat — used on client detail pages ──── */\n\n.container {\n  max-width: var(--max-width);\n  margin: 0 auto;\n  padding: 3rem 1.5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.logon-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n\n.logon-container img,\n.rounded-circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid var(--border);\n}\n\n.container h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.container p {\n  color: var(--text-muted);\n  line-height: 1.7;\n  margin-bottom: 1rem;\n}\n\n.container ul {\n  margin: 0.5rem 0 1rem 1.25rem;\n}\n\n.container li {\n  color: var(--text-muted);\n  margin-bottom: 0.4rem;\n}\n\n/* ── Footer ───────────────────────────────────────────── */\n\n.site-footer {\n  border-top: 1px solid var(--border);\n  padding: 2rem 1.5rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n\n.site-footer a {\n  color: var(--text-muted);\n  margin: 0 0.75rem;\n  transition: color var(--transition);\n}\n\n.site-footer a:hover {\n  color: var(--accent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1iZy1wcmltYXJ5OiAjMGQxMTE3O1xuICAtLWJnLXN1cmZhY2U6ICMxNjFiMjI7XG4gIC0tYmctZWxldmF0ZWQ6ICMxYzIxMjg7XG4gIC0tYm9yZGVyOiAjMzAzNjNkO1xuICAtLWFjY2VudDogIzRmOWNmOTtcbiAgLS1hY2NlbnQtaG92ZXI6ICM2YWFkZmE7XG4gIC0tYWNjZW50LWdsb3c6IHJnYmEoNzksIDE1NiwgMjQ5LCAwLjE1KTtcbiAgLS1hY2NlbnQtZ2xvdy1zdHJvbmc6IHJnYmEoNzksIDE1NiwgMjQ5LCAwLjMpO1xuICAtLXRleHQtcHJpbWFyeTogI2U2ZWRmMztcbiAgLS10ZXh0LW11dGVkOiAjOGI5NDllO1xuICAtLWZvbnQ6ICdTcGFjZSBHcm90ZXNrJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAtLW5hdi1oZWlnaHQ6IDY0cHg7XG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgLS1tYXgtd2lkdGg6IDExMDBweDtcbiAgLS1yYWRpdXM6IDEwcHg7XG4gIC0tdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qIOKUgOKUgCBTaGFyZWQgc2VjdGlvbiBzdHlsZXMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb25fX2lubmVyIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5zZWN0aW9uLXRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLyog4pSA4pSAIEJ1dHRvbnMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5cbi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uKSwgdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24pLCBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCB2YXIoLS1hY2NlbnQtZ2xvdy1zdHJvbmcpO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uKSwgY29sb3IgdmFyKC0tdHJhbnNpdGlvbiksIHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLW91dGxpbmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ2xvdyk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi8qIOKUgOKUgCBTa2lsbCB0YWdzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuXG4uc2tpbGwtdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBwYWRkaW5nOiAwLjNyZW0gMC44NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pLCBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uc2tpbGwtdGFnOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ2xvdyk7XG59XG5cbi8qIOKUgOKUgCBGb290ZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5cbi8qIOKUgOKUgCBCb290c3RyYXAgY29tcGF0IOKAlCB1c2VkIG9uIGNsaWVudCBkZXRhaWwgcGFnZXMg4pSA4pSA4pSA4pSAICovXG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmxvZ29uLWNvbnRhaW5lciBpbWcsXG4ucm91bmRlZC1jaXJjbGUge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5jb250YWluZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhaW5lciB1bCB7XG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAxLjI1cmVtO1xufVxuXG4uY29udGFpbmVyIGxpIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG59XG5cbi8qIOKUgOKUgCBGb290ZXIg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5cbi5zaXRlLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLnNpdGUtZm9vdGVyIGEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbiJdfQ== */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/wilson/code/website/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map