requirejs.config({
    paths: {
        'd3': '//cdnjs.cloudflare.com/ajax/libs/d3/3.4.8/d3.min',
        'lodash': '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        'mathjs': '//cdnjs.cloudflare.com/ajax/libs/mathjs/0.23.0/math.min',
        'pop': 'src/pop'
    },
    shim: {
        'd3': {
            exports: 'd3'
        },
        'lodash': {
            exports: '_'
        }
    }
});

require(['d3','lodash','pop'], function(d3, _){
    d3.pop();
    window.d3 = d3;
});
