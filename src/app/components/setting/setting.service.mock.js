/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
'use strict';

import settings from './fixtures/settings.json!json';

function settingServiceMock($httpBackend) {
    'ngInject';
    $httpBackend.whenGET(/\/settings\?*/)
        .respond( (method, url) => {
            console.log('GET',url);
            return [200, settings];
        });
}

export default settingServiceMock;
