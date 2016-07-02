# Building for Github pages

# 1 - Create "gh-pages" branch
branch:
	git checkout -b gh-pages

# 2 - Remove "pages/" and "dist/" in .gitignore

# 3 - Run production tasks
production:
	gulp production

# 4 - Configure menu links, adding "/suippets" in "href" path

# 5 - Sending to github
push:
	git push origin gh-pages