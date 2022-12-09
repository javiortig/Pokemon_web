webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Pokemon/styles.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Pokemon/styles.css ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-card {\n  transition: all 0.7s;\n  background-color: var(--card_gray);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  padding: 14px 12px;\n}\n\n.container-card:hover {\n  text-decoration: none;\n}\n\n.container-card-img {\n  z-index: 2;\n}\n\n.pokemon-name {\n  font-size: 20px;\n  text-transform: capitalize;\n  color: white;\n  text-align: center;\n  margin-top: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.pokemon-number {\n  margin-top: 4px;\n  color: var(--lightest_gray);\n}\n\n.type-item {\n  width: 48%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  letter-spacing: 2px;\n}\n\n/* normal */\n.container-normal::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--normal) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-normal::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--normal), var(--default_rgba));\n}\n\n/* fire */\n.container-fire::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fire) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fire::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--fire), var(--default_rgba));\n}\n\n/* water */\n.container-water::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--water) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-water::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--water), var(--default_rgba));\n}\n\n/* electric */\n.container-electric::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--electric) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-electric::after {\n  opacity: 1;\n  background-image: linear-gradient(\n    45deg,\n    var(--electric),\n    var(--default_rgba)\n  );\n}\n\n/* grass */\n.container-grass::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--grass) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-grass::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--grass), var(--default_rgba));\n}\n\n/* ice */\n.container-ice::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ice) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ice::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ice), var(--default_rgba));\n}\n\n/* fighting  */\n.container-fighting::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fighting) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fighting::after {\n  opacity: 1;\n  background-image: linear-gradient(\n    45deg,\n    var(--fighting),\n    var(--default_rgba)\n  );\n}\n\n/* poison  */\n.container-poison::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--poison) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-poison::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--poison), var(--default_rgba));\n}\n\n/* ground  */\n.container-ground::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ground) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ground::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ground), var(--default_rgba));\n}\n\n/* flying  */\n.container-flying::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--flying) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-flying::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--flying), var(--default_rgba));\n}\n\n/* psychic  */\n.container-psychic::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--psychic) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-psychic::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--psychic), var(--default_rgba));\n}\n\n/* bug  */\n.container-bug::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--bug) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-bug::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--bug), var(--default_rgba));\n}\n\n/* rock  */\n.container-rock::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--rock) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-rock::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--rock), var(--default_rgba));\n}\n\n/* ghost  */\n.container-ghost::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ghost) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ghost::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ghost), var(--default_rgba));\n}\n\n/* dragon  */\n.container-dragon::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--dragon) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-dragon::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--dragon), var(--default_rgba));\n}\n\n/* dark  */\n.container-dark::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--dark) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-dark::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--dark), var(--default_rgba));\n}\n\n/* steel  */\n.container-steel::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--steel) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-steel::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--steel), var(--default_rgba));\n}\n\n/* fairy  */\n.container-fairy::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fairy) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fairy::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--fairy), var(--default_rgba));\n}\n\n.section-title {\n  font-family: \"OldSansBlack\";\n  letter-spacing: 4px;\n  font-size: 16px;\n  padding-left: 6px;\n}\n\n/* Details */\n.overview {\n  line-height: 30px;\n  font-size: 20px;\n  font-family: \"OldSansBlack\";\n}\n\n.sword,\n.shield {\n  border: 2px dashed var(--brand_dark) !important;\n  border-radius: 100%;\n}\n\n.sword {\n  background-color: var(--fighting) !important;\n}\n\n.shield {\n  background-color: var(--water) !important;\n}\n\n.container-versions button {\n  background: none;\n  border: none;\n  width: 70px;\n  height: 40px;\n}\n\n.container-versions img {\n  width: 30px;\n}\n\n.container-info {\n  background-color: var(--card_gray);\n  padding: 14px 10px;\n  border-radius: 10px;\n}\n\n.info-item {\n  width: 50%;\n  margin-bottom: 30px;\n}\n\n.info-item h4 {\n  font-size: 14px;\n  margin-bottom: 0;\n  letter-spacing: 4px;\n  display: flex;\n  align-items: center;\n  font-family: \"OldSansBlack\";\n}\n\n.info-item p {\n  margin-bottom: 0;\n  text-transform: capitalize;\n  font-size: 16px;\n  font-family: \"OldSansBlack\";\n}\n\n/* Stats */\n.container-bar {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  background-color: var(--card_gray);\n  padding: 14px 12px;\n  border-radius: 10px;\n  grid-column-gap: 50px;\n  column-gap: 50px;\n}\n\n.bar-item {\n  width: 100px;\n}\n\n.bar {\n  height: 200px;\n  background-color: rgba(0, 0, 0, 0.1);\n  position: relative;\n  border-radius: 4px;\n}\n\n.bar-active {\n  width: 100px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.container-label {\n  width: 100%;\n  background-color: transparent;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.value {\n  color: var(--brand_dark);\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.label {\n  font-family: \"OldSansBlack\";\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n@media screen and (max-width: 998px) {\n  .label {\n    font-size: 10px;\n    max-width: 40px;\n  }\n\n  .bar-active,\n  .bar-item {\n    width: 40px;\n  }\n}\n\n/* Evolution */\n.container-evolution {\n  background-color: var(--card_gray);\n  border-radius: 10px;\n  width: 100%;\n  padding: 14px 12px;\n}\n\n.evolution-item {\n  background-color: var(--brand_dark);\n  padding: 20px 10px;\n  width: 24%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.evolution-item figure {\n  margin: 0;\n}\n\n.evolution-item p {\n  margin-bottom: 0;\n}\n\n.evolution-img {\n  border-radius: 100%;\n  width: 150px;\n  border: 1px solid white;\n  padding: 10px;\n}\n\n.container-arrow {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n}\n\n.carta-fisica-container{\n  margin-left: 2.5%;\n  display: flexbox;\n  justify-content:space-between;\n}\n\n.carta-fisica{\n  margin: 40px;\n  /* justify-self: center; */\n  /* align-self: center; */\n}\n\n.imagen-log{\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n}\n\n.captura-title{\n  color: #e8f046;\n}\n.muerte-title{\n  color: #fd9845;\n}\n\n.container-team-magma{\n  background-color: rgb(141, 13, 13);\n}\n\n.container-team-aqua{\n  background-color: rgb(36, 55, 203);\n}\n\n.imagen-objetos{\n  background-color: rgb(255, 255, 255);\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n}\n\n@media screen and (max-width: 767px) {\n  .evolution-item {\n    width: 100%;\n  }\n\n  .container-arrow {\n    transform: rotate(90deg);\n    margin: 20px 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/components/Pokemon/styles.css"],"names":[],"mappings":"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","sourcesContent":[".container-card {\n  transition: all 0.7s;\n  background-color: var(--card_gray);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  padding: 14px 12px;\n}\n\n.container-card:hover {\n  text-decoration: none;\n}\n\n.container-card-img {\n  z-index: 2;\n}\n\n.pokemon-name {\n  font-size: 20px;\n  text-transform: capitalize;\n  color: white;\n  text-align: center;\n  margin-top: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.pokemon-number {\n  margin-top: 4px;\n  color: var(--lightest_gray);\n}\n\n.type-item {\n  width: 48%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 10px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  letter-spacing: 2px;\n}\n\n/* normal */\n.container-normal::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--normal) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-normal::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--normal), var(--default_rgba));\n}\n\n/* fire */\n.container-fire::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fire) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fire::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--fire), var(--default_rgba));\n}\n\n/* water */\n.container-water::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--water) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-water::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--water), var(--default_rgba));\n}\n\n/* electric */\n.container-electric::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--electric) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-electric::after {\n  opacity: 1;\n  background-image: linear-gradient(\n    45deg,\n    var(--electric),\n    var(--default_rgba)\n  );\n}\n\n/* grass */\n.container-grass::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--grass) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-grass::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--grass), var(--default_rgba));\n}\n\n/* ice */\n.container-ice::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ice) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ice::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ice), var(--default_rgba));\n}\n\n/* fighting  */\n.container-fighting::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fighting) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fighting::after {\n  opacity: 1;\n  background-image: linear-gradient(\n    45deg,\n    var(--fighting),\n    var(--default_rgba)\n  );\n}\n\n/* poison  */\n.container-poison::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--poison) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-poison::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--poison), var(--default_rgba));\n}\n\n/* ground  */\n.container-ground::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ground) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ground::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ground), var(--default_rgba));\n}\n\n/* flying  */\n.container-flying::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--flying) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-flying::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--flying), var(--default_rgba));\n}\n\n/* psychic  */\n.container-psychic::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--psychic) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-psychic::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--psychic), var(--default_rgba));\n}\n\n/* bug  */\n.container-bug::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--bug) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-bug::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--bug), var(--default_rgba));\n}\n\n/* rock  */\n.container-rock::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--rock) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-rock::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--rock), var(--default_rgba));\n}\n\n/* ghost  */\n.container-ghost::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--ghost) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-ghost::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--ghost), var(--default_rgba));\n}\n\n/* dragon  */\n.container-dragon::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--dragon) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-dragon::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--dragon), var(--default_rgba));\n}\n\n/* dark  */\n.container-dark::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--dark) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-dark::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--dark), var(--default_rgba));\n}\n\n/* steel  */\n.container-steel::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--steel) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-steel::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--steel), var(--default_rgba));\n}\n\n/* fairy  */\n.container-fairy::after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 200px;\n  background-image: linear-gradient(\n    45deg,\n    var(--fairy) 0 1%,\n    transparent 50% 100%\n  );\n  position: absolute;\n  top: 0;\n  left: 10px;\n  border-radius: 100%;\n  z-index: -1;\n  opacity: 0.1;\n  transition: all 1.5s;\n}\n\n.container-card:hover .container-fairy::after {\n  opacity: 1;\n  background-image: linear-gradient(45deg, var(--fairy), var(--default_rgba));\n}\n\n.section-title {\n  font-family: \"OldSansBlack\";\n  letter-spacing: 4px;\n  font-size: 16px;\n  padding-left: 6px;\n}\n\n/* Details */\n.overview {\n  line-height: 30px;\n  font-size: 20px;\n  font-family: \"OldSansBlack\";\n}\n\n.sword,\n.shield {\n  border: 2px dashed var(--brand_dark) !important;\n  border-radius: 100%;\n}\n\n.sword {\n  background-color: var(--fighting) !important;\n}\n\n.shield {\n  background-color: var(--water) !important;\n}\n\n.container-versions button {\n  background: none;\n  border: none;\n  width: 70px;\n  height: 40px;\n}\n\n.container-versions img {\n  width: 30px;\n}\n\n.container-info {\n  background-color: var(--card_gray);\n  padding: 14px 10px;\n  border-radius: 10px;\n}\n\n.info-item {\n  width: 50%;\n  margin-bottom: 30px;\n}\n\n.info-item h4 {\n  font-size: 14px;\n  margin-bottom: 0;\n  letter-spacing: 4px;\n  display: flex;\n  align-items: center;\n  font-family: \"OldSansBlack\";\n}\n\n.info-item p {\n  margin-bottom: 0;\n  text-transform: capitalize;\n  font-size: 16px;\n  font-family: \"OldSansBlack\";\n}\n\n/* Stats */\n.container-bar {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  background-color: var(--card_gray);\n  padding: 14px 12px;\n  border-radius: 10px;\n  column-gap: 50px;\n}\n\n.bar-item {\n  width: 100px;\n}\n\n.bar {\n  height: 200px;\n  background-color: rgba(0, 0, 0, 0.1);\n  position: relative;\n  border-radius: 4px;\n}\n\n.bar-active {\n  width: 100px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.container-label {\n  width: 100%;\n  background-color: transparent;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.value {\n  color: var(--brand_dark);\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.label {\n  font-family: \"OldSansBlack\";\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n@media screen and (max-width: 998px) {\n  .label {\n    font-size: 10px;\n    max-width: 40px;\n  }\n\n  .bar-active,\n  .bar-item {\n    width: 40px;\n  }\n}\n\n/* Evolution */\n.container-evolution {\n  background-color: var(--card_gray);\n  border-radius: 10px;\n  width: 100%;\n  padding: 14px 12px;\n}\n\n.evolution-item {\n  background-color: var(--brand_dark);\n  padding: 20px 10px;\n  width: 24%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.evolution-item figure {\n  margin: 0;\n}\n\n.evolution-item p {\n  margin-bottom: 0;\n}\n\n.evolution-img {\n  border-radius: 100%;\n  width: 150px;\n  border: 1px solid white;\n  padding: 10px;\n}\n\n.container-arrow {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n}\n\n.carta-fisica-container{\n  margin-left: 2.5%;\n  display: flexbox;\n  justify-content:space-between;\n}\n\n.carta-fisica{\n  margin: 40px;\n  /* justify-self: center; */\n  /* align-self: center; */\n}\n\n.imagen-log{\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n}\n\n.captura-title{\n  color: #e8f046;\n}\n.muerte-title{\n  color: #fd9845;\n}\n\n.container-team-magma{\n  background-color: rgb(141, 13, 13);\n}\n\n.container-team-aqua{\n  background-color: rgb(36, 55, 203);\n}\n\n.imagen-objetos{\n  background-color: rgb(255, 255, 255);\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n}\n\n@media screen and (max-width: 767px) {\n  .evolution-item {\n    width: 100%;\n  }\n\n  .container-arrow {\n    transform: rotate(90deg);\n    margin: 20px 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.da79db43327d67ec2987.hot-update.js.map