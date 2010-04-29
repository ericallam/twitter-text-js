// just to test out the twitter module
sys = require('sys');
twitter = require('./lib/twitter-text-node');

sys.puts(twitter.auto_link("@hello #there http://google.com"));