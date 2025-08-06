import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioItem',
  title: 'Элемент портфолио',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'День рождения', value: 'birthday' },
          { title: '8 марта', value: 'march8' },
          { title: 'Реклама', value: 'commercial' },
          { title: 'Гендер пути', value: 'gender' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'audioUrl',
      title: 'Ссылка на аудио',
      type: 'url',
    }),
    defineField({
      name: 'duration',
      title: 'Длительность',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
