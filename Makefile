# Building for Github pages

# 1 - Create "gh-pages" branch
branch:
	git checkout -b gh-pages

# 2 - Run production tasks
production:
	gulp production

# 3 - Configure menu links, adding "/suippets" in "href" path