// EdgeOne Pages Worker entry point with onRequest export
import app from './app.js'

export async function onRequest(context) {
	return app.fetch(context.request, context.env, context);
}
