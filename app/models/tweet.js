import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  viewTweets: DS.attr('boolean', {defaultValue: false}),
});
