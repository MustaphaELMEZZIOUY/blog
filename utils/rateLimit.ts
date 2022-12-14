import LRU from 'lru-cache';
import { NextApiResponse } from 'next';

const rateLimit = (options: any) => {
  
  const tokenCache = new LRU({
    max: parseInt(options.uniqueTokenPerInterval || 500, 10),
    maxAge: parseInt(options.interval || 60000, 10),
  })

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) as number[] || [0]
        if (!tokenCount[0] && tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= (typeof limit === 'number' ? limit : parseInt(limit, 10));
        res.setHeader('X-RateLimit-Limit', limit)
        res.setHeader(
          'X-RateLimit-Remaining',
          isRateLimited ? 0 : limit - currentUsage
        )

        return isRateLimited ? reject() : resolve('You can go ahead!')
      }),
  }
}

export default rateLimit