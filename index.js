import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let favoriteCities = [];


app.get('/', (req, res) => {
    const indexPath = path.resolve(__dirname, 'index.html');
    res.sendFile(indexPath);
});

app.post("/Submit", async (req, res) => {
    const givenLocation = req.body.location;

    try {
        // Fetch weather data from OpenWeatherMap API
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${givenLocation}&appid=${openWeatherMapApiKey}`);
        const weatherData = await weatherResponse.json();

        // Update the card with weather information
        const cardText = `Temperature: ${weatherData.main.temp}°C, Weather: ${weatherData.weather[0].description}`;
        res.send(cardText);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
  



// let loc1 = [
//     {
//         city: "chennai",
//         weather: "30.3",
//         type: "normal"
//     }
// ];

// let loc2 = [
//     {
//         city: "Pudukkottai",
//         weather: "33.3",
//         type: "Summer"
        
//     }
// ]; 

// let loc3 = [
//     {
//         city: "Trichy",
//         weather: "28.3",
//         type: "cloudy"
        
//     }
// ];

// let loc4 = [
//     {
//         city: "Tanjore",
//         weather: "30.3",
//         type: "normal"
        
//     }
// ];

// let loc5 = [
//     {
//         city: "Madurai",
//         weather: "34.3",
//         type: "summer"
        
//     }
// ];

