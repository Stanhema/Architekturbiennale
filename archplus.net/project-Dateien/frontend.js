
/**
 * Frontend
 *
 */
var Frontend = {


    /**
     * Basket
     */
    Basket : {


        /**
         * Add product to basket
         */
        Add    : function (type, id, qty) { Frontend.Basket._do('add',    type, id, qty || 1);  },
        Remove : function (type, id) { Frontend.Basket._do('remove', type, id); },
        Reset  : function ()         { Frontend.Basket._do('reset',  '', 0); },
        Reload : function ()         { Frontend.Basket._do('reload', '', Date.now()); },

        SetTicketValue: function(ident, id) {
            $('select[name="ticket[' + ident + '][product]').val(id);
        },

        AddTicket : function(ident) {

            var product = $('[name="ticket[' + ident + '][product]').val();
            var amount  = $('select[name="ticket[' + ident + '][amount]"]').val();

            this.Add('product', product, amount );


        },

        _do: function (action, type, id, qty) {

            $.getJSON(Symbl.WWW_HOME_DIR + Symbl.PROJECT_NAME + '/ajax/basket/' + action + '/', { 'type': type, 'fk_pk' : id, 'qty' : qty || 1 } )
                .done(function( json ) {
                    //console.log( "JSON Data: ", json);
                    $('#cartAmount').html(json.products);
                    if (action == "add") {
                        $('.modal-body', $('#modalBasket')).html(json.html);
                        $('#modalBasket').modal();
                    }

                })
                .fail(function( jqxhr, textStatus, error ) {
                    var err = textStatus + ", " + error;
                    //console.log( "Request Failed: " + err );
            });

        }

    }


}


;(function ($, window, document, undefined) {


    /**
     * remove error block on change
     */
    $(document).on('change', '.has-error input,select,textarea', function (e) {


        $(this).parents('.has-error').eq(0)
            .removeClass('has-error')
            .find('.help-block.error').remove();

    });


    $(document).on('click', '.cookieconsent-optout', function(e) {

        $('.ccm__tabgroup').removeClass('ccm__tabgroup--open');
        $('#cconsent-modal').addClass('ccm--visible');

    });

    $(document).on('click', '#ccm__footer__consent-modal-submit', function(e) {
        $.symbl.cookie.consent.trigger();
    });
    $(document).on('click', '.consent-give', function(e) {
        $.symbl.cookie.consent.trigger();
    });

    $(document).ready( function() {
        $.symbl.cookie.consent.trigger();
    });

    $(document).on('cookie', function(e, category, checked) {

        $('iframe[data-cookieconsent="' + category + '"]').toggle(checked);
        $('div[data-cookieconsent="' + category + '"]').toggle(!checked);

            $('iframe[data-cookieconsent="' + category + '"]').each(function(idx, iframe) {
                if (checked) {
                    iframe.src = $(iframe).data("src");
                } else {
                    iframe.src = '';
                }
            })

    });


    /**
     *
     */
    $.extend({

        /**
         *
         */
        symbl: {

            defaults: { },

            init: function(root, config)
            {
                if (config && config.symbl) {
                    $.extend(this.defaults, config.symbl );
                }
                $.symbl.cookie.init((config && config.cookie)? config.cookie : {});
            },


            /**
             *
             */
            cookie: {

                types: {
                    dsgvo : {
                        name    : 'dsgvocookie',
                        path    : '/',
                        id      : '#dsgvo-warning'
                    }
                },

                getConfig(type) {

                    if (!this.types[ type || 'dsgvo' ]) {
                        this.types[ type || 'dsgvo' ] = {}
                    }
                    return this.types[ type || 'dsgvo' ];
                },

                init: function(config, type)
                {

                    var defaults = this.getConfig(type);
                    if (config) {
                        $.extend(defaults, config);
                    }

                    if (!this.isAccepted(type || 'dsgvo')) {
                        $(document).trigger('cookie.show', [defaults]);
                    }

                },

                accept: function(type) {
                    var defaults = this.getConfig(type);
                    document.cookie = defaults.name + '=1;path=' + (defaults.path || '/');
                    $(document).trigger('cookie.accepted', [defaults]);
                },
                decline: function(type) {
                    var defaults = this.getConfig(type);
                    document.cookie = defaults.name + '=0;path=' + (defaults.path || '/');
                    $(document).trigger('cookie.declined', [this.defaults]);
                },

                isAccepted: function(type) {
                    console.log('cookie.isAccepted', type, this.getConfig(type));
                    var defaults = this.getConfig(type);

                    return (document.cookie.indexOf( defaults.name + '=1') != -1)? true : false;
                },


                /**
                 *
                 */
                consent: {

                    trigger() {
                        $.each(window.CookieConsent.config.categories, function(key, obj) {
                            $(document).trigger('cookie',  [key, obj.checked]);
                        });
                    }

                }

            }


        },


        infiniteScroll: {

            init: function(container, pager) {

                $(container).infiniteScroll({
                    append : container + ' > div',
                    path: function() {
                        var nextPage = (pager.current + this.pageIndex);
                        if (nextPage <= pager.lastpage) {
                            return '?page=' + nextPage;
                        } else {
                            $('#loadmore-content').hide();
                        }
                    },
                    history: 'replace',
                    prefill: true
                }).on('load.infiniteScroll', function( event, response, path ) {
                  //console.log( 'infiniteScroll', 'Loading page: ' + path, $(this).data().infiniteScroll.pageIndex);

                  var nextPage = (pager.current + $(this).data().infiniteScroll.pageIndex);

                  $('#loadmore').prop('href', '?page=' + nextPage);

                }).on( 'append.infiniteScroll', function( event, response, path, items ) {

                  //console.log( 'infiniteScroll', items.length + ' items appended' );

                }).on( 'last.infiniteScroll', function( event, response, path ) {

                  console.log( 'infiniteScroll', 'last.path: ' + path );
                  $('#loadmore-content').hide();

                });

            }


        }




    });


}(jQuery, window, document));