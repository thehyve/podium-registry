(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http'];

    function ConfigService ($http) {

        var config = {
            getConfig: getConfig
        };

        return config;

        function getConfig(application, profile, label) {
            return $http.get('config/' + label + '/' + application + '-' + profile + '.yml').then(function (response) {
                return response.data;
            });
        }

    }
})();
