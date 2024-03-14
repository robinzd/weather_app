import { fetchWeatherApi } from 'openmeteo';
export const CurrentWeather = async (req: any, res: any) => {
    let status = 200
      let message = "Combined Array"
const params = {
	"latitude": req.body.latitude,
	"longitude": req.body.longitude,
	"hourly":req.body.hourly,
    "past_days":parseInt(req.body.past_days),

    
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

const response = responses[0];
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();
const hourly = response.hourly()!;
const weatherData = {

	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
		windSpeed10m: hourly.variables(2)!.valuesArray()!,
	},

};
const combinedArray = weatherData.hourly.time.map((time, index) => ({
        Time:time,
        Temperature: weatherData.hourly.temperature2m[index],
        RelativeHumidity: weatherData.hourly.relativeHumidity2m[index],
        WindSpeed: weatherData.hourly.windSpeed10m[index],
    }));
      res.send({ status:status, message:message, data:combinedArray })
    
}