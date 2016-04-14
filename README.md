Pebble
======

*In early stage development and likely to change frequently.*

Pebble is a tiny client-side router for Meteor. Its focus is on a minimal and
easy to understand API.


Quick Start
-----------

```
import { Pebble } from 'meteor/geekforbrains:pebble';

function requiresLogin() {
    if (!Meteor.userId()) {
        return Pebble.redirect('/login');
    }
}

Pebble.route('/', function() {
    return this.render('home');
});

Pebble.route('/login', function() {
    return this.render('login');  
});

Pebble.route('/account', requiresLogin, function() {
    return this.render('account');
});

Pebble.error(404, function() {
    return this.render('not_found');  
});
```

To Do
-----
- Error pages (404 etc)
- Route args/params
- Route callbacks
- Shorthand user/permission checking