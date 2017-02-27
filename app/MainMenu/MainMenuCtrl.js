'use strict';

angular.module('myApp')
    .service('mainMenu', function () { console.log('hello!'); })
    .component('mainTop', {
        templateUrl: 'MainMenu/MainMenu.html',
        controller: function(mainMenu) {}
    })
    .config(function($stateProvider) {
    $stateProvider
        .state({
            name: 'list',
            url: '/list',
            templateUrl: 'PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl as vm'
        })
        .state({
            name: 'createNewPokemon',
            url: '/new',
            templateUrl: 'CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl as vm'
        })
        .state({
            name: 'myAccount',
            url: '/myaccount',
            templateUrl: 'MyAccount/MyAccount.html',
            controller: 'MyAccountCtrl as vm'
        })
    });