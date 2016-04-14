// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by pebble.js.
import { name as packageName } from "meteor/pebble";

// Write your tests here!
// Here is an example.
Tinytest.add('pebble - example', function (test) {
  test.equal(packageName, "pebble");
});
