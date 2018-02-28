<img src="https://haxcv.org/files/img/ico.svg" width="200" />

# haxcv Js 


## what is Haxcv ?

Haxcv is Javascript framework based on the idea of ease of work and flexibility in the implementation of projects with new features that enable you to write HTML with Javascript through a technique called jsH It also contains all the components you need as a developer.

###### what should I know first ?
> You must have a background or knowledge about HTML, Javascript, CSS

> You must have a background or knowledge about JSON

## what it's new ?

with jsH you can control with content by Javascript Expression
another word you don't need to use DOM Selector to render Content
jsH is working like server side language .
anything in Javascript can be use in jsH


###### why I need jsH ?

jsH is useful when you try to create dynamic application and you can use it in Components , modules , router , single page Application beside if you need to use JS loop , if-else statement , etc...
ok let's create a simple Component

###### haxcv Contents 
> Components

> jsH

> MVC

> SPA

> Route

## jsH :- 
```html
<div fn-init >
  {%
    var name = prompt("what is your name ?");
   if(name == 'admin'){
     {{
      <h1>welcome  {{+name+}} to control panel </h1>
     }}
  }else{
    {{
      <h1>hello single user {{+name+}} </h1>
    }}
  }
  %}
</div>
```

## Components :- 
```javascript

<script type="text/jsh"  myComponent >
 	<table>
 		<tr>
 		<td>Name</td>
 		<td>Price</td>
 		</tr>
    {%
	var items = [
	{name:"iphone" , price:"180.56 $"},
	{name:"car"    , price:"12,000.00 $"},
	{name:"Bitcoin" , price:"14,443 $"}
	];
	 for(var i =0; i < items.length; i++)
	 {
	  {{
  	    <tr>
 		<td>{{+items[i].name+}}</td>
 		<td>{{+items[i].price+}}</td>
 		</tr>
	  }} 
	 }
    %}
	</table>
</script> 
```

# Note :

``` 
variable case :
if you need to call variable from external component make sure that variable 
is defined as global with window Object
but the good news is any data can be accessed 
from script whatever the location of the tag
because jsH is working when the DOM load
```

### Docs 
 <a href="https://haxcv.org/docs/Intro" fn-spa="docs-view" >
    	<li  class="_share " >Intro</li>
    </a>					
	    <a href="https://haxcv.org/docs/attributes" fn-spa="docs-view" >
    	<li  class="_share " >attributes</li>
    </a>					
	    <a href="https://haxcv.org/docs/jsH" fn-spa="docs-view" >
    	<li  class="_share " >jsH</li>
    </a>					
	    <a href="https://haxcv.org/docs/Components" fn-spa="docs-view" >
    	<li  class="_share " >Components</li>
    </a>					
	    <a href="https://haxcv.org/docs/Events" fn-spa="docs-view" >
    	<li  class="_share " >Events</li>
    </a>					
	    <a href="https://haxcv.org/docs/SPA" fn-spa="docs-view" >
    	<li  class="_share " >SPA</li>
    </a>					
	    <a href="https://haxcv.org/docs/Modules" fn-spa="docs-view" >
    	<li  class="_share " >Modules</li>
    </a>					
		<a href="https://haxcv.org/docs/simple JSON" fn-spa="docs-view">
		<li    class="sub-li _share" >simple JSON </li>
	</a>
		<a href="https://haxcv.org/docs/HTTP Request" fn-spa="docs-view">
		<li    class="sub-li _share" >HTTP Request</li>
	</a>
	    <a href="https://haxcv.org/docs/Ajax" fn-spa="docs-view" >
    	<li  class="_share " >Ajax</li>
    </a>					
		<a href="https://haxcv.org/docs/Form" fn-spa="docs-view">
		<li    class="sub-li _share" >Form</li>
	</a>
	    <a href="https://haxcv.org/docs/Router" fn-spa="docs-view" >
    	<li  class="_share " >Router</li>
    </a>					
	




