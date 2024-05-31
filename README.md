# React-iPhone-Layout

![iphone_image](https://github.com/BangDori/react-iphone-layout/assets/44726494/9015f4fb-caf3-4c4f-b660-46c9f94c8f81)

## Installation

```shell
$ npm install react-iphone-layout --save-dev
$ yarn add react-iphone-layout --dev
```

## Features

- **Web App Compatibility**: Easily integrate iPhone layout into your web applications.
- **Web View Support**: Optimize for iPhone on the web to provide a seamless web view.
- **Dynamic iPhone View Resizing**: You can dynamically adjust the size of the iPhone view.
- **Real-Time View Switching**: Check the iPhone view and laptop view in real-time through a control box, allowing for seamless testing and optimization of layouts across different devices.

## Getting Started

```jsx
import { IPhoneLayout } from "react-iphone-layout";
import "react-iphone-layout/dist/ReactIPhoneLayout.css"; // ✨

function App() {
  return (
    <IPhoneLayout>
      <p>this is iPhone layout!!!</p>
    </IPhoneLayout>
  );
}
```

## Props

| **Props**     | **Type**                           | **Default** |
| :------------ | :--------------------------------- | :---------- |
| isStatusBar   | boolean                            | true        |
| isDynamicSize | boolean                            | false       |
| position      | `"top", "right", "bottom", "left"` | "right"     |
| mode          | `"iPhone", "laptop"`               | "iPhone"    |
| minSize       | number                             | 60          |
| defaultSize   | number                             | 75          |
| maxSize       | number                             | 100         |

## Demo

- **CodeSandbox**: Try out the react-iphone-layout library in an interactive online editor. [Click here to view the demo.](https://codesandbox.io/p/devbox/react-iphone-layout-y3mcl7)

## License

MIT
