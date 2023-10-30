from django.db import models

class Category(models.Model):
    key = models.CharField(
        verbose_name='Name of key category',
        max_length=10,
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
    external_id = models.PositiveIntegerField(
        verbose_name='telegram id profile'
    )
    name = models.CharField(
        verbose_name='Name of the telegram profile',
    )