># JAVA-SCRIPT
>JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications.  It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.
>
>There are many useful Javascript frameworks and libraries available:
> - Angular
> - React
> - Node
> 
> ## Applications of Javascript Programming
>
> - **Client side validation** - This is really important to verify any user input before submitting it to the server and Javascript plays an important role in validting those inputs at front-end itself.
>
> - **Manipulating HTML Pages** - Javascript helps in manipulating HTML page on the fly. This helps in adding and deleting any HTML tag very easily using javascript and modify your HTML to change its look and feel based on different devices and requirements.
>
> - **Back-end Data Loading** - Javascript provides Ajax library which helps in loading back-end data while you are doing some other processing. This really gives an amazing experience to your website visitors.
>
> - **Server Applications** - Node JS is built on Chrome's Javascript runtime for building fast and scalable network applications. This is an event based library which helps in developing very sophisticated server applications including Web Servers.

# V8 JavaScript Engine
>V8 JavaScript engine is an open source JavaScript and WebAssembly engine that compiles JavaScript to optimized machine code before execution. V8 JavaScript engine was initially developed for Google Chrome and Chromium web browsers to improve the performance of JavaScript execution.
>The engine was initially designed solely for execution by web browsers, but the latest versions also execute JS code outside of the browser, enabling server-side scripting.
>To achieve faster JavaScript execution speeds, V8 translates JS code to more efficient machine code instead of using an interpreter.
>
>## How V8 JavaScript Engine Works?
> When a developer runs a JS script on V8, the following steps are taken by the engine:
> - The engine compiles and executes the JS code
> - The engine handles the call stack
> - The engine manages the memory heap
> - The engine handles the garbage collection
> - The engine provides all the data types, objects and functions
> - The engine also provides the event loop 
>
> ![](https://blog.avenuecode.com/hubfs/Untitled%20drawing.svg)

>## CALL STACK
>**Call Stack** is a LIFO data structure that is used for function calls that record where we are in the program. JavaScript is a single-threaded programming language, which means it can do one thing at a time, and it has one Call Stack. If you call a function, it's pushed on the top of the Call Stack, and when the function returns, it's popped from the top of the Call Stack.

>## EVENT LOOP
>**Event loop** is just a loop that pushes the function in the Call stack after they are ready to be processed from the queue. It keeps on pushing the functions or code to be executed until the queue is empty.

>## WEB-APIs
>**Web APIs** is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.

>## QUEUE
>**Queue** is a first-in first-out (FIFO) abstract data type that is heavily used in computing. Uses for queues involve anything where you want things to happen in the order that they were called. Here the functions or code that were to be exected are pused into the queue in the same sequence.