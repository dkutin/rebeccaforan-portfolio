import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ArtworkPagePreview from './preview-templates/ArtworkPagePreview'
import PhotographyPagePreview from './preview-templates/PhotographyPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('artwork', ArtworkPagePreview)
CMS.registerPreviewTemplate('photography', PhotographyPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
