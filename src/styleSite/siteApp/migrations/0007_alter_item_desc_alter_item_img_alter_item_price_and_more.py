# Generated by Django 4.2.5 on 2023-10-29 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteApp', '0006_alter_item_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='desc',
            field=models.TextField(max_length=255),
        ),
        migrations.AlterField(
            model_name='item',
            name='img',
            field=models.ImageField(upload_to='media'),
        ),
        migrations.AlterField(
            model_name='item',
            name='price',
            field=models.FloatField(max_length=25),
        ),
        migrations.AlterField(
            model_name='item',
            name='title',
            field=models.CharField(max_length=25),
        ),
    ]
