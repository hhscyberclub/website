# frozen_string_literal: true

class AdminController < ApplicationController
  layout 'admin'

  def index
    @html_classes = 'admin'
  end
end
