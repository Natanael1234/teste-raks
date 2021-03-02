export default class DataService {

    constructor(storageService) {
        this.storageService = storageService;
    }

    async httpGet(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        let dados = JSON.parse(xmlHttp.responseText);
        return dados;
    }

    async getUsers() {
        // se não baixou ainda os dados de usuários, faz a requisição.
        if (!this.storageService.databaseInitialized) {
            console.log('Buscando dados no servidor...');
            let users = await this.httpGet('https://private-21e8de-rafaellucio.apiary-mock.com/users');
            //salva os usuários na base local;
            for (let user of users) {
                this.storageService.saveUser({
                    nome: user.name,
                    cpf: user.cpf,
                    email: user.email,
                    fone: user.phone
                });
            }
            this.storageService.databaseInitialized = true;
            console.log('Concluído!');
        }
        return this.storageService.getUsers();
    }

    async saveUser(user) {
        return this.storageService.saveUser(user);
    }

    async removeUser(userId) {
        return this.storageService.removeUser(userId);
    }

}