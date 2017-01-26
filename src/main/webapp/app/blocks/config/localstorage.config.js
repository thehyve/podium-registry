(function() {
    'use strict';

    angular
        .module('PodiumRegistryApp')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider'];

    function localStorageConfig($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('podium-');
    }
})();
