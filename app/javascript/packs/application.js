// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import * as ActiveStorage from '@rails/activestorage'
import Rails from '@rails/ujs'
import '@hotwired/turbo-rails'
import '@rails/actiontext'
import 'channels'
import 'trix'

Rails.start()
ActiveStorage.start()

// Always show progress bars
Turbo.setProgressBarDelay(0)

const images = require.context('../images/', true)
const imagePath = (name) => images(name, true)
