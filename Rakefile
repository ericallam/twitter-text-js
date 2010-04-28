require 'rubygems'
require 'rake'
require 'yaml'
require 'erb'
require 'active_support'

desc "Generate test.html"
task :generate_test do
  template = File.read('test/test.html.erb')
  autolink = File.read('test/twitter-text-conformance/autolink.yml');
  extract  = File.read('test/twitter-text-conformance/extract.yml');
  
  class TestTemplate
    
    def initialize(autolink_json, extract_json)
      @autolink_json = autolink_json
      @extract_json = extract_json
    end
    
    def get_binding
      binding
    end
  end
  
  template = ERB.new(template)
  t = TestTemplate.new(YAML.load(autolink).to_json, YAML.load(extract).to_json)
  html = template.result(t.get_binding)
  File.open('test/test.html', 'w+') do |file|
    file.print(html)
  end
end