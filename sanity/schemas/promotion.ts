import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'promotion',
  title: 'Акция',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название акции',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание акции',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'Активная акция',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'expiresAt',
      title: 'Дата окончания',
      type: 'datetime',
    }),
  ],
});
