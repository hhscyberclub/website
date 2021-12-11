# frozen_string_literal: true

Rails.application.config.action_mailer.delivery_method = :smtp
Rails.application.config.action_mailer.smtp_settings = {
  user_name: ENV['SMTP_USERNAME'],
  password: ENV['SMTP_PASSWORD'],
  address: ENV['SMTP_ADDRESS'],
  domain: ENV['SMTP_DOMAIN'],
  port: ENV['SMTP_PORT'],
  authentication: :cram_md5
}
