TinyRouter
==========

*In early stage development and likely to change frequently.*

TinyRouter is a tiny client-side router for Meteor. Its focus is on a minimal and
easy to understand API.


Quick Start
-----------

```js
import { Router } from 'meteor/geekforbrains:tinyrouter';

Router.route('/', 'home')
Router.route('/login', 'login');
Router.route('/profile/:username', 'profile');
Router.route('/account', 'account', function() {
    if (!Meteor.userId) return this.redirect('login');
    return this.render('account');
});
```

Add a dynamic template to your HTML.

```html
<body>
    {{Template.dynamic template=routerTemplate data=routerData}}
</body>
```

TinyRouter will handle swapping out the above dynamic template with the template
associated with each route by setting the `routerTemplate` reactive var.


Basic Routing
-------------

A basic route is made up of a path and a name respectively.

```js
Router.route('/', 'home');
```

By default, the route name will be used to load a template with the same name.
In the above example the route will try to load the `home` template.

The route name is also used to get the route path in your templates without
having to hard code them. If a route has parameters, you can pass those to the
url helper as named arguments.

```html
<template name="example">
    <a href="{{url 'home'}}">Go Home</a>
    <a href="{{url 'profile' username='geekforbrains'}}">Profile</a>
</template>

<template name="home">
    <h1>Welcome Home!</h1>
</template>
```


Advanced Routing
----------------

An advanced route may specify a callback as its third parameter.

```js
Router.route('/', 'home', function() {
    // Extra logic here (maybe check if user is logged in)
    this.render('some_template');  
});
```

When using a callback, you *must* specify the template name to be rendered, it
will not be loaded for you automatically. 

This can also be a way to load templates dynamically or to use a different 
template name from your route name.


Middleware (TODO)
----------

Middleware is used to run functions before every request. They're a great way
to add logic to a range of routes.

```js
Router.middleware(function() {
    if (Router.path.startsWith('/account') && !Meteor.userId()) {
        return Router.redirect('login')
    }
});
```

The above middleware will be run for every URL change. It checks to see if the
route starts with `/account` and if it does ensures a user is logged in or 
redirects back to the `/login` route.