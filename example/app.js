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
