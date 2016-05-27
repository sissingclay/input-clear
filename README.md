# input-clearout

This is a web component that will clear value from an input field.

## Demo

Need to add the demo here

## Install
Install the component using Bower:

```
$ bower install input-password --save
```


## Usage

Import Web Components' polyfill:

```
<script src="bower_components/platform/platform.js"></script>
```

Import Custom Element:

```
<script src="../src/clear-input.js"></script>
```

Start using it!

```
<cs-clearout></cs-clearout>
<cs-clearout relative="true" input=".user-success" css="fa fa-times-circle-o" html="<div class='testing'></div>"></cs-clearout>
```

##Options

| Attribute      |    Options       | Default                                     | Description                                                                    |
|:---------------|:-----------------|:--------------------------------------------| :------------------------------------------------------------------------------|
| relative       | Boolean          | null                                        | Adds inline css style position: relative to parentNode                         |
| input          | String           | sibling type INPUT                          | Add the cssSelector for the input to change. Needs to be inside the parentNode |
| css            | String           | fa fa-times-circle-o                        | This is css class names for glyph. Default is using font awesome.              |
| html           | String           | <span class="fa fa-times-circle-o"></span>  | This is the innerHTML used to create element.                                  |