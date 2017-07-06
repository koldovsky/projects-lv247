var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Oryshchuk Vitalii",
            "websiteUrl": "https://ridikon.github.io/my-project-2/",
            "codeSourceUrl": "https://github.com/Ridikon/my-project-2",
            "cvUrl": "https://www.linkedin.com/in/vitalii-oryshchuk-574635146/",
            "photo": "images/students/oryshchuk.jpg"
        },
        {
            "name": "Krukovsky Nazar",
            "websiteUrl": "https://nazarun.github.io/css01/",
            "codeSourceUrl": "https://github.com/nazarun/css01",
            "cvUrl": "https://www.linkedin.com/in/nazar-krukovsky-7a1a2b67/",
            "photo": "images/students/krukovsky.jpg"
        },
        {
            "name": "Stechyshyn Rostyslav",
            "websiteUrl": "https://stechishin.github.io/language_skool/",
            "codeSourceUrl": "https://github.com/Stechishin/language_skool",
            "cvUrl": "https://www.linkedin.com/in/ростислав-стечишин-4b187a146",
            "photo": "images/students/stechyshyn.jpg"
        },
        {
            "name": "Katynskyi Taras",
            "websiteUrl": "https://katinskiy.github.io/project/",
            "codeSourceUrl": "https://github.com/katinskiy/project",
            "cvUrl": "",
            "photo": "images/students/katynskyi.jpg"
        },
        {
            "name": "Avramenko Yurii",
            "websiteUrl": "https://jaerbi.github.io/My-site-jaerbi/",
            "codeSourceUrl": "https://github.com/jaerbi/My-site-jaerbi/",
            "cvUrl": "https://www.linkedin.com/in/yura-avramenko-a82b11145/",
            "photo": "images/students/avramenko.jpg"
        },
        {
            "name": "Semyhinovs'kyi Oleh",
            "websiteUrl": "https://olehsam.github.io/homework-5/",
            "codeSourceUrl": "https://github.com/olehsam/homework-5/",
            "cvUrl": "",
            "photo": "images/students/no-photo.gif"
        },
        {
            "name": "Chursinov Oleksii",
            "websiteUrl": "https://alexnumber17.github.io/project/",
            "codeSourceUrl": "https://github.com/alexnumber17/project",
            "cvUrl": "https://www.linkedin.com/in/chursinov-oleksii-105865146/",
            "photo": "images/students/chursinov.jpg"
        },
        {
            "name": "Buday Oksana",
            "websiteUrl": "https://oksanabuday.github.io/sitep/",
            "codeSourceUrl": "https://github.com/OksanaBuday/sitep",
            "cvUrl": "https://www.linkedin.com/in/oksana-buday-80b87a146/",
            "photo": "images/students/buday.jpg"
        },
        {
            "name": "Kmet Oleh",
            "websiteUrl": "https://olehkmet1.github.io/30seconds2mars/index.html",
            "codeSourceUrl": "https://github.com/olehkmet1/30seconds2mars",
            "cvUrl": "www.linkedin.com/in/oleh-kmet-275875146",
            "photo": "images/students/kmet.jpg"
        },
        {
            "name": "Honcharuk Vitalii",
            "websiteUrl": "https://vitalika1234.github.io/Project/",
            "codeSourceUrl": "https://github.com/vitalika1234/Project",
            "cvUrl": "",
            "photo": "images/students/honcharuk.jpg"
        },
        {
            "name": "Shchebyvovk Stanislav",
            "websiteUrl": "https://retrogott.github.io/homework-projectone/",
            "codeSourceUrl": "https://github.com/retrogott/homework-projectone",
            "cvUrl": "",
            "photo": "images/students/shchebyvovk.jpg"
        },
        {
            "name": "Kurdova Roksolana",
            "websiteUrl": "https://roksolana13k.github.io/yakarimportservice/",
            "codeSourceUrl": "https://github.com/roksolana13k/yakarimportservice",
            "cvUrl": "",
            "photo": "images/students/kurdova.jpg"
        },
        {
            "name": "Oleksovskyi Yurii",
            "websiteUrl": "https://oleksovskyi.github.io/project/",
            "codeSourceUrl": "https://github.com/oleksovskyi/project",
            "cvUrl": "",
            "photo": "images/students/oleksovskyi.jpg"
        },
        {
            "name": "Panchyshyn Yurii",
            "websiteUrl": "https://panchyshyn01.github.io/pavilion02/",
            "codeSourceUrl": "https://github.com/panchyshyn01/pavilion02",
            "cvUrl": "https://www.linkedin.com/in/yuriy-panchyshyn-931a6547/",
            "photo": "images/students/panchyshyn.jpg"
        },
        {
            "name": "Kostela Andrii",
            "websiteUrl": "https://shyxer.github.io/myproject/",
            "codeSourceUrl": "https://github.com/shyxer/myproject",
            "cvUrl": "https://www.linkedin.com/in/andrii-kostela-812b6982",
            "photo": "images/students/kostela.jpg"
        },
        {
            "name": "Posikira Bogdan",
            "websiteUrl": "https://kawaaat.github.io/mypage/",
            "codeSourceUrl": "https://github.com/kawaAAT/mypage",
            "cvUrl": "",
            "photo": "images/students/posikira.png"
        },
        {
            "name": "Chornobryvyi Vitalii",
            "websiteUrl": "https://werewolf39.github.io/my_website/",
            "codeSourceUrl": "https://github.com/werewolf39/my_website",
            "cvUrl": "https://www.linkedin.com/in/vitalii-chornobryvyi-79b645146/",
            "photo": "images/students/chornobryvyi.jpg"
        },
        {
            "name": "Pelensky Danylo",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/pelensky.jpg"
        },
        {
            "name": "Pirozhyk Ihor",
            "websiteUrl": "https://pirozhyk.github.io/sokil/",
            "codeSourceUrl": "https://github.com/Pirozhyk/sokil",
            "cvUrl": "",
            "photo": "images/students/pirozhyk.jpg"
        },
        {
            "name": "Berezhna Iryna",
            "websiteUrl": "https://motakairuna.github.io/homeproject/",
            "codeSourceUrl": "https://github.com/motakairuna/homeproject",
            "cvUrl": "https://www.linkedin.com/in/iryna-berezhna-a92907146/?trk=uno-choose-ge-no-intent&dl=no",
            "photo": "images/students/berezhna.jpg"
        },
        {
            "name": "Midenko Rostyslav",
            "websiteUrl": "https://rostikm.github.io/About_me/",
            "codeSourceUrl": "https://github.com/RostikM/About_me",
            "cvUrl": "https://www.linkedin.com/in/rostyslav-midenko-7a0887146/?trk=uno-choose-ge-no-intent&dl=no",
            "photo": "images/students/midenko.jpg"
        },
        {
            "name": "Zahorodnjuk Oleksandr",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/zahorodnjuk.jpg"
        },
        {
            "name": "Kuzma Olga",
            "websiteUrl": "https://olgakuzma.github.io/parsley/",
            "codeSourceUrl": "https://github.com/OlgaKuzma/parsley",
            "cvUrl": "linkedin.com/in/olga-kuzma-034671144",
            "photo": "images/students/kuzma.jpg"
        },
        {
            "name": "Babych Oleksandr",
            "websiteUrl": "https://oleksandrbabych.github.io/aleks_web/",
            "codeSourceUrl": "https://oleksandrbabych.github.io/aleks_web/",
            "cvUrl": "https://www.linkedin.com/in/oleksandr-babych-3b9b37141/",
            "photo": "images/students/babych.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
