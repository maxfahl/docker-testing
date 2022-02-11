from django.db import models


class Request(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    # category = models.ForeignKey(
    #     Category, related_name="ingredients", on_delete=models.CASCADE
    # )

    def __str__(self):
        return self.title
