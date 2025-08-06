import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Услуга',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название услуги',
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
      name: 'features',
      title: 'Особенности услуги',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'price',
      title: 'Цена (в рублях)',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      description: 'Название иконки из библиотеки Lucide React',
    }),
  ],
});
