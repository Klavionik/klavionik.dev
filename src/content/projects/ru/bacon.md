---
title: Bacon (WIP)
category: Веб-приложение
description: Сервис для отслеживания скидок на товары в продовольственных магазинах.
image: ../bacon.png
imageAlt: Bacon
year: 2023
tags: [django, vuejs, typescript, bulma]
source: https://github.com/Klavionik/bacon
link: https://bacon.klavionik.dev
---

Проект-долгострой, который начался с желания покупать чипсы за более дешевые деньги и 
коротенькой CLI-утилиты для этого. :) Потом был реализован вариант на FastAPI и Svelte, 
потом он был переписан на более привычные Django и Vue.js. В процессе работы 
познакомился поближе с TypeScript (и очень впечатлился).

## Фичи

- Список отслеживания товаров
- Выбор адреса магазина для отслеживания (пока поддерживается только Перекресток)
- Оповещения об изменениях в цене и наличии через Telegram

## Инструменты

Бэкенд: Django/Django REST Framework, Celery, PostgreSQL.  
Фронтенд: Vue.js, TypeScript, Bulma CSS.
