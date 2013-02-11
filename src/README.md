# WebdevChecklist

The best project ever.

## Getting Started
### On the server
Install the module with: `npm install WebdevChecklist`

```javascript
var WebdevChecklist = require('WebdevChecklist');
WebdevChecklist.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/BlackTears/webdevchecklist/master/dist/WebdevChecklist.min.js
[max]: https://raw.github.com/BlackTears/webdevchecklist/master/dist/WebdevChecklist.js

In your web page:

```html
<script src="dist/WebdevChecklist.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach WebdevChecklist's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/WebdevChecklist.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Maxim Gladkih  
Licensed under the MIT license.
