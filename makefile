all:
	make -j 2 run


run: back front


back:
	python3 src/styleSite/manage.py runserver


front:
	cd src/frontend/ ; npm run dev