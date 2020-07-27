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

publish:
	@gem push *.gem
	@gem push --key github --host https://rubygems.pkg.github.com/rundocs *.gem
