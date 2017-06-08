咸鱼弹窗插件 v1.0.0
使用前请引用下列代码（按顺序）

```python
<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
    </script>
    <script src="js/index.js"></script>
```

使用时，请建立一个script标签，
调用方法 openWindow.gainId_Str(id,str); id 为你想作为插件触发器的元素的id，str为弹窗内文本内容
        openWindow.gainId_Str2(id,str); gainId_Str 为安卓方法，gainId_Str2为苹果方法
示例 

```python  
  <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
    </script>
    <script src="js/index.js"></script>
    <script type="text/javascript">
      openWindow.gainId_Str("#smart","这是一个空白的文本");  //安卓弹窗触发
      openWindow.gainId_Str2("#smart2","这是一个空白的文本"); //苹果弹窗触发

   </script>
```

本插件具有自适应功能
插件作者：欧阳贺捷