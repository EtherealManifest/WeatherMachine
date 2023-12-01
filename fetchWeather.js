import {Weather, Comparison} from "./Class.js";

const apiURL = "http://api.weatherapi.com/v1/current.json?key=bfaf6f3581b14ed88fc233827231009&q=";
//http://api.weatherapi.com/v1/current.json?key=bfaf6f3581b14ed88fc233827231009&q=67601&aqi=no

const card = document.querySelector('.card')
//The input box for the search
const searchBox = document.querySelector(".search input")
//the button the user pusher to search after they have entered a location
const searchButton = document.querySelector(".search button")
//the button to switch the temperature for Celsius to fahrenheit
const tempSwitch = document.querySelector(".FCswitch")
//the button to clear the screen of all locations
const clearButton = document.querySelector(".clear-er")
//the button to allow the user to filter results
const filterButton = document.querySelector(".filter-er")
const filterForm = document.querySelector(".filterForm")
//the error message(if relevant)
const errorMessage = document.querySelector(".error-message")
const luckyButton = document.querySelector(".luckyButton")
/* searchKey can either be a zip code or City, State*/
/*This is where the Settings can be defined as variables*/
const nameEnabler = document.getElementById("name");
const regionEnabler = document.getElementById("region");
const countryEnabler = document.getElementById("country");
const latitudeEnabler = document.getElementById("lat");
const longitudeEnabler = document.getElementById("lon");
const timeZoneIdEnabler = document.getElementById("tz_id");
const epochTimeEnabler = document.getElementById("epochTime");
const localTimeEnabler = document.getElementById("localTime");
const lastUpdatedEpochEnabler = document.getElementById("lastUpdatedEpoch");
const lastUpdatedLocalEnabler = document.getElementById("lastUpdatedLocal");
const temperatureFEnabler = document.getElementById("temperatureF");
const temperatureCEnabler = document.getElementById("temperatureC");
const isDayEnabler = document.getElementById("isDay");
const conditionEnabler = document.getElementById("condition");
const conditionCodeEnabler = document.getElementById("conditionCode");
const windKphEnabler = document.getElementById("windKPH");
const windMphEnabler = document.getElementById("windMPH");
const windDegreeEnabler = document.getElementById("windDegree");
const windEnabler = document.getElementById("wind");
const pressureMbEnabler = document.getElementById("pressureMb");
const pressureInEnabler = document.getElementById("pressureIn");
const precipInEnabler = document.getElementById("precipIn");
const precipMmEnabler = document.getElementById("precipMm");
const humidityEnabler = document.getElementById("humidity");
const cloudEnabler = document.getElementById("cloud");
const feelsLikeFEnabler = document.getElementById("feelsLikeF");
const feelsLikeCEnabler = document.getElementById("feelsLikeC");
const visibilityMiEnabler = document.getElementById("visibilityMi");
const UVEnabler = document.getElementById("UV");
const gustMphEnabler = document.getElementById("gustMPH");
const gustKphEnabler = document.getElementById("gustKPH");
const enableAllButton = document.getElementById("EnableAll")
const disableAllButton = document.getElementById("DisableAll")

let ComparisonZone = new Comparison();

