default:
	@gem install jekyll bundler && bundle install

update:
	@bundle update

clean:
	@rm -f *.gem && bundle exec jekyll clean

server: clean
	@bundle exec jekyll server

theme: clean
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem

build: clean
	@bundle exec jekyll build
	@sass-convert -R _sass --from scss --to scss -i && npm run build
