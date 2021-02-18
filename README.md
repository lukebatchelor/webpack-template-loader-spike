Quick spike of trying to make a loader that is able to load a template file and have it dynamically load a set of components.

Inspired by [this tweet](https://twitter.com/buildsghost/status/1362162253441552385);

## What does it do?

It's able to load a "template" file that can dynamically load a set of components in a directory (for example).

```
// templates/components.js.template

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, '..', 'components'))

newContent = `import dynamic from 'next/dynamic';
  export const components = [
    ${files.map(file => `  dynamic(() => import("../components/${file}"))`).join(',\n')}
  ];
`;
```

This would generate a file that looks like:

```
import dynamic from 'next/dynamic';

export const components = [
    dynamic(() => import("../components/bar.js")),
    dynamic(() => import("../components/baz.js")),
    dynamic(() => import("../components/foo.js"))
];
```

## Todo

* Allow templating similar to the first tweet
* Have the loader automatically run when new files are added into that directory
