# JCU Web Framework

## User documentation

* Bootstrap: https://getbootstrap.com/docs/4.3/
* Icon reference: https://materialdesignicons.com/

## Features

* Fully-featured web front-end component library, styled with JCU colours and
  based on [Bootstrap v4](https://getbootstrap.com), including:

  * Responsive grid system
  * Layout and typography
  * Components like buttons, cards, navigation and more
  * Utilities
  * ...and everything else [Bootstrap supports](https://getbootstrap.com/docs/)

* JCU logos and website artwork
* Iconography from [Material Design Icons](https://materialdesignicons.com/)
  (optional)
* Font families and CSS for Open Sans and Playfair Display (optional)
* Dedicated CDN hosting of all resources, including fonts and iconography

## Integration

The JCU Web Framework can be integrated with any type of web project you're
working on – particularly those that support Bootstrap.  The Framework is in
essence a themed version of Bootstrap and can be used as such, like so:

* Web and HTML:

  * Static or dynamic web pages
  * As a drop-in replacement for Bootstrap in any system or app that is built
    with Bootstrap's CSS classes

* React:

  * As a drop-in replacement for stylesheets in
    [`react-bootstrap`](https://react-bootstrap.netlify.com/getting-started/introduction/#stylesheets)
  * As a custom theme or as a base for creating customised Sass within Create React App
    ([documentation](https://facebook.github.io/create-react-app/docs/adding-bootstrap#using-a-custom-theme))

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

### Build process

1. Install this package and its dependenies with:

   ```sh
   yarn
   ```

1. Set up a local environment with `rclone config` and create a remote called
   `jcu-cdn`. Ask a maintainer if you're unsure what the configuration should
   contain.

1. Execute a build with:

   ```sh
   yarn dist
   ```

1. Test the resulting build.

   At present during the alpha and beta process, this involves manual testing
   with the HTML documentation and checking against in-development
   applications.

1. Build a release and copy the distribution to CDN via:

   ```sh
   yarn release
   ```

1. Update `CHANGELOG.md` with the current date and released version

1. Commit the build to Git and tag accordingly:

   ```sh
   git commit CHANGELOG.md dist/ -m "Release v9.9.9"
   git tag v9.9.9
   ```

1. Publish to NPM via:

   ```sh
   yarn publish
   ```

1. Update the working version number in the source code:

   ```sh
   yarn release-version [old-version] [new-version]
   git commit -a -m "Back to development"
   ```

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

The JCU Web Framework aims to allow websites and applications that that use it
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

### Sources

* [JCU Brand DNA v2.3](https://www.jcu.edu.au/marketing-toolkit/brand-dna/Brand-DNA-2018-v2.3.pdf)
  (retrieved 2019-07-16), adapted like so:

  * Certain colours were adjusted or selected for accessibility in terms of colour
    contrast
  * `Open Sans` is the primary and sans-serif font, and `Playfair Display` is
    set as the secondary and serif font

* JCU website (accessed 2019-07-16)

* Institutional logos (retrieved in `.zip` archive form, converted into
  web-compatible SVG format and colours set to match the JCU website logo)

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

Use of the JCU Web Framework and its resources are limited to James Cook
University projects and where appropriate permission is sought to use the
branding.  Specific aspects of the JCU Web Framework, such as logos and
artwork, may be subject to their own approvals, copyright or licensing and
users are advised to seek their own independent advice regarding their usage
from the appropriate University departments.
