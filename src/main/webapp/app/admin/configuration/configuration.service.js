(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .factory('PodiumConfigurationService', PodiumConfigurationService);

    PodiumConfigurationService.$inject = ['$filter', '$http'];

    function PodiumConfigurationService ($filter, $http) {
        var service = {
            get: get,
            getEnv: getEnv
        };

        return service;

        function get () {
            return $http.get('management/configprops').then(getConfigPropsComplete);

            function getConfigPropsComplete (response) {
                var properties = [];
                angular.forEach(response.data, function (data) {
                    properties.push(data);
                });
                var orderBy = $filter('orderBy');
                return orderBy(properties, 'prefix');
            }
        }

        function getEnv () {
            return $http.get('management/env').then(getEnvComplete);

            function getEnvComplete (response) {
                var properties = {};
                angular.forEach(response.data, function (val,key) {
                    var vals = [];
                    angular.forEach(val, function (v,k) {
                        vals.push({ key:k, val:v });
                    });
                    properties[key] = vals;
                });
                return properties;
            }
        }
    }
})();
