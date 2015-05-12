//index.html   one
function PhoneListCtrlOne($scope){
    var i;
    var m;
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position)
    {
        i=position.coords.latitude;
        m=position.coords.longitude;
    }
    $scope.maps=[
        {"latitude":i,"longitude":m}
    ]
}

//index.html   two
function PhoneListCtrlTwo($scope){
    $scope.phonesTwo=[
        {"name":"Lenovo","snippet":"The Phone is So Poor","age":"12"},
        {"name":"Honor","snippet":"I am use The Phone","age":"15"},
        {"name":"Jack","snippet":"This is a Person Name","age":"17"}
    ];
    $scope.orderProp="age"//设置默认值
}
//XHR.html
//指定依赖列表并避免压缩问题
//把要注入的服务放到一个字符串数组（代表依赖的名字）里，数组最后一个元素是控制器的方法函数
var PhoneListCtrlXHR=['$scope','$http',function ($scope,$http){
    $http.get('phones/phones.json').success(function(data){
        $scope.phones=data;
    });
    $scope.orderProp="age";
}];

//Routing.html
var PhoneListCtrl=['$scope','$http',function($scope,$http){
    $http.get('phones/phones.json').success(function(data){
        $scope.phones=data;
    })
    $scope.orderProp="age";
}];
//var PhoneListCtrl=['$scope','PhoneSer',function($scope,PhoneSer){
//    console.log("1111111111");
//        $scope.phones=PhoneSer.query();
//    console.log("2222222222");
//        $scope.orderProp="age";
//}];


//DetailPhone.html
var PhoneDetailCtrl=['$scope','$routeParams','$http',function($scope,$routeParams,$http){
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(p){
        $scope.phone=p;
        $scope.mainImageUrl=p.images[0];
    });
    $scope.setImage=function(imageUrl){
        $scope.mainImageUrl=imageUrl;
    }
}];
//showBug.html
var bugController=['$scope','$http',function($scope,$http){
    $http.get("phones/bug.json").success(function(data){
        $scope.infos=data;
    });
    $scope.orderProp="browser";
}];
//info.html
var mapControllerZuoBiao=['$scope',function($scope){
        if (navigator.geolocation)
        {
             navigator.geolocation.getCurrentPosition(showPosition);
        }
    function showPosition(position)
    {
        $scope.latitude=position.coords.latitude;
        $scope.longitude= position.coords.longitude;
    }
}];