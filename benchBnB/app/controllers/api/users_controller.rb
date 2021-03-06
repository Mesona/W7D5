class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: :"something"
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
    render json: :"You found the user!"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
