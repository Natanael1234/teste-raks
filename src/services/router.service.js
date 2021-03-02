export default class RouterService {

    constructor() {

    }

    set listController (listController) {
        this._listController = listController;
    }

    set formController (formController) {
        this._formController = formController;
    }

    navigateToForm(user) {
        this._formController.setUser(user);
        this.hideAllPages();
        this.setPageVisibility(this.formPage, true);
    }

    navigateToList(reloadData) {
        if (reloadData) this._listController.loadUsers();
        this.hideAllPages();
        this.setPageVisibility(this.listPage, true);
    }

    hideAllPages() {
        this.setPageVisibility(this.formPage, false);
        this.setPageVisibility(this.listPage, false);
    }

    setPageVisibility(page, show) {
        page.classList.add(show ? 'visible' : 'hidden');
        page.classList.remove(show ? 'hidden' : 'visible');
    }

    get formPage() { return document.querySelector(".page.form-page"); }

    get listPage() { return document.querySelector(".page.list-page"); }
}