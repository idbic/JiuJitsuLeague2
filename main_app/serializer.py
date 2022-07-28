
from rest_framework import serializers
from . models import *
  
class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament # React was put into single quotes because it was not defined causing a server disruption
        fields = ['name', 'city', 'date', 'address', 'price']