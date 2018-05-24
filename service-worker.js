importScripts('./sw-toolbox.js');  
toolbox.router.get('/images/(.*)', toolbox.cacheFirst); 