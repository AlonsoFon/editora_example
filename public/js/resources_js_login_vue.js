"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  data: function data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {
    this.verifyUser();
  },
  methods: {
    redirectToRegister: function redirectToRegister() {
      this.$router.push({
        name: "register"
      });
    },
    verifyUser: function verifyUser() {
      var access_token = localStorage.getItem('access_token');
      if (access_token && access_token != "") {
        this.$router.push({
          name: "autorList"
        });
      }
    },
    login: function login(e) {
      var _this = this;
      e.preventDefault();
      this.axios.post('/api/login', this.user).then(function (response) {
        localStorage.setItem('access_token', response.data.access_token);
        _this.$router.push({
          name: "autorList"
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=template&id=66b5375b&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=template&id=66b5375b& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container py-5 h-100"
  }, [_c("div", {
    staticClass: "row d-flex justify-content-center align-items-center h-100"
  }, [_c("div", {
    staticClass: "col-xl-10"
  }, [_c("div", {
    staticClass: "card rounded-3 text-black"
  }, [_c("div", {
    staticClass: "row g-0"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "card-body p-md-5 mx-md-4"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    on: {
      submit: _vm.login
    }
  }, [_c("div", {
    staticClass: "form-outline mb-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.email,
      expression: "user.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "email",
      required: "",
      placeholder: "Seu Email"
    },
    domProps: {
      value: _vm.user.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-outline mb-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      placeholder: "Sua senha",
      id: "password",
      required: ""
    },
    domProps: {
      value: _vm.user.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center justify-content-center pb-4"
  }, [_c("p", {
    staticClass: "mb-0 me-2"
  }, [_vm._v("Não possui conta?")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.redirectToRegister
    }
  }, [_vm._v("Criar uma nova")])])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    staticStyle: {
      width: "185px"
    },
    attrs: {
      src: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp",
      alt: "logo"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "mt-1 mb-5 pb-1"
  }, [_vm._v("Sua editora especial")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center pt-1 mb-5 pb-1"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-block fa-lg gradient-custom-2 mb-3",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Entrar")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/login.vue":
/*!********************************!*\
  !*** ./resources/js/login.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=66b5375b& */ "./resources/js/login.vue?vue&type=template&id=66b5375b&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/login.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./resources/js/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/login.vue?vue&type=template&id=66b5375b&":
/*!***************************************************************!*\
  !*** ./resources/js/login.vue?vue&type=template&id=66b5375b& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_66b5375b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=66b5375b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/login.vue?vue&type=template&id=66b5375b&");


/***/ })

}]);