# Generated by Django 4.2.3 on 2024-02-24 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ecole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=60)),
                ('first_name', models.CharField(max_length=60)),
            ],
        ),
    ]
