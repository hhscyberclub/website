# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.4'

# An Action Dispatch session store backed by an Active Record class
gem 'activerecord-session_store', '~> 2.0'
# bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project
gem 'bcrypt', '~> 3.1', '>= 3.1.16'
# Boot large ruby/rails apps faster
gem 'bootsnap', '~> 1.9', '>= 1.9.1', require: false
# Flexible authentication solution for Rails with Warden
gem 'devise', '~> 4.8'
# High-level wrapper for processing images for the web with ImageMagick or libvips
gem 'image_processing', '~> 1.12', '>= 1.12.1'
# PG is the Ruby interface to the PostgreSQL RDBMS
gem 'pg', '~> 1.2', '>= 1.2.3'
# Puma is a simple, fast, threaded, and highly parallel HTTP 1.1 server for Ruby
gem 'puma', '~> 5.5', '>= 5.5.2'
# Ruby on Rails is a full-stack web framework optimized for programmer happiness
gem 'rails', '~> 6.1', '>= 6.1.4.1'
# A Ruby client that tries to match Redis' API one-to-one
gem 'redis', '~> 4.5', '>= 4.5.1'
# TZInfo::Data contains data from the IANA Time Zone database
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
# Use webpack to manage app-like JavaScript modules in Rails
gem 'webpacker', '~> 5.4', '>= 5.4.3'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Annotates Rails/ActiveRecord Models, routes, fixtures, and others
  gem 'annotate', '~> 3.1', '>= 3.1.1'
  # Provides a better error page for Rails and other Rack apps
  gem 'better_errors', '~> 2.9', '>= 2.9.1'
  # The Listen gem listens to file modifications and notifies you about the changes
  gem 'listen', '~> 3.7'
  # RuboCop is a Ruby code style checking and code formatting tool
  gem 'rubocop', '~> 1.22', '>= 1.22.2', require: false
  # Automatic Rails code style checking tool
  gem 'rubocop-rails', '~> 2.12', '>= 2.12.4', require: false
  # Preloads your application so things like console, rake and tests run faster
  gem 'spring', '~> 3.0'
  # A debugging tool for your Ruby on Rails applications
  gem 'web-console', '~> 4.1'
end

group :test do
  # Capybara is an integration testing tool for rack based web applications
  gem 'capybara', '~> 3.35', '>= 3.35.3'
  # Selenium implements the W3C WebDriver protocol to automate popular browsers
  gem 'selenium-webdriver', '~> 4.0', '>= 4.0.3'
  # Run Selenium tests more easily with install and updates for all supported webdrivers
  gem 'webdrivers', '~> 5.0'
end
