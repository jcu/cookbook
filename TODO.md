## Project management

* Permission for use and distribution of flags should be checked

* Colors:

  * Clarification around inconsistent colours in Brand DNA
  * Should JCU logo be using black (#000) or off-black/grey (#231f20) --
    website uses the former, download .zip files use the latter.
  * Incorrect colours in use on Torres Straight Islanders Flag on website

## Technical

* Can't use fusv to find usused variables because of lack of @import support
  https://github.com/XhmikosR/find-unused-sass-variables/issues/23.
  Linting CSS in this way is disabled for now.

* `imagemin` loses directory structure on output of minified images
  https://github.com/imagemin/imagemin/issues/191

* Fonts require `sed` to rework their directory paths:
  https://github.com/KyleAMathews/typefaces/issues/79

* Bootstrap:

  * Bootstrap's colours fail WCAG AA https://github.com/twbs/bootstrap/issues/25126
  * `.table-dark` has conflicting styles: <https://github.com/twbs/bootstrap/issues/27879>.
    We are currently working around this issue in `_fixes.scss`
