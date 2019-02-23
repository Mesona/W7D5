class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render json: :"yay"
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    if current_user 
      logout!
      render json: {}
    else
      render json: :"404 NO CURRENT USER"
    end
  end
end
