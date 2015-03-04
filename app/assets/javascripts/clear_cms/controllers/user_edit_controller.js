ClearCms.UserEditController = Ember.ObjectController.extend({
  showDetails: false,
  actions: {
    toggleDetails: function() {
      var current = this.get('showDetails');
      if(current) {
        this.set('showDetails',false);
      } else {
        this.set('showDetails',true);
      }
    },
    save: function() {
      var user=this.get('model');
      user.save();
    }
  }
});