export default class StorageService {

    constructor() {

    }


    setValue(key, data) {
        let str = data ? JSON.stringify(data) : data;
        localStorage.setItem(key, str);
    }

    getValue(key) {
        let str = localStorage.getItem(key);
        let data = str ? JSON.parse(str) : str;
        return data;
    }

    remove(key) {
        return localStorage.removeItem(key);
    }

    get userId() {
        let id = this.getValue('userId') || 1;
        this.setValue('userId', id + 1);
        return id;
    }

    get databaseInitialized() {
        return this.getValue('inicialized');
    }

    set databaseInitialized(initialized) {
        this.setValue('inicialized', initialized);
    }

    getUsers() {
        return (this.getValue('users') || []);
    }

    getUser(userId) {
        return this.getUsers().find(user => user.id == userId);
    }

    saveUser(user) {
        let users = this.getUsers();
        // se o usuário não possui id cria um novo id e adiciona o usuário na lista de usuários.
        if (!user.id) {
            user.id = this.userId;
            users.push(user);
        }
        else {
            // se não encontrou o usuário salva então salva o usuário
            let _user = users.find(_user => _user.id == user.id);
            if (!_user) {
                users.push(user);
            }
            // se encontrou o usuário na lista, atualiza os dados do usuário salvo.
            else {
                _user.nome = user.nome;
                _user.cpf = user.cpf;
                _user.email = user.email;
                _user.fone = user.fone;
            }
        }
        // salva a lista de usuários.
        this.setValue('users', users);
        // retorna o usuário salvo.
        return user;
    }

    removeUser(userId) {
        let removed = false;
        let users = this.getUsers().filter(user => {
            if (user.id != userId) {
                removed = true;
                return true;
            } else {
                return false;
            }
        });
        this.setValue('users', users);
        return removed;
    }

}