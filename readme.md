# _s (underscores) fork

Customized fork of the [_s (underscores) WordPress theme][underscores-theme] by [Automattic][automattic].

## Manual setup

### Initial steps

1. Download a clone/copy of this repository and rename the folder (for example, `custom-wp-theme`).
1. Move the folder into the `wp-project-name/wp-content/themes/` directory.
1. Open the folder in a text editor and perform a five-step find-and-replace on the name in all files.

### Find-and-replace steps

1. Search for `'_s'` (inside single quotations) to capture the text domain.
	* Search for: `'_s'`
	* Replace with: `'custom-wp-theme'`
1. Search for `_s_` to capture all the function names.
	* Search for: `_s_`
	* Replace with: `custom_wp_theme_`
1. Search for `Text Domain: _s` in style.css.
	* Search for: `Text Domain: _s`
	* Replace with: `Text Domain: custom-wp-theme` in style.css.
1. Search for <code>&nbsp;\_s</code> (with a space before it) to capture DocBlocks.
	* Search for: <code>&nbsp;\_s</code>
	* Replace with: <code>&nbsp;Custom_WP_Theme</code>
1. Search for `_s-` to capture prefixed handles.
	* Search for: `_s-`
	* Replace with: `custom-wp-theme-`

### Final steps

Finish customizing the theme by editing the following files:

1. `proxy` URL in `gulpfile.js`
1. `name` and `description` values in `package.json`
1. Name of the global object variable in `/es6/main.js`
1. `Description` value in `/sass/style.scss`
1. Contents of `readme.md`

[underscores-theme]: https://github.com/Automattic/_s
[automattic]: https://automattic.com