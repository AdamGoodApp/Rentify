class RentifyController < ApplicationController

  def index
    gon.pubnub_pub = ENV["pubnub_pub"]
    gon.pubnub_sub = ENV["pubnub_sub"]
  end



end