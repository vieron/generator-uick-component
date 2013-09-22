describe('ui-<%= component_name %>', function() {
    var UI<%= _.capitalize(component_name) %> = require('ui-<%= component_name %>');

    beforeEach(function() {
        this.el = document.querySelector('.ui-<%= component_name %>');
        this.<%= component_name %> = new UI<%= _.capitalize(component_name) %>(this.el);
    });

    afterEach(function() {

    });



    it('should return instance of ui-<%= component_name %>', function() {
        expect(this.<%= component_name %>).to.be.an.instanceof(UI<%= _.capitalize(component_name) %>);
    });

    it('should respondTo init and destroy methods', function() {
        expect(this.<%= component_name %>).to.respondTo('init');
        expect(this.<%= component_name %>).to.respondTo('destroy');
    });

    // describe('#someMethod()', function() {
    //     it('should be ...', function() {
    //         expect(this.<%= component_name %>.someMethod()).to.be.a('function');
    //     });
    // });

});
