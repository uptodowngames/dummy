Array.prototype.rnd = function() {
    return this[Math.floor((Math.random() * this.length))];
}



$(document).ready(function() {
    recentActivityLoop();
    recentActivityTimerLoop();
});

var recentActivity = {
            "nicknames": ["jdimo", "Sirwilliam99", "Uncaged", "DavidGilbert", "jozo24", "Zegaloft", "Momkiller", "ShahedHasan", "ForgiveMeNot", "Noctaire", "Shadrach777", "davelaar", "Kman167", "andrgin", "JoshuaTrueHeart", "Duad1945", "IjTommy4", "BombTower", "Daisycloud", "PurpleDeathStar", "DanTheMan2016", "Expand", "RisedPhoenix", "Xenolith", "ultimatex31", "Redheadedluck441", "x9999x", "SpazAu", "BbaBaba123", "aTH", "jstammi", "KonstBR", "GamerJohn201", "Jeanette0711", "Hansdev", "Jose23", "AFrostyBlaze", "Echo008", "nstar612", "Vman2612", "Tiwaz", "WarlockFamily", "Kylechetti", "ElderStriker", "LootWarrior", "Anoushka", "GDufresneC", "LanceClash22", "Dragonbldz", "Radaniel", "Bjk1989", "lalalili", "serenitycotc2", "Knowledgeable", "Killercheese", "Kidsrocxy", "JonnyVW", "Kenchafer", "MJPB", "Mithaminator", "WormShoes", "Marko996", "renaatski", "MxBunnyZ", "DoreneBeaudry19", "RoyaleBourassa", "Snagit77", "PhilISuppose", "TheKingofCOC2014", "jqgunty", "x222x", "Gamer0102", "Dyleon", "VernonSalmonsd32", "Kozmo91", "ChongCheeLeong", "freakazoid1985", "hammad0123", "ArchRedRagers", "JubilantJess"],
            "resources": [
                ["5,000 Robux", "1,000 Robux", "1,500 Robux", "10,000 Robux", "22,500 Robux", "2,500 Robux", "2,000 Robux", "4,500 Robux"]
            ]
        };
        
        var recentActivityUsernameId = Date.now() % recentActivity.nicknames.length;

        function recentActivityLoop() {
            var activityCountry = Math.random() > .5 ? Array('at', 'au', 'be', 'br', 'ca', 'de', 'dk', 'es', 'ir', 'it', 'fr', 'nl', 'pt', 'se', 'uk').rnd() : 'us';
            recentActivityUsernameId++;
            if (recentActivityUsernameId >= recentActivity.nicknames.length) {
                recentActivityUsernameId = 0;
            }
            var nickname = recentActivity.nicknames[recentActivityUsernameId];
            var node = document.getElementById('container-activity');
            if (node.children.length > 10) {
                $(node.children[0]).remove();
            }
            var resourceText = '';
            if (recentActivity.resources.length == 0) {
                return;
            }
            if (recentActivity.resources.length == 1) {
                resourceText = '<strong>' + recentActivity.resources[0].rnd() + '</strong>';
            }
            if (recentActivity.resources.length == 2) {
                resourceText = '<strong>' + recentActivity.resources[0].rnd() + '</strong> and <strong>' + recentActivity.resources[1].rnd() + '</strong>';
            }
            if (recentActivity.resources.length > 2) {
                resourceText = '<strong>' + recentActivity.resources[recentActivity.resources.length - 2].rnd() + '</strong> and <strong>' + recentActivity.resources[recentActivity.resources.length - 1].rnd() + '</strong>';
                for (var i = recentActivity.resources.length - 3; i >= 0; i--) {
                    resourceText = '<strong>' + recentActivity.resources[i].rnd() + '</strong>, ' + resourceText;
                }
            }
            $('#container-activity').append('<div class="recent-activity-row">' + '<strong>' + nickname + '</strong> has win ' + resourceText + ' · <span class="recent-activity-timer" data-created="' + Date.now() + '">1s</span> ago</div>');
            var delay = 1000 * Math.floor(Math.random() * 20);
            setTimeout(recentActivityLoop, delay);
        }

        function recentActivityTimerLoop() {
            $('.recent-activity-timer').each(function() {
                var secTotal = Math.floor((Date.now() - $(this).attr("data-created")) / 1000);
                var min = Math.floor(secTotal / 60);
                $(this).html((min > 0 ? min + 'm ' : '') + secTotal % 60 + 's');
            });
            setTimeout(recentActivityTimerLoop, 999);
        }