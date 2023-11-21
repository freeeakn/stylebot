from django.db import models

class Category(models.Model):
    key = models.CharField(
        verbose_name='Key of key category',
        max_length=10,
        unique=True,
        default='etc',
    )
    name = models.CharField(
        verbose_name='Name of the category',
        max_length=10,
        unique=True,
    )


class Item(models.Model):
    title = models.CharField(max_length=25)
    img = models.ImageField(upload_to='media')
    desc = models.TextField(max_length=255)
    categories = models.ManyToManyField(Category, blank=True)
    price = models.FloatField(max_length=25)
    count = models.PositiveIntegerField(default=1)


class Profile(models.Model):
    auth_date = models.PositiveIntegerField(
        verbose_name='telegram id profile'
    )
    first_name = models.CharField(
        verbose_name='FirstName of the telegram profile',
    )
    hash = models.CharField(
        verbose_name='Hash of the telegram profile',
    )
    id = models.PositiveIntegerField(
        primary_key=True,
        verbose_name='telegram id profile'
    )
    photo_url = models.CharField(
        verbose_name='Photo_Url of the telegram profile',
    )
    username = models.CharField(
        verbose_name='UserName of the telegram profile',
    )