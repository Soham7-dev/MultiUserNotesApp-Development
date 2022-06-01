from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import CreateAPIView
from .serializers import NoteSerializer, UserSerializer
from .models import Note
from django.contrib.auth.models import User
# Create your views here.


@api_view(['GET'])
def GetRoutes(request):
    routes = [
        'api/register/',
        'api/notes/',
        'api/notes/<id>',
    ]

    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def GetNotes(request):

    current_user = request.user

    if(request.method == 'GET'):
        notes = current_user.note_set.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if(request.method == 'POST'):
        data = request.data
        new_note = current_user.note_set.create(
            body=data['body']
        )
        serializer = NoteSerializer(new_note, many=False)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def GetNote(request, pk):

    current_user = request.user

    if(request.method == 'GET'):
        note = current_user.note_set.get(id=pk)
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)

    if(request.method == 'PUT'):
        data = request.data
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note, data=data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    if(request.method == 'DELETE'):
        note = current_user.note_set.get(id=pk)
        note.delete()
        return Response("Note is deleted")


class CreateUser(CreateAPIView):
    queryset = User
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    authentication_classes = [TokenAuthentication]
