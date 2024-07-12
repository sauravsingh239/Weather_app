import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlZXxlbnwwfHwwfHx8MA%3D%3D"
const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=is&k=20&c=8GJarlmwJNlW6oUBeXGt7clFxds1rC7gz4XtXa4Frj0=";   
const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
const RAIN_URL="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";   




    return(
        <div className="InfoBox">
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 
            ? RAIN_URL
            : info.temp>15 
            ? HOT_URL 
            : COLD_URL}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
         info.humidity>80 
            ? <ThunderstormIcon/>
            : info.temp>15 
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like ={info.feelsLike}&deg;C</p>
        </Typography>
        </CardContent>
    </Card>
    </div>
        </div>
    )
}