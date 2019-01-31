class Api::CommentsController < ApplicationController
  before_action :set_post: only: [:index]

  def index
    render json: @post.comments.all
  end

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
end
