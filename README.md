TinyRouter
==========

*In early stage development and likely to change frequently.*

TinyRouter is a tiny client-side router for Meteor. Its focus is on a minimal and
easy to understand API.


Quick Start
-----------

```
import { Router } from 'meteor/geekforbrains:tinyrouter';

Router.add('/', 'home')
Router.add('/login', 'login');
Router.add('/account', 'account', function() {
    if (!Meteor.userId()) this.redirect('login');
    this.render('account');
});
```

Basic Routing
-------------

A basic route is made up of a path and a name respectively.

```
Router.add('/', 'home');
```

By default, the route name will be used to load a template with the same name.
In the above example the route will try to load the `home` template.

The route name is also used to get the route path in your templates without
having to hard code them.

```
<template name="example">
    <a href="{{url name='home'}}">Go Home</a>
</template>
```


Advanced Routing
----------------

An advanced route may specify a callback as its third parameter.

```
Router.add('/', 'home', function() {
    // Extra logic here (maybe check if user is logged in)
    this.render('some_template');  
});
```

When using a callback, you *must* specify the template name to be rendered, it
will not be loaded for you automatically. 

This can also be a way to load templates dynamically or to use a different 
template name from your route name.


Middleware
----------

Middleware is used to run functions before every request. They're a great way
to add logic to a range of routes.

```
Router.middleware(function() {
    if (Router.path.startsWith('/account') && !Meteor.userId()) {
        return Router.redirect('login')
    }
});
```

The above middleware will be run for every URL change. It checks to see if the
route starts with `/account` and if it does ensures a user is logged in or 
redirects back to the `/login` route.