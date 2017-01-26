(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'EurekaStatusService', 'ApplicationsService', 'PodiumHealthService'];

    function HomeController ($scope, Principal, LoginService, $state, EurekaStatusService, ApplicationsService, PodiumHealthService) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.populateDashboard = populateDashboard;
        vm.baseName = PodiumHealthService.getBaseName;
        vm.subSystemName = PodiumHealthService.getSubSystemName;

        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
                if (account == null || !vm.isAuthenticated()) {
                    vm.login();
                } else {
                    vm.populateDashboard();
                }
            });
        }

        function populateDashboard() {
            EurekaStatusService.get().$promise.then(function(data) {
                vm.status = data.status;
            });

            ApplicationsService.get().$promise.then(function(data) {
                vm.appInstances = [];
                angular.forEach(data.applications, function (app) {
                    angular.forEach(app.instances, function (inst) {
                        inst.name = app.name;
                        vm.appInstances.push(inst);
                    });
                });
            });

            PodiumHealthService.checkHealth().then(function (response) {
                vm.healthData = PodiumHealthService.transformHealthData(response);
                vm.updatingHealth = false;
            }, function (response) {
                vm.healthData =  PodiumHealthService.transformHealthData(response.data);
                vm.updatingHealth = false;
            });
        }
    }
})();
