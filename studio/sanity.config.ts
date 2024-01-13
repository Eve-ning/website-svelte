import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'website',
  title: "Evening's Website",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
})
