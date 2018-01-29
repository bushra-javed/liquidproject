////<reference path="Scripts/angular.min.js"/>
//method 1
var myApp = angular.module("myModule", []);
var myController = function ($scope) {
    var employee = {
        firstname: "bushra",
        lastname: "javed",
        age:"30"
    }

    $scope.employee=employee; 

  $scope.message = "this is message ";


};
myApp.controller('myController', myController);
//method 2
//or do this


//myApp.controller('myController', function ($scope) {
//    $scope.message = "bushra angular";
//});


//method 3

//var myApp = angular
//    .module("myModule", [])
//    .controller("myController",  function ($scope) {
//    var employee = {
//        firstname: "bushra",
//        lastname: "javed",
//        age: "30"
//    }

//    $scope.employee = employee;



//});

// tutorial 4 image ng-src

//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var country = {
//            name: "USA",
//            capital: "w.DC",
//            flag: "images/1.jpg"
//        };
//        $scope.country = country;

//    });


// tutorial 5
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var employee = {
//        firstname: "abushra",
//        lastname: "javed",
//        age: "30"
//    }

//    $scope.employee = employee;
//    $scope.message = "hello this is message";
//    });
            
// tutorial 6 part1
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController",  function ($scope) {
//        var employees =[
//            { firstname: "naheed", lastname: "zafar", gender: "female", salary: 550000 },
//            { firstname: "shahnaz", lastname: "mazhar", gender: "female", salary: 600000 },
//            { firstname: "samra", lastname: "shahid", gender: "female", salary: 700000},
//            { firstname: "rukhsana", lastname: "yasir", gender: "female", salary: 700000 },
//            { firstname: "bushra", lastname: "zafar", gender: "female", salary: 550000},
//            { firstname: "navee", lastname: "javed", gender: "male", salary: 600000},
//            { firstname: "qadeer", lastname: "zafar", gender: "male", salary: 500000 }
//        ]
//    $scope.employees = employees;



//});



// tutorial 6 part2

//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var countries = [
//            {
//                name: "USA",
//                cities: [
//                    { name: "new jersey" },
//                    { name: "Manchester" },
//                    { name: "Birmingham" }
//                ]
//            },
//            {
//                name: "USA",
//                cities: [
//                    { name: "new jersey" },
//                    { name: "Manchester" },
//                    { name: "Birmingham" }
//                ]
//            },
//            {
//                name: "USA",
//                cities: [
//                    { name: "new jersey" },
//                    { name: "Manchester" },
//                    { name: "Birmingham" }
//                ]
//            }
//        ];
//        $scope.countries = countries;

//    });




// tutorial 7

//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var technologies = [
//            { name: "c#", likes: 0, dislikes: 0 },
//            { name: "asp.net", likes: 0, dislikes: 0 },
//            { name: "sql server", likes: 0, dislikes: 0 },
//            { name: "angular JS", likes: 0, dislikes: 0 },
//            { name: "html", likes: 0, dislikes: 0 }
//        ];
//        $scope.technologies = technologies;
//        $scope.incrementlikes = function (technology) {
//            technology.likes++;
//        }
//        $scope.incrementdislikes = function (technology) {
//            technology.dislikes++;
//        }
        
//    });


// tutorial 8
//var myApp = angular
    //.module("myModule", [])
    //.controller("myController",  function ($scope) {
    //    var employees =[
    //        { firstname: "naheed", lastname: "zafar", dob: new Date("November 23,1980"), gender: "female", salary: 550000 },
    //        { firstname: "shahnaz", lastname: "mazhar", dob: new Date("November 23,1979"), gender: "female", salary: 600000 },
    //        { firstname: "samra", lastname: "shahid", dob: new Date("November 23,1970"), gender: "female", salary: 700000},
    //        { firstname: "rukhsana", lastname: "yasir", dob: new Date("November 23,1977"), gender: "female", salary: 700000 },
    //        { firstname: "bushra", lastname: "zafar", dob: new Date("November 23,1981"), gender: "female", salary: 550000},
    //        { firstname: "navee", lastname: "javed", dob: new Date("November 23,1983"), gender: "male", salary: 600000},
    //        { firstname: "qadeer", lastname: "zafar", dob: new Date("November 23,1984"), gender: "male", salary: 500000 }

    //    ]

    //    $scope.employees = employees;
    //    $scope.rowlimit = 3;

    //});

 //tutorial 9
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController",  function ($scope) {
//        var employees =[
//            { firstname: "naheed", lastname: "zafar", dob: new Date("November 23,1980"), gender: "female", salary: 550000 },
//            { firstname: "shahnaz", lastname: "mazhar", dob: new Date("November 23,1979"), gender: "female", salary: 600000 },
//            { firstname: "samra", lastname: "shahid", dob: new Date("November 23,1970"), gender: "female", salary: 700000},
//            { firstname: "rukhsana", lastname: "yasir", dob: new Date("November 23,1977"), gender: "female", salary: 700000 },
//            { firstname: "bushra", lastname: "zafar", dob: new Date("November 23,1981"), gender: "female", salary: 550000},
//            { firstname: "navee", lastname: "javed", dob: new Date("November 23,1983"), gender: "male", salary: 600000},
//            { firstname: "qadeer", lastname: "zafar", dob: new Date("November 23,1984"), gender: "male", salary: 500000 }

//        ]

//        $scope.employees = employees;
//        $scope.sortcolumn = "firstname";

//    });


//tutorial 10
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var employees = [
//            { firstname: "naheed", lastname: "zafar", dob: new Date("November 23,1980"), gender: "female", salary: 550000 },
//            { firstname: "shahnaz", lastname: "mazhar", dob: new Date("November 23,1979"), gender: "female", salary: 600000 },
//            { firstname: "samra", lastname: "shahid", dob: new Date("November 23,1970"), gender: "female", salary: 700000 },
//            { firstname: "rukhsana", lastname: "yasir", dob: new Date("November 23,1977"), gender: "female", salary: 700000 },
//            { firstname: "bushra", lastname: "zafar", dob: new Date("November 23,1981"), gender: "female", salary: 550000 },
//            { firstname: "navee", lastname: "javed", dob: new Date("November 23,1983"), gender: "male", salary: 600000 },
//            { firstname: "qadeer", lastname: "zafar", dob: new Date("November 23,1984"), gender: "male", salary: 500000 }

//        ]
//        $scope.employees = employees;
//        $scope.sortcolumn = "firstname";
//        $scope.reversesort = false;
//        $scope.sortData = function (column) {
//            $scope.reversesort = ($scope.sortcolumn == column) ? !$scope.reversesort : false;
//            $scope.sortcolumn = column;

//        }
//        $scope.getsortclass = function (column) {
//            if ($scope.sortcolumn == column) {
//                return $scope.reversesort ? 'arrow-down' : 'arrow-up'
//            }
//            return '';
//        }

//    });

//tutorial 11 12a
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var employees = [
//            { firstname: "naheed", lastname: "zafar", dob: new Date("November 23,1980"), gender: "female", salary: 550000 },
//            { firstname: "shahnaz", lastname: "mazhar", dob: new Date("November 23,1979"), gender: "female", salary: 600000 },
//            { firstname: "samra", lastname: "shahid", dob: new Date("November 23,1970"), gender: "female", salary: 700000 },
//            { firstname: "rukhsana", lastname: "yasir", dob: new Date("November 23,1977"), gender: "female", salary: 700000 },
//            { firstname: "bushra", lastname: "zafar", dob: new Date("November 23,1981"), gender: "female", salary: 550000 },
//            { firstname: "navee", lastname: "javed", dob: new Date("November 23,1983"), gender: "male", salary: 600000 },
//            { firstname: "qadeer", lastname: "zafar", dob: new Date("November 23,1984"), gender: "male", salary: 500000 }

//        ]
//        $scope.employees = employees;
//    });

//tutorial 12b
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { firstname: "naheed", lastname: "zafar", dob: new Date("November 23,1980"), gender: "female", salary: 550000 },
            { firstname: "shahnaz", lastname: "mazhar", dob: new Date("November 23,1979"), gender: "female", salary: 600000 },
            { firstname: "samra", lastname: "shahid", dob: new Date("November 23,1970"), gender: "female", salary: 700000 },
            { firstname: "rukhsana", lastname: "yasir", dob: new Date("November 23,1977"), gender: "female", salary: 700000 },
            { firstname: "bushra", lastname: "zafar", dob: new Date("November 23,1981"), gender: "female", salary: 550000 },
            { firstname: "navee", lastname: "javed", dob: new Date("November 23,1983"), gender: "male", salary: 600000 },
            { firstname: "qadeer", lastname: "zafar", dob: new Date("November 23,1984"), gender: "male", salary: 500000 }

        ]
        $scope.employees = employees;
        $scope.search = function (item) {
            if ($scope.searchtext == undefined) {
                return true;
            }
            else {
                if (item.firstname.toLowerCase().indexOf($scope.searchtext.toLowerCase()) != -1 ||
                    item.lastname.toLowerCase().indexOf($scope.searchtext.toLowerCase())!= -1 
                ) {
                    return true;
                }
                    
            }
            return false;
        }

    });

