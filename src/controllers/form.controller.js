import { cpfMask, foneMask, nomeMask, emailMask } from '../masks/masks';
import { validateCPF, validateEmail, validateNome, validateFone } from '../validators/validators';

export default class FormController {

    constructor(router, dataService) {
        this.userId = null;
        this.router = router;
        this.dataService = dataService;        
        // máscara e validação do nome        
        this.setFieldEvents(
            this.nomeInput,
            (event) => event.target.value = nomeMask(event.target.value),
            (event) => {
                event.target.value = nomeMask(event.target.value);
                this.validateNome();
            }
        );
        // máscara e validação do cpf        
        this.setFieldEvents(
            this.cpfInput,
            (event) => event.target.value = cpfMask(event.target.value),
            (event) => {
                event.target.value = cpfMask(event.target.value);
                this.validateCPF();
            }
        );
        // máscara e validação do email                
        this.setFieldEvents(
            this.emailInput,
            (event) => event.target.value = emailMask(event.target.value),
            (event) => {
                event.target.value = emailMask(event.target.value);
                this.validateEmail();
            }
        );
        // máscara e validação do fone;        
        this.setFieldEvents(
            this.foneInput,
            (event) => event.target.value = foneMask(event.target.value),
            (event) => {
                event.target.value = foneMask(event.target.value);
                this.validateFone();
            }
        );
        // this.submitButton.disabled = true;
        this.submitButton.addEventListener('click', (e)=>{
            this.onSubmit(e);
        });
        this.cancelButton.addEventListener('click', async (e)=>{            
            this.router.navigateToList();
        });
    }

    /**
     * 
     * @param {*} input 
     * @param {*} maskFn 
     * @param {*} validationFn 
     */
    setFieldEvents(input, maskFn, validationFn) {
        input.addEventListener('blur', validationFn);
        input.addEventListener('keydown', maskFn);
        input.addEventListener('keyup', maskFn);
    }

    navigateToList() {
        router.navigateToList();
    }

    get formData() {
        let data = {
            id: this.userId,
            nome: this.nomeInput.value,
            cpf: this.cpfInput.value,
            email: this.emailInput.value,
            fone: this.foneInput.value
        };
        return data;
    }

    validateNome() {
        this.nomeError = validateNome(this.nomeInput.value);
        this.updateSubmitButtonState();
    }
    validateCPF() {
        this.cpfError = validateCPF(this.cpfInput.value);
        this.updateSubmitButtonState();
    }
    validateEmail() {
        this.emailError = validateEmail(this.emailInput.value);
        this.updateSubmitButtonState();
    }
    validateFone() {
        this.foneError = validateFone(this.foneInput.value);
        this.updateSubmitButtonState();
    }

    setUser(user) {
        this.userId = user ? user.id : null;
        this.nomeInput.value = nomeMask(user?.nome || '');
        this.cpfInput.value = cpfMask(user?.cpf || '');
        this.emailInput.value = emailMask(user?.email || '');
        this.foneInput.value = foneMask(user?.fone || '');
        if (user) {
            this.validateNome();
            this.validateCPF();
            this.validateEmail();
            this.validateFone();
            this.updateSubmitButtonState();
        } else {
            this._nomeError = '';
            this._cpfError = '';
            this._emailError = '';
            this._foneError = '';
            this.nomeField.classList.remove('invalida');
            this.cpfField.classList.remove('invalida');
            this.emailField.classList.remove('invalida');
            this.foneField.classList.remove('invalida');
            this.nomeErrorView.innerHTML = '';
            this.cpfErrorView.innerHTML = '';
            this.foneErrorView.innerHTML = '';
            this.emailErrorView.innerHTML = '';
            this.submitButton.disabled = true;
        }
    }

    updateSubmitButtonState() {
        this.submitButton.disabled = !this.validForm;
    }

    /** Verifica se o formulário é válido. */
    get validForm() {
        if (this._nomeError) {
            return false;
        } else if (this._cpfError) {
            return false;
        } else if (this._emailError) {
            return false;
        } else if (this._foneError) {
            return false;
        } else {
            return true;
        }
    }

    /** Envia o formulário. */
    async onSubmit(event) {
        event.preventDefault();
        if (this.validForm) {
            let formdata = this.formData;
            await this.dataService.saveUser(formdata);
            this.router.navigateToList(true);
        } else {
            alert('Formulário inválido!');
        }
    }

    set nomeError(message) {
        this._nomeError = message;
        this.setFieldState(this.nomeField, this.nomeErrorView, message);
    }
    set cpfError(message) {
        this._cpfError = message;
        this.setFieldState(this.cpfField, this.cpfErrorView, message);
    }
    set emailError(message) {
        this._emailError = message;
        this.setFieldState(this.emailField, this.emailErrorView, message);
    }
    set foneError(message) {
        this._foneError = message;
        this.setFieldState(this.foneField, this.foneErrorView, message);
    }

    get nomeError() { return this._nomeError; }
    get cpfError() { return this._cpfError; }
    get emailError() { return this._emailError; }
    get foneError() { return this._foneError; }

    setFieldState(fieldElelment, errorElement, message) {
        if (message) {
            fieldElelment.classList.add('invalid');
            errorElement.innerHTML = message;
        }
        else {
            fieldElelment.classList.remove('invalid');
            errorElement.innerHTML = '';
        }
    }

    get form() { return this.selectPageElement("form"); }

    get nomeField() { return this.selectPageElement(".field.nome"); }
    get cpfField() { return this.selectPageElement(".field.cpf"); }
    get emailField() { return this.selectPageElement(".field.email"); }
    get foneField() { return this.selectPageElement(".field.fone"); }

    get nomeInput() { return this.selectPageElement(".field.nome input"); }
    get cpfInput() { return this.selectPageElement(".field.cpf input"); }
    get emailInput() { return this.selectPageElement(".field.email input"); }
    get foneInput() { return this.selectPageElement(".field.fone input"); }

    get nomeErrorView() { return this.selectPageElement(".field.nome .error"); }
    get cpfErrorView() { return this.selectPageElement(".field.cpf .error"); }
    get emailErrorView() { return this.selectPageElement(".field.email .error"); }
    get foneErrorView() { return this.selectPageElement(".field.fone .error"); }

    get submitButton() { return this.selectPageElement(".submit-button"); }
    get cancelButton() { return this.selectPageElement(".cancel-button"); }

    selectPageElement(selector) { return document.querySelector('.form-page ' + selector); }

}