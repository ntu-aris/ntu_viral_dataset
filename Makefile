default:
	gem install jekyll bundler && bundle install

update:
	bundle update

format:
	sass-convert -R _sass --from scss --to scss -i

clean:
	rm -f *.gem
	bundle exec jekyll clean

theme: format clean
	gem uninstall jekyll-rtd-theme
	gem build *.gemspec && gem install *.gem

build: format clean
	bundle exec jekyll build

server: format clean
	bundle exec jekyll server

preview: format clean
	npm run build && bundle exec jekyll server
