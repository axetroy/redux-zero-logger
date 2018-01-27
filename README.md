## redux-zero logger middleware

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/redux-zero-logger.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/redux-zero-logger.svg?branch=master)](https://travis-ci.org/axetroy/redux-zero-logger)
[![Coverage Status](https://coveralls.io/repos/github/axetroy/redux-zero-logger/badge.svg?branch=master)](https://coveralls.io/github/axetroy/redux-zero-logger?branch=master)
[![Dependency](https://david-dm.org/axetroy/redux-zero-logger.svg)](https://david-dm.org/axetroy/redux-zero-logger)
![License](https://img.shields.io/badge/license-Apache-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/redux-zero-logger.svg)](https://badge.fury.io/js/redux-zero-logger)
![Size](https://github-size-badge.herokuapp.com/axetroy/redux-zero-logger.svg)

## Usage

```javascript
const logger = require("redux-zero-logger");

const middlewares = applyMiddleware(
  logger(),
  antoherMiddleware
);

const store = createStore(initialState, middlewares);
```

## Contributing

[Contributing Guide](https://github.com/axetroy/redux-zero-logger/blob/master/CONTRIBUTING.md)

如果你觉得项目不错，不要吝啬你的 star.

长期造轮子，欢迎 follow.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/redux-zero-logger/commits?author=axetroy) [🐛](https://github.com/axetroy/redux-zero-logger/issues?q=author%3Aaxetroy) 🎨 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fredux-zero-logger.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fredux-zero-logger?ref=badge_large)
