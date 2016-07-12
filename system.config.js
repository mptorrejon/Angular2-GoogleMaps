(function (global) {

    var map = {
        // 'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
        '@angular2-material/core': 'node_modules/@angular2-material/core',
        '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
        '@angular2-material/button': 'node_modules/@angular2-material/button',
        '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
        '@angular2-material/card': 'node_modules/@angular2-material/card',
        '@angular2-material/input': 'node_modules/@angular2-material/input',
        '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
        'app': './dev', //this could change to pickup the main js
        'rxjs': 'node_modules/rxjs',
        'symbol-observable': 'node_modules/symbol-observable',
        '@angular': 'node_modules/@angular',
        'immutable': 'node_modules/immutable/dist/immutable.js',
        'googlemaps': 'node_modules/angular2-google-maps/core'
    };
    var packages = {
        '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
        '@angular2-material/checkbox': { main: 'checkbox.js', defaultExtension: 'js'},
        '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
        '@angular2-material/progress-circle': { main: 'progress-circle.js', defaultExtension: 'js'},
        '@angular2-material/card': { main: 'card.js', defaultExtension: 'js'},
        '@angular2-material/input': { main: 'input.js', defaultExtension: 'js'},
        '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'},
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': {defaultExtension: 'js' },
        'symbol-observable': { main: 'index.js', defaultExtension: 'js' },
        '@angular/common': { main: 'index.js', defaultExtension: 'js' },
        '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
        '@angular/core': { main: 'index.js', defaultExtension: 'js' },
        '@angular/http': { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
        '@angular/router': { main: 'index.js', defaultExtension: 'js' },
        '@angular/router-deprecated': {main: 'index.js', defaultExtension: 'js'},
        'immutable': {defaultExtension:'js'},
        'googlemaps': { main:'index.js', defaultExtension:'js' }
    };

    var config = {
        map: map,
        packages: packages
    }

    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    System.config(config);
})(this);