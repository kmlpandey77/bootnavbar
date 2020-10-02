# BootNavbar

![license](https://img.shields.io/github/license/kmlpandey77/bootnavbar?style=plastic)

Table of contents:
* [Introduction](#introduction)
* [Preview](#preview)
* [Demo](#bootnavbar-demo)
* [Requirement](#requirement)
* [Download](#Download)
* [BootNavbar CDN](#bootnavbar-cdn)
	* [CSS](#css)
	* [JS](#js)
* [How to Use](#how-to-use)
* [Options](#options)


## Introduction

> Bootstrap 4 Responsive Navbar with Multi-level Dropdowns \
> This is a fully responsive multilevel dropdown (Treeview menu) navbar opened on hover.



## Preview
![Multi level hover dropdown Navbar for bootstrap 4](https://raw.githubusercontent.com/kmlpandey77/bootnavbar/master/Preview.png "Navbar Preview")

## BootNavbar Demo
[View Demo](https://kmlpandey77.github.io/bootnavbar)


## Requirement
	jQuery
	boostrap 4
	animated.css

## Download
[Download source](https://github.com/kmlpandey77/bootnavbar/archive/1.0.1.zip)

## BootNavbar CDN

#### css
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kmlpandey77/bootnavbar/css/bootnavbar.css">

```

#### js
```html
<script src="https://cdn.jsdelivr.net/gh/kmlpandey77/bootnavbar/js/bootnavbar.js"></script>
```	


## How to use
To use BootNavbar on your website, simply drop the stylesheet into your document's `<head>`.

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootnavbar.css">
</head>
```


And, simply drop the JS into your document's `<body>`.

```html
<body>
	  ...
	  ...
	
	  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootnavbar.js" ></script>
    <script>
        $(function () {
            $('#bootnavbar').bootnavbar({
              //options

              //animation: false

            });
        })
    </script>
<body>
```

And,  `HTML`.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="bootnavbar">
  ...
  ...
</nav>
```


## Options

**animation**

Type: `Boolean`

Default: `true`

Enable/Disable animation effect



**animateIn**

Type: `String`

Default: `'fadeIn'`

Value: `'slideInUp'`,`'zoomIn'`



View more option in [animate.css](https://daneden.github.io/animate.css) 
