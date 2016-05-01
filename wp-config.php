<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bsafe');

/** MySQL database username */
define('DB_USER', 'danpliego');

/** MySQL database password */
define('DB_PASSWORD', 'Nana1823');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'f&3<lVXv;i*x.;*_p>]y*Bk!Q-::V;80D34{$]V&Z+U,}R#>9Hdj$K)BagS0/~@t');
define('SECURE_AUTH_KEY',  'pE]yupC.eA[8r>QYMuMrK|:&Clj%Ym{6dj2V#=Q&=5S>y^L>{tD:+UUHhjm25uOJ');
define('LOGGED_IN_KEY',    '[]00Q&1fuv`|mYYVu!<Ij`-->vcO=c,Bpv*)Kd|n11?A78ATIBX=z(!<=#k%9VBK');
define('NONCE_KEY',        'SlM68=Ss8h;7U9GMzv~+hJO6{%q> H>ktJCp%$p#zF06C:?83jdNr0&}2%]pWo{5');
define('AUTH_SALT',        '858bz^A>|m*_|>Rb}0sXyH0:ct0V+ks.@et 0:QW[WtOdnU/K9GG&mfZ%^0^[kKI');
define('SECURE_AUTH_SALT', 'tJ:s_!{?xG,Me+HuHJrI2mE/VI &F^w1nYV+#ZCQUb}6)rK37HTekVZZPL5#.%4R');
define('LOGGED_IN_SALT',   'c^ `4M&[k!y`9q/bi%Ncbk9drT-:etz@&;ck-ZZLKjIgHy-I~LX+/)r,n&*=%alh');
define('NONCE_SALT',       'hOAIXr2Xjw$p@e{{z%,(&BR-}*0]M(3WynV#dfyet,{9CsoK+$7~=:P10]s$iK$>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
