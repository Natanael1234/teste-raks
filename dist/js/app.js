/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/theme.scss":
/*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/theme.css\");\n\n//# sourceURL=webpack://teste-raks/./src/styles/theme.scss?");

/***/ }),

/***/ "./src/controllers/form.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/form.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormController)\n/* harmony export */ });\n/* harmony import */ var _masks_masks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../masks/masks */ \"./src/masks/masks.js\");\n/* harmony import */ var _validators_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/validators */ \"./src/validators/validators.js\");\n\r\n\r\n\r\nclass FormController {\r\n\r\n    constructor(router, dataService) {\r\n        this.userId = null;\r\n        this.router = router;\r\n        this.dataService = dataService;        \r\n        // máscara e validação do nome        \r\n        this.setFieldEvents(\r\n            this.nomeInput,\r\n            (event) => event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.nomeMask)(event.target.value),\r\n            (event) => {\r\n                event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.nomeMask)(event.target.value);\r\n                this.validateNome();\r\n            }\r\n        );\r\n        // máscara e validação do cpf        \r\n        this.setFieldEvents(\r\n            this.cpfInput,\r\n            (event) => event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.cpfMask)(event.target.value),\r\n            (event) => {\r\n                event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.cpfMask)(event.target.value);\r\n                this.validateCPF();\r\n            }\r\n        );\r\n        // máscara e validação do email                \r\n        this.setFieldEvents(\r\n            this.emailInput,\r\n            (event) => event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.emailMask)(event.target.value),\r\n            (event) => {\r\n                event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.emailMask)(event.target.value);\r\n                this.validateEmail();\r\n            }\r\n        );\r\n        // máscara e validação do fone;        \r\n        this.setFieldEvents(\r\n            this.foneInput,\r\n            (event) => event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.foneMask)(event.target.value),\r\n            (event) => {\r\n                event.target.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.foneMask)(event.target.value);\r\n                this.validateFone();\r\n            }\r\n        );\r\n        // this.submitButton.disabled = true;\r\n        this.submitButton.addEventListener('click', (e)=>{\r\n            this.onSubmit(e);\r\n        });\r\n        this.cancelButton.addEventListener('click', async (e)=>{            \r\n            this.router.navigateToList();\r\n        });\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {*} input \r\n     * @param {*} maskFn \r\n     * @param {*} validationFn \r\n     */\r\n    setFieldEvents(input, maskFn, validationFn) {\r\n        input.addEventListener('blur', validationFn);\r\n        input.addEventListener('keydown', maskFn);\r\n        input.addEventListener('keyup', maskFn);\r\n    }\r\n\r\n    navigateToList() {\r\n        router.navigateToList();\r\n    }\r\n\r\n    get formData() {\r\n        let data = {\r\n            id: this.userId,\r\n            nome: this.nomeInput.value,\r\n            cpf: this.cpfInput.value,\r\n            email: this.emailInput.value,\r\n            fone: this.foneInput.value\r\n        };\r\n        return data;\r\n    }\r\n\r\n    validateNome() {\r\n        this.nomeError = (0,_validators_validators__WEBPACK_IMPORTED_MODULE_1__.validateNome)(this.nomeInput.value);\r\n        this.updateSubmitButtonState();\r\n    }\r\n    validateCPF() {\r\n        this.cpfError = (0,_validators_validators__WEBPACK_IMPORTED_MODULE_1__.validateCPF)(this.cpfInput.value);\r\n        this.updateSubmitButtonState();\r\n    }\r\n    validateEmail() {\r\n        this.emailError = (0,_validators_validators__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(this.emailInput.value);\r\n        this.updateSubmitButtonState();\r\n    }\r\n    validateFone() {\r\n        this.foneError = (0,_validators_validators__WEBPACK_IMPORTED_MODULE_1__.validateFone)(this.foneInput.value);\r\n        this.updateSubmitButtonState();\r\n    }\r\n\r\n    setUser(user) {\r\n        this.userId = user ? user.id : null;\r\n        this.nomeInput.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.nomeMask)(user?.nome || '');\r\n        this.cpfInput.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.cpfMask)(user?.cpf || '');\r\n        this.emailInput.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.emailMask)(user?.email || '');\r\n        this.foneInput.value = (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.foneMask)(user?.fone || '');\r\n        if (user) {\r\n            this.validateNome();\r\n            this.validateCPF();\r\n            this.validateEmail();\r\n            this.validateFone();\r\n            this.updateSubmitButtonState();\r\n        } else {\r\n            this._nomeError = '';\r\n            this._cpfError = '';\r\n            this._emailError = '';\r\n            this._foneError = '';\r\n            this.nomeField.classList.remove('invalida');\r\n            this.cpfField.classList.remove('invalida');\r\n            this.emailField.classList.remove('invalida');\r\n            this.foneField.classList.remove('invalida');\r\n            this.nomeErrorView.innerHTML = '';\r\n            this.cpfErrorView.innerHTML = '';\r\n            this.foneErrorView.innerHTML = '';\r\n            this.emailErrorView.innerHTML = '';\r\n            this.submitButton.disabled = true;\r\n        }\r\n    }\r\n\r\n    updateSubmitButtonState() {\r\n        this.submitButton.disabled = !this.validForm;\r\n    }\r\n\r\n    /** Verifica se o formulário é válido. */\r\n    get validForm() {\r\n        if (this._nomeError) {\r\n            return false;\r\n        } else if (this._cpfError) {\r\n            return false;\r\n        } else if (this._emailError) {\r\n            return false;\r\n        } else if (this._foneError) {\r\n            return false;\r\n        } else {\r\n            return true;\r\n        }\r\n    }\r\n\r\n    /** Envia o formulário. */\r\n    async onSubmit(event) {\r\n        event.preventDefault();\r\n        if (this.validForm) {\r\n            let formdata = this.formData;\r\n            await this.dataService.saveUser(formdata);\r\n            this.router.navigateToList(true);\r\n        } else {\r\n            alert('Formulário inválido!');\r\n        }\r\n    }\r\n\r\n    set nomeError(message) {\r\n        this._nomeError = message;\r\n        this.setFieldState(this.nomeField, this.nomeErrorView, message);\r\n    }\r\n    set cpfError(message) {\r\n        this._cpfError = message;\r\n        this.setFieldState(this.cpfField, this.cpfErrorView, message);\r\n    }\r\n    set emailError(message) {\r\n        this._emailError = message;\r\n        this.setFieldState(this.emailField, this.emailErrorView, message);\r\n    }\r\n    set foneError(message) {\r\n        this._foneError = message;\r\n        this.setFieldState(this.foneField, this.foneErrorView, message);\r\n    }\r\n\r\n    get nomeError() { return this._nomeError; }\r\n    get cpfError() { return this._cpfError; }\r\n    get emailError() { return this._emailError; }\r\n    get foneError() { return this._foneError; }\r\n\r\n    setFieldState(fieldElelment, errorElement, message) {\r\n        if (message) {\r\n            fieldElelment.classList.add('invalid');\r\n            errorElement.innerHTML = message;\r\n        }\r\n        else {\r\n            fieldElelment.classList.remove('invalid');\r\n            errorElement.innerHTML = '';\r\n        }\r\n    }\r\n\r\n    get form() { return this.selectPageElement(\"form\"); }\r\n\r\n    get nomeField() { return this.selectPageElement(\".field.nome\"); }\r\n    get cpfField() { return this.selectPageElement(\".field.cpf\"); }\r\n    get emailField() { return this.selectPageElement(\".field.email\"); }\r\n    get foneField() { return this.selectPageElement(\".field.fone\"); }\r\n\r\n    get nomeInput() { return this.selectPageElement(\".field.nome input\"); }\r\n    get cpfInput() { return this.selectPageElement(\".field.cpf input\"); }\r\n    get emailInput() { return this.selectPageElement(\".field.email input\"); }\r\n    get foneInput() { return this.selectPageElement(\".field.fone input\"); }\r\n\r\n    get nomeErrorView() { return this.selectPageElement(\".field.nome .error\"); }\r\n    get cpfErrorView() { return this.selectPageElement(\".field.cpf .error\"); }\r\n    get emailErrorView() { return this.selectPageElement(\".field.email .error\"); }\r\n    get foneErrorView() { return this.selectPageElement(\".field.fone .error\"); }\r\n\r\n    get submitButton() { return this.selectPageElement(\".submit-button\"); }\r\n    get cancelButton() { return this.selectPageElement(\".cancel-button\"); }\r\n\r\n    selectPageElement(selector) { return document.querySelector('.form-page ' + selector); }\r\n\r\n}\n\n//# sourceURL=webpack://teste-raks/./src/controllers/form.controller.js?");

