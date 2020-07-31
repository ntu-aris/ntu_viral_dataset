default:
	@bundle install

update:
	@bundle update

clean:
	@rm -f Gemfile.lock *.gem *.whl
	@bundle exec jekyll clean

build: clean
	@bundle exec jekyll build --profile

server: clean
	@bundle exec jekyll server

theme: clean
	@gem uninstall jekyll-rtd-theme
	@rm -f *.gem
	@gem build *.gemspec && gem install *.gem
