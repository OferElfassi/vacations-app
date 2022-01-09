/* eslint-disable global-require,import/no-dynamic-require */
function tryRequire(path) {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
}

export default tryRequire;
