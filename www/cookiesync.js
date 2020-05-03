/* 
 * Copyright 2017 Christian-W. Budde
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var exec = require('cordova/exec');

module.exports = {
    injectCookie: function (cookiesArray, successCallback, errorCallback) {

        for (var i = 0; i < cookiesArray.length; i++) {
            exec(successCallback, errorCallback, 'WKWebViewInjectCookie', 'injectCookie', [
               cookiesArray[i].domain,
               cookiesArray[i].path ? cookiesArray[i].path : '/',
               cookiesArray[i].name,
               cookiesArray[i].value,
               cookiesArray[i].secure ? cookiesArray[i].secure : true,
               cookiesArray[i].maxAge ? cookiesArray[i].maxAge : 2592000
            ]);
        }

    }
};
