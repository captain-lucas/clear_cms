# Adds X-CSRF-Token to all REST requests.
# Allows for the use of Rails protect_from_forgery
# The CSRF Token is normally found in app/views/layouts/application.html.*
# inserted with the rails helper: "csrf_meta_tags"
DS.ActiveModelAdapter.reopen(
  headers:
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
)

ClearCMS.Store = DS.Store.extend({
  adapter: 'ClearCms.ApplicationAdapter'
})

