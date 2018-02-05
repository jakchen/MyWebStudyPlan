
一个中文网站：http://fontawesome.dashgame.com/
或者百度直接搜索：Font Awesome

使用方法：

简单方式之一：使用默认CSS

  如果您使用了默认的Bootstrap CSS样式，那么你可以使用这种方式来引入默认的Font Awesome CSS样式。

  复制整个 font-awesome 文件夹到您的项目中。
  在HTML的 <head> 中引用font-awesome.min.css。
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

  参考示例，然后开始使用Font Awesome吧!


您可以将Font Awesome图标使用在几乎任何地方，只需要使用CSS前缀 fa ，再加上图标名称。 Font Awesome是为使用内联元素而设计的。我们通常更喜欢使用 <i> ，因为它更简洁。 但实际上使用 <span> 才能更加语义化。

<i class="fa fa-camera-retro"></i> fa-camera-retro

大图标
  使用 fa-lg (33%递增)、fa-2x、 fa-3x、fa-4x，或者 fa-5x 类 来放大图标。

  <i class="fa fa-camera-retro fa-lg"></i> fa-lg
  <i class="fa fa-camera-retro fa-2x"></i> fa-2x
  <i class="fa fa-camera-retro fa-3x"></i> fa-3x
  <i class="fa fa-camera-retro fa-4x"></i> fa-4x
  <i class="fa fa-camera-retro fa-5x"></i> fa-5x

如果图标的底部和顶部被截断了，您需要增加行高来解决此问题。

固定宽度
使用 fa-fw 可以将图标设置为一个固定宽度。主要用于不同宽度图标无法对齐的情况。 尤其在列表或导航时起到重要作用。

用于列表
使用 fa-ul 和 fa-li 便可以简单的将无序列表的默认符号替换掉。
<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>List icons</li>
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>
