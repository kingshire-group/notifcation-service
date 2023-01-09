export const buildPath = navigationOption => 
	navigationOption.name !== 'Home' ? 
		`/${navigationOption.pathExtensionOf}/${navigationOption.name.split(' ').join('-').toLowerCase()}`:
		'/'
