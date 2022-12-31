define('src/Shared', [], function() {

    function Shared(options) { 
        this.options = options;
        this._init();
    }

    Shared.prototype = {
        _init: function() {
            // setup initeral variables.
        },

        create: function() {
            this._worker = new SharedWorker(this.options.path);
            this._worker.port.start();
        }
    }

    return Shared;
})