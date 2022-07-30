from rest_framework.serializers import ModelSerializer
from main_app.models import Tournament

class TournamentSerializer(ModelSerializer):
    class Meta:
        model = Tournament
        fields = '__all__'

        