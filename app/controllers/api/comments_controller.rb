class Api::CommentsController < ApplicationController
  before_action :set_user
  before_action :set_post, only: [:index]

  def index
    render json: @post.comments.all
  end

  # def index
  #   render json: @post.comments.all_data(@user.id)
  # end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
