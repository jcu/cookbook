## Workarounds

* Add cheatsheet when https://github.com/twbs/bootstrap/pull/34699 is released
  (next release of Bootstrap v5.x)
* https://github.com/yarnpkg/berry/issues/2670: npm-run-all commands in
  `package.json` need to be quoted
* https://github.com/Ayc0/yarn-plugin-envs: reintroduce npm environment
  variables into scripts

## Inclusions

* Favicon.ico - further sizes, transparent background and so on
* CI checks for accessibility (https://github.com/pa11y/pa11y-ci)

## Project management

* Permission for use and distribution of flags should be checked

* Fonts:

  * Clarify which fonts to be used on pages and where:

    * Homepage body font is now Bliss (as "Bliss 2") or Open Sans, `<h1>` tags use Playfair Display
    * What weights/styles of fonts should be used?
    * What is the licensing for fonts? (eg https://typography.net/licensing#webfont)
    * Homepage uses font smoothing globally, but it shouldn't
      (https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/).
      Most items on the homepage are bold when they display as normally
      rendered on macOS or Chrome.

* Colors:

  * Clarification around inconsistent colours in Brand DNA and on webpages
  * Should JCU logo be using black (#000) or off-black/grey (#231f20) --
    website uses the former, download .zip files use the latter.
  * Incorrect colours in use on Torres Straight Islander Flag on website

## Technical

* Can't use fusv to find usused variables because of lack of @import support
  https://github.com/XhmikosR/find-unused-sass-variables/issues/23.
  Linting CSS in this way is disabled for now.

* `imagemin` loses directory structure on output of minified images
  https://github.com/imagemin/imagemin/issues/191
