import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import './custom.css'
import {codeInput} from '@sanity/code-input'
import {latexInput} from 'sanity-plugin-latex-input'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'website',
  title: "Evening's Website",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), codeInput(), latexInput()],
  schema: {
    types: schemaTypes,
  },
})
