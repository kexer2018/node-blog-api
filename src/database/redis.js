const Redis = require('ioredis')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

const redis = new Redis({
	host: process.env.REDIS_HOST || '127.0.0.1',
	port: process.env.REDIS_PORT || 6379,
	db: process.env.REDIS_DB || 0,
})

redis.on('error', (err) => {
	console.error('Redis error:', err)
})

redis.on('connect', () => {
	console.log('Connected to Redis')
})

const set = async (userName, value, expiry) => {
	try {
		const key = `jwt:${userName}`
		const args = expiry ? expiry : null
		await redis.set(key, value, 'EX', args)
	} catch (error) {
		console.error('Redis set error:', error)
		throw error
	}
}

const get = async (key) => {
	try {
		return await redis.get(key)
	} catch (error) {
		console.error('Redis get error:', error)
		throw error
	}
}

const del = async (key) => {
	try {
		await redis.del(key)
	} catch (error) {
		console.error('Redis del error:', error)
		throw error
	}
}

module.exports = {
	set,
	get,
	del,
}
