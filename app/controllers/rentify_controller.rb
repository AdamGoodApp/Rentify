class RentifyController < ApplicationController

  before_action :set_keys, only: [:index]

  def index

  end

  def calc_time()
     if !@time = CityMapper.new(destination_params, 2).calculate_time!
       render json: @time
     else
       render :nothing => true, :status => 400
     end
  end

  private

  def set_keys
    gon.pubnub_pub = ENV["pubnub_pub"]
    gon.pubnub_sub = ENV["pubnub_sub"]
  end

  def destination_params
    params.require(:destination).permit!
  end



end