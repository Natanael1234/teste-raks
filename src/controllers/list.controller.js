import { cpfMask, emailMask, foneMask } from "../masks/masks";


export default class ListController {

    constructor(routerService, dataService) {
        this.routerService = routerService;
        this.dataService = dataService;
        this.addUserButton.addEventListener('click', (e) => {
            routerService.navigateToForm(null);
        });
        this.loadUsers();
    }

    async loadUsers() {
        // obtém o elemento da lista do DOM
        let listElement = this.listElement;
        // remove os items da lista
        listElement.innerHTML = '';

        // carrega os dados da api
        let users = await this.dataService.getUsers();

        // para cada usuário adiciona um item na lista no DOM.
        for (let user of users) {
            this.createItemHtml(user, listElement);
        }
    }

    /**
     * Cria item na lista de usuários do dom.
     * @param {*} item 
     */
    createItemHtml(item, parent) {
        let itemDiv = this.createDiv(['item'], null, parent);
        this.createDiv(['nome'], item.nome, itemDiv);
        this.createDiv(['cpf'], 'CPF: ' + cpfMask(item.cpf), itemDiv);
        this.createDiv(['email'], emailMask(item.email), itemDiv);
        this.createDiv(['fone'], foneMask(item.fone), itemDiv);
        this.createButton(['icon-button', 'edit'], ['icone', 'fas', 'fa-pen', 'fa-xs'], (event) => {
            this.editeUser(item);
        }, itemDiv);

        this.createButton(['icon-button', 'delete'], ['icone', 'fas', 'fa-trash', 'fa-xs'], (event) => {
            this.removeUser(item)
        }, itemDiv);
    }

    async removeUser(user) {
        await this.dataService.removeUser(user.id);
        await this.loadUsers();
    }

    editeUser(user) {
        this.routerService.navigateToForm(user);
    }

    createDiv(classes, label, parent) {
        let div = document.createElement('div');
        if (classes) for (let c of classes) div.classList.add(c);
        if (label) div.innerHTML = label;
        if (parent) parent.appendChild(div);
        return div;
    }
    createButton(classes, icon, clickFn, parent) {
        let button = document.createElement('button');
        if (classes) for (let c of classes) button.classList.add(c);
        if (parent) parent.appendChild(button);
        if (icon) this.createDiv(icon, null, button);
        if (clickFn) button.addEventListener('click', clickFn);
    }


    get listElement() {
        return this.selectPageElement('.list');
    }

    get addUserButton() {
        return this.selectPageElement('.action.add-user');
    }

    selectPageElement(selector) {
        return document.querySelector(selector);
    }

}