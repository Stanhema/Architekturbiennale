
/**
 *
 *
 * []
 */
;(function ($, window, document, undefined) {

    var getSelection = 'getSelection',
        removeAllRanges = 'removeAllRanges',
        addRange = 'addRange',
        parentNode = 'parentNode',
        firstChild = 'firstChild',
        appendChild = 'appendChild',
        removeChild = 'removeChild',
        test = 'test',
        innerHTML = 'innerHTML';

    if (!window[getSelection]) return;

    /**
     *
     */
    var getSelectedText = function(e, plugin) {


        // check whether the target is a `<pre>`, `<code>` or `<any class="no-attribution">` element
        var target = e.target;

        // if the target is a text node, try to get the closest HTML element
        while (target.nodeType === 3) {
            target = target[parentNode];
        }

        // create a container
        var container = document.createElement('div');

        //if (plugin.options.container) {
        //    $.each(plugin.options.container, function(idx, key) {
        //       container.setAttribute('data-' + key, $(target).data(key));
        //    });
        //}
        /*
        container.style.width = container.style.height = '1px';
        container.style.overflow = 'hidden';
        container.style.position = 'absolute';
        container.style.top = container.style.left = 0;
        */

        //console.log('selection', selection = window[getSelection]());
        //console.log('rangeCount', selection.rangeCount);
        //console.log('getRangeAt', selection = selection.getRangeAt(0));
        //console.log('clone', selection.cloneRange());
        //console.log('cloneContents', selection.cloneContents());
        var startContainer;
        if (
            // make sure we have selection
            (selection = window[getSelection]()) &&
            // make sure we have selection range
            (selection.rangeCount) &&
            // get the first selection range
            (selection = selection.getRangeAt(0)) &&

            // get startContainer
            (startContainer = selection.startContainer) &&

            // clone the current selection range, then get the HTML contents of the selection
            (clone = selection.cloneRange(), selection = selection.cloneContents())
        ) {


            // append HTML contents of the selection to the container
            while (c = selection[firstChild]) {
                container[appendChild](c);
            }
            if ($(container).is(':empty')) {
                return false;
            } else {

                container[innerHTML] = container[innerHTML].replace(/&#8232;/g,' ');
                container[innerHTML] = container[innerHTML].replace(/\u2028/g, ' ');

                return { container : container, html : container[innerHTML], target : target, element: $(startContainer.previousElementSibling || startContainer.parentElement) };
            }
        }

        return false;


    }



    var selection, clone,  c, range;


    /**
     *
     */
    var pluginName = "clipboard",
        dataKey    = "plugin_" + pluginName;


    /**
     *
     */
    var Plugin = function(element, options, vars) {

        this.element = element;

        this.vars = {
            '#title#' : document.title,
            '#link#'  : window.location.href
        }

        this.options = {
            'prepend'    : '#title#<br /><br />-----<br />',
            'append'     : '<br />-----<br /><br /> Link: <a href="#link#">#link#</a><br />',
            'onInit'     : '',
            'onSelect'   : '',
        };

        this.init(options, vars);
    };

    /**
     *
     */
    Plugin.prototype = {

        /**
         *
         */
        init: function (options, vars)
        {
            $.extend(this.options, options);
            $.extend(this.vars,    vars);

            this.initialize();

        },

        initialize: function()
        {
            var self     = this,
                $element = $(this.element);


            $element.on('copy', function (e) {
                //e.preventDefault();
                e.stopPropagation();

                if (typeof self.options.onInit == 'function') { // make sure the callback is a function
                    self.options.onInit.call(self, $element); // brings the scope to the callback
                }


                var result = getSelectedText(e, self);
                if (result) {


                    if (typeof self.options.onSelect == 'function') { // make sure the callback is a function
                        self.options.onSelect.call(self, result.element, result); // brings the scope to the callback
                    }


                    // insert the attribution to the end of the contents
                    // only if the target element is not a `<pre>`, `<code>` and `<any class="no-attribution">`
                    if (!/^(pre|code)$/i[test](result.target.nodeName || "") && !/(^|\s)no-attribution(\s|$)/i[test](result.target.className || "")) {

                        var prepend = self.replaceWithVars(self.options.prepend);
                        var append  = self.replaceWithVars(self.options.append);

                        //result.container[innerHTML] += prepend + append;
                        $(result.container).prepend(prepend);
                        $(result.container).append(append);


                    }


                    // create a new range
                    range = document.createRange();
                    // append the container to the `<body>` section
                    document.body[appendChild](result.container);
                    // move selection range to the container
                    range.selectNodeContents(result.container);

                    selection = window[getSelection]();
                    selection[removeAllRanges]();
                    selection[addRange](range);

                    // there should be a short time there, we have copied the new selection…
                    setTimeout(function() {
                        // now remove the container…
                        result.container[parentNode][removeChild](result.container);
                        // then restore the previous selection!
                        selection[removeAllRanges]();
                        selection[addRange](clone);
                    });

                } else {
                    console.log('[clipboard] no text selected');
                }



            });

        },

        replaceWithVars(txt) {
            var result = txt;

            $.each(this.vars, function(key, value) {
                result = result.replace(new RegExp(key, 'g'), value);
            });

            return result;
        }

    };


    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options, vars, reinit)
    {

        var plugin = $(this).data(dataKey);

        // is initiated?
        if (plugin instanceof Plugin) {

            // if reinit
            if ((typeof reinit === 'boolean') && (reinit) && (typeof options !== 'undefined')) {
                plugin.init(options, vars);
            }

        } else {
            plugin = new Plugin(this, options, vars);
            $(this).data(dataKey, plugin);
        }

        return plugin;
    };



    ///**
    // *
    // */
    //$.extend({
    //
    //    /**
    //     *
    //     */
    //    clipboard: {
    //
    //
    //        /**
    //         *
    //         */
    //        initialized: {},
    //
    //        /**
    //         *
    //         */
    //        init: function(id, options, reset) {
    //
    //
    //            //var navtable = $('[data-navtable="' + id + '"]').navtable(options, reset);
    //            //this.initialized[ id ] = new $.Deferred();
    //            //this.initialized[ id ].resolve(navtable);
    //            //
    //            //return navtable;
    //
    //        },
    //
    //        /**
    //         *
    //         */
    //        call: function(id, method, args)
    //        {
    //            var params = Array.prototype.slice.call(arguments, 2);
    //            this.get(id).done( function(navtable) {
    //                navtable[method].apply(navtable, params);
    //            });
    //
    //        }
    //
    //    }
    //
    //});

}(jQuery, window, document));
