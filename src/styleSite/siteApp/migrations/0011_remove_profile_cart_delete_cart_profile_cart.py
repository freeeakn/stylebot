# Generated by Django 4.2.5 on 2023-11-23 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteApp', '0010_alter_category_key_cart_profile_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='cart',
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
        migrations.AddField(
            model_name='profile',
            name='cart',
            field=models.ManyToManyField(blank=True, to='siteApp.item', verbose_name='items of cart'),
        ),
    ]
