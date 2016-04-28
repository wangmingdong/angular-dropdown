(function(window, angular, undefined){
'use strict';

var bd = angular.module("ng.dropdown", []);
/*定义全局变量*/
bd.constant('bsDropdownCfg', {
	display: 'DropDown',
	disabled: false,
	divider:[],
	disabledItems: [],
	multiSelect:[],
	multiTitle:''
});
bd.run(['$templateCache', function($templateCache){
	$templateCache.put('defaultTemplate',[
		'<div class="dropdown">',
		  '<button class="btn btn-default dropdown-toggle" type="button" ng-click="showDropdown($event);" data-toggle="dropdown" aria-expanded="true">',
		    '{{showText.label}} ',
		    '<span class="caret"></span>',
		  '</button>',
		  '<span class="scroll-up scroll-btn" ng-click="scrollItems($event,false,1);"><span class="scroll-up-arrow caret"></span></span>',
	  	  '<span class="scroll-down scroll-btn" ng-click="scrollItems($event,true,1);"><span class="scroll-down-arrow caret"></span></span>',
		  '<ul class="dropdown-menu" role="menu">',
		    "<li role='presentation' ng-repeat='item in _bsDropdownItems' ng-class='{divider:item.isDivider, disabled: item.isDisabled}' class='dropdown-list'>",
		      '<a ng-if="!item.isDivider" role="menuitem" tabindex="-1" href="" class="dropdown-li" ng-click="selectItem(item)" ng-mouseenter="showChildItem(item,$event,$index,2,true)">{{item.label}}',
		      '<span class="pull-right caret has-child-ico" ng-if="item.child"></span>',
		      '</a>',
			  '<span ng-if="item.child" class="scroll-up scroll-btn" ng-click="scrollItems($event,false,2);"><span class="scroll-up-arrow caret"></span></span>',
		  	  '<span ng-if="item.child" class="scroll-down scroll-btn" ng-click="scrollItems($event,true,2);"><span class="scroll-down-arrow caret"></span></span>',
		      '<ul ng-if="item.child" class="dropdown-menu dropdown-menu-2" data-string="item.child" role="menu">',
			    "<li role='presentation' ng-repeat='item2 in item.child' ng-class='{divider:item2.isDivider, disabled: item2.isDisabled}' class='dropdown-list'>",
			      '<a ng-if="!item2.isDivider" role="menuitem" tabindex="-1" href="" class="dropdown-li" ng-click="selectItem(item2)" ng-mouseenter="showChildItem(item,$event,$index,3,true)">{{item2.label}}',
		      		'<span class="pull-right caret has-child-ico" ng-if="item2.child"></span>',
			      '</a>',
				  '<span ng-if="item2.child" class="scroll-up scroll-btn" ng-click="scrollItems($event,false,3);"><span class="scroll-up-arrow caret"></span></span>',
			  	  '<span ng-if="item2.child" class="scroll-down scroll-btn" ng-click="scrollItems($event,true,3);"><span class="scroll-down-arrow caret"></span></span>',
			      '<ul ng-if="item2.child" class="dropdown-menu dropdown-menu-3" data-string="item.child" role="menu">',
				    "<li role='presentation' ng-repeat='item3 in item2.child' ng-class='{divider:item3.isDivider, disabled: item3.isDisabled}' class='dropdown-list'>",
				      '<a ng-if="!item3.isDivider" role="menuitem" tabindex="-1" href="" class="dropdown-li" ng-click="selectItem(item3)">{{item3.label}}</a>',
				    '</li>',
				  '</ul>',
			    '</li>',
			  '</ul>',
		    '</li>',
		  '</ul>',
		'</div>'
	].join(''));
	$templateCache.put('multiSelectTemplate',[
		'<div class="dropdown">',
		  '<button class="btn btn-default dropdown-toggle" type="button" ng-click="showDropdown($event);" data-toggle="dropdown" aria-expanded="true">',
		    '{{multiTitle}}',
		    ' <span class="caret"></span>',
		  '</button>',
		  '<span class="scroll-up scroll-btn" ng-click="scrollItems($event,false,1);"><span class="scroll-up-arrow caret"></span></span>',
	  	  '<span class="scroll-down scroll-btn" ng-click="scrollItems($event,true,1);"><span class="scroll-down-arrow caret"></span></span>',
		  '<ul class="dropdown-menu" role="menu">',
		    "<li role='presentation' ng-repeat='item in _bsDropdownItems' ng-class='{divider:item.isDivider, disabled: item.isDisabled}' class='dropdown-list'>",
		      '<a ng-if="!item.isDivider" role="menuitem" tabindex="-1" href="" ng-click="selectItem(item);" class="dropdown-li" ng-class='+'{true:"item-checked"}[item.checked]'+' ng-mouseenter="showChildItem(item,$event,$index,2,false)">',
		      	'{{item.label}}',
			      	'<span class="pull-right caret has-child-ico" ng-if="item.child"></span>',
		      '</a>',
			  '<span ng-if="item.child" class="scroll-up scroll-btn" ng-click="scrollItems($event,false,2);"><span class="scroll-up-arrow caret"></span></span>',
		  	  '<span ng-if="item.child" class="scroll-down scroll-btn" ng-click="scrollItems($event,true,2);"><span class="scroll-down-arrow caret"></span></span>',
			  '<ul ng-if="item.child" class="dropdown-menu dropdown-menu-2" role="menu">',
			    "<li role='presentation' ng-repeat='item2 in item.child' ng-class='{divider:item2.isDivider, disabled: item2.isDisabled}' class='dropdown-list'>",
			      '<a ng-if="!item2.isDivider" role="menuitem" tabindex="-1" href="" ng-click="selectItem(item2);" class="dropdown-li" ng-class='+'{true:"item-checked"}[item2.checked]'+' ng-mouseenter="showChildItem(item2,$event,$index,3,false)">',
			      	'{{item2.label}}',
			      	'<span class="pull-right caret has-child-ico" ng-if="item2.child"></span>',
			      '</a>',
				  '<span ng-if="item2.child" class="scroll-up scroll-btn" ng-click="scrollItems($event,false,3);"><span class="scroll-up-arrow caret"></span></span>',
			  	  '<span ng-if="item2.child" class="scroll-down scroll-btn" ng-click="scrollItems($event,true,3);"><span class="scroll-down-arrow caret"></span></span>',
				  '<ul ng-if="item2.child" class="dropdown-menu dropdown-menu-3" role="menu">',
				    "<li role='presentation' ng-repeat='item3 in item2.child' ng-class='{divider:item3.isDivider, disabled: item3.isDisabled}' class='dropdown-list'>",
				      '<a ng-if="!item3.isDivider" role="menuitem" tabindex="-1" href="" ng-click="selectItem(item3);" class="dropdown-li" ng-class='+'{true:"item-checked"}[item3.checked]'+'>',
				      	'{{item3.label}}',
				      '</a>',
				    '</li>',
				  '</ul>',
			    '</li>',
			  '</ul>',
		    '</li>',
		  '</ul>',
		'</div>'
	].join(''));
}]);
bd.controller("bsDropdownController", 
	["$scope", "$element", "$attrs", '$interval', function($scope, $element, $attrs ,$interval){
		var ngModelCtrl, 
			self = this,
			scrollTime = [0,0,0];		//控制翻页次数/倍数
		this.init = function(ngModelCtrl_){
			ngModelCtrl = ngModelCtrl_;
			ngModelCtrl.$render = function(){
				var isSelectValDefined = angular.isDefined($scope.selected);
				if(isSelectValDefined){
					ngModelCtrl.$setViewValue($scope.selected);
				}

				self.$render(ngModelCtrl.$viewValue);
				if($scope.multiSelect) {
					if(!isSelectValDefined)
						$scope.selected = ngModelCtrl.$viewValue;
					self.checkMultiOptions();
				}
			};
		};

		//如果有child，则把child也push进item中，递归（子菜单选中高亮）
		this.childAddItems = function(array){
			for(var arr_j=0;arr_j<array.length;arr_j++){
				if(array[arr_j].child){
					for(var arr_i=0;arr_i<array[arr_j].child.length;arr_i++){
						var item = array[arr_j].child[arr_i];
						if($scope.selectLabels.indexOf(item.label) != -1){
							item.checked = true;
						}else{
							item.checked = false;
						}
					}
					this.childAddItems(array[arr_j].child);
				}
				var item = array[arr_j];
				if($scope.selectLabels.indexOf(item.label) != -1){
					item.checked = true;
				}else{
					item.checked = false;
				}
			}
		}
		/*选择多项li*/
		this.checkMultiOptions = function(){
			$scope.regroup($scope._bsDropdownItems);
			$scope.selectLabels = [];	//存放只有label的数组
			for(i=0;i<$scope.selected.length;i++){
				$scope.selectLabels.push($scope.selected[i].label);
			}
			this.childAddItems($scope._bsDropdownItems);
			for(var i=0;i<$scope._bsDropdownItems.length;i++){
				/*将已选择的对象替换成_bsDropdownItems组合成的对象*/
				for(var j=0;j<$scope.selected.length;j++){
					if($scope.selected[j].label == $scope._bsDropdownItems[i].label){
						$scope.selected[j] = $scope._bsDropdownItems[i];
					}
				}
			}
		};
		/*获取各个高度信息*/
		$scope.getWindowHeight = function(event,level){
			var heightObject = {};
			//可见区域高度
			heightObject.fullHeight = document.body.clientHeight;
			//dom元素高度
			heightObject.domHeight = level==1?event.target.nextSibling.nextSibling.nextSibling.scrollHeight:event.target.parentNode.childNodes[event.target.parentNode.childNodes.length-2].scrollHeight;
			//dom距离底部高度
			heightObject.bottomHeight = heightObject.fullHeight - event.target.getBoundingClientRect().top - heightObject.domHeight;
			return heightObject;
		}
		$scope.singleModel = {};
		
		/*
		*	初始化，所有dropdown隐藏并且scrollTime值为0
		*	event：鼠标事件
		*	isFirst:判断是否是首级，如果不是则跳过面板隐藏
		*	level:当前层级数
		*/
		$scope.initDropdown = function(event,isFirst,level){
			var dropdownWells = $element[0].getElementsByClassName('dropdown-menu'),
				scrollBtns = $element[0].getElementsByClassName('scroll-btn'),
				dropdownWell = event.target.parentNode.getElementsByTagName('ul')[0];
			if(dropdownWell){
				/*如果ul进行翻页则该ul归位*/
				for(var i=0;i<dropdownWell.childNodes.length;i++){
					if(dropdownWell.childNodes[i].style){
						dropdownWell.childNodes[i].style.top = '-2px';
					}
				}
			}
			if(isFirst){
				/*每次点击隐藏所有ul*/
				for(var i=0;i<dropdownWells.length;i++){
					if(dropdownWell != dropdownWells[i]){
						dropdownWells[i].style.display = 'none';
					}
				}
				scrollTime = [0,0,0];
			}else{
				scrollTime[level-1] = 0;
				/*上一级*/
				var parentDropdownUl = event.target.parentNode.parentNode,
					scrollBars = parentDropdownUl.getElementsByClassName('scroll-btn');
				for(var i=0;i<parentDropdownUl.childNodes.length;i++){
					var lis = parentDropdownUl.childNodes[i];
					for(var j=0;j<lis.childNodes.length;j++){
						if(lis.childNodes[j].nodeName == 'SPAN'){
							lis.childNodes[j].style.display = 'none';
						}
					}
				}
			}
		}
		/*
		*	包装显示ul函数,button与li事件公用
		*	event：鼠标事件
		*	dropdownWell:ul面板
		*	scrollUpBtn:上翻页按钮
		*	scrollDownBtn:下翻页按钮
		*	level:当前层级数
		*/
		$scope.showDropdownMenu = function(event,dropdownWell,scrollUpBtn,scrollDownBtn,level){
			if(dropdownWell.style.display == '' || dropdownWell.style.display =='none'){
				dropdownWell.style.display = 'block';
				dropdownWell.style.left = event.target.clientWidth;
				dropdownWell.style.marginTop = 'auto';
				/*如果是二级或三级菜单，则需要以lin-a为基准高度计算top*/
				dropdownWell.style.top = level>1?event.target.offsetTop:'-2px';
				dropdownWell.style.height = 'auto';
				var windowHeight = $scope.getWindowHeight(event,level);
				if(windowHeight.bottomHeight < 0){
					/*如果ul高度比可视区域小，则上移*/
					if(windowHeight.domHeight <= windowHeight.fullHeight){
						dropdownWell.style.marginTop = windowHeight.bottomHeight;
					}else{		//否则显示滚动按钮
						scrollUpBtn.style.display = 'none';
						scrollUpBtn.style.left = event.target.clientWidth;
						scrollUpBtn.style.top = -event.target.getBoundingClientRect().top + 5;
						scrollDownBtn.style.display = 'block';
						scrollDownBtn.style.left = event.target.clientWidth;
						scrollDownBtn.style.top = windowHeight.fullHeight - event.target.getBoundingClientRect().top -15;
						dropdownWell.style.top = -event.target.getBoundingClientRect().top;
						dropdownWell.style.height = windowHeight.fullHeight;
					}
				}
			}else{
				dropdownWell.style.display = 'none';
				scrollUpBtn.style.display = 'none';
				scrollDownBtn.style.display = 'none';
			}
		}
		/*点击显示dropdown*/
		$scope.showDropdown = function(event){
			var dropdownBtn = event.target,
				dropdownWell = event.target.parentNode.getElementsByTagName('ul')[0],
				scrollUpBtn = dropdownBtn.nextSibling,
				scrollDownBtn = scrollUpBtn.nextSibling;
			$scope.initDropdown(event,true,1);
			$scope.showDropdownMenu(event,dropdownWell,scrollUpBtn,scrollDownBtn,1);
		}
		/*鼠标点击↑或↓dropdown翻页*/
		$scope.scrollItems = function(event,type,level){
			var dropdownBtn = level==1?$element[0].firstChild.firstChild:event.target,
				dropdownWell = dropdownBtn.childNodes.length>0?dropdownBtn.parentNode.getElementsByTagName('ul')[0]:dropdownBtn.parentNode.parentNode.getElementsByTagName('ul')[0],
				dropdownLi = dropdownWell.childNodes,
				isNotParent = event.target.className == 'scroll-up-arrow caret' || event.target.className == 'scroll-down-arrow caret' ;
			for(var i=0;i<dropdownLi.length;i++){
				if(dropdownLi[i].style){
					if(type){
						dropdownLi[i].style.top = (scrollTime[level-1]-1)*26;
					}else{
						dropdownLi[i].style.top = (scrollTime[level-1]+1)*26;
					}
				}
			}
			if(dropdownLi[1].style.top == '0px' && !type){
				/*上移*/
				isNotParent?event.target.parentNode.style.display = 'none':event.target.style.display = 'none';
			}else{
				/*下移*/
				isNotParent?event.target.parentNode.style.display = 'block':event.target.style.display = 'block';
			}
			if(dropdownLi[1].style.top == '-26px' && type){
				/*下移*/
				if(level == 1){
					isNotParent?event.target.parentNode.previousSibling.style.display = 'block':event.target.previousSibling.style.display = 'block';
				}else{
					isNotParent?event.target.parentNode.previousSibling.previousSibling.previousSibling.style.display = 'block':event.target.previousSibling.previousSibling.previousSibling.style.display = 'block';
				}
			}
			/*下翻页，到底图标隐藏*/
			if(type && document.body.clientHeight-dropdownLi[dropdownLi.length-2].getBoundingClientRect().top > 26){
				isNotParent?event.target.parentNode.style.display = 'none':event.target.style.display = 'none';
			}else{	//上翻页，下翻页图标显示
				if(level == 1){
					isNotParent?event.target.parentNode.nextSibling.style.display = 'block':event.target.nextSibling.style.display = 'block';
				}else{
					isNotParent?event.target.parentNode.nextSibling.nextSibling.nextSibling.style.display = 'block':event.target.nextSibling.nextSibling.nextSibling.style.display = 'block';
				}
			}
			type?scrollTime[level-1]--:scrollTime[level-1]++;
		}
		/*
		*	显示子面板
		*	item:子ul面板
		*	event：鼠标事件
		*	index:$index
		*	level:当前层级数
		*/
		$scope.showChildItem = function(item,event,index,level){
			var childPanels = $element[0].getElementsByClassName('dropdown-menu-'+level),
				childPanel = event.target.parentNode.getElementsByTagName('ul'),
				scrollUpBtn = event.target.nextSibling.nextSibling.nextSibling,
				scrollDownBtn = scrollUpBtn.nextSibling,
				parentPanel = event.target.parentNode.parentNode;
			/*隐藏所有已显示的二级或三级面板*/
			for(var i=0;i<childPanels.length;i++){
				childPanels[i].style.display = 'none';
			}
			$scope.initDropdown(event,false,level);
			if(childPanel.length>0){
				$scope.showDropdownMenu(event,childPanel[0],scrollUpBtn,scrollDownBtn.nextSibling.nextSibling,2);
			}
		}
		/*如果是多选并且有已选，过滤数组*/
		$scope.regroup = function(arr){
			for(var i=0;i<arr.length;i++){
				for(var j=i;j<arr.length;j++){
					if(i!=j){
						if(arr[i].label == arr[j].label){
							arr.splice(i,1);
						}
					}
				}
			}
			arr.filter(function(v){
				return v;
			});
		}
		/*选中事件*/
		$scope.selectItem = function(item){
			/*如果有链接则直接跳转*/
			if(item.link){
				window.location.href = item.link; 
			}
			if(!item.isDisabled){
				if($scope.multiSelect)	{
					var index = -1;
					/*判断已选的对象，控制checked*/
					for(var i in $scope.selected){
						if($scope.selected[i].label == item.label){
							index = 1;
						}
					}
					/*如果未选择*/
					if((index=$scope.selected.indexOf(item)) == -1){
						var newSelected = [];
						for(var i=0;i<$scope.selected.length;i++){
							newSelected.push($scope.selected[i]);
							$scope.selected[i].checked = true;
						}
						newSelected.push(item);
						$scope.selected = newSelected;
					} else{		//如果已选
						var newSelected = [];
						for(var i=0;i<$scope.selected.length;i++){
							if(i != index){
								newSelected.push($scope.selected[i]);
								$scope.selected[i].checked = false;
							}
						}
						$scope.selected = newSelected;
					}
				} else{
					$scope.selected = item;
				}
				self.checkMultiOptions();
				ngModelCtrl.$render();
			}
			if($scope.multiSelect)	{
				$scope.regroup($scope.selected);
			}
		};
}]);
/*自定义指令，包装生成数据规格*/
bd.directive("bsDropdown", ['bsDropdownCfg', function(bsDropdownCfg){
		return{
			scope:{
				bsDropdownItems: "="	
			},
			require: ['bsDropdown','?ngModel'],
			controller: "bsDropdownController", 
			templateUrl: function(elem, attr){
				return angular.isDefined(attr.bsDropdownMulti)?
					"multiSelectTemplate":
					"defaultTemplate";
			}, 
			link: function(scope, el, attr, ctrls){
				var bsDropdownCtrl = ctrls[0], ngModelCtrl = ctrls[1];
				console.log(bsDropdownCtrl,ngModelCtrl)
				var defaultDisplay = angular.isDefined(attr.bsDropdownDisplay)?
										attr.bsDropdownDisplay:bsDropdownCfg.display;

				scope._bsDropdownItems = scope.bsDropdownItems;
				/*分割线*/
				scope.divider = angular.isDefined(attr.bsDropdownDivider)?
									scope.$eval(attr.bsDropdownDivider):bsDropdownCfg.divider;
				/*不可见数据*/
				scope.disabledItems = angular.isDefined(attr.bsDropdownItemDisabled)?
										scope.$eval(attr.bsDropdownItemDisabled):bsDropdownCfg.disabledItems;
				/*不可见item*/
				scope.disabled = angular.isDefined(attr.bsDropdownDisabled)?
									scope.$eval(attr.bsDropdownDisabled):bsDropdownCfg.disabled;
				/*多选*/
				scope.multiSelect = angular.isDefined(attr.bsDropdownMulti);
				/*如果多选按钮上显示文字*/
				scope.multiTitle = attr.bsDropdownTitle;

				bsDropdownCtrl.init(ngModelCtrl);
				bsDropdownCtrl.$render = function(displayText){
					changeShowText(displayText);
				};
				
				scope._bsDropdownItems = createDropdownItems();
				/*bsDropdownRender();

				function bsDropdownRender(){
					var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
					el.find("#bsDropDown").attr("id", id);
					el.find(".dropdown-menu").attr("aria-labelledby", id);
					changeShowText(defaultDisplay);
					if(scope.disabled){
						el.find("button").addClass("disabled");
					}
				}*/

				function changeShowText(text){
					var _text = text;
					if(angular.isArray(_text)) {
						if(_text.length == 0)
							_text = null;
						else
							_text = _text.join();
					}
					scope.showText = _text !== null?_text:defaultDisplay;
				}
				/*将数据重新包装*/
				function createDropdownItems(){
					var dropdownItem = [];
					var _k = 0;
					for(var i=0;i<scope.bsDropdownItems.length;i++){
						var isDivider = scope.divider.indexOf(i)!=-1,
							isDisabled = scope.disabledItems.indexOf(i)!=-1,
							itemObj = scope.bsDropdownItems[i],
							id = itemObj.id,
							label = itemObj.label,
							link = itemObj.link,
							child = itemObj.child;
						if(isDivider){
							var option  = _createDropdownItemObj(_k++, itemObj, !isDivider, isDisabled, id, label, link, child);
							var divider = _createDropdownItemObj(_k++, null, isDivider, false, id, label, link, child);
							dropdownItem.push(option);
							dropdownItem.push(divider);
						}else{
							var option = _createDropdownItemObj(_k++, itemObj, isDivider, isDisabled, id, label, link, child);
							dropdownItem.push(option);
						}
					}
					return dropdownItem;
				}
				/*根据此规则输出数据*/
				function _createDropdownItemObj(k, text_, isDivider_, isDisabled_, id_, label_, link_, child_){
					return {
						_k: k,
						text: text_,
						isDivider: isDivider_,
						isDisabled: isDisabled_,
						id:id_,
						label:label_,
						link:link_,
						child:child_
					};
				}
			},
			restrict: "AE"
		};
	}]);
})(window, window.angular);
/*加载css/js方法*/
var dynamicLoading = {
    css: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}
dynamicLoading.css("style.css");