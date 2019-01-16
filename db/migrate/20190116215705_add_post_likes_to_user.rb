class AddPostLikesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :likes, :text
  end
end
