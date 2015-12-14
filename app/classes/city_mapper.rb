class CityMapper

  def initialize(destination, date)
    @base_url = "https://developer.citymapper.com/api/1/traveltime/?"
    @startcoord = "#{destination['start']['lat']},#{destination['start']['lng']}"
    @endcoord = "#{destination['end']['lat']},#{destination['end']['lng']}"
    @time = "2014-11-06T19:00:02-0500"
    @key = ENV["citymapper_key"]
  end

  def construct_url
    "#{}startcoord=51.525246%2C0.084672&endcoord=51.559098%2C0.074503&time=2014-11-06T19%3A00%3A02-0500&time_type=arrival&key=3eeb305f6c22477146f0be4a5a4e3d4b"
  end



end