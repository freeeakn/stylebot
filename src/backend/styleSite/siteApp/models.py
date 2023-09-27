import uuid
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)


class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    count = models.IntegerField(primary_key=True, default=1)
    title = models.CharField(max_length=255)
    img = models.ImageField(upload_to ='uploads/')
    desc = models.CharField(max_length=255)
    category = models.ForeignKey(Category, blank=True)
    price = models.CharField(max_length=255)