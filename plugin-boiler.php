<?php
// Markup for what wordpress will show on the plugins section of the admin panel
/**
 * Plugin Name:       Plugin Boiler
 * Description:       Example of custom blocks plugin scaffolded.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Young
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       plugin-boiler
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_plugin_boiler_block_init() {
	//register each block by folder name
	register_block_type( __DIR__ . '/build/example-block' );
}
add_action( 'init', 'create_block_plugin_boiler_block_init' );

//Set new Category for all blocks in plugin
add_filter( 'block_categories', 'new_gutenberg_category', 10, 2 );
function new_gutenberg_category( $categories, $post ) {
  return array_merge(
    $categories,
    array(
      array(
        'slug' => 'advanced-blocks',
        'title' => 'Advanced Blocks',
        'icon' => 'awards'
      ),
    )
  );
}
