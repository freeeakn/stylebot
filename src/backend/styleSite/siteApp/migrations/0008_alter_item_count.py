# Generated by Django 4.2.5 on 2023-10-29 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteApp', '0007_alter_item_desc_alter_item_img_alter_item_price_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='count',
            field=models.PositiveIntegerField(default=1),
        ),
    ]
