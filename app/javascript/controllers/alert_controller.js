import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    dismissAfter: Number
  }

  initialize() {
    this.hide()
  }

  connect() {
    setTimeout(() => {
      this.show()
    }, 200)

    // Auto dimiss if defined
    if (this.hasDismissAfterValue) {
      setTimeout(() => {
        this.close()
      }, this.dismissAfterValue)
    }
  }

  close() {
    this.hide()
    setTimeout(() => {
      this.element.remove()
    }, 1100)

  }

  show() {
    this.element.setAttribute(
      'style',
      "transition: 1s; transform:translate(0, 0);",
    )
  }

  hide() {
    this.element.setAttribute(
      'style',
      "transition: 1s; transform:translate(400px, 0);",
    )
  }
}
