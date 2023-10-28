from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)


class Item(models.Model):
    count = models.IntegerField(default=0)
    title = models.CharField(max_length=15)
    img = models.ImageField(upload_to ='uploads/')
    desc = models.CharField(max_length=255)
    categories = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.CharField(max_length=25)

# class User(models.Model):
#     id = models.CharField(primary_key=True, unique=True, max_length=255)
    