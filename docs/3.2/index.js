;(function () {
  const VERSION = '3.2.1' // Release version of the docs
  const [currentVersionMajor, currentVersionMinor] = VERSION.trim()
    .split('.')
    .map(v => parseInt(v))
  const integrityTemplate = integrity =>
    `<span class="na">integrity</span><span class="o">=</span><span class="s">&#34;${integrity}&#34;</span> `

  fetch('https://cdn.jcu.edu.au/cookbook/latest/version.txt')
    .then(r =>
      r.text().then(latestVersion => {
        // Compare latest version to this version
        if (latestVersion) {
          const [latestVersionMajor, latestVersionMinor] = latestVersion
            .trim()
            .split('.')
            .map(v => parseInt(v))
          if (
            latestVersionMajor > currentVersionMajor ||
            (latestVersionMajor === currentVersionMajor &&
              latestVersionMinor > currentVersionMinor)
          ) {
            document.getElementById(
              'out-of-date-banner'
            ).innerHTML = `<a href="/docs/${latestVersionMajor}.${latestVersionMinor}/"><div class="alert alert-warning text-center" role="alert">Version ${latestVersion} of JCU CookBook has been released!</div></a>`
            ;[
              document.getElementById('npm-pkg-name'),
              document.getElementById('yarn-pkg-name'),
            ].forEach(e => (e.innerHTML += `@^${VERSION}`))
          }
        } else {
          console.error('Failed to get latest version of CookBook')
        }
      })
    )
    .catch(e => console.error('Failed to get version:\n' + e))

  const urls = {
    css: `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/cookbook.min.css`,
    font: `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/fonts.min.css`,
    'mdi-css': `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/materialdesignicons.min.css`,
    'bootstrap-bundle-js': `https://cdn.jcu.edu.au/cookbook/${VERSION}/js/bootstrap.bundle.min.js`,
    'bootstrap-js': `https://cdn.jcu.edu.au/cookbook/${VERSION}/js/bootstrap.min.js`,
    'popper-js': `https://cdn.jcu.edu.au/cookbook/${VERSION}/js/popper.min.js`,
  }

  Object.entries(urls).forEach(([domIdPrefix, url]) => {
    document.getElementById(`${domIdPrefix}-url`).innerHTML = url
    fetch(`${url}.hash.txt`)
      .then(r =>
        r
          .text()
          .then(
            hash =>
              (document.getElementById(
                `${domIdPrefix}-integrity-hash`
              ).innerHTML = integrityTemplate(hash))
          )
      )
      .catch(e => console.error(`Failed to get integrity hash for ${url}`))
  })
})()
