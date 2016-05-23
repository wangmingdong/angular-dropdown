'use strict';

angular.module("demoApp", ['ng.dropdown'])
	.controller("MenuController", function($scope){
		$scope.menusBase = [
			{'label':'菜单1'},
			{'label':'菜单2'},
			{'label':'菜单3'},
			{'label':'菜单4'},
			{'label':'菜单5'},
			{'label':'菜单6'},
			{'label':'菜单7'},
			{'label':'菜单8'},
			{'label':'菜单9','id':3,'child':[
				{'label':'子菜单3-1','id':31},
				{'label':'子菜单3-2','id':32},
				{'label':'子菜单3-3'},
				{'label':'子菜单3-4'},
				{'label':'子菜单3-5'},
				{'label':'子菜单3-6'},
				{'label':'子菜单3-7'},
				{'label':'子菜单3-8'},
				{'label':'子菜单3-9'},
				{'label':'子菜单3-10'},
				{'label':'子菜单3-11'},
				{'label':'子菜单3-12'},
				{'label':'子菜单3-13'},
				{'label':'子菜单3-14'}
			]},
			{'label':'菜单10'},
			{'label':'菜单11'},
			{'label':'菜单12'},
			{'label':'菜单13'},
			{'label':'菜单14'},
			{'label':'菜单15'}
		];
		$scope.selectMenuBase = $scope.menusBase[2];
		$scope.selectLastRoot = $scope.menusBase[3];
		$scope.menus = [
			{'label':'菜单1','id':1},
			{'label':'菜单2','id':2},
			{'label':'菜单3','id':3,'child':[
				{'label':'子菜单3-1','id':31},
				{'label':'子菜单3-2','id':32}
			]},
			{'label':'菜单4','id':4},
			{'label':'菜单5','id':5},
			{'label':'菜单6','id':6,'child':[
				{'label':'子菜单6-1','id':61},
				{'label':'子菜单6-2','id':62,'child':[
					{'label':'子菜单6-2-1','id':621},
					{'label':'子菜单6-2-2','id':622},
					{'label':'子菜单6-2-3','id':623}
				]},
				{'label':'子菜单链接6-3','id':63,'link':'http://www.baidu.com'}
			]},
			{'label':'链接','id':7,'link':'http://www.baidu.com'},
			{'label':'菜单8','id':8},
			{'label':'菜单9','id':9},
			{'label':'菜单10','id':10}
		];
		$scope.selectMenu = $scope.menus[2];
		$scope.actions = [
			{'label':'菜单1'},
			{'label':'菜单2','child':[
				{'label':'子菜单2-1'},
				{'label':'子菜单2-2'},
				{'label':'子菜单2-3','child':[
					{'label':'子菜单3-1'},
					{'label':'子菜单3-2'},
					{'label':'子菜单3-3'},
					{'label':'子菜单3-4'},
					{'label':'子菜单3-5'},
					{'label':'子菜单3-6'},
					{'label':'子菜单3-7'},
					{'label':'子菜单3-8'},
					{'label':'子菜单3-9'},
					{'label':'子菜单3-10'},
					{'label':'子菜单3-11'},
					{'label':'子菜单3-12'},
					{'label':'子菜单3-13'},
					{'label':'子菜单3-14'}
				]},
			]},
			{'label':'菜单3'},
			{'label':'菜单4'},
			{'label':'菜单5'},
			{'label':'菜单6'},
			{'label':'菜单7'},
			{'label':'菜单8'}
		];
		$scope.selectAction = [$scope.actions[0],$scope.actions[3]];
		$scope.change = function(){
			// console.log("MultiSelectController say... " + $scope.selectAction);
		}
		$scope.changeMenu = function(){
			// console.log("选择的是... " + $scope.selectMenu.label);
		}
	});