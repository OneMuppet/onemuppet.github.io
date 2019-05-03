const dev = {
}

const test = {
}

const prod = {
}

// TODO add prod discovery
let env = dev;
if (location.href.indexOf('localhost') > -1) {
  env = dev;
} else {
  env = test;
}

export { env };

