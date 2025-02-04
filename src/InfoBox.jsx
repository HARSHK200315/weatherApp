import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ Info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1532035205886-fa50cc934265?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1668418321923-becc3ef20077?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1706819657428-c16db9e26ef2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAIN_URL = "https://media.istockphoto.com/id/1191292846/photo/hazardous-weather-condition-on-the-road-seen-through-windshield.webp?b=1&s=612x612&w=0&k=20&c=j2HNQNHCjrj2YrcNkBV_CuIKy2fHbJ6lihyY3ZVVzHM=";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}{" "}
                            {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {Info.temp}&deg;C</p>
                            <p>Humidity = {Info.humidity}</p>
                            <p>min Temperature = {Info.tempMin}&deg;C</p>
                            <p>max Temperature = {Info.tempMax}&deg;C</p>
                            <p>The Weather can be described as "{Info.weather}" and Feels Like = {Info.feelsLike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}