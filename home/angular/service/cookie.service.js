angular.module("starter", [])
    .factory("cookie", function () {
        var cookie = {
            setCookie: setCookie
        };
        return cookie;

        function setCookie(data) {
            document.cookie = "UserID=" + data + "; max-age=" + (60 * 60) + "; path=/;";
        }
    })