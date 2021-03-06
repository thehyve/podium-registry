(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .factory('ReplicasService', ReplicasService);

    ReplicasService.$inject = ['$resource'];

    function ReplicasService ($resource) {
        var service = $resource('api/eureka/replicas', {}, {
            'get': { method: 'GET', isArray: true}
        });

        return service;
    }
})();
