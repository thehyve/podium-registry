(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('podium-metrics', {
            parent: 'admin',
            url: '/metrics',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Application Metrics'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/metrics/metrics.html',
                    controller: 'PodiumMetricsMonitoringController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
