/**
 * Created by Administrator on 2015/12/23.
 */
angular.module('video',[])
.controller('videoCtrl',function($scope){
    $scope.testList = config.testList;
    $scope.testData = {
        id:$scope.testList.data.course.list[0].weike[0].id,
        url:$scope.testList.data.course.list[0].weike[0].url
    }
    console.log($scope.testData.url);
    $scope.selectUrl = $scope.testList.data.course.list[0].weike[0].url;
    $scope.selectTitle = $scope.testList.data.course.list[0].weike[0].title;
    console.log( $scope.selectUrl);
    /*select当节课程*/
    $scope.selectCourse = function(url,title){
        $scope.selectUrl = url;
        $scope.selectTitle = title;
        $scope.foldUp();
        //$('#myVideo').css('src',$scope.testData.url);
    }
    /*导航目录点击按钮*/
    $scope.foldUp = function(){
        $("#right-box").css({
            'width':'0px',
            'transition':'width .5s'
        });
    };
    $scope.foldDown = function(){
        $("#right-box").css('width','270px');
    };
});
