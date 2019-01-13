class Api::PostsController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    if User != current_user
      render json: @user.posts.all
    elsif current_user
      render json: current_user.posts.all
      
    else
      render json: error, status: 422
    end
  end

  def show
    render json: @post
  end

  def create
    post = current_user.post.new(post_params)

    if post.save
      render json: post
    else
      render json: post.error, status: 422
    end
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
    params.require(:post).permit(:title, :body)
  end
end
