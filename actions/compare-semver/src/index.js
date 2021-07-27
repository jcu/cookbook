const core = require('@actions/core');
const { parse } = require('semver');

try {
  // Inputs
  const semver = core.getInput('version'); // The Main Version we care about (Version 1)
  const versionToCompare = core.getInput('compare'); // The Comparison Version (Version 2)

  // Parse the Versions
  const parsedSemver = parse(semver);
  if(!parsedSemver) throw new Error(`Invalid 'version' Semver provided: "${semver}"`)
  const parsedVersionToCompare = parse(versionToCompare);
  if(!parsedSemver) throw new Error(`Invalid 'versionToCompare' Semver provided: "${versionToCompare}"`)
  /* Set Outputs based on the SemVers */

  // Comparison Outputs
  const semverIsLatest = parsedSemver.compare(parsedVersionToCompare) !== -1
  core.setOutput('latest-version', (semverIsLatest ? parsedSemver : parsedVersionToCompare).version)
  core.setOutput('version-is-latest', semverIsLatest)

  // Version 1. SemVer details
  core.setOutput('version-major', parsedSemver.major)
  core.setOutput('version-minor', parsedSemver.minor)
  core.setOutput('version-patch', parsedSemver.patch)
  core.setOutput('version-prerelease', parsedSemver.prerelease.length ? parsedSemver.prerelease : null)
  core.setOutput('version-build', parsedSemver.build.length ? parsedSemver.build : null)
  core.setOutput('version-version', parsedSemver.version)

  // Version 2. SemVer details
  core.setOutput('compare-major', parsedVersionToCompare.major)
  core.setOutput('compare-minor', parsedVersionToCompare.minor)
  core.setOutput('compare-patch', parsedVersionToCompare.patch)
  core.setOutput('compare-prerelease', parsedVersionToCompare.prerelease.length ? parsedVersionToCompare.prerelease : null)
  core.setOutput('compare-build', parsedVersionToCompare.build.length ? parsedVersionToCompare.build : null)
  core.setOutput('compare-version', parsedVersionToCompare.version)

} catch (error) {
  core.setFailed(error.message);
}