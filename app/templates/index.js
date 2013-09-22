
module.exports = UI<%= _.capitalize(component_name) %>;

/**
 * @class UI<%= _.capitalize(component_name) %>
 * <%= component_name %>
 *
 * @constructor
 * <%= description %>
 * @param {HTMLElement} [el]
 */
function UI<%= _.capitalize(component_name) %>(el) {

    this.init();
}


var fn = UI<%= _.capitalize(component_name) %>.prototype;

fn.init = function() {

    return this;
}

fn.destroy = function() {

    return this;
}