/***/ }),

/***/ "./src/controllers/list.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/list.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListController)\n/* harmony export */ });\n/* harmony import */ var _masks_masks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../masks/masks */ \"./src/masks/masks.js\");\n\r\n\r\n\r\nclass ListController {\r\n\r\n    constructor(routerService, dataService) {\r\n        this.routerService = routerService;\r\n        this.dataService = dataService;\r\n        this.addUserButton.addEventListener('click', (e) => {\r\n            routerService.navigateToForm(null);\r\n        });\r\n        this.loadUsers();\r\n    }\r\n\r\n    async loadUsers() {\r\n        // obtém o elemento da lista do DOM\r\n        let listElement = this.listElement;\r\n        // remove os items da lista\r\n        listElement.innerHTML = '';\r\n\r\n        // carrega os dados da api\r\n        let users = await this.dataService.getUsers();\r\n\r\n        // para cada usuário adiciona um item na lista no DOM.\r\n        for (let user of users) {\r\n            this.createItemHtml(user, listElement);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Cria item na lista de usuários do dom.\r\n     * @param {*} item \r\n     */\r\n    createItemHtml(item, parent) {\r\n        let itemDiv = this.createDiv(['item'], null, parent);\r\n        this.createDiv(['nome'], item.nome, itemDiv);\r\n        this.createDiv(['cpf'], 'CPF: ' + (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.cpfMask)(item.cpf), itemDiv);\r\n        this.createDiv(['email'], (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.emailMask)(item.email), itemDiv);\r\n        this.createDiv(['fone'], (0,_masks_masks__WEBPACK_IMPORTED_MODULE_0__.foneMask)(item.fone), itemDiv);\r\n        this.createButton(['icon-button', 'edit'], ['icone', 'fas', 'fa-pen', 'fa-xs'], (event) => {\r\n            this.editeUser(item);\r\n        }, itemDiv);\r\n\r\n        this.createButton(['icon-button', 'delete'], ['icone', 'fas', 'fa-trash', 'fa-xs'], (event) => {\r\n            this.removeUser(item)\r\n        }, itemDiv);\r\n    }\r\n\r\n    async removeUser(user) {\r\n        await this.dataService.removeUser(user.id);\r\n        await this.loadUsers();\r\n    }\r\n\r\n    editeUser(user) {\r\n        this.routerService.navigateToForm(user);\r\n    }\r\n\r\n    createDiv(classes, label, parent) {\r\n        let div = document.createElement('div');\r\n        if (classes) for (let c of classes) div.classList.add(c);\r\n        if (label) div.innerHTML = label;\r\n        if (parent) parent.appendChild(div);\r\n        return div;\r\n    }\r\n    createButton(classes, icon, clickFn, parent) {\r\n        let button = document.createElement('button');\r\n        if (classes) for (let c of classes) button.classList.add(c);\r\n        if (parent) parent.appendChild(button);\r\n        if (icon) this.createDiv(icon, null, button);\r\n        if (clickFn) button.addEventListener('click', clickFn);\r\n    }\r\n\r\n\r\n    get listElement() {\r\n        return this.selectPageElement('.list');\r\n    }\r\n\r\n    get addUserButton() {\r\n        return this.selectPageElement('.action.add-user');\r\n    }\r\n\r\n    selectPageElement(selector) {\r\n        return document.querySelector(selector);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://teste-raks/./src/controllers/list.controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_form_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/form.controller */ \"./src/controllers/form.controller.js\");\n/* harmony import */ var _controllers_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/list.controller */ \"./src/controllers/list.controller.js\");\n/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/router.service */ \"./src/services/router.service.js\");\n/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ \"./src/services/data.service.js\");\n/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/storage.service */ \"./src/services/storage.service.js\");\n/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/theme.scss */ \"./src/styles/theme.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// export default { init };\r\nwindow.onload = () => {\r\n    let routerService = new _services_router_service__WEBPACK_IMPORTED_MODULE_2__.default();\r\n    let storageService = new _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.default();\r\n    let dataService = new _services_data_service__WEBPACK_IMPORTED_MODULE_3__.default(storageService);\r\n    let formController = new _controllers_form_controller__WEBPACK_IMPORTED_MODULE_0__.default(routerService, dataService);\r\n    let listController = new _controllers_list_controller__WEBPACK_IMPORTED_MODULE_1__.default(routerService, dataService);\r\n    routerService.formController = formController;\r\n    routerService.listController = listController;\r\n    routerService.navigateToList();\r\n}\r\n\n\n//# sourceURL=webpack://teste-raks/./src/index.js?");

