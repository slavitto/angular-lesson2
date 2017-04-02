describe('Pokemon app testing', function() {
    it('should highlight a menu button', function() {
        browser.get('http://localhost:8000');
        element(by.css('[data-ui-sref="list"]')).click();
        expect(element(by.css('[class="btn btn-default active"]')).isPresent()).toBe(true);

        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
    });

    it('should open myaccount', function() {
        browser.get('http://localhost:8000');
        element(by.css('[href="#!/myaccount"]')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/#!/myaccount");
        // expect(element(by.css('[class="btn btn-default active"]')).isPresent()).toBe(true);

        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
    });
});