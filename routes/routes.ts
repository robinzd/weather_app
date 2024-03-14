import express, { Request, Response } from "express"

const router = express.Router();
router.post('/weather', async (req: Request, res: Response) => {
    const e = await import("../middleware/WeatherApp").then((ret) => { ret.WeatherApp(req, res) })
})
router.post('/currentweather', async (req: Request, res: Response) => {
    const e = await import("../middleware/CurrentWeather").then((ret) => { ret.CurrentWeather(req, res) })
})

export { router }