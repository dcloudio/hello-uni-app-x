const path = require('path');
const {
	configureToMatchImageSnapshot
} = require('jest-image-snapshot');

const hbuilderx_version = process.env.HX_Version
const uniTestPlatformInfo = process.env.uniTestPlatformInfo ? process.env.uniTestPlatformInfo.replace(/\s/g,'_') : ''
const folderName = `__image_snapshots__/${hbuilderx_version}/__${uniTestPlatformInfo}__`

expect.extend({
	toMatchImageSnapshot: configureToMatchImageSnapshot({
		customSnapshotIdentifier(args) {
			return args.currentTestName.replace(/\//g, '-').replace(' ', '-');
		},
		customSnapshotsDir: path.join(__dirname, folderName),
		customDiffDir: path.join(__dirname, `${folderName}/`, 'diff'),
	}),
});