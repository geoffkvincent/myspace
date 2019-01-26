class Post < ApplicationRecord
  belongs_to :user

  serialize :liked_posts, Array
end
