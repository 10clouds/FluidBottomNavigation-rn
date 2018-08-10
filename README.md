# FluidBottomNavigation for React Native

[![NpmVersion](https://img.shields.io/npm/v/fluidbottomnavigation-rn.svg?style=flat-square)](https://www.npmjs.com/package/fluidbottomnavigation-rn)
[![NpmLicense](https://img.shields.io/npm/l/fluidbottomnavigation-rn.svg?style=flat-square)](https://www.npmjs.com/package/fluidbottomnavigation-rn)

The Animated Tab Bar for React Native

![Sample](https://raw.githubusercontent.com/10clouds/FluidBottomNavigation-rn/master/static/sample.gif)

## Example

To run the example project, clone the repo, and run `npm install` from the Example directory first.

## Installation

It is available through [npm](https://npmjs.com). To install just run

```
npm i fluidbottomnavigation-rn
```

in your project directory. And then link it's native dependency with

```
react-native link react-native-view-overflow
```

and you're done!

## Usage

This component requires just 2 props. `onPress` function, that should handle rendering tabs and an array of `values` objects that contains title and icons for given tabs.

```JSX
<TabBar
  onPress={(tabIndex) => { this._handlePress(tabIndex) }}
  values={[
    { title: "News", icon: require("./assets/news.png") },
    { title: "Requests", icon: require("./assets/requests.png") },
    { title: "Events", icon: require("./assets/events.png") },
    { title: "Members", icon: require("./assets/members.png") },
    { title: "Account", icon: require("./assets/account.png") }
  ]}
/>
```

## Customization

Optionally you can pass `tintColor` prop, to adjust styling to your app.

## Author

[Patryk Mierzejewski](https://github.com/pmierzejewski)

## License

FluidBottomNavigation Component is available under the MIT license. See the LICENSE file for more info.
