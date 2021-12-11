# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  devise_for :users

  # Admin stuff, only for Robby
  authenticate :user, ->(user) { user.admin? } do
    get '/admin', to: 'admin#index'

    mount Sidekiq::Web => '/sidekiq'
  end

  root 'landing#index'
end