//this class exists purely to determine which elements will be displayed
//true means it's on by default, false means it is not
let Displayed = {
        name: true,
        region : false,
        country : true,
        lat : false,
        lon : false,
        tz_id : false,
        epochTime : false,
        localTime : false,
        lastUpdatedEpoch : false,
        lastUpdatedLocalTime : false,
        temperatureC : true,
        temperatureF : false,
        isDay : false,
        condition : false,
        conditionCode : false,
        windMPH : false,
        windKPH : false,
        windDegree : false,
        wind : false,
        windDirection : false,
        pressureMb : false,
        pressureIn : false,
        precipMm : false,
        precipIn : false,
        humidity : false,
        cloud : false,
        feelsLikeC : false,
        feelsLikeF: false,
        visibilityKM : false,
        visibilityMi : false,
        UV : false,
        gustMph : false,
        gustKph : false,
        //weatherImage is the picture based on the current 'condition'
        weatherImage : false,
        setAll(){
            this.name = true;
            this.region = true;
            this.country = true;
            this.lat = true;
            this.lon = true;
            this.tz_id = true;
            this.epochTime = true;
            this.localTime = true;
            this.lastUpdatedEpoch = true;
            this.lastUpdatedLocal = true;
            this.temperatureC = true;
            this.temperatureF = true;
            this.isDay = true;
            this.condition = true;
            this.conditionCode = true;
            this.windMPH = true;
            this.windKPH = true;
            this.windDegree = true;
            this.wind = true;
            this.windDirection = false;
            this.pressureMb = true;
            this.pressureIn = true;
            this.precipMm = true;
            this.precipIn = true;
            this.humidity = true;
            this.cloud = true;
            this.feelsLikeC = true;
            this.feelsLikeF= true;
            this.visibilityKM = true;
            this.visibilityMi = true;
            this.UV = true;
            this.gustMph = true;
            this.gustKph = true;
            this.weatherImage = true;
            updateColor();
    },
    unsetAll(){
        this.name = false;
        this.region = false;
        this.country = false;
        this.lat = false;
        this.lon = false;
        this.tz_id = false;
        this.epochTime = false;
        this.localTime = false;
        this.lastUpdatedEpoch = false;
        this.lastUpdatedLocal = false;
        this.temperatureC = false;
        this.temperatureF = false;
        this.isDay = false;
        this.condition = false;
        this.conditionCode = false;
        this.windMPH = false;
        this.windKPH = false;
        this.windDegree = false;
        this.wind = false;
        this.windDirection = false;
        this.pressureMb = false;
        this.pressureIn = false;
        this.precipMm = false;
        this.precipIn = false;
        this.humidity = false;
        this.cloud = false;
        this.feelsLikeC = false;
        this.feelsLikeF= false;
        this.visibilityKM = false;
        this.visibilityMi = false;
        this.UV = false;
        this.gustMph = false;
        this.gustKph = false;
        this.weatherImage = false;
        updateColor();
    }
    }

let elementsArray = document.querySelectorAll("#filterForm button");
elementsArray.forEach(function(elem) {
    elem.style.color = "red";
    elem.addEventListener("click", () => {
        Displayed[elem.id] = !Displayed[elem.id]
        if (elem.style.color == "red"){
            elem.style.color = "blue";
        }
        else if(elem.style.color == "blue"){
            elem.style.color = "red";
        }
    })
});

function updateColor(){
    elementsArray.forEach(function(elem) {
        if (Displayed[elem.id] == true){
            elem.style.color = "blue";
        }
        else{
            elem.style.color = "red"
        }
    })};
updateColor();

enableAllButton.addEventListener("click", ()=> {
    Displayed.setAll();
})
disableAllButton.addEventListener("click", ()=>{
    Displayed.unsetAll();
})

//This was previously an event listener, but I 
function saveSettings() {
    //basically, just delete and redisplay the list, as well as closing the 
    //filter menu bar. 
    //because of the implementation of Display, the only way to clear the queue is to have it 
    //set the length of the queue to zero. so we will copy the queue. 
    let temp = TileList
    TileList = []
    displayList()
    //second call to display list is because the first one displays an empty list, then the 
    //second one displays the updated list
    TileList = temp;
    displayList()
    document.getElementById("filterForm").style.display = "none";
    filterButton.textContent = "Filter Results";
    enableAllButton.style.display = "none";
    disableAllButton.style.display = "none";
}
/*This tile list is the main list for all of the location tiles.
locations should be added to and taken away from this directly*/
let TileList = [];


//This function will take in a location to search for.
 //It will go the the API and return the information, distilling it
