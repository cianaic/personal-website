import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schema} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Personal Website',

  projectId: 'o3g2934y',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema,
})