from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import TournamentSerializer
from main_app.models import Tournament





class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)

@api_view(['GET'])
def getTournaments(request):
    tournaments = Tournament.objects.all()
    serializer = TournamentSerializer(Tournament , many=True)
    return Response(serializer.data)

class TournamentView(APIView):
    
    serializer_class = TournamentSerializer
  
    def get(self, request):
        detail = [ {"name": detail.name, "city": detail.city,"date": detail.date, "address": detail.address, "price": detail.price, } 
        for detail in Tournament.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = TournamentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)