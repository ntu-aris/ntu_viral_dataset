ROUGE_SKINS=base16 base16.dark base16.light base16.monokai base16.monokai.dark base16.monokai.light base16.solarized base16.solarized.dark base16.solarized.light bw colorful github gruvbox gruvbox.dark gruvbox.light igorpro magritte molokai monokai monokai.sublime pastie thankful_eyes tulip

ROUGE_DEST=assets/css/rougify

DEBUG=JEKYLL_GITHUB_TOKEN=blank PAGES_API_URL=http://0.0.0.0

PRE_DEST=.git/hooks/pre-commit
PRE_MESSAGE=Make sure you have checkout the theme minified css and script unless theme release!

help:
	@echo "jekyll-rtd-theme -- GitHub flavored documentation theme for all open source projects\n"
	@echo "Usage:"
	@echo "    make [subcommand]\n"
	@echo "Subcommands:"
	@echo "    install   Install the theme dependencies"
	@echo "    format    Format all files"
	@echo "    clean     Clean the workspace"
	@echo "    dist      Build the theme css and script"
	@echo "    theme     Make theme as gem and install"
	@echo "    site      Build the test site"
	@echo "    server    Make a livereload jekyll server to development"
	@echo "    rougify   Build the rouge skins"
	@echo "    checkout  Reset the theme minified css and script to last commit"

hooks:
	@echo '#!/bin/sh\n\necho "${PRE_MESSAGE}"' > ${PRE_DEST}
	@chmod +x ${PRE_DEST}

checkout:
	@git checkout assets/js/theme.min.js
	@git checkout assets/css/theme.min.css

rougify:
	@rm -rf ${ROUGE_DEST} && mkdir -p ${ROUGE_DEST}
	@for SKIN in ${ROUGE_SKINS}; \
	do \
		rougify style $${SKIN} | scss --sourcemap=none --style compressed > ${ROUGE_DEST}/$${SKIN}.min.css; \
		echo "Generated: $${SKIN}"; \
	done

install: hooks
	@gem install jekyll bundler
	@npm install
	@bundle install

format:
	@npx prettier . --check --write

clean:
	@git clean -xf
	@bundle exec jekyll clean

dist: format clean
	@npx webpack --mode production

theme: dist
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem

site: dist
	@${DEBUG} bundle exec jekyll build --safe --profile

server: dist
	@${DEBUG} bundle exec jekyll server --safe --livereload
