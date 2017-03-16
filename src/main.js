import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/solarized.css'
import './main.scss'
import Reveal from 'reveal.js'
import markdown from './markdown'

Reveal.initialize()

markdown.initialize(Reveal)

import './highlight.js'