$(document).ready(function() {
    $(".slideshow").each(function() {
        $("div:gt(0)", this).hide();
    });

    setInterval(function() {
        $(".slideshow").each(function() {
            $("div:first", this)
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo(this);
        });
    }, 3000);
});