#!/bin/bash
NAME="<styleSite>" #name of the service to be run by supervisor
DJANGODIR=/root/stylebot/src/styleSite
USER=root #you can see your user name by running command whoami
GROUP=www-data
NUM_WORKERS=11
TIMEOUT=50
DJANGO_SETTINGS_MODULE=styleSite.settings
DJANGO_WSGI_MODULE=styleSite.wsgi
PORT=8000
LOCAL_IP=192.168.0.115

echo "Starting $NAME as `whoami`"

cd $DJANGODIR
. /root/stylebot/venv/bin/activate #run the virtual environment
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE #set the global variable to the settings file
export PYTHONPATH=$DJANGODIR:$PYTHONPATH #set your django app directory as python path

exec /root/stylebot/venv/bin/gunicorn ${DJANGO_WSGI_MODULE} \
--name $NAME \
--workers $NUM_WORKERS \
--timeout $TIMEOUT \
--user=$USER --group=$GROUP \
--pythonpath=/root/stylebot/venv/bin \
--log-level=debug \
--bind=$LOCAL_IP:$PORT \
