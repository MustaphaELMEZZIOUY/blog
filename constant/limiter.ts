import { rateLimit } from "../utils"

const limiter = rateLimit({
    uniqueTokenPerInterval: 500, // Max 500 users per second
    interval: 60 * 1000, // 60 seconds
})

export {limiter}