describe('Pokemon app testing', function() {

    it('should highlight a menu button', function() {
        browser.get('http://localhost:8000');
        element(by.css('[data-ui-sref="list"]')).click();
        expect(element(by.css('.active')).isPresent()).toBe(true);
    });

    it('should open myaccount', function() {
        browser.get('http://localhost:8000');
        element(by.css('[data-ui-sref="myAccount"]')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/#!/myaccount");
    });

    it('should enable submit button', function() {
        browser.get('http://localhost:8000/#!/myaccount');
        element(by.name('myName')).sendKeys('John Doe');
        element(by.model('vm.newUser.email')).sendKeys('john.doe@mail.com');
        expect(element(by.css('[type="submit"]')).isEnabled()).toBe(true);
    });

    it('should not enable submit button', function() {
        browser.get('http://localhost:8000/#!/myaccount');
        element(by.name('myName')).sendKeys('John Doe');
        expect(element(by.css('[type="submit"]')).isEnabled()).toBe(false);
    });

    it('should add pokemon to the basket', function() {
        browser.get('http://localhost:8000/#!/list');
        element(by.css('[ng-click="vm.addToCart(singlePokemon)"]')).click();
        expect(element(by.css('.list-group-item')).isPresent()).toBe(true);
    });

    it('should list all pokemons', function() {
        browser.get('http://localhost:8000/#!/list');
        var pokemonInList = element.all(by.repeater('singlePokemon in vm.pokemons'));
        var pokemons = require('../app/data/pokemons.json');
        expect(pokemonInList.count().then(count => count === pokemons.length)).toBe(true); 
    });
});