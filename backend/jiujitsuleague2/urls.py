
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
from main_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tournament/', ReactView.as_view(), name="something"),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/', include('main_app.api.urls'))
    # path('', include('main_app.urls')),
]
