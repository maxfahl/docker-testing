# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY requirements.txt /backend
RUN pip install -r requirements.txt
COPY . /backend
COPY ./patches/graphene_django/utils/utils.py /usr/local/lib/python3.10/site-packages/graphene_django/utils/utils.py
