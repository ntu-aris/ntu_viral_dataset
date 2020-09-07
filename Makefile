default:
	gem install jekyll bundler && bundle install

update:
	bundle update

format:
	sass-convert -R _sass --from scss --to scss -i

clean:
	rm -f *.gem && bundle exec jekyll clean

theme: format clean
	gem uninstall jekyll-rtd-theme
	gem build *.gemspec && gem install *.gem

build: format clean
	bundle exec jekyll build --config _config.yml,.debug.yml

preview: format clean
	npm run build
	bundle exec jekyll server

server: format clean
	bundle exec jekyll server --config _config.yml,.debug.yml
