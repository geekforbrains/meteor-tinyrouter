import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.registerHelper('currentTemplate', function() {
    return Router.currentTemplate.get();
});


Meteor.startup(function() {
    console.log('starting meteor client');
    Router.handleClicks();
    Router.load(window.location.pathname);
});


export let Router = {
    currentTemplate: ReactiveVar(),

    register(routes) {
        console.log('registering routes');
        this._routes = routes;
        console.log(this._routes);
    },

    go(path) {
        history.pushState(null, null, path);
        this.load(path);
    },

    load(path) {
        var options = this._routes[path];
        var template;
        var callback;

        if (undefined === options) {
            console.log('TODO: route not found');
            return;
        } 

        if (typeof options === 'string') {
            template = options;
        } else {
            template = options['template'];
            callback = options['callback'];
        }

        if (typeof callback === 'function') {
            callback.bind(this)(path);
        }

        this.currentTemplate.set(template);
    },

    handleClicks() {
        var self = this;
        $(document).ready(function() {
            $('a').click(function(e) {
                e.preventDefault();
                self.go(e.target.pathname);
            });
        });
    }
}
