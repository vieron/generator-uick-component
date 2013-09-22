
# ui-<%= component_name %>

  <%= description %>

  ![build status](https://api.travis-ci.org/<%= repo_user %>/ui-<%= component_name %>.png "ui-checkbox build status")

## Installation

  Install with [component(1)](http://component.io):

    $ component install <%= repo_user %>/ui-<%= component_name %>


## Build

    $ git clone git@github.com:<%= repo_user %>/ui-<%= component_name %>.git
    $ cd ui-<%= component_name %>
    $ npm install
    $ component install
    $ grunt


## Development

Same proccess as in Build but you can use grunt watch to trigger component build when a file changes.

    $ grunt watch

## API

[http://<%= repo_user %>.github.io/ui-<%= component_name %>/](http://vieron.github.io/ui-<%= component_name %>/)

## License

  MIT
