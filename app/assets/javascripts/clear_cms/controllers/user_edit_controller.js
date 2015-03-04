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
      user.save().then(
        function(response) { //success callback
          alert('successfully saved');
        },
        function(response) { //error callback
          alert(response);
        }
      ); 
    }
  }
});