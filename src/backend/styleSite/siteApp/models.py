from django.db import models

class Category(models.Model):
    key = models.CharField(max_length=10, default='etc')
    name = models.CharField(max_length=10, unique=True)

class Item(models.Model):
    title = models.CharField(max_length=255)
    img = models.ImageField(upload_to='media')
    desc = models.TextField()
    categories = models.ManyToManyField(Category, blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    count = models.PositiveIntegerField(default=0)

    