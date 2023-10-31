---
title: Shadowsocks Switch
category: Applet
description: Cinnamon Desktop extension to simplify Shadowsocks usage
image: ../shadowsocks-switch.png
imageAlt: Shadowsocks Switch
year: 2023
tags: [shadowsocks, javscript, gtk, cinnamon]
source: https://github.com/Klavionik/shadowsocks-switch
link: https://cinnamon-spices.linuxmint.com/applets/view/379
---

A simple and convenient Shadowsocks switch that lives in the system tray. Implemented 
as an applet for Cinnamon, a desktop environment available for many Linux distros 
(Mint, Manjaro, etc.). You can find it in the official Cinnamon Spices repository, 
along with the detailed description. 

It took me a few days and was quite an adventure to build! It runs under a custom 
JavaScript runtime with GTK bindings, and there's almost no documentation, so... a 
lot of trial and error and a lot of digging through existing applets. 

## Features

- Enable/disable the local Shadowsocks server
- Read configuration from the **shadowsocks-libev** config file

## Tools

JavaScript (GTK)
