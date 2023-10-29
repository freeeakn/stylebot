from django.db import models

class Category(models.Model):
    key = models.CharField(max_length=10, default='etc')
    name = models.CharField(max_length=10, unique=True)

class Item(models.Model):
    title = models.CharField(max_length=25)
    img = models.ImageField(upload_to='media')
    desc = models.TextField(max_length=255)
    categories = models.ManyToManyField(Category, blank=True)
    price = models.FloatField(max_length=25)
    count = models.PositiveIntegerField(default=1)

    