/***/ }),

/***/ "./src/masks/masks.js":
/*!****************************!*\
  !*** ./src/masks/masks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foneMask\": () => (/* binding */ foneMask),\n/* harmony export */   \"cpfMask\": () => (/* binding */ cpfMask),\n/* harmony export */   \"nomeMask\": () => (/* binding */ nomeMask),\n/* harmony export */   \"emailMask\": () => (/* binding */ emailMask)\n/* harmony export */ });\nfunction foneMask(value) {\r\n    if (!value) return '';\r\n    let digits = value.replace(/\\D/g, '');\r\n    digits = digits.slice(0, 11);\r\n    if (digits.length >= 10) {\r\n        return digits.replace(/^(\\d{2})(\\d{5})(\\d*)$/, '($1) $2-$3');\r\n    }\r\n    else if (digits.length > 6) {\r\n        return digits.replace(/^(\\d{2})(\\d{4})(\\d*)$/, '($1) $2-$3');\r\n    }\r\n    else if (digits.length > 2) {\r\n        return digits.replace(/^(\\d{2})(\\d*)$/, '($1) $2');\r\n    }\r\n    else {\r\n        return digits.replace(/^(\\d*)$/, '($1');\r\n    }\r\n}\r\n\r\nfunction cpfMask(value) {\r\n    if (!value) return '';\r\n    let digits = value.replace(/\\D/g, '');\r\n    if (digits.length >= 9) {\r\n        return digits.replace(/^(\\d{3})(\\d{3})(\\d{3})(\\d*)$/, '$1.$2.$3-$4');\r\n    }\r\n    else if (digits.length > 6) {\r\n        return digits.replace(/^(\\d{3})(\\d{3})(\\d*)$/, '$1.$2.$3');\r\n    }\r\n    else if (digits.length > 2) {\r\n        return digits.replace(/^(\\d{3})(\\d*)$/, '$1.$2');\r\n    } else {\r\n        return digits.replace(/^(\\d*)$/, '$1');\r\n    }\r\n}\r\n\r\nfunction nomeMask(value) {   \r\n    if (!value) return '';        \r\n    return value.replace(/([^a-zA-Zà-úÀ-Ú\\s0-9])+/g, '');\r\n}\r\n\r\nfunction emailMask(value) { \r\n    value = (value||'').replace(/(\\s)/g, '');\r\n    if (!value) return '';\r\n    value = value.replace(/[\\s]*/g, '');\r\n    value = value.split(' ').join('');\r\n    if (!value) return '';    \r\n    value = value.replace(/^[^a-zA-Z_\\.@]+/g, '');\r\n    value = value.replace(/[^a-zA-Z0-9_\\.@]+/g, '');\r\n    value = value.replace(/(@^[^a-zA-Z_]+|@+)/g, '@');\r\n    value = value.replace(/(\\.[^a-zA-Z_]+|\\.+)/g, '.');\r\n    let atIdx = value.indexOf('@');\r\n    if (atIdx > -1) {\r\n        let p1 = value.slice(0, atIdx);\r\n        let p2 = value.slice(atIdx).replace(/@/g, '');\r\n        value = p1 + '@' + p2;\r\n    }\r\n    return value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://teste-raks/./src/masks/masks.js?");

