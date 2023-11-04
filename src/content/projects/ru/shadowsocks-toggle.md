---
title: Shadowsocks Switch
category: Апплет
description: Дополнение для Cinnamon Desktop, упрощающее использование Shadowsocks
image: ../shadowsocks-switch.png
imageAlt: Shadowsocks Switch
year: 2023
tags: [shadowsocks, javscript, gtk, cinnamon]
source: https://github.com/Klavionik/shadowsocks-switch
link: https://cinnamon-spices.linuxmint.com/applets/view/379
order: 3
---

Простенький переключатель для удобного управления Shadowsocks из системного 
трея. Реализован в виде апплета для десктопного окружения Cinnamon (используется в 
Linux Mint, Manjaro и др.). Опубликован в официальном каталоге Cinnamon Spices, там же 
есть более подробное описание.

На создание апплета ушло несколько дней, и это были нелегкие дни. Дополнения для Cinnamon 
работают внутри кастомного JavaScript-рантайма с байндингами к GTK, документация почти 
отсутствует. Пришлось много экспериментировать и изучать готовые апплеты.

## Фичи

- Включение/выключение локального прокси-сервера Shadowsocks
- Чтение конфигурации из файла настроек **shadowsocks-libev**

## Инструменты

JavaScript (GTK)