//into the corresponding categories in a temporary Weather object, then 
//add that object to the TileList
async function checkWeather(City){
    let tempLocation = new Weather();
    try{
        const response = await fetch(apiURL + City + "&aqi=no");
        if(response.status == 404 || response.status == 400 && response.status != 200){
            throw Error(name = "Invalid Location", message = "Server responded with an error")
        }
        var data = await response.json();
        errorMessage.innerHTML = null;
    }
    catch(error){
        console.log(`${error.name}! ${error.message}`)
        errorMessage.innerHTML = ("Request cannot be processed")
    }
       
    //The name of the location
    tempLocation.name = data.location.name;
    //The region (In the US, this is the state)
    tempLocation.region = data.location.region;
    //Tce country
    tempLocation.country = data.location.country;
    //The Latitude of this Location
    tempLocation.lat = data.location.lat.toFixed(2);
    //the Longitude of this Location
    tempLocation.lon = data.location.lon.toFixed(2);
    //The Time Zone ID
    tempLocation.tz_id = data.location.tz_id;
    //THe Local time in seconds epoch
    tempLocation.epochTime = data.location.localtime_epoch;
    //the local time in dateTime format(YYYY/MM/DD HH:MM)
    tempLocation.localTime = data.location.localtime;
    //The time that the weather for this location was last updated, in seconds epoch
    tempLocation.lastUpdatedEpoch = data.current.last_updated_epoch
    //the time th eweather for this location was last updated, in dateTime (YYYY/MM/DD HH:MM)
    tempLocation.lastUpdatedLocalTime = data.current.last_updated
    //The current temperature, in degrees celsius
    tempLocation.temperatureC = data.current.temp_c.toFixed(2)
    //the current temperature, in degrees fahrenheit
    tempLocation.temperatureF = data.current.temp_f.toFixed(2)
    //the current day status. 1 = yes, 0 = no
    tempLocation.isDay = data.current.is_day
    //the conditions for this location. this is a descriptive text 
    // may be able to return just about anything
    tempLocation.condition = data.current.condition.text
    //the condition code. also unpredictable. 
    tempLocation.conditionCode = data.current.condition.code
    //the current average wind speed, in miles per hour
    tempLocation.windMPH = data.current.wind_mph.toFixed(2)
    //the current average wind speed, in kilometers per hour
    tempLocation.windKPH = data.current.wind_kph.toFixed(2)
    //the degree direction that the wind is blowing
    tempLocation.windDegree = data.current.wind_degree
    //the cardinal direction associated with the wind direction
    tempLocation.windDirection = data.current.wind_dir
    //the atmoshperic pressure, in millibars
    tempLocation.pressureMb = data.current.pressure_mb
    //the current atmospheric pressure, in inches of mercury
    tempLocation.pressureIn = data.current.pressure_in
    //the precipitation, in millimeters
    tempLocation.precipMm = data.current.precip_mm
    //the presipitation, in inches
    tempLocation.precipIn = data.current.precip_in
    //the humidity, in percent
    tempLocation.humidity = data.current.humidity
    //the current clody status?
    tempLocation.cloud = data.current.cloud
    //what temperature it feels like, in degrees celsius
    tempLocation.feelsLikeC = data.current.feelslike_c.toFixed(2)
    //what temperature it feels like, in degrees fahrenheit
    tempLocation.feelsLikeF = data.current.feelslike_f.toFixed(2)
    //the current visibility, in kilometers
    tempLocation.visibilityKM = data.current.vis_km.toFixed(2)
    //the current visibility, in miles
    tempLocation.visibilityMi = (data.current.vis_km * 0.62).toFixed(2)
    //the UV index, on a scale of 1-10
    tempLocation.UV = data.current.uv
    //the current wind gust speed, in kilometers per hour
    tempLocation.gustKph = data.current.gust_kph.toFixed(2)
    //the current wind gust speed, in miles per hour
    tempLocation.gustMph = data.current.gust_mph.toFixed(2)
    


    //Having collected all of this information, return it.
    //There is a queue reset here, that is just designed to make sure locations are not duplicated
    TileList.push(tempLocation)
    let temp = TileList
    TileList = [];
    displayList();
    TileList = temp;
    displayList();
}

