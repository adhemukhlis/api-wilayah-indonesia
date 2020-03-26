export const DisableReactDevTools = ( flag ) => {
	if ( typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object" && flag ) {
		for (let [key,
			value]of Object.entries( window.__REACT_DEVTOOLS_GLOBAL_HOOK__ )) {
			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function"
				? ( ) => {}
				: null
		}
	}
}