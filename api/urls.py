from django.urls import path
from .views import GetNote, GetRoutes, CreateUser, GetNotes

urlpatterns = [
    path('', GetRoutes, name='GetRoutes'),
    path('register/', CreateUser.as_view(), name='CreateUser'),
    path('notes/', GetNotes, name='GetNotes'),
    path('notes/<str:pk>/', GetNote, name='GetNote'),
]
