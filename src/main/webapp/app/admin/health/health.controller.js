(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .controller('PodiumHealthCheckController', PodiumHealthCheckController);

    PodiumHealthCheckController.$inject = ['PodiumHealthService', '$uibModal'];

    function PodiumHealthCheckController (PodiumHealthService, $uibModal) {
        var vm = this;

        vm.getLabelClass = getLabelClass;
        vm.refresh = refresh;
        vm.updatingHealth = true;
        vm.showHealth = showHealth;
        vm.baseName = PodiumHealthService.getBaseName;
        vm.subSystemName = PodiumHealthService.getSubSystemName;

        vm.refresh();

        function getLabelClass (statusState) {
            if (statusState === 'UP') {
                return 'label-success';
            } else {
                return 'label-danger';
            }
        }

        function refresh () {
            vm.updatingHealth = true;
            PodiumHealthService.checkHealth().then(function (response) {
                vm.healthData = PodiumHealthService.transformHealthData(response);
                vm.updatingHealth = false;
            }, function (response) {
                vm.healthData =  PodiumHealthService.transformHealthData(response.data);
                vm.updatingHealth = false;
            });
        }

        function showHealth (health) {
            $uibModal.open({
                templateUrl: 'app/admin/health/health.modal.html',
                controller: 'HealthModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentHealth: function() {
                        return health;
                    },
                    baseName: function() {
                        return vm.baseName;
                    },
                    subSystemName: function() {
                        return vm.subSystemName;
                    }

                }
            });
        }

    }
})();
