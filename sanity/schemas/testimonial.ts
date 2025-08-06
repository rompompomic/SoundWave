import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Отзыв',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Тип отзыва',
      type: 'string',
      options: {
        list: [
          { title: 'Видео', value: 'video' },
          { title: 'Текст', value: 'text' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Имя клиента',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Текст отзыва',
      type: 'text',
      hidden: ({ document }) => document?.type !== 'text',
    }),
    defineField({
      name: 'description',
      title: 'Описание (для видео)',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'company',
      title: 'Компания',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'text',
    }),
    defineField({
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
      hidden: ({ document }) => document?.type !== 'text',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Ссылка на видео',
      type: 'url',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Превью видео',
      type: 'image',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    defineField({
      name: 'photo',
      title: 'Фото клиента',
      type: 'image',
      hidden: ({ document }) => document?.type !== 'text',
    }),
  ],
});
