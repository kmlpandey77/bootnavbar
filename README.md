# BootNavbar

![license](https://img.shields.io/github/license/kmlpandey77/bootnavbar?style=plastic)

**Table of contents:**

- [Introduction](#introduction)
- [Preview](#preview)
- [Demo](#bootnavbar-demo)
- [Requirement](#requirement)
- [Download](#Download)
- [BootNavbar CDN](#bootnavbar-cdn)
  - [CSS](#css)
  - [JS](#js)
- [How to Use](#how-to-use)
- [Options](#options)

## Introduction

> Bootstrap 5 Responsive Navbar with Multi-level Dropdowns
> This is a fully responsive multilevel dropdown (Treeview menu) navbar opened on hover.

> :warning: **If you are using Boostrap 4** use [v1.0.2](https://github.com/kmlpandey77/bootnavbar/releases/tag/v1.0.2) and read [docs](./README-BOOTSTRAP-4.md)

## Preview

![Multi level hover dropdown Navbar for bootstrap 5](https://raw.githubusercontent.com/kmlpandey77/bootnavbar/master/Preview.png "Navbar Preview")

## BootNavbar Demo

[View Demo](https://kmlpandey77.github.io/bootnavbar)

## Requirement

- boostrap 5
- animated.css (optional)

## Download

[Download source](https://github.com/kmlpandey77/bootnavbar/archive/refs/tags/v1.1.1.zip)

## BootNavbar CDN

#### css

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/kmlpandey77/bootnavbar@v1.1.1/css/bootnavbar.css"
/>
```

#### js

```html
<script src="https://cdn.jsdelivr.net/gh/kmlpandey77/bootnavbar@v1.1.1/js/bootnavbar.js"></script>
```

## How to use

To use BootNavbar on your website, simply drop the stylesheet into your document's `<head>`.

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/bootnavbar.css" />
</head>
```

And, simply drop the JS into your document's `<body>`.

```html
<body>
  ... ...

  <script src="js/bootstrap.min.js"></script>
  <script src="js/bootnavbar.js"></script>
  <script>
    $(function () {
      new bootnavbar();
    });
  </script>
</body>
```

And, `HTML`.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="main_navbar">
  ... ...
</nav>
```

## Options

**Selector**

Key: `selector`

Type: `String`

Default: `main_navbar`

`selector` must be in `id` tag

**Animation**

Key: `animation`

Type: `Boolean`

Default: `true`

Enable/Disable animation effect

**Animate In**

Key: `animateIn`

Type: `String`

Default: `'animate__fadeIn'`

Value can be `'animate__slideInUp'`,`'animate__zoomIn'` and for more option visit [animate.css](https://daneden.github.io/animate.css)
