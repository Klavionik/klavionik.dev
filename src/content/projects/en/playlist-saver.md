---
title: Playlist Saver for Spotify
category: Web application
description: Save your Spotify playlists as CSV data.
image: ../playlist-saver.png
imageAlt: Playlist Saver for Spotify
added: 2022-03-14
tags: [fastapi, bulma, spotify]
source: https://github.com/Klavionik/playlist-saver
link: https://playlist-saver.klavionik.dev
---

A little project I did a while ago to back up my precious playlists. One may use it the 
same way or to perform some sort of analysis (like, how many Megadeth songs you've got 
among your playlists?)

Lately, I've updated it and right now it awaits Spotify review. Until the review is done, 
the service is not publicly available (you won't be able to log in unless I manually 
grant you access).

## Features
* Login via Spotify
* All playlists/only public ones
* View your playlist summary
* Download playlists content as CSV data

## Tools
Backend: FastAPI.  
Frontend: Jinja2, Bulma.
