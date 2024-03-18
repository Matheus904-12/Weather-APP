import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from "react";

const App = () => {
  const [data, setData]=React.useState({
  current: {
    cloud: 100,
    condition: {
      code: 1009,
      icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
      text: "Overcast",
    },
    feelslike_c: 10.6,
    fellslike_f: 51,
    gust_kph: 45.4,
    gust_mph: 28.2,
    huminity: 82,
    is_day: 0,
    last_updated: "2024-03-18 14:21",
    last_updated_epoch: 1673372700,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 29.62,
    pressure_mb: 1003,
    temp_c: 13,
    temp_f: 55.4,
    uv: 1,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 220,
    wind_dir: "SW",
    wind_kph: 24.1,
    wind_mph: 15,
  },
  location: {
    country: "United Kingdom",
    lat: 51.52,
    localtime: "2024-03-18 14:21",
    localtime_epoch: 1673373502,
    lon: -0.11,
    name: "London",
    region: "City of London, Greater London",
    tz_id: "Europe/London",
  },  
});
 
const icon =data.current.condition.icon;

console.log("===================================");
console.log(data.current.cloud);
console.log(icon);
console.log("===================================");
  React.useEffect(() => {
   // fetch(
   //  'http://api.weatherapi.com/v1/current.json?key="1cab764c8d3b4c37a43160629241803"&q=London'
   //   )
   //    .then(response => response.json())
   //   .then(data => {
   //     console.log('===================================');
   //     console.log(data);
   //     console.log('===================================');
   //     // do somethingh whith the data
   //   })
   //   .catch((error) => {
   //     console.log('===================================');
   //     console.log(error);
   //     console.log('===================================');
   //   });
  }, []);

  return (
    <SafeAreaView>
      <Text>App</Text>
      <Text>{data.current.cloud}</Text>
      <Image
        source={{ url: icon }} style ={{ width: 100, height: 100 }} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create{{url: icon}};
