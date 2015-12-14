import Rx from 'rx';
import vex from 'vex-js/js/vex.dialog.js';
import _ from 'lodash';

export default function makeVexDriver(className) {
    vex.defaultOptions.className = className;
    return function vexDriver(open$) {	
	let _vex = Rx.Observable.fromCallback((id, method, options, cb) => {
	    let _cb = (v) => cb({value: v, id: id});
	    return vex[method](_.assign(options, {callback: _cb}));
	});
	return open$.flatMap(open => _vex(open.id, open.method || 'open', open.options));
    };
};
