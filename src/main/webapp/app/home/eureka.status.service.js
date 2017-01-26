(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .factory('EurekaStatusService', EurekaStatusService);

    EurekaStatusService.$inject = ['$resource'];

    function EurekaStatusService ($resource) {
        var service = $resource('api/eureka/status', {}, {
            'get': { method: 'GET'}
        });

        return service;
    }
})();
