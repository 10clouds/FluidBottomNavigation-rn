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
    iconStyle={{ width: 50, height: 50 }}
    tintColor="blue"
    onPress={(tabIndex) => {
        console.warn(tabIndex);
    }}
    isRtl={ true }
    values={[
        { title: "Home", icon: require("./home.png"), tintColor: curTab == 0 ? "red" : "blue", default: true },
        { title: "Home1", icon: require("./home.png"), tintColor: curTab == 1 ? "red" : "blue", },
        { title: "Home2", icon: require("./home.png"), tintColor: curTab == 2 ? "red" : "blue", },
        { title: "Home3", icon: require("./home.png"), tintColor: curTab == 3 ? "red" : "blue", },
        { title: "Home4", icon: require("./home.png"), tintColor: curTab == 4 ? "red" : "blue", },
    ]}
/>
```

## Customization

Optionally you can pass `tintColor` prop, to adjust styling to your app.

1. iconStyle => Now you can style your icon used in navigator without editing core module

2. isRtl => New feature for apps that requires rtl.

3.  tintColor => tintColor in values let's you add specific color for each icon

4. default => Now you can setdefault tab by passing additional parameter in values object

5. containerBackgroundColor => Now you can change default container background color by passing color value to `containerBackgroundColor` prop

6. itemMaskBackgroundColor => Now you can change default mask color by passing color value to `itemMaskBackgroundColor` prop

### Extra paramters added
| Property      | Type          | Default       | Description   | Required      |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconStyle  | ImageStyle  | { width: 20, height: 20 }  | iconStyle prop allows you to customize the icon used in bottom tab bar  | false  |
| isRtl  | Boolean  | false  | If you have rtl in your app, set valueto true and the bottom tab bar will show in reverse order  | false  |
| tintColor  | String  | Black  | You can assign custom color for each icon by passing tintColor prop along with title and icon. This can be used to assign unique color for active tab  | true  |
| default  | Boolean  | false  | Now default tab can be set by passing default prop along with title and icon. This can be used to focus aspecific tab before any user interaction  | true  |
| containerBackgroundColor  | String  | white  | Now you can change default container background color by passing color value to `containerBackgroundColor` prop. It accespts string and hex values  | false  |
| itemMaskBackgroundColor  | String  | white  | Now you can change default mask color by passing color value to `itemMaskBackgroundColor` prop. It accespts string and hex values  | false  |

## Author

[Patryk Mierzejewski](https://github.com/pmierzejewski)

## License

FluidBottomNavigation Component is available under the MIT license. See the LICENSE file for more info.
