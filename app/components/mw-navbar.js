import Ember from 'ember';

const { $ } = Ember;

export default Ember.Component.extend({
  classNames: 'mw-navbar',

  didRender() {
    $('.button-collapse').sideNav();
  }
});
