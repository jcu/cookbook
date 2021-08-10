# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* Automated uploading & hashing of distribution files to the JCU CDN and NPM via Github Actions

### Changed

* **BREAKING** `bootstrap` upgraded to v5 (was 4.6.0) ([Migration Docs](https://getbootstrap.com/docs/5.0/migration/))
* **BREAKING** Updated `react-bootstrap` to `next` (change to v2 when released) tag to have bootstrap 5 compatibility ([Migration Docs](https://react-bootstrap.github.io/migrating/))
* **BREAKING** Updated SASS compiler to `dart-sass` (was `node-sass`)
* **BREAKING** Yarn upgraded to v2 (without PnP functionality)

### Removed

* **BREAKING** Removed the committed distributable files (`dist` folders for both the project and its docs)

## [2.0.0] - 2021-07-01

### Changed

* Upgrade dependencies, which improves output of font definitions from
  `fontsource`.

## [2.0.0-alpha.13] - 2021-02-10

### Changed

* Upgrade Bootstrap to v4.6.0. Note the changes at
  https://github.com/twbs/bootstrap/releases/tag/v4.6.0
* Upgrade dependencies, pin @fontsource to ~4.1 to avoid known bug (see TODO)

## [2.0.0-alpha.12] - 2021-01-13

### Changed

* Switch `typeface` project packages for `fontsource`. This adds support for
  characters in scripts other than Latin (such as Greek or Cyrillic).
* Fix build by adding `postcss` as a dependency since it is now a peer
  dependency of `postcss-cli` in v8.0.0
* Upgrade dependencies

## [2.0.0-alpha.11] - 2020-10-16

### Changed

* Upgrade Bootstrap to v4.5.3. Note the changes at
  https://github.com/twbs/bootstrap/releases/tag/v4.5.3
* Upgrade dependencies

## [2.0.0-alpha.10] - 2020-08-12

### Added

* Add `latest` and `2.0` (version number) directories to CDN to always reflect
  the latest version

### Changed

* Upgrade Bootstrap to v4.5.2. Note the changes at
  https://github.com/twbs/bootstrap/releases/tag/v4.5.2
* Upgrade dependencies

## [2.0.0-alpha.9] - 2020-08-06

### Changed

* Upgrade Bootstrap to v4.5.1. Note the changes at
  https://github.com/twbs/bootstrap/releases/tag/v4.5.1

## [2.0.0-alpha.8] - 2020-07-31

### Changed

* Renamed project to JCU CookBook
* Upgrade dependencies

## [2.0.0-alpha.7] - 2020-05-14

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

[2.0.0-alpha.13]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.13
[2.0.0-alpha.12]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.12
[2.0.0-alpha.11]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.11
[2.0.0-alpha.10]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.10
[2.0.0-alpha.9]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.9
[2.0.0-alpha.8]: https://github.com/jcu/cookbook/releases/tag/v2.0.0-alpha.8
[2.0.0-alpha.7]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.7
[2.0.0-alpha.6]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.6
[2.0.0-alpha.5]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.5
[2.0.0-alpha.4]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.4
[2.0.0-alpha.3]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.3
[2.0.0-alpha.2]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.2
[2.0.0-alpha.1]: https://github.com/jcu/web-framework/releases/tag/v2.0.0-alpha.1
[1.0.0-beta.1]: https://github.com/jcu/web-framework/releases/tag/v1.0.0-beta.1
