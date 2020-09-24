DEBUG=JEKYLL_GITHUB_TOKEN=blank PAGES_API_URL=http://0.0.0.0

help:
	@echo "jekyll-rtd-theme -- GitHub flavored documentation theme for all open source projects\n"
	@echo "Usage:"
	@echo "    make [subcommand]\n"
	@echo "Subcommands:"
	@echo "    install   Install the theme dependencies"
	@echo "    format    Format all files"
	@echo "    report    Make a report from Google lighthouse"
	@echo "    clean     Clean the workspace"
	@echo "    dist      Build the theme css and script"
	@echo "    status    Display status before push"
	@echo "    theme     Make theme as gem and install"
	@echo "    site      Build the test site"
	@echo "    server    Make a livereload jekyll server to development"
	@echo "    rougify   Build the rouge skins"
	@echo "    checkout  Reset the theme minified css and script to last commit"

checkout:
	@git checkout assets/js/theme.min.js
	@git checkout assets/css/theme.min.css

rougify:
	@rougify style github | sass-convert --to scss > _sass/class/highlight.scss

install: hooks
	@gem install jekyll bundler
	@npm install
	@bundle install

format:
	@npx prettier . --check --write

report:
	@npx lighthouse http://127.0.0.1:4000

clean:
	@bundle exec jekyll clean

dist: format clean
	@npx webpack --mode production

status: format clean checkout
	@git status

theme: dist
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec
	@gem install *.gem && rm -f *.gem

site: dist
	@${DEBUG} bundle exec jekyll build --safe --profile

server: dist
	@${DEBUG} bundle exec jekyll server --safe --livereload
