default: clean
	@bundle exec jekyll build --profile

install:
	@bundle install

update:
	@bundle update

clean:
	@bundle exec jekyll clean

server: clean
	@bundle exec jekyll server --livereload --incremental

theme:
	@gem uninstall jekyll-rtd-theme
	@gem build jekyll-rtd-theme.gemspec
	@gem install jekyll-rtd-theme-*.gem
