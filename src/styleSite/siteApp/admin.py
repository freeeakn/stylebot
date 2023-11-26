from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'key',
        'name',
    )


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'img',
        'desc',
        'price',
        'count',
    )

admin.site.register(Profile)
