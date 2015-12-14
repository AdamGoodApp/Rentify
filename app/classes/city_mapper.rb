class CityMapper

  include HTTParty
  base_uri 'https://developer.citymapper.com'

  def initialize(destination)
    @startcoord = "#{destination['start']['lat']},#{destination['start']['lng']}"
    @endcoord = "#{destination['end']['lat']},#{destination['end']['lng']}"
    @time = "2014-11-06T19:00:02-0500"
    @key = ENV["citymapper_key"]
    @options = {
        query: {
          startcoord: @startcoord,
          endcoord: @endcoord,
          time: @time,
          time_type: 'arrival',
          key: @key
        }
    }
  end

  def calculate_time!
    result = self.class.get("/api/1/traveltime/", @options)
    result.code == 200 ? result['travel_time_minutes'] : false
  end



end