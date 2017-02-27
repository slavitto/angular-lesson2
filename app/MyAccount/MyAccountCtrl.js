'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function() {

    var vm = this;
    vm.newUser = {};
    vm.addPokemon = function(myAccount) {
        console.log(myAccount);
        vm.newUser = {};
        vm.myAccount.$setPristine();
    };

});