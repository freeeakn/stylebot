# Generated by Django 4.2.5 on 2023-11-23 21:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('siteApp', '0011_remove_profile_cart_delete_cart_profile_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('items', models.ManyToManyField(blank=True, to='siteApp.item')),
            ],
        ),
        migrations.RemoveField(
            model_name='profile',
            name='cart',
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='siteApp.cart')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='siteApp.item')),
            ],
        ),
        migrations.AddField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='siteApp.profile'),
        ),
    ]
