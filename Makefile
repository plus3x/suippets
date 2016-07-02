# Building for Github pages

# 1 - create branch "gh-pages"
branch:
	git checkout -b gh-pages

# 2 - Configure links in menu, adding "/suippets" 

# 3 - Run production tasks
prod:
	gulp production

# 4 - exclude unecessary files
clear:
	rm -Rf app/ docker-compose.yml gulpfile.js node_modules/ package.json readme.md routes.js .jscsrc 

# 5 - Sendding to github
push:
	git push origin gh-pages