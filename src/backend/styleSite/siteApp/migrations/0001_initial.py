# Generated by Django 4.2.5 on 2023-10-28 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0)),
                ('title', models.CharField(max_length=15)),
                ('img', models.ImageField(upload_to='uploads/')),
                ('desc', models.CharField(max_length=255)),
                ('price', models.CharField(max_length=25)),
                ('categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='siteApp.category')),
            ],
        ),
    ]
