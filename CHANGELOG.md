# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

* Upgrade Bootstrap to v4.5.0. Note the changes at
  https://github.com/twbs/bootstrap/releases/tag/v4.5.0
* Upgrade mdi icons to v5.2.45

### Fixed

* Fixed JS error in site docs homepage

## [2.0.0-alpha.6] - 2020-05-05

### Added

* Add `--font-family-serif` variable to root

### Fixed

* Bump jQuery version to resolve security issues

### Changed

* Removed customisations for `.btn-outline-warning`; it should now only be
  used on a dark background
* Switched breadcrumb styles and divider to match JCU website (where
  accessible)

## [2.0.0-alpha.5] - 2020-03-11

### Added

* Added JCU 50th Anniversary logo variations

### Changed

* Changed `h1` to use serif font

## [2.0.0-alpha.4] - 2020-01-17

### Added

* Added `.font-serif` utility for setting serif fonts; serif fonts may be
  applied by default to certain headings or display typography in future
* Added `.font-smooth` utility for enabling non-standard font-smoothing. This
  adds feature/appearance-parity with the JCU homepage but is
  [non-standard](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth)
  and [inadvisable](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
* Included intial spec for serif fonts

### Fixed

* Remove double-up of nested font directories by only copying subfiles
* Adjust Australia Unlimited logo to remove empty space at bottom

### Changed

* Adjust colours according to 2020 homepage; these are subject to change
  depending on future web redesigns
* Adjust build process pass `node_modules/` as an include path within SCSS
* Use upcoming SCSS support in `typeface-*` packages; this removes the need
  for a find-and-replace process during font builds
* Remove background colour from Breadcrumbs; it can be added manually via
  `.bg-light` as required

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

[2.0.0-alpha.6]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.6
[2.0.0-alpha.5]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.5
[2.0.0-alpha.4]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.4
[2.0.0-alpha.3]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.3
[2.0.0-alpha.2]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.2
[2.0.0-alpha.1]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.1
[1.0.0-beta.1]: https://github.com/jcu/web-framework/releases/tag/v1.0.0-beta.1