/***/ }),

/***/ "./src/services/data.service.js":
/*!**************************************!*\
  !*** ./src/services/data.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataService)\n/* harmony export */ });\nclass DataService {\r\n\r\n    constructor(storageService) {\r\n        this.storageService = storageService;\r\n    }\r\n\r\n    async httpGet(url) {\r\n        var xmlHttp = new XMLHttpRequest();\r\n        xmlHttp.open(\"GET\", url, false);\r\n        xmlHttp.send(null);\r\n        let dados = JSON.parse(xmlHttp.responseText);\r\n        return dados;\r\n    }\r\n\r\n    async getUsers() {\r\n        // se não baixou ainda os dados de usuários, faz a requisição.\r\n        if (!this.storageService.databaseInitialized) {\r\n            console.log('Buscando dados no servidor...');\r\n            let users = await this.httpGet('https://private-21e8de-rafaellucio.apiary-mock.com/users');\r\n            //salva os usuários na base local;\r\n            for (let user of users) {\r\n                this.storageService.saveUser({\r\n                    nome: user.name,\r\n                    cpf: user.cpf,\r\n                    email: user.email,\r\n                    fone: user.phone\r\n                });\r\n            }\r\n            this.storageService.databaseInitialized = true;\r\n            console.log('Concluído!');\r\n        }\r\n        return this.storageService.getUsers();\r\n    }\r\n\r\n    async saveUser(user) {\r\n        return this.storageService.saveUser(user);\r\n    }\r\n\r\n    async removeUser(userId) {\r\n        return this.storageService.removeUser(userId);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://teste-raks/./src/services/data.service.js?");

/***/ }),

