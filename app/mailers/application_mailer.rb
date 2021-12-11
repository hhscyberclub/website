# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'system@hhscybersecurity.com'
  layout 'mailer'
end
