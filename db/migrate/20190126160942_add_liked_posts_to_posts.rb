class AddLikedPostsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :liked_posts, :text
  end
end
