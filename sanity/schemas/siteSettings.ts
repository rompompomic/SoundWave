import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Миссия компании',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'songsCreated',
      title: 'Количество созданных песен',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'happyClients',
      title: 'Количество довольных клиентов',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Контактная информация',
      type: 'object',
      fields: [
        {
          name: 'telegram',
          title: 'Telegram',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'url',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
      ],
    }),
  ],
});