/*This event listener will add a location to the tile list,
 adding the locations data. It is bound to hitting the search
 button. 
 NOTICE: CLICKING THE SEARCH BUTTON AUTOMATICALLY ADDS THE 
 LOCATION TO THE QUEUE*/
searchButton.addEventListener("click", ()=>{
    //add a check to make sure that the QUEUE is not longer than 10 tiles
    if(TileList.length == 10){
        errorMessage.innerHTML = "Too Many Locations! Please Clear a Location Before Adding Another."
    }
    else{
        errorMessage.innerHTML = null;
        checkWeather(searchBox.value)
    }
})

/*
luckyButton.addEventListener("click", ()=> {
    if(TileList.length == 10){
        errorMessage.innerHTML = "Too Many Locations! Please Clear a Location Before Adding Another."
    }
    else{
        errorMessage.innerHTML = null;
        let temp = checkWeather((getRndInteger(-90, 90), getRndInteger(-180, 180)))
        console.log(temp)
        }
    }
)

//used Above
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
*/

//Display list has a check at the beginning of it that examines the current size of TileList
//If it is empty, it will remove locations from the queue until it is empty. 
//This listener is bound to the button that reads: "Cast them into the Fire"
clearButton.addEventListener("click", ()=>{
    //TileList is set to an empty list. THis is because displayList will look at the 
    //size of the list to determine it's next step.
    TileList = [];
    //then displaylist is run, removing locations
    displayList();
    //also remember to clear out the error message if th euser has entered too many locations
    errorMessage.innerHTML = null;
    //delete the current comparison.
})

//This method shows/hides the criteria filter menu
filterButton.addEventListener("click", ()=>{
    //when the button is clicked, It will show the list that is present in the HTML
    //by setting the visibility to 'block'
    var x = document.getElementById("filterForm");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    //the filter and submit button is split into two parts.
    x = document.querySelector(".filter-er")
        //When the Submit ad Apply button is clicked, it will run this function to update the display
    if (x.textContent === "Submit and Apply") {
        saveSettings();
      } 
       //When the filter button is clicked, it will change over to the submit and apply button, and show everything
      else {
        x.textContent = "Submit and Apply";
        enableAllButton.style.display = "inline";
        disableAllButton.style.display = "inline";
      }
})


