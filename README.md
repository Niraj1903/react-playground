# react-playground

Hooks - they are normal js function with specfic use case

Whenever State variables updates, react triggers a reconciliation cycle (re-render the component)

Whenever a function start with use its a hook in react

React uses Client side Routing not Server side Routing

Never comapre React life Cycle method to functional component

return in useEffect if done it will be called while on unmounting component

HOC are pure functions

#RTK
Install @reduxjs/toolkit and react-redux
Build our store
connect our store to our app
Slice(CartSlice)
dispatch(action)
Selector(Subscribe)

dispatch(action) --> reducer --> slice(updated) --> Selector(subscribe)--> updated(UI)

Setting up Testing in our app

Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom
