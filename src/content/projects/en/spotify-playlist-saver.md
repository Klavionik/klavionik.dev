---
title: Spotify Playlist Saver
category: Web application
description: Сервис для скачивания своих плейлистов из Spotify в табличном формате.
image: ../playlists.png
imageAlt: Spotify Playlist Saver
added: 2022-03-14
tags: [fastapi, bulma, spotify]
source: https://github.com/Klavionik/spotify-playlist-saver
link: https://playlist-saver.klavionik.dev
---

Небольшой проект, который я сделал в дни перед уходом Spotify из России, чтобы 
забэкапить свои плейлисты с ценной музыкой.

К сожалению, проект не получится попробовать: для публичного доступа к 
приложению требуется ревью от Spotify, и я не занимался этим вопросом. Но, возможно, 
когда-нибудь я это сделаю. Если вам (вдруг) интересно попробовать проект, можно написать 
мне и я дам доступ для тестирования. 

## Фичи
* Вход через аккаунт Spotify
* Опциональный доступ к приватным и общим плейлистам
* Просмотр информации о своих плейлистах
* Скачивание содержимого плейлиста в формате CSV.

## Технологии
Бэкенд: FastAPI.  
Фронтенд: Jinja2, Bulma.