const feature = require('@ts-monorepo/feature');
const core = require('@ts-monorepo/core');


console.log('Core name:', core.default.name);

feature.default.info();