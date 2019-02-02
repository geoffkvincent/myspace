class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  # def self.all_data(user)
  #   select('
  #     comments.id, 
  #     comments.submission_date,
  #     comments.title, 
  #     comments.status, 
  #     comments.post_id, 
  #     comments.created_at, 
  #     comments.updated_at, 
  #     comments.posting_url,
  #     comments.city,
  #     comments.state,
  #     u.id AS user_id, 
  #     u.name AS user_name,
  #     u.image AS user_image
  #     ')
  #   .joins('INNER JOIN users u ON u.id = comments.user_id')
  #   .where('comments.user_id = ?', user)
  #   .order('comments.updated_at desc')
  # end
end
