import { get } from '@ember/object';
const Person = EmberObject.extend({
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName'),
});
