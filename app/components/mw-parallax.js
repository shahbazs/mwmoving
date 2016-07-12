import Ember from 'ember';

const { $ } = Ember;

export default Ember.Component.extend({
  didRender() {
    $('.parallax').parallax();
  }
});
