(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('podium-health', {
            parent: 'admin',
            url: '/health',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Health Checks'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/health/health.html',
                    controller: 'PodiumHealthCheckController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
