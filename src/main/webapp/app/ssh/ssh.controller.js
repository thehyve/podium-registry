(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .controller('SshController', SshController);

    SshController.$inject = ['SshService'];

    function SshController(SshService) {
        var vm = this;
        vm.showMore = true;

        SshService.getSshPublicKey().then(function (response) {
            vm.data = response;
        });
    }
})();
