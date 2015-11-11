import Ember from 'ember';

export default Ember.Controller.extend({
  tweets: Ember.computed.alias('model'),
  tweet: Ember.computed.alias('tweets.firstObject'),
hasTweets:Ember.computed.notEmpty('tweet.items'),
  
    actions: {
addTweet: function(){
      var title = this.get('newTitle');
      var char = this.store.createRecord('tweet', {
        title: title,
        isCompleted:false
      });
      char.save();
      this.set('newTitle', '');
    },

     deleteTweet: function(tweet) {
      this.store.find('tweet', tweet.id).then(function (post) {
        post.destroyRecord();
      });
    },
  }
});