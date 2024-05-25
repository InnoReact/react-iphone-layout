# React-iPhone-Layout

![iPhone Layout](https://github.com/BangDori/react-iphone-layout/assets/44726494/02561622-0e59-44b4-ac13-2a6dc58178d0)

## Installation

```shell
$ npm install react-iphone-layout --save-dev
$ yarn add react-iphone-layout --dev
```

## Features

- **Web App Compatibility**: Easily integrate iPhone-like layouts into your web applications.
- **Web View Support**: Optimize your web views to provide a seamless iPhone viewing experience.
- **Dynamic iPhone View Resizing**: Adjust the size of the iPhone view dynamically to fit different content needs.

## Quickstart

```jsx
import { IPhoneLayout } from "react-iphone-layout";
import "react-iphone-layout/dist/ReactIPhoneLayout.css";

function App() {
  return (
    <IPhoneLayout>
      <p>this is iPhone layout!!!</p>
    </IPhoneLayout>
  );
}
```

## Props

| **Props**     | **Type** | **Default** |
| :------------ | :------- | :---------- |
| isStatusBar   | boolean  | true        |
| isDynamicSize | boolean  | false       |
| minSize       | number   | 60          |
| defaultSize   | number   | 75          |
| maxSize       | number   | 100         |

## Demo

You can see live demos and interact with the library in the following ways:

- **CodeSandbox**: Try out the react-iphone-layout library in an interactive online editor. [Click here to view the demo.](https://codesandbox.io/p/devbox/react-iphone-layout-y3mcl7)
- **Storybook**: Explore various use cases and component configurations in our Storybook setup. Click here to view the Storybook.
