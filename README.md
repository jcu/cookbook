# JCU CookBook

[![Node.js CI](https://github.com/jcu/cookbook/actions/workflows/node.js.yml/badge.svg)](https://github.com/jcu/cookbook/actions/workflows/node.js.yml)

CookBook, formerly known as the JCU Web Framework, can be integrated with any
type of web project you're working on – particularly those that support
Bootstrap.

## Features

* Fully-featured web front-end component library, styled with JCU colours and
  based on [Bootstrap v4](https://getbootstrap.com), including:

  * Responsive grid system
  * Layout and typography
  * Components like buttons, cards, navigation and more
  * Utilities
  * ...and everything else that [Bootstrap supports](https://getbootstrap.com/docs/)

* JCU logos and website artwork
* Iconography from [Material Design Icons](https://materialdesignicons.com/)
  (optional)
* Font families and CSS for Open Sans and Playfair Display (optional)
* Dedicated CDN hosting of all resources, including fonts and iconography

## User documentation

* Bootstrap: https://getbootstrap.com/docs/4.6/
* Icon reference: https://materialdesignicons.com/
* [CookBook Changelog]

## Integration

CookBook is, in essence, a themed version of Bootstrap and can be used as such, like so:

* Web and HTML:

  * Static or dynamic web pages
  * As a drop-in replacement for Bootstrap in any system or app that is built
    with Bootstrap's CSS classes

* React:

  * As a drop-in replacement for stylesheets in
    [`react-bootstrap`](https://react-bootstrap.netlify.com/getting-started/introduction/#stylesheets)
  * As a custom theme or as a base for creating customised Sass within Create React App
    ([documentation](https://facebook.github.io/create-react-app/docs/adding-bootstrap#using-a-custom-theme))


## Usage

JCU CookBook resources can be included in your project from JCU's official CDN
in a similar manner to that of Bootstrap's CDN.  Insert the following code
into your project:

```html
<!-- In the <head> of your project -->
<link rel="stylesheet" href="https://cdn.jcu.edu.au/cookbook/2.0/css/cookbook.min.css">
<link rel="stylesheet" href="https://cdn.jcu.edu.au/cookbook/2.0/css/fonts.min.css">
```

```html
<!-- Before the closing </body> tag in your project -->
<script src="https://cdn.jcu.edu.au/cookbook/2.0/js/jquery.min.js"></script>
<script src="https://cdn.jcu.edu.au/cookbook/2.0/js/popper.min.js"></script>
<script src="https://cdn.jcu.edu.au/cookbook/2.0/js/bootstrap.min.js"></script>
```

Refer to the official User Documentation links above for how to build pages
using Bootstap.

### Resources

Images can be used from the CDN like so:

```html
<link rel="icon" href="https://cdn.jcu.edu.au/cookbook/2.0/img/favicon.ico" />
<img src="https://cdn.jcu.edu.au/cookbook/2.0/img/logos/jcu-logo-horizontal.svg" alt="James Cook University (JCU) Australia logo">
```

Available resources and their corresponding paths can be found by referrring to the
[`dist/`](https://github.com/jcu/cookbook/tree/master/dist/) directory within this repository.
The subpath should be appended after the version number in the URL, as per the example.

### Iconography

If you'd like to use the optional iconography library, you can add the
following as well:

```html
<!-- In the <head> of your project -->
<link rel="stylesheet" href="https://cdn.jcu.edu.au/cookbook/2.0/css/materialdesignicons.min.css">
```

You can now use icons by following the instructions at
<https://dev.materialdesignicons.com/getting-started/webfont> (skipping the
setup steps as you've already done them).

### Versions

Different versions of CookBook are available on the CDN depending on your
desired stability and level of control over the resources:

* `latest` – always use the latest release, including major versions that may
  have backwards incompatible changes; or
* `2` – always use the latest release under this major version; or
* `2.0` – always use the latest release under this minor version; or
* `2.0.0-alpha.13` – A specific version number.

So, for example, if you wanted to always use the latest version of CookBook,
and are okay with major version changes, use the following format of URL:

```html
<link rel="stylesheet" href="https://cdn.jcu.edu.au/cookbook/latest/css/cookbook.min.css">
```

For other verisons, replace `latest` with your desired major, minor or patch
version. Note that you must keep all versions of resources in sync across all
HTML tags to ensure things function correctly.

### Upgrading

To upgrade your project to use a more recent version of CookBook, simply
change its version in your HTML. If you are moving to a new major version, you
should refer to the [CookBook Changelog] for details of changes.  For minor or
patch releases, you should do the same but given our use of SemVer, changes
will be feature releases or bug fixes.

## Development

Builds utilise the same style of package scripts defined in `package.json`
that Bootstrap does, with some additional steps and changes for the inclusions
in this package.  At a high level, however, the process looks like so:

1. CSS: test, compile and minify CSS and font dependencies
1. JS: collate all dependencies
1. Images: minify and collate all images
1. Documentation: assemble and build

The resulting distribution is then published to the CDN and documentation
published accordingly online (coming shortly).

### Building

1. Install this package and its dependencies with:

   ```sh
   yarn
   ```

1. Execute a build with:

   ```sh
   yarn dist
   ```

1. Test the resulting build.

   At present during the alpha and beta process, this involves manual testing
   with the HTML documentation and checking against in-development
   applications.

### Release process

1. Firstly, follow the instructions above for Building this project.

1. Set up an Rclone environment with `rclone config` and create a remote
   called `jcu-cdn-cookbook`. Ask a maintainer if you're unsure what the
   configuration should contain.

1. Build a release and copy the distribution to CDN via:

   ```sh
   yarn release
   ```

1. Update `CHANGELOG.md` and CDN URLs inside `README.md` with the current date
   and released version

1. Commit the build to Git and tag accordingly:

   ```sh
   git commit CHANGELOG.md README.md dist/ -m "Release v9.9.9"
   git tag v9.9.9
   ```

1. Publish to NPM via the following:

   ```sh
   yarn publish
   ```

   Don't set a `New version` at this time; just hit enter/return.  We'll
   update it ourselves in a moment.

1. Update the working version number in the source code:

   ```sh
   yarn release-version [old-version eg 2.0.0] [new-version eg 2.0.1]
   git commit -a -m "Back to development"
   ```

   When using `yarn release-version`, ensure you omit any `v` prefix for
   version numbers.

1. Push the results:

   ```sh
   git push
   git push --tags
   ```

### Upgrades

Upgrading dependencies – including Bootstrap – takes place via:

```sh
yarn upgrade-interactive --latest
```

where you can inspect the recent changes and assess the impact of the
dependency changes on the project.  In general, minor or patch version changes
should be fine to apply, provided everyone is following SemVer.

When it comes to Bootstrap itself, pay close attention to the [release
notes](https://github.com/twbs/bootstrap/releases) and the [official
blog](https://blog.getbootstrap.com/) for details of changes.  As with other
dependencies, the same SemVer rules apply but carefully check the resulting
theme when built as regressions are always possible.

Once you've upgraded, inspect the documentation site to ensure styles and
functionality is working as expected.  We'll have more automated processes for
this in the near future.

## Accessibility

JCU CookBook aims to allow websites and applications that that use it
to be compliant with [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/).
As a component library, it is possible for system implementers and developers
to mix and match components, add styles and integrate with applications in
ways that may not meet WCAG requirements.  One such example is using light
text or button classes on top of a light background; the helper classes exist,
but to enable a developer to create an accessible environment.  In short, we
strive to provide the toolkit that web systems can use to be fully accessible,
but it is the responsibility of each application to test themselves.

Contributions are always welcome to improve accessibilty within this project
and the core components it provides.

## References

### Guidelines

* Favicons: https://github.com/audreyr/favicon-cheat-sheet
* Code Guide: https://codeguide.co

### Sources

* [JCU Brand DNA v2.7](https://www.jcu.edu.au/marketing-toolkit/brand-dna/Brand-DNA-2020-v2.7.pdf)
  (retrieved 2020-07-31), adapted like so:

  * Certain colours were adjusted or selected for accessibility in terms of colour
    contrast

* JCU website (accessed 2020-07-31)

* Institutional logos (retrieved in `.zip` archive form, converted into
  web-compatible SVG format and colours set to match the JCU website logo)

  * 50th Anniversary logos had duplicate `0` (zero) and `YEARS` shapes
    removed from vectorised files (except small vertical/shield variants)

#### Flags

See
https://www.pmc.gov.au/government/australian-national-symbols/australian-flags
for details.  Reproduction of the following resources is underst

* Australian Aboriginal Flag: https://en.wikipedia.org/wiki/File:Australian_Aboriginal_Flag.svg
  (Public domain in USA; educational use in Australia)

* Torres Straight Islanders Flag: https://en.wikipedia.org/wiki/File:Flag_of_the_Torres_Strait_Islanders.svg
  (Non-free media; education use in Australia)


## Acknowledgements

* Based upon the Bootswatch build system https://github.com/thomaspark/bootswatch
* Material Design Icons and integration based upon https://materialdesignicons.com/bootstrap

## Licensing

Use of JCU CookBook and its resources are limited to James Cook University
projects and where appropriate permission is sought to use the branding.
Specific aspects of the JCU CookBook, such as logos and artwork, may be
subject to their own approvals, copyright or licensing and users are advised
to seek their own independent advice regarding their usage from the
appropriate University departments.

[CookBook Changelog]: ./CHANGELOG.md
