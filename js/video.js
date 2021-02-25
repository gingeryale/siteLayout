let videoElement = document.getElementsByTagName("video")[0];

$("[data-media]").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");

    $popupIframe.attr("src", videoUrl);

    $this.closest(".video").addClass("show-popup");
});

$(".popup").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".video").removeClass("show-popup");
    $("[data-media]").removeAttribute("data-media");
});

$(".popup > iframe").on("click", function (e) {
    e.stopPropagation();
});



