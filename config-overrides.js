const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
	...addBabelPlugins(
		// Your Babel plugin(s) here
		'module:@preact/signals-react-transform'
	)
	// You can add more customization here
);
