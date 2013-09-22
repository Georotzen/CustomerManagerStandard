﻿customersManager.customersApp
    .factory('dataService', ['config', 'customersService', 'customersBreezeService',
    function (config, customersService, customersBreezeService) {

        return (config.useBreeze) ? customersBreezeService : customersService;

}]);

