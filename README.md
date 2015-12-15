# cycle-vex-driver
A Cycle.js Driver for using Dialog by [HubSpot/vex](https://github.com/hubspot/vex)

## install
[npm](https://www.npmjs.com/package/cycle-vex-driver)

```
npm install cycle-vex-driver
```

## Usage
```javascript
import Rx from 'rx';
import Cycle from '@cycle/core';
import makeVexDriver from '../';

//main
function main(sources) {
    let nextDialog$ = sources.Dialog
	    .filter(({id}) => id == 'first')
	    .map(x => ({
		  method: 'alert',
		  options: {
		      message: 'result value:' + x.value
		  }
	    }));

    let dialog$ = Rx.Observable.just({
	    id: 'first',
	    method: 'prompt',
            options: {
	        message: 'hello cycle.js',
	        placeholder: 'input'
	    }
    }).merge(nextDialog$);
    return {
	    Dialog: dialog$
    };
}

//run with drivers
Cycle.run(main, {
    Dialog: makeVexDriver('vex-theme-default')
});
```

### link stylesheets
```html
<link rel="stylesheet" href="../node_modules/vex-js/css/vex.css" />
<link rel="stylesheet" href="../node_modules/vex-js/css/vex-theme-default.css" />
```

## check example
``` sh
cd example
webpack
# open index.html
```
