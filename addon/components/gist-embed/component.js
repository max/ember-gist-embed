import Ember from 'ember';
import layout from './template';

const { $, computed } = Ember;

export default Ember.Component.extend({
  error: false,
  layout,

  html: computed('gist.div', function() {
    return Ember.String.htmlSafe(this.get('gist.div'));
  }),

  didReceiveAttrs() {
    $.ajax({
      url: `${this.get('url')}.json`,
      dataType: 'jsonp'
    }).done(data => {
      this.set('gist', data);
    }).fail(_ => this.set('error', true)); // jshint ignore:line
  }
});
