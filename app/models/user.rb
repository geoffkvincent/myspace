# frozen_string_literal: true

class User < ActiveRecord::Base
  serialize :friends, Array
  has_many :posts, dependent: :destroy 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.all_except(user)
    where.not(id: user)
  end
  
end
