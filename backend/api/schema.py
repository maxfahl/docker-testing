import graphene
from graphene_django import DjangoObjectType
from api.models import Request


class RequestType(DjangoObjectType):
    class Meta:
        model = Request
        fields = ("id", "title", "description")


class Query(graphene.ObjectType):
    all_requests = graphene.List(RequestType)
    # category_by_name = graphene.Field(CategoryType, name=graphene.String(required=True))

    def resolve_all_requests(self, info):
        return Request.objects.all()

    # def resolve_category_by_name(root, info, name):
    #     try:
    #         return Category.objects.get(name=name)
    #     except Category.DoesNotExist:
    #         return None


schema = graphene.Schema(query=Query)
