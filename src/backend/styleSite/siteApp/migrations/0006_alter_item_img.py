# Generated by Django 4.2.5 on 2023-10-28 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteApp', '0005_alter_item_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='img',
            field=models.ImageField(upload_to=''),
        ),
    ]