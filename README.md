# angular-dropdown
基于AngularJS的dropdown插件

## 基本用法
<code>< div bs-dropdown 
     bs-dropdown-display="MyDropDown" 
   bs-dropdown-items="<kbd>menusBase</kbd>" 
   ng-model="<kbd>selectMenuBase</kbd>" 
   ng-change="changeMenu()">< /div>
</code>
<blockquote>
  <p>controller中：</p>
</blockquote>
<code>$scope.<kbd>menusBase</kbd> = [</code></br>
<code>&nbsp;{'label':'菜单1'},</code></br>
<code>&nbsp;{'label':'菜单2'},</code></br>
<code>&nbsp;{'label':'菜单3'},</code></br>
<code>&nbsp;{'label':'菜单4'}</code></br>
<code>];</code></br>
<code>$scope.<kbd>selectMenuBase</kbd> = $scope.menusBase[2];</code><br>

## 末节点可选
<code>< div bs-dropdown 
   bs-dropdown-items="menusBase" 
   bs-dropdown-optional='<kbd>last</kbd>'
     bs-dropdown-title="<kbd>请选择</kbd>"
   bs-dropdown-items="<kbd>menusBase</kbd>" 
   ng-model="<kbd>selectMenuBase</kbd>" 
   ng-change="changeMenu()">< /div>
</code>
<blockquote>
  <p>controller中：</p>
</blockquote>
<code>$scope.<kbd>menusBase</kbd> = [</code></br>
<code>&nbsp;{'label':'菜单1'},</code></br>
<code>&nbsp;{'label':'菜单2'},</code></br>
<code>&nbsp;{'label':'菜单3'},</code></br>
<code>&nbsp;{'label':'菜单4'}</code></br>
<code>];</code></br>
<code>$scope.<kbd>selectMenuBase</kbd> = $scope.menusBase[2];</code><br>

## 多选用法
<code>< div bs-dropdown 
     bs-dropdown-multi 
       bs-dropdown-display="Multiselect" 
     bs-dropdown-title="请选择"
     bs-dropdown-item-disabled="{{[4]}}" 
     bs-dropdown-divider="{{[2]}}" 
   ng-model="<kbd>selectAction</kbd>" 
   ng-change="changeMenu()">< /div>
</code>
<blockquote>
  <p>controller中：</p>
</blockquote>
<code>$scope.<kbd>actions</kbd> = [</code></br>
<code>&nbsp;{'label':'菜单1'},</code></br>
<code>&nbsp;{'label':'菜单2'},</code></br>
<code>&nbsp;{'label':'菜单3'},</code></br>
<code>&nbsp;{'label':'菜单4'}</code></br>
<code>&nbsp;...</code></br>
<code>$scope.selectAction = [$scope.actions[0],$scope.actions[3]</code>
<code>];</code></br>
<code>$scope.<kbd>selectMenuBase</kbd> = $scope.menusBase[2];</code><br>

## 综合用法
<code>
  < div bs-dropdown 
       bs-dropdown-display="MyDropDown" 
     bs-dropdown-items="<kbd>menus</kbd>" 
     ng-model="<kbd>selectMenu</kbd>" 
     ng-change="changeMenu()">< /div>
</code>
<blockquote>
  <p>controller中：</p>
</blockquote>
<code>$scope.<kbd>menus</kbd> = [</code><br>
<code>&nbsp;{'label':'菜单1','id':1},</code><br>
<code>&nbsp;{'label':'菜单2','id':2},</code><br>
<code>&nbsp;{'label':'菜单3','id':3,'child':[</code><br>
<code>&nbsp;&nbsp;&nbsp;{'label':'子菜单3-1','id':31},</code><br>
<code>&nbsp;&nbsp;&nbsp;{'label':'子菜单3-2','id':32}</code><br>
<code>&nbsp;&nbsp;]},</code><br>
<code>&nbsp;{'label':'菜单4','id':4},</code><br>
<code>&nbsp;{'label':'菜单5','id':5},</code><br>
<code>&nbsp;{'label':'菜单6','id':6,'child':[</code><br>
<code>&nbsp;&nbsp;&nbsp;{'label':'子菜单6-1','id':61},</code><br>
<code>&nbsp;&nbsp;&nbsp;{'label':'子菜单6-2','id':62,'child':[</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'label':'子菜单6-2-1','id':621},</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'label':'子菜单6-2-2','id':622},</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'label':'子菜单6-2-3','id':623}</code><br>
<code>&nbsp;&nbsp;&nbsp;]},</code><br>
<code>&nbsp;&nbsp;&nbsp;{'label':'子菜单链接6-3','id':63,'link':'http://www.baidu.com'}</code><br>
<code>&nbsp;&nbsp;]},</code><br>
<code>&nbsp;{'label':'链接','id':7,'link':'http://www.baidu.com'}</code><br>
<code>&nbsp;];</code><br>
<code>$scope.<kbd>selectMenu</kbd> = $scope.menus[2];</code><br>
