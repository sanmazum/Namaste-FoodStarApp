# This is Namaste React- Where I have learnt the React from absolute basics and learnt all the concepts.

#Parcel

-Dev Build
-local server
-HMR-> Hot module Replacement (automatic render without refreshing)
-parcel uses a file watching Algorithm - written in C++
faster builds -> because of Caching
Image Optimization
-Minification of our file
-Bundler
-Compress the file
-consistent hashing
-code splitting
-diffrential bundling - to support older browsers
-Diagnostics
-good error handling
-HTTPs
-Zero config tool
-tree shaking - remove unused code for you
-Diffrent dev and prod bundles

#Namaste FoodStarApp Planning on what we want to have in our app- The Master Plan!

---Header
-Logo
-Nav Items

---Body
-Search
-Restaurant Container
-Restaurant Card
-Img
-Name of Res,Ratings,Cuisine,deliverytime, cost for two

---Footer
-Copyright
-Links
-Address
-Contact

Two types of export and import :

1. Default Export/Import -> export default Component / import Component from "path"
2. Named Export -> export const componet / import {Component} from "path";

#Routing in WebApps

1. Client Side Routing -> Namsate Food Star App is a single paged React application and we are doing client side routing
2. Server Side Routing -> When we actually make a network call and get the data from server and refresh the whole page.

#Redux Tool Kit for state management

- install Redux toolkit [ @reduxjs/toolkit] and react-redux
- Build our own Redux Store
  -Connect our store to the App (Bridge)
- Slice(cartSlice)
  -dispatch (action)
  -reducer
  -selector
