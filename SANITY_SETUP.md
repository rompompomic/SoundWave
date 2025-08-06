# Инструкция по подключению Sanity CMS

## 1. Создание проекта Sanity

1. Перейдите на https://sanity.io
2. Зарегистрируйтесь или войдите в аккаунт
3. Создайте новый проект
4. Запомните Project ID

## 2. Настройка локального окружения

1. Скопируйте `.env.example` в `.env`:
```bash
cp .env.example .env
```

2. Заполните переменные в файле `.env`:
```
VITE_SANITY_PROJECT_ID=ваш-project-id-из-sanity
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=токен-который-создадите
```

## 3. Создание API токена

1. Перейдите в https://sanity.io/manage
2. Выберите ваш проект
3. Перейдите в API → Tokens
4. Нажмите "Add API token"
5. Дайте имя токену (например, "Website Token")
6. Выберите права "Editor" или "Admin"
7. Скопируйте токен и вставьте в `.env`

## 4. Обновление конфигурации

В файле `sanity.config.ts` замените:
```typescript
projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
```

На ваш реальный Project ID.

## 5. Включение запросов к Sanity

В файле `client/src/hooks/use-sanity.tsx` измените:
```typescript
enabled: false, // Отключаем запросы к Sanity пока не настроен проект
```

На:
```typescript
enabled: true,
```

## 6. Запуск Sanity Studio

```bash
npx sanity dev
```

Студия откроется на http://localhost:3333

## 7. Добавление контента

В Sanity Studio создайте:
- Настройки сайта (Site Settings)
- Тарифные планы (Pricing Plans) 
- Элементы портфолио (Portfolio Items)
- Отзывы (Testimonials)
- Услуги (Services)
- Акции (Promotions)

## 8. Проверка работы

После добавления контента в Sanity Studio, он автоматически появится на сайте.

## Готовые схемы данных

В проекте уже настроены все необходимые схемы:
- siteSettings - настройки сайта
- pricingPlan - тарифные планы
- portfolioItem - элементы портфолио  
- testimonial - отзывы
- service - услуги
- promotion - акции