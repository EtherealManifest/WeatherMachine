export class Comparison{
    constructor(){
        this.tile1 = new Weather();
        this.tile2 = new Weather();
        this.comparedTiles = new Weather();
    function Compare(){
        //for now, just concat the strings with a space
        for (attribute in this.tile1){
            comparedTiles[attribute] = this.tile1[attribute] + this.tile2[attribute]
        }
    }
}
}

export class Weather{
    //Each element in the constructor is a tuple, see. the first element is the data to be displayed. 
    //the second is a boolean that denoted whether or not it should be displayed. 
    constructor(){
        this.name = "";
        this.region = "";
        this.country = "";
        this.lat = 0.0;
        this.lon = 0.0;
        this.tz_id = "";
        this.epochTime = 0;
        this.localTime = "";
        this.lastUpdatedEpoch = 0;
        this.lastUpdatedLocalTime = "";
        this.temperatureC = 0;
        this.temperatureF = 0;
        //look at this to determine whether it is day or not
        this.isDay = 0;
        // look at this to show a related weather Icon
        this.condition = "";
        this.conditionCode = 0;
        this.windMPH = 0;
        this.windKPH = 0;
        this.windDegree = 0;
        //look at this to determine whether its windy or nah
        this.wind = 0;
        this.windDirection = "";
        this.pressureMb = 0;
        this.pressureIn = 0;
        this.precipMm = 0;
        this.precipIn = 0;
        this.humidity = 0;
        //this can be used to determine if it is cloudy or not
        this.cloud = 0;
        this.feelsLikeC = 0;
        this.feelsLikeF= 0;
        this.visibilityKM = 0;
        //this attribute seems bugged out. it usually displays as undefined
        this.visibilityMi = 0;
        this.UV = 0;
        this.gustMph = 0;
        this.gustKph = 0;
        this.weatherImage = "";
    }
}
    /**
     * THIS IS NOT CODE, THIS IS THE OUTPUT FROM A TEST RUN OF POLLING THE DATABASE, FORMATTED. 
     * I USED THIS AS A BASE FOR DETERMINING WHAT THE ATTRIBUTES WERE TO BE IN THE CLASS AND 
     * THE SETTERS IN checkWeather()
     * 
     * {"location":{
     *     "name":"Hays",
     *     "region":"Kansas",
     *     "country":"USA",
     *     "lat":38.88,
     *     "lon":-99.32,
     *     "tz_id":"America/Chicago",
     *     "localtime_epoch":1696188977,
     *     "localtime":"2023-10-01 14:36"
     * }
     * "current":{
     *     "last_updated_epoch":1696188600,
     *     "last_updated":"2023-10-01 14:30",
     *     "temp_c":30.0,
     *     "temp_f":86.0,
     *     "is_day":1,
     *     "condition":{
     *         "text":"Sunny",
     *         "icon":"//cdn.weatherapi.com/weather/64x64/day/113.png",
     *         "code":1000
     *     },
     *     "wind_mph":26.6,
     *     "wind_kph":42.8,
     *     "wind_degree":180,
     *     "wind_dir":"S",
     *     "pressure_mb":1018.0,
     *     "pressure_in":30.07,
     *     "precip_mm":0.0,
     *     "precip_in":0.0,
     *     "humidity":36,
     *     "cloud":0,
     *     "feelslike_c":28.8,
     *     "feelslike_f":83.8,
     *     "vis_km":16.0,
     *     "vis_miles":9.0,
     *     "uv":8.0,
     *     "gust_mph":26.0,
     *     "gust_kph":41.8}}
     */

    //Export statements are required to send modules back and forth between files