import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'expPost',
  title: 'Experience Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'date_from',
      title: 'Date From',
      type: 'date'
    }),
    defineField({
      name: 'date_to',
      title: 'Date To',
      type: 'date'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'url'
        },
      ]
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})
