const comparisonZone = document.getElementById("comparison-zone");
export class Comparison{
    constructor(){
        this.tile1 = new Weather();
        this.tile2 = new Weather();
        this.comparedTiles = new Weather();
    this.Compare = ()=>{
        //for now, just concat the strings with a space
        for (attribute in this.tile1){
            comparedTiles[attribute] = this.tile1[attribute] - this.tile2[attribute]
        }
    }
    this.updateAndDisplay = ()=>{
        let newTile = document.createElement("div");
        newTile.classList.add("LocationTile");
        let newAttribute = document.createElement("p");
        let text = ""
        if(this.tile1.name != ""){
            text = this.tile1.name.charAt(0).toUpperCase() + this.tile1.name.slice(1) + " : " + this.tile1.name;
        }
        let newNode = document.createTextNode(text);
        newAttribute.classList.add("attribute");
        newAttribute.appendChild(newNode)
        newTile.appendChild(newAttribute)
        comparisonZone.append(newTile)



        let newTile2 =document.createElement("div"); 
        newTile2.classList.add("LocationTile");
        let newAttribute2 = document.createElement("p");
        text = ""
        if(this.tile2.name != ""){
            text = this.tile2.name.charAt(0).toUpperCase() + this.tile2.name.slice(1) + " : " + this.tile2.name;
        }
        newNode = document.createTextNode(text);
        newAttribute2.classList.add("attribute");
        newAttribute2.appendChild(newNode)
        newTile2.appendChild(newAttribute2)
        comparisonZone.append(newTile2)


        if(comparisonZone.children.length > 2){
            for (const attribute in this.comparedTiles){
                this.comparedTiles = this.spliceAttributes(this.tile1, this.tile2)
            }
            this.tile1 = new Weather();
            this.tile2 = new Weather();
            while(comparisonZone.hasChildNodes()){
                comparisonZone.removeChild(comparisonZone.firstChild);
            }
        let compareTile = document.createElement("div");
        compareTile.classList.add("TrueCompare");
        let label = document.createElement("p");
        let labelText = document.createTextNode("COMPARISON BETWEEN THESE TWO LOCATIONS");
        label.appendChild(labelText)
        compareTile.appendChild(label)
        for (const attribute in this.comparedTiles){
            if(this.comparedTiles[attribute] == "NoShow"){
                continue;
            }
                //add an if-check to set the weather Icon. it will need to be added as an img element
                //for each attribute, create a <p> element and add it to the <div> element
                let comparedAttribute = document.createElement("p");
                //'attribute' is the name of the attribute, TileList[i][attribute] is the value of it
                //to make it look nicer, I am capitalizing the first letter of each attribute. 
                let text = attribute.charAt(0).toUpperCase() + attribute.slice(1) + " : " + this.comparedTiles[attribute];
                //In order to create new HTML and add it to the document, they have to first take the form
                //of a node. That is created below 
                let newNode = document.createTextNode(text);
                //add the 'attribute' class to it
                comparedAttribute.classList.add("compareAttribute");
                //then append this new Node to the attribute that we created
                comparedAttribute.appendChild(newNode)
                //then append that new attribute Element up to the created Tile
                compareTile.appendChild(comparedAttribute)
            }
            let clearTileButton = document.createElement('BUTTON');
            clearTileButton.addEventListener("click", ()=>{
                this.tile1 = new Weather();
                this.tile2 = new Weather();
                while(comparisonZone.hasChildNodes()){
                    comparisonZone.removeChild(comparisonZone.firstChild);
                }
            })
            clearTileButton.classList.add("ComparisonZoneClear")
            //FIXME: CHANGE THIS TO A PICTURE w
            clearTileButton.setAttribute('id','delete-button');
            // appending button to div
            compareTile.appendChild(clearTileButton);
        comparisonZone.append(compareTile)
        }
    }

    this.spliceAttributes = (tile1, tile2) =>{
        let temp = new Weather();
        temp.name = tile1.name + " :: " + tile2.name;
        temp.region = tile1.region + " :: " + tile2.region;
        temp.country = tile1.country + " :: " + tile2.country;
        temp.lat = tile1.lat - tile2.lat;
        temp.lon = tile1.lon - tile2.lon;
        temp.tz_id = "NoShow";
        temp.epochTime = "NoShow"
        temp.localTime = tile1.localTime + " :: " + tile2.localTime;
        temp.lastUpdatedEpoch = "NoShow";
        temp.lastUpdatedLocalTime = "NoShow";
        temp.temperatureC = (tile1.temperatureC - tile2.temperatureC).toFixed(2);
        temp.temperatureF = (tile1.temperatureF - tile2.temperatureF).toFixed(2);
        temp.isDay = tile1.isDay + " :: " + tile2.isDay;
        temp.condition = tile1.condition + " :: " + tile2.condition;
        temp.conditionCode = "NoShow";
        temp.windMPH = (tile1.windMPH - tile2.windMPH).toFixed(2);
        temp.windKPH = (tile1.windKPH - tile2.windKPH).toFixed(2);
        temp.windDegree = (tile1.windDegree - tile2.windDegree).toFixed(2);
        temp.wind = "NoShow";
        temp.windDirection = tile1.windDirection + " :: " + tile2.windDirection;
        temp.pressureMb = (tile1.pressureMb - tile2.pressureMb).toFixed(2);
        temp.pressureIn = (tile1.precipIn - tile2.precipIn).toFixed(2);
        temp.humidity = (tile1.humidity - tile2.humidity).toFixed(2);
        temp.cloud = "NoShow";
        temp.feelsLikeC = (tile1.feelsLikeC - tile2.feelsLikeC).toFixed(2);
        temp.feelsLikeF= (tile1.feelsLikeF - tile2.feelsLikeF).toFixed(2);
        temp.visibilityKM = (tile1.visibilityKM - tile2.visibilityKM).toFixed(2);
        temp.visibilityMi = (tile1.visibilityMi - tile2.visibilityMi).toFixed(2);
        temp.UV = tile1.UV - tile2. UV;
        temp.gustMph = (tile1.gustMph - tile2.gustMph).toFixed(2);
        temp.gustKph = (tile1.gustKph - tile2.gustKph).toFixed(2);
        temp.weatherImage = "NoShow";
        return temp;
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