(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .controller('PodiumConfigurationController', PodiumConfigurationController);

    PodiumConfigurationController.$inject = ['$filter','PodiumConfigurationService'];

    function PodiumConfigurationController (filter,PodiumConfigurationService) {
        var vm = this;

        vm.allConfiguration = null;
        vm.configuration = null;

        PodiumConfigurationService.get().then(function(configuration) {
            vm.configuration = configuration;
        });
        PodiumConfigurationService.getEnv().then(function (configuration) {
            vm.allConfiguration = configuration;
        });
    }
})();