/***/ "./src/services/router.service.js":
/*!****************************************!*\
  !*** ./src/services/router.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RouterService)\n/* harmony export */ });\nclass RouterService {\r\n\r\n    constructor() {\r\n\r\n    }\r\n\r\n    set listController (listController) {\r\n        this._listController = listController;\r\n    }\r\n\r\n    set formController (formController) {\r\n        this._formController = formController;\r\n    }\r\n\r\n    navigateToForm(user) {\r\n        this._formController.setUser(user);\r\n        this.hideAllPages();\r\n        this.setPageVisibility(this.formPage, true);\r\n    }\r\n\r\n    navigateToList(reloadData) {\r\n        if (reloadData) this._listController.loadUsers();\r\n        this.hideAllPages();\r\n        this.setPageVisibility(this.listPage, true);\r\n    }\r\n\r\n    hideAllPages() {\r\n        this.setPageVisibility(this.formPage, false);\r\n        this.setPageVisibility(this.listPage, false);\r\n    }\r\n\r\n    setPageVisibility(page, show) {\r\n        page.classList.add(show ? 'visible' : 'hidden');\r\n        page.classList.remove(show ? 'hidden' : 'visible');\r\n    }\r\n\r\n    get formPage() { return document.querySelector(\".page.form-page\"); }\r\n\r\n    get listPage() { return document.querySelector(\".page.list-page\"); }\r\n}\n\n//# sourceURL=webpack://teste-raks/./src/services/router.service.js?");

/***/ }),

/***/ "./src/services/storage.service.js":
/*!*****************************************!*\
  !*** ./src/services/storage.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StorageService)\n/* harmony export */ });\nclass StorageService {\r\n\r\n    constructor() {\r\n\r\n    }\r\n\r\n\r\n    setValue(key, data) {\r\n        let str = data ? JSON.stringify(data) : data;\r\n        localStorage.setItem(key, str);\r\n    }\r\n\r\n    getValue(key) {\r\n        let str = localStorage.getItem(key);\r\n        let data = str ? JSON.parse(str) : str;\r\n        return data;\r\n    }\r\n\r\n    remove(key) {\r\n        return localStorage.removeItem(key);\r\n    }\r\n\r\n    get userId() {\r\n        let id = this.getValue('userId') || 1;\r\n        this.setValue('userId', id + 1);\r\n        return id;\r\n    }\r\n\r\n    get databaseInitialized() {\r\n        return this.getValue('inicialized');\r\n    }\r\n\r\n    set databaseInitialized(initialized) {\r\n        this.setValue('inicialized', initialized);\r\n    }\r\n\r\n    getUsers() {\r\n        return (this.getValue('users') || []);\r\n    }\r\n\r\n    getUser(userId) {\r\n        return this.getUsers().find(user => user.id == userId);\r\n    }\r\n\r\n    saveUser(user) {\r\n        let users = this.getUsers();\r\n        // se o usuário não possui id cria um novo id e adiciona o usuário na lista de usuários.\r\n        if (!user.id) {\r\n            user.id = this.userId;\r\n            users.push(user);\r\n        }\r\n        else {\r\n            // se não encontrou o usuário salva então salva o usuário\r\n            let _user = users.find(_user => _user.id == user.id);\r\n            if (!_user) {\r\n                users.push(user);\r\n            }\r\n            // se encontrou o usuário na lista, atualiza os dados do usuário salvo.\r\n            else {\r\n                _user.nome = user.nome;\r\n                _user.cpf = user.cpf;\r\n                _user.email = user.email;\r\n                _user.fone = user.fone;\r\n            }\r\n        }\r\n        // salva a lista de usuários.\r\n        this.setValue('users', users);\r\n        // retorna o usuário salvo.\r\n        return user;\r\n    }\r\n\r\n    removeUser(userId) {\r\n        let removed = false;\r\n        let users = this.getUsers().filter(user => {\r\n            if (user.id != userId) {\r\n                removed = true;\r\n                return true;\r\n            } else {\r\n                return false;\r\n            }\r\n        });\r\n        this.setValue('users', users);\r\n        return removed;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://teste-raks/./src/services/storage.service.js?");

/***/ }),

