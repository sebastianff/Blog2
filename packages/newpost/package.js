Package.describe({
  name: 'sebo:newpost',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.on_use(function(api){
  api.use(
  [
  'iron:router',
  'mongo',
  'templating',
  'ecmascript',
  'aldeed:autoform',
  'aldeed:collection2',
  'aldeed:delete-button',
  'materialize:materialize'
  ],
  ['client','server']);
  api.add_files('newpost.js');
  api.add_files(['allPosts.html','allPosts.js'], "client");
});