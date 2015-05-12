'use strict';
/* Services */
    fapp.factory('PhoneSer',function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    });
