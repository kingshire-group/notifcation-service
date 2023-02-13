const NODE_ENV = process.env.NODE_ENV || 'development';

const development = {
	backend: {
		authenticationDomain: process.env.REACT_APP_DEV_BACKEND_URL
	}
}

const production = {
	backend: {
		authenticationDomain: process.env.REACT_APP_DEV_BACKEND_URL
	}
}

const test = {
	backend: {
		authenticationDomain: process.env.REACT_APP_DEV_BACKEND_URL
	}
}

const config = {
	test,
	development,
	production,
}

export default config[NODE_ENV]
