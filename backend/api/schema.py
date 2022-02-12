from graphene import relay, ObjectType, List, Schema
from graphene_django import DjangoObjectType
# from graphene_django.filter import DjangoFilterConnectionField

from api.models import Request


class RequestType(DjangoObjectType):
    class Meta:
        model = Request
        fields = ("id", "title", "description")


class Query(ObjectType):
    all_requests = List(RequestType)

    def resolve_all_requests(self, info):
        return Request.objects.all()

# Relay stuff
# class RequestNode(DjangoObjectType):
#     class Meta:
#         model = Request
#         filter_fields = {
#             "title": ['iexact', 'icontains', 'istartswith']
#         }
#         interfaces = (relay.Node, )
#
#
# class Query(ObjectType):
#     request = relay.Node.Field(RequestNode)
#     all_requests = DjangoFilterConnectionField(RequestNode)


schema = Schema(query=Query)
