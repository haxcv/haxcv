# haxcv
Haxcv  is Javascript framework

## what is Haxcv ?

Haxcv is Javascript framework based on the idea of ease of work and flexibility in the implementation of projects with new features that enable you to write HTML with Javascript through a technique called jsH It also contains all the components you need as a developer.

## what should I know first ?
> You must have a background or knowledge about HTML, Javascript, CSS
> You must have a background or knowledge about JSON

## what it's new ?

with jsH you can control with content by Javascript Expression
another word you don't need to use DOM Selector to render Content
jsH is working like server side language .
anything in Javascript can be use in jsH


## why I need jsH ?

jsH is useful when you try to create dynamic application and you can use it in Components , modules , router , single page Application beside if you need to use JS loop , if-else statement , etc...
ok let's create a simple Component

## haxcv Contents 
> Components
> jsH
> MVC
> SPA
> Route

## jsH :- 
`<div fn-init >
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
</div>`



