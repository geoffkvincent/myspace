class Api::PostsController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
      render json: @user.posts.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: post.error, status: 422
    end
  end

  def add_like
    user = User.find(params[:user_id])
    post = user.posts.find(params[:post_id])
    post.liked_posts << params[:user]
    post.save
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.error, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :liked_posts)
  end
end
