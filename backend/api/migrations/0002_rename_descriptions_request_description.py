# Generated by Django 4.0.2 on 2022-02-11 20:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='descriptions',
            new_name='description',
        ),
    ]
