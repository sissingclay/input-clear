# input-clearout

This is a web component that will clear value from an input field.

## Demo

[Demo](http://sissingclay.github.io/input-clearout/)

## Install
Install the component using NPM:

```
$ npm i input-clearout --save
```


## Usage

Import Web Components' polyfill:

```
npm install https://github.com/WebReflection/document-register-element
```

Add Custom Element Script:

```
<script src="../dist/input-clearout.js"></script>
```

Start using it!

```
<cs-clearout></cs-clearout>
<cs-clearout relative="true" input=".user-success" css="fa fa-times-circle-o" html="<div class='testing'></div>"></cs-clearout>
```

##Options

| Attribute      | Options          | Default                                     | Description                                                                    |
| ---            | ---              | ---                                         | ---                                                                            |
| relative       | Boolean          | null                                        | Adds inline css style position: relative to parentNode                         |
| input          | String           | sibling type INPUT                          | Add the cssSelector for the input to change. Needs to be inside the parentNode |
| css            | String           | fa fa-times-circle-o                        | This is css class names for glyph. Default is using font awesome.              |
| html           | String           | ``` <span class="fa fa-times-circle-o"></span> ``` | This is the innerHTML used to create element.                                  |