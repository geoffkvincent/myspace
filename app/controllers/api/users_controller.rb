class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_user, only: [:update]

  def index
    render json: User.all_except(current_user)
  end

  def show
    render json: @user
  end
  
  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.error, status 422
    end
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:friends)
  end
end

# user = User.find(params[:id])
# user.name = params[:name] ? params[:nickname] : user.nickname
# user.email = params[:email] ? params[:email] : user.email

# file = params[:file]

# if file
#   begin
#     ext = File.extname(file.tempfile)
#     cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
#     user.image = cloud_image['secure_url']
#   rescue => e
#     render json: { errors: e }, status: 422
#   end
# end

# if user.save
#   render json: user
# else
#   render json: { errors: user.errors.full_messages }, status: 422
# end