Pebble
======

*In early stage development and likely to change frequently.*

Pebble is a tiny client-side router for Meteor. If you just want to map routes
to templates and handle the odd function call on specific routes, then this 
is the tool for you.


Quick Start
-----------

```
import { Router } from 'meteor/geekforbrains:pebble';

Router.register({
    '/': 'home',
    '/foo': 'foo'  
});
```

The `register` function takes an object of url paths as keys and template names
as their value.

In the above example, when visiting `/foo` Pebble will load the `foo` template.


To Do
-----
- Error pages (404 etc)
- Route params
- Route callbacks
- Shorthand user/permission checking