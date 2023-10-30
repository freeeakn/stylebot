all:
	make -j 2 run


run: back front


back:
	python3 src/backend/styleSite/manage.py runserver


front:
	cd src/frontend/ ; npm run dev