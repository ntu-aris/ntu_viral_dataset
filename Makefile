default:
	@bundle install

update:
	@bundle update

clean:
	@bundle exec jekyll clean

build: clean
	@bundle exec jekyll build --profile

server: clean
	@bundle exec jekyll server

theme: clean
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem
