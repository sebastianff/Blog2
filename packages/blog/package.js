Package.describe({
  name: 'sebo:blog',
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
  'templating',
  'aldeed:collection2',
  'aldeed:delete-button'
  ],
  ['client','server']);
  api.add_files('newpost.js',['client','server']);
  api.add_files(['allPosts.html','allPosts.js','viewPost.html','singlePost.html','singlePost.js','header.html','layout.html','addPost.html','addPost.js'], "client");
  api.export('Posts', 'client');
});