/*displayList will display the current TileList. 
NOTICE: AT THE VERY BEGINNING OF THIS METHOD, IT CHECKS THE SIZE OF TILELIST.
IF IT IS 0, IT WILL AUTOMATICALLY DELETE ALL THE TIMES IN THE QUEUE WHEN IT IS 
RUN. */
function displayList(){
    const queue = document.getElementById("queue");

    //if the list is empty(It will be set to that when the "Clear" button is pressed),
    //remove elements until the queue is empty
    //FIXME: Currently this only removes "Half" of the list... ?
    if(TileList.length == 0){
        //remove all locations from the queue:
        //First, select all elements with the class name"LocationTile"
        //This makes retrieved a list of HTML Location Tags
        const retrieved = document.getElementsByClassName("LocationTile");
        //for every element in that list, remove it from "queue"
        while(queue.hasChildNodes()){
            queue.removeChild(queue.firstChild);
        }
        return;
    }

    //for every tile in the tile list, create a new <div> element. Then, under that
    //<div> element, add a <p> element that holds each attribute for this weather item. 
    let i = TileList.length - 1;
    for( i = 0; i < TileList.length; i++){
        //create a new <div> element with class "LocationTile" and put it in the "Queue" HTML element
        const newTile =document.createElement("div");
        //add the "LocationTile" Class to it. 
        newTile.classList.add("LocationTile");
        for (const attribute in TileList[i]){
            if(Displayed[attribute]){
                //add an if-check to set the weather Icon. it will need to be added as an img element
                //for each attribute, create a <p> element and add it to the <div> element
                const newAttribute = document.createElement("p");
                //'attribute' is the name of the attribute, TileList[i][attribute] is the value of it
                //to make it look nicer, I am capitalizing the first letter of each attribute. 
                let text = attribute.charAt(0).toUpperCase() + attribute.slice(1) + " : " + TileList[i][attribute];
                //In order to create new HTML and add it to the document, they have to first take the form
                //of a node. That is created below 
                let newNode = document.createTextNode(text);
                //add the 'attribute' class to it
                newAttribute.classList.add("attribute");
                //then append this new Node to the attribute that we created
                newAttribute.appendChild(newNode)
                //then append that new attribute Element up to the created Tile
                newTile.appendChild(newAttribute)
            }
        }
        //this adds a clearbutton with a class that is it's index in the list.
        //when it gets called to clear this tile from the list, it will look to this class to 
        //figure out which tile to remove.
        let clearTileButton = document.createElement('BUTTON');
            // creating text to be
            //displayed on button
            let index = i
            clearTileButton.addEventListener("click", ()=>{
                if(TileList.length == 1){
                    TileList = [];
                    displayList();
                    returnw
                }
                TileList.splice(index, 1)
                let temp = TileList
                TileList = [];
                displayList();
                TileList = temp;
                displayList();
            })
            clearTileButton.classList.add(i)
            clearTileButton.setAttribute('id','delete-button');
            // appending button to div
            newTile.appendChild(clearTileButton);
            ////////////////////////////////////////////////////////////////////////////////////////
            //this adds a compare tile button with a class that is it's index in the list.
            let compareTileButton = document.createElement('BUTTON');
            //compateTileButton.classList
            let indexCompare = i
            compareTileButton.addEventListener("click", ()=>{
                if(ComparisonZone.tile1.name == ""){
                    //add this tile in the first slot. IndexCompare is derived from the position in the 
                    //for loop above 

                    //FIXME: add a way to change the color of the button after it is pressed to indicate that
                    //the button has been pressed
                    ComparisonZone.tile1 = TileList[indexCompare]
                    ComparisonZone.updateAndDisplay();
                }
                else if(ComparisonZone.tile1.name != ""){  //if there is a TIle in the first slot
                    ComparisonZone.tile2 = TileList[indexCompare]
                    ComparisonZone.updateAndDisplay();
                    ComparisonZone.tile1 = new Weather();
                    ComparisonZone.tile2 = new Weather();
                    return
                }
            })
            compareTileButton.classList.add(TileList[i][name])
            compareTileButton.setAttribute('id','compare-button');
            newTile.appendChild(compareTileButton);
            /////////////////////////////////////////////////////////////////////////////////////////

        //finally, append the new Tile into the queue. This tile contains all of the data from the 
        //dataframe, with /undefined/ anywhere that nothing was found in the Database
        queue.appendChild(newTile);

        
    }

        /*As an addendum, this looks really complicated. the reason i have a <p> in a <div> is because the 
        original formatting set is as a super long string. adding \n to the end of the attributes wouldn't
        fix it either. this seems to make it look better, and potentially allows us to manipulate the data 
        easier as each element is now targetable via the "attribute" class. 
        */
    }

    function removeElement(elementnum){
        //find the element with elementName as its title, and remove it from TileList, then
        //redraw the Queue
        return;

    }


    ///////////////////////////////////////////

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
      function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      
      function checkCookie() {
        let user = getCookie("Location");
        if (user != "") {
          checkWeather(user)
        } else {
    
        }
      } 
    
      setCookie("Location", "Sharon Springs, KS", "0.1")
      checkCookie()
    //displayList();document.cookie = `username=${}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;