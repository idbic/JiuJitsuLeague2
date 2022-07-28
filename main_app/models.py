from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Tournament(models.Model):
    city = models.CharField(max_length=100, null=True)
    date = models.DateField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    price = models.IntegerField(null=True)
    


    def __str__(self):
        return self.name
