from graphene import relay, ObjectType, List, Schema
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from api.models import Request


class RequestNode(DjangoObjectType):
    class Meta:
        model = Request
        filter_fields = {
            "title": ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )


class Query(ObjectType):
    request = relay.Node.Field(RequestNode)
    all_requests = DjangoFilterConnectionField(RequestNode)


schema = Schema(query=Query)
