const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['unauthorized'] = require('../middleware/unauthorized.js')
middleware['unauthorized'] = middleware['unauthorized'].default || middleware['unauthorized']

export default middleware
