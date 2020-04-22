import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from "./route/route";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
    onUpdate: registration => {
        alert('New version available!  Ready to update?');
        window
            .location
            .reload();
        if (registration && registration.waiting) {
            registration
                .waiting
                .postMessage({type: 'SKIP_WAITING'});
            registration
                .waiting
                .addEventListener('statechange', e => {
                    if (e.target.state === 'activated') {
                        window
                            .location
                            .reload()
                    }
                })
        }
    }
});
