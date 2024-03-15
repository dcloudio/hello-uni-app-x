const path = require("path");
const fs = require("fs");

const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const hbuilderx_version = process.env.HX_Version;
const uniTestPlatformInfo = process.env.uniTestPlatformInfo
  ? process.env.uniTestPlatformInfo.replace(/\s/g, "_")
  : "";
const folderName = `__image_snapshots__/${hbuilderx_version}/__${uniTestPlatformInfo}__`;
let environment = "official";
if (hbuilderx_version.includes("dev")) {
  environment = "dev";
} else if (hbuilderx_version.includes("alpha")) {
  environment = "alpha";
}
const baseFolderName = `__image_snapshots__/base/${environment}/__${uniTestPlatformInfo}__`;

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    customSnapshotIdentifier(args) {
      return args.currentTestName.replace(/\//g, "-").replace(" ", "-");
    },
    customSnapshotsDir: path.join(__dirname, baseFolderName),
    customDiffDir: path.join(__dirname, `${folderName}/`, "diff"),
  }),
  toSaveSnapshot,
  toSaveImageSnapshot,
});

function toSaveSnapshot(received, { customSnapshotsDir, fileName } = {}) {
  const { testPath, currentTestName } = this;
  const SNAPSHOTS_DIR = "__file_snapshots__";
  const snapshotDir =
    process.env.saveSnapshotDir ||
    createSnapshotDir({
      customSnapshotsDir,
      testPath,
      SNAPSHOTS_DIR,
    });
  const _fileName = createFileName({
    fileName,
    testPath,
    currentTestName,
  });
  const filePath = path.join(snapshotDir, _fileName);
  let message = () => `${currentTestName} toSaveSnapshot success`;
  let pass = true;

  try {
    checkSnapshotDir(snapshotDir);
    fs.writeFileSync(filePath, received);
  } catch (e) {
    console.log("toSaveSnapshot fail", e);
    message = () => e.message;
    pass = false;
  }

  return {
    message,
    pass,
  };
}

function toSaveImageSnapshot(
  received,
  { customSnapshotsDir, customSnapshotIdentifier } = {}
) {
  const { testPath, currentTestName } = this;
  const SNAPSHOTS_DIR = "__image_snapshots__";
  const snapshotDir =
    process.env.saveImageSnapshotDir ||
    createSnapshotDir({
      customSnapshotsDir,
      testPath,
      SNAPSHOTS_DIR,
    });
  const _fileName = createFileName({
    fileName: customSnapshotIdentifier ? customSnapshotIdentifier() : "",
    testPath,
    currentTestName,
    fileType: "png",
  });
  const filePath = path.join(snapshotDir, _fileName);
  let message = () => `${currentTestName} toSaveImageSnapshot success`;
  let pass = true;

  try {
    checkSnapshotDir(snapshotDir);
    fs.writeFileSync(filePath, Buffer.from(received, "base64"));
  } catch (e) {
    console.log("toSaveImageSnapshot fail", e);
    message = () => e.message;
    pass = false;
  }

  return {
    message,
    pass,
  };
}

function createSnapshotDir({ customSnapshotsDir, testPath, SNAPSHOTS_DIR }) {
  return customSnapshotsDir || path.join(path.dirname(testPath), SNAPSHOTS_DIR);
}

function createFileName({ fileName, testPath, currentTestName, fileType }) {
  return (
    fileName ||
    createSnapshotIdentifier({
      testPath,
      currentTestName,
      fileType,
    })
  );
}

function createSnapshotIdentifier({
  testPath,
  currentTestName,
  fileType = "txt",
}) {
  const snapshotIdentifier = kebabCase(
    `${path.basename(testPath)}-${currentTestName}`
  );
  const counter = timesCalled.get(`${snapshotIdentifier}-${fileType}`) || 1;
  timesCalled.set(`${snapshotIdentifier}-${fileType}`, counter + 1);
  return `${snapshotIdentifier}-${counter}.${fileType}`;
}

function kebabCase(str) {
  return str
    .replaceAll(/([a-z])([A-Z])/g, "$1-$2")
    .replaceAll(/\s+/g, "-")
    .replaceAll(/_+/g, "-")
    .replaceAll(/\/+/g, "-")
    .replaceAll(/\.+/g, "-")
    .toLowerCase();
}

function checkSnapshotDir(snapshotDir) {
  if (!fs.existsSync(snapshotDir)) {
    fs.mkdirSync(snapshotDir, {
      recursive: true,
    });
  }
}

const timesCalled = new Map();
