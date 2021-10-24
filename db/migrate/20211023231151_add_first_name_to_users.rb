# frozen_string_literal: true

class AddFirstNameToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string, null: false, default: ''
  end
end
