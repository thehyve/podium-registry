(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .factory('PodiumMetricsService', PodiumMetricsService);

    PodiumMetricsService.$inject = ['$rootScope', '$http'];

    function PodiumMetricsService ($rootScope, $http) {
        var service = {
            getMetrics: getMetrics,
            threadDump: threadDump
        };

        return service;

        function getMetrics () {
            return $http.get('management/podium/metrics').then(function (response) {
                return response.data;
            });
        }

        function threadDump () {
            return $http.get('management/dump').then(function (response) {
                return response.data;
            });
        }
    }
})();
