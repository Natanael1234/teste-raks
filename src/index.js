import FormController from './controllers/form.controller';
import ListController from './controllers/list.controller';
import RouterService from './services/router.service';
import DataService from './services/data.service';
import StorageService from './services/storage.service';

import './styles/theme.scss';

// export default { init };
window.onload = () => {
    let routerService = new RouterService();
    let storageService = new StorageService();
    let dataService = new DataService(storageService);
    let formController = new FormController(routerService, dataService);
    let listController = new ListController(routerService, dataService);
    routerService.formController = formController;
    routerService.listController = listController;
    routerService.navigateToList();
}
