import express, { Request, Response } from "express"

const router = express.Router();
router.post('/weather', async (req: Request, res: Response) => {
    const e = await import("../middleware/WeatherApp").then((ret) => { ret.WeatherApp(req, res) })
})

export { router }