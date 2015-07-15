angular.module('de.stekoe.angular.spotlight').run(['$templateCache', function($templateCache) {
    $templateCache.put('angularSpotlightTemplate.html',
        "<div class=\"ng-spotlight ng-spotlight-overlay\">\r\n    <div class=\"ng-spotlight-searchbar\">\r\n        <div class=\"ng-spotlight-icon\">\r\n            <img src=\"magnifier.svg\" width=\"100%\">\r\n        </div>\r\n        <input class=\"ng-spotlight-input\" type=\"text\" placeholder=\"Spotlight-Suche\" ng-model=\"searchTerm\" ng-change=\"search()\" />\r\n        <div class=\"ng-spotlight-input-after\" ng-if=\"searchResults.length == 0\">&mdash; Keine Ergebnisse</div>\r\n        <div class=\"ng-spotlight-info-sm\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n    <div class=\"ng-spotlight-results-panel\">\r\n        <div class=\"ng-spotlight-results-list\" >\r\n            <ul>\r\n                <li ng-repeat=\"searchResult in searchResults\" ng-init=\"catIndex=$index\">\r\n                    <div class=\"ng-spotlight-results-list-header\">{{searchResult.name}}</div>\r\n                    <ul>\r\n                        <li class=\"ng-spotlight-results-list-item\" ng-class=\"(catIndex === 0 && $index === 0) ? 'active' : ''\" ng-repeat=\"resultItem in searchResult.items\" ng-click=\"showResultItem($event, resultItem)\">\r\n                            {{resultItem.name}}\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"ng-spotlight-results-detail\">\r\n            {{resultItem}}\r\n        </div>\r\n    </div>\r\n</div>");
}]);