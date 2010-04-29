var Script = process.binding('evals').Script;
read = require('fs').readFileSync
sys = require('sys')

Script.runInThisContext(read('lib/twitter-text.js'));

// exported functions
[
  'auto_link_urls_custom', 
  'auto_link', 
  'auto_link_usernames_or_lists',
  'auto_link_hashtags',
  'extract_mentioned_screen_names',
  'extract_reply_screen_name',
  'extract_urls',
  'extract_hashtags'
].forEach(function(method){
  exports[method] = TwitterText[method]
})