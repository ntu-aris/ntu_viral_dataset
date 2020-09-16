DEBUG=JEKYLL_GITHUB_TOKEN=blank PAGES_API_URL=http://0.0.0.0

help:
	@echo "jekyll-rtd-theme -- GitHub-flavored docs theme for Jekyll\n"
	@echo "Usage:"
	@echo "    make [subcommand]\n"
	@echo "Subcommands:"
	@echo "    install	Install the ruby dependencies"
	@echo "    format	Format the _sass directory"
	@echo "    theme	Build and install this theme as gem"
	@echo "    build	Build the site"
	@echo "    server	Make a livereload jekyll server to debug"


install:
	@gem install jekyll bundler
	@npm install
	@bundle install

dest:
	@sass-convert -R _sass --from scss --to scss -i
	@rm -f *.gem
	@bundle exec jekyll clean
	@npx webpack --mode production

theme: dest
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem

build: dest
	@${DEBUG} bundle exec jekyll build --safe --profile

server: dest
	@${DEBUG} bundle exec jekyll server --safe --livereload
