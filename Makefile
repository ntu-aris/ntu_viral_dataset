default:
	@bundle install

update:
	@bundle update

clean:
	@bundle exec jekyll clean

build: clean
	@bundle exec jekyll build --profile

server: clean
	@bundle exec jekyll server --livereload

theme:
	@gem uninstall jekyll-rtd-theme
	@rm -f *.gem
	@gem build *.gemspec && gem install *.gem
