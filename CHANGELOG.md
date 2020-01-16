# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Included intial spec for serif fonts

### Fixed

* Remove double-up of nested font directories by only copying subfiles

### Changed

* Adjust build process pass `node_modules/` as an include path within SCSS
* Use upcoming SCSS support in `typeface-*` packages; this removes the need
  for a find-and-replace process during font builds

## [2.0.0-alpha.3] - 2019-12-16

### Fixed

* Halve build size by not importing Bootstrap twice

## [2.0.0-alpha.2] - 2019-12-10

### Added

* Re-add this changelog, using the Keep a Changelog format
* Added CDN release script
* Add build instructions and version change script
* Add minified fonts CSS (`fonts.min.css`)
* Upgrade Bootstrap to 4.4, bringing [various
  features and improvements](https://blog.getbootstrap.com/2019/11/26/bootstrap-4-4-0/)

### Changed

* Switch licence file to .md
* Include Bootstrap's licence and reformat for clarity
* Remove old font path SCSS variable
* Update dependencies, particuarly `@mdi/font` and `bootstrap`
* Switch CDN systems; use `rclone` uploading


## [2.0.0-alpha.1] - 2019-08-22

### Changed

* Rebuild based on Bootstrap v4, as a theme rather than a fork of Bootstrap.
  The new release aims for simplicity, re-using components from Bootstrap
  rather than reinventing its own; the aim is to add templates and the like
  in time.
* Documentation is simplified and (currently) based on a single-page template
  from Bootswatch.

### Added

* Ship Bootstrap CSS/JS and dependencies, images and logos, fonts (Open Sans and
  Playfair Display), iconography (MDI)


## [1.0.0-beta.1] - 2016-05-24

### Added

* Initial release based on Bootstrap v4.0.0-alpha2
* Added changelog
* Add Landing page and Landing content page examples

### Changed

* Remove side margin on footer social icons
* Redirect large icon font size slightly

### Fixed

* Correct versioning from being based on Bootstrap to being our own
* Add `.opaque` and `.transparent` classes
* Backport fix for https://github.com/twbs/bootstrap/pull/19885 for card deck
  heights
* Gradients use 95% opacity by default.
  `.list-bordered` only applies to immediate children; this fixes nested
  lists
* Use theme colours from microsite layout (fixes #10).

[2.0.0-alpha.3]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.3
[2.0.0-alpha.2]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.2
[2.0.0-alpha.1]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.1
[1.0.0-beta.1]: https://github.com/jcu/web-framework/releases/tag/v1.0.0-beta.1
