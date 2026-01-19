// EdgeOne Pages Worker entry point
import app from './app.js'

export default {
	async fetch(request, env, ctx) {
		return app.fetch(request, env, ctx);
	}
}