/***/ "./src/validators/validators.js":
/*!**************************************!*\
  !*** ./src/validators/validators.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateMandatory\": () => (/* binding */ validateMandatory),\n/* harmony export */   \"validateExactLength\": () => (/* binding */ validateExactLength),\n/* harmony export */   \"validateMinLenth\": () => (/* binding */ validateMinLenth),\n/* harmony export */   \"validatMaxLength\": () => (/* binding */ validatMaxLength),\n/* harmony export */   \"validateLengthRange\": () => (/* binding */ validateLengthRange),\n/* harmony export */   \"validateCPF\": () => (/* binding */ validateCPF),\n/* harmony export */   \"validateNome\": () => (/* binding */ validateNome),\n/* harmony export */   \"validateEmail\": () => (/* binding */ validateEmail),\n/* harmony export */   \"validateFone\": () => (/* binding */ validateFone)\n/* harmony export */ });\n\r\nfunction validateMandatory(value) {\r\n    return value ? null : 'Campo obrigatório.';\r\n}\r\nfunction validateExactLength(value, len) {\r\n    return value?.length < len ? 'O campo deve conter exatamente ' + len + ' caracteres ou mais.' : null;\r\n}\r\nfunction validateMinLenth(value, len) {\r\n    return value?.length < len ? 'O campo deve conter ' + len + ' caracteres ou mais.' : null;\r\n}\r\nfunction validatMaxLength(value, len) {\r\n    return value?.length > len ? 'O campo deve conter ao menor ' + len + ' caracteres.' : null;\r\n}\r\nfunction validateLengthRange(value, minLen, maxLen) {\r\n    return validateMinLenth(value, minLen) || validatMaxLength(value, maxLen);\r\n}\r\nfunction validateCPF(value) {\r\n    let error = validateMandatory(value);\r\n    if (error) return error;\r\n    value = value.replace(/\\D/g, '');\r\n    let re = /^(\\d{3}\\.d{3}\\.d{3}-\\.d{2}|\\d{11})$/;\r\n    let valid = re.test(String(value).toLowerCase());\r\n    if (!valid) return 'Formato de CPF inválido.';\r\n    error = validateExactLength(11);\r\n    if (error) return error;\r\n    let soma;\r\n    let resto;\r\n    soma = 0;\r\n    if (value == \"00000000000\") return 'CPF inválido.';\r\n    for (let i = 1; i <= 9; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (11 - i);\r\n    resto = (soma * 10) % 11;\r\n    if ((resto == 10) || (resto == 11)) resto = 0;\r\n    if (resto != parseInt(value.substring(9, 10))) return 'CPF inválido.';\r\n    soma = 0;\r\n    for (let i = 1; i <= 10; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);\r\n    resto = (soma * 10) % 11;\r\n    if ((resto == 10) || (resto == 11)) resto = 0;\r\n    if (resto != parseInt(value.substring(10, 11))) return 'CPF inválido.';\r\n    return null;\r\n}\r\nfunction validateNome(value) {\r\n    let error = validateMandatory(value);\r\n    if (error) return error;\r\n    error = validateLengthRange(value, 3, 60);\r\n    if (error) return error;\r\n    let re = /^[a-zA-Zà-úÀ-Ú0-9]+(\\s+[a-zA-Zà-úÀ-Ú0-9]+)+$/;\r\n    let valid = re.test(String(value).toLowerCase());\r\n    return valid ? null : 'Nome inválido.';\r\n}\r\nfunction validateEmail(value) {\r\n    let error = validateMandatory(value);\r\n    if (error) return error;\r\n    error = validateLengthRange(value, 3, 60);\r\n    if (error) return error;\r\n    let re = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n    let valid = re.test(String(value).toLowerCase());\r\n    return valid ? null : 'Email inválido.';\r\n}\r\nfunction validateFone(value) {\r\n    let error = validateMandatory(value);    \r\n    if (error) return error;    \r\n    let re = /(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})/;\r\n    let valid = re.test(String(value).toLowerCase());\r\n    return valid ? null : 'Telefone inválido.';\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://teste-raks/./src/validators/validators.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/theme.scss");
/******/ 	
/******/ })()
;