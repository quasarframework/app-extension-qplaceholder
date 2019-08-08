QPlaceholder
===

QPlaceholder is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to display a placeholder before your data arrives from your server.

![QPlaceholder](statics/qplaceholder.png "QPlaceholder" =800x800)

This work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated. Suggestions and PRs welcomed.

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qplaceholder
```

# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove @quasar/qplaceholder
```

# Describe
(TBD) You can use `quasar describe QPlaceholder`

# Docs
Can be found [here](https://quasarframework.github.io/app-extension-qplaceholder).

# Examples
Can be found [here](https://quasarframework.github.io/app-extension-qplaceholder/examples).

# Demo (source) Project
Can be found [here](https://github.com/quasarframework/app-extension-qplaceholder/tree/master/demo).

# QPlaceholder API

## QPlaceholder Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| value | Boolean | v-model: use to show/hide the component |
| animated | Boolean | make the component animated (performance hit) |
| image-size | Number | how big to make the image placeholder (in px).<br>Default: 80 |
| avatar | Boolean | make the image placeholder round |
| title | Boolean | display a title placeholder |
| title-width | Number | the width of the title placeholder as a percentage.<br>Default: 50 |
| title-height | Number | the height of the title placeholder (in px).<br>Default 16 |
| rows | Number | the number of placeholder rows to be displayed.<br>Default: 4 |
| row-height | Number | the height of a row placeholder (in px).<br>Default: 12 |
| random | Boolean | normally the width of a placeholder row is 100%. Using `random` causes each row to be different lengths |
| color | String | The color of the placeholder foreground. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |
| background-color | String | The color of the placeholder background. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |
| shimmer-color | String | The color of the placeholder shimmer when `animated` is used. Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or any CSS color.<br>Default: #eee |


# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.