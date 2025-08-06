# Быстрая настройка Sanity CMS за 5 минут

## 1. Создайте проект на sanity.io
- Перейдите на https://sanity.io  
- Зарегистрируйтесь (можно через Google/GitHub)
- Создайте новый проект
- Скопируйте Project ID

## 2. Создайте файл .env
Создайте файл `.env` в корне проекта:
```
VITE_SANITY_PROJECT_ID=ваш-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=создадим-на-шаге-3

SANITY_STUDIO_PROJECT_ID=ваш-project-id
SANITY_STUDIO_DATASET=production
```

## 3. Создайте API токен
- Перейдите в https://sanity.io/manage
- Выберите ваш проект → API → Tokens
- Создайте токен с правами "Editor"
- Скопируйте токен в .env файл

## 4. Обновите конфигурацию
В `sanity.config.ts` замените `your-project-id` на ваш реальный ID

## 5. Включите Sanity запросы
В `client/src/hooks/use-sanity.tsx` измените `enabled: false` на `enabled: true`

## 6. Запустите Sanity Studio
```bash
npx sanity dev
```

## 7. Добавьте контент
В Studio создайте:
- Настройки сайта
- Тарифные планы  
- Элементы портфолио
- Отзывы

Готово! Ваш сайт подключен к Sanity CMS.