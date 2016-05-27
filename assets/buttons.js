require(['gitbook'], function(gitbook) {

    gitbook.events.bind('start', function(e, config) {
        var opts = config.toolbar;
        
        if (!opts || !opts.buttons) return;
        
        var buttons = opts.buttons.slice(0);
        buttons.reverse();
        
        buttons.forEach(function(button) {
            var button = opts.buttons[i];
            gitbook.toolbar.createButton({
                icon: button.icon || "fa fa-external-link",
                label: button.label || "Link",
                position: 'right',
                onClick: function(e) {
                    e.preventDefault();
                    var mapping = {
                        "{{title}}": encodeURIComponent(document.title),
                        "{{url}}": encodeURIComponent(location.href)
                    };
                    var re = RegExp(Object.keys(mapping).join("|"), "g");
                    window.open(button.url.replace(re, function(matched) {
                        return mapping[matched];
                    }));
                }
            });
        });
    });
});
