import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Тарифный план',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название плана',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена (в рублях)',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'features',
      title: 'Особенности плана',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'popular',
      title: 'Популярный план',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
