---
author: "Robert Lovin "
title: "WebXR API"
date: "2020-06-24"
template: "blog"
featuredImage: "../../images/womanVR.jpg"
---

The Virtual Reality realm has been growing exponentially this past decade thanks to devices such as the Google Cardboard and Oculus. One particular area of Virtual Reality, WebVR, is realtively new to this scene. In 2014, Mozilla came out with the first iteration of the WebVR API, which was the inital attempt to render Virtual Reality scenes in a browser environment. In turn, this brought a whole new dimension to web development. Developer's could finally create realistic 3D environments using only HTML and JavaScript. Recently, Mozilla has expanded WebVR to the new WebXR API, which can handle augmented and virtual reality.                                                                

<br/>

The new WebXR API expands upon the WebVR API. However, it also includes the ability to host Augmented Reality (AR) experiences in a browser. It finds compatible VR and AR devices and renders a 3D scene to the device. Compatible devices include Head Mounted Displays, mobile displays with positional tracking, and fixed displays that have head tracking capabilities. With WebXR you can use advanced controls so that you can make your 3D scenes more interactive. Furthermore, it gives you the ability to create AR scenes, which is a representation of a 3D model on top of the real world. Think of a SnapChat filter with a 3D dinosaur that blends in with the real world, that's Augmented Reality!

<br/>

There are several different ways to utilize WebXR that are beginner friendly and easy to learn. One way is A-Frame, a WebVR framework that sit's atop the functionality of Three.JS, a library that allows you to create 3D objects using JavaScript. All you need to do to start is to initialize the 3D 'scene' that you are animating in, by inserting an HTML tag. From there, you can use JavaScript to create components and automate animations and you can also get plug-ins from the A-Frame component store. Here is a simple code sample that creates several 3D shapes. You can add in attributes to a shape that manipulates it's position on a 3D plane, changes it's radius, and even the color of the shape.

<br/>

```
<html>
  <head>
    <script 
        src="https://aframe.io/
        releases/1.0.4/aframe.min.js">
    </script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" 
        rotation="0 45 0" 
        color="#4CC3D9">
      </a-box>

      <a-sphere position="0 1.25 -5" 
        radius="1.25" 
        color="#EF2D5E">
      </a-sphere>

      <a-cylinder position="1 0.75 -3" 
        radius="0.5" 
        height="1.5" 
        color="#FFC65D">
      </a-cylinder>

      <a-plane position="0 0 -4" 
        rotation="-90 0 0" 
        width="4" height="4"
         color="#7BC8A4">
      </a-plane>

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
</code>
```
<br/>

WebXR still has room to grow as the capabilites of our devices will become more advanced. I think WebXR will be the future of many businesses who want to advance their e-commerce capabilites. One example will be retail outlets using virtual and augmented reality to showcase their products, so that customers can see life-like models of what they are buying.

<br/>

<a href="https://aframe.io/docs/1.0.0/introduction/">A-Frame Documentation</a>

<br/>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API">Mozilla WebXR documentation</a>

<br/>




