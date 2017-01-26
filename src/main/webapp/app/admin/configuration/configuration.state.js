(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('podium-configuration', {
            parent: 'admin',
            url: '/configuration',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Configuration'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/configuration/configuration.html',
                    controller: 'PodiumConfigurationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
