default:
	@bundle install

update:
	@bundle update

clean:
	@bundle exec jekyll clean

build: clean
	@bundle exec jekyll build --profile --config _config.yml,.debug.yml

server: clean
	@bundle exec jekyll server --config _config.yml,.debug.yml

theme: clean
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem

format:
	@sass-convert -R _sass --from scss --to scss -i
