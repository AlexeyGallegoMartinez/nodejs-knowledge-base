# The Basics

### How the Web Works

1. User Clients Enters URL in the browser
2. Browser reaches to some DNS (Domain Name Server) for Domain Lookup
3. Then it sends a request to the server with the IP Address belonging to the Domain
4. Then You write the code in that Server which at the same time interacts with DB.
5. Server also return HTML page to frontend

### HTTP & HTTPS

- HTTP: Hyper Text Transfer Protocol is a protocol for transfering data which is understod by the browser and server.
- HTTPS: HTTP Secure. This means it has Data Encryption during transmission.

### Core Modules for JS and NodeJS

- http: Launch a server, Send requests
- https: Launch a SSL Server
- fs
- path
- os

### Node Lifecycle and Event Loop

1. You run **node app.js** to start a script
2. NodeJS goes through the entire file and Parsed the code, registered variables and functions.
3. Then you enter the Event Loop: A loop process managed by NodeJs which keeps on running as lnjg as there are event listeners registered
   - The Event Loop is entered once you run your app
   - It is also responsible for handling event callbacks that contain fast finishing code
   - File System operations and other operations that take a long time are sent to a **Worker Pool**. Spun up and managed by NodeJS automatically. It does the Heavy lifting. It is detached from your code and runs different threads.

> Note: You can unregister an event listener with **process.exit()**. You typically don't want to quit your server though.
>
> NodeJS uses only a Single JavaScript Thread, so it is single threaded
>
> JS code is non blocking

### Event Loops

1. At the beginning of each new iteration it checks if there are any timer callbacks (setTimeout, setIntervals)
2. Then it checks any Pending Callbacks. Execute I/O related callbacks that were deferred.
   - I/O (Input/Output): Disk & Network Operations (~Blocking Operations)
3. Then comes the Poll Phase: NodeJS retrieves new I/O events, and executes its callbacks
   - If that is not possible it will defer execution and register this as a pending callback
   - It will also check if there are any timer callbacks due to be executed. If that is the case it will Jump to Timer execution phase (#1)
4. Next is the Check Phase where it will execute setImmediate() Callbacks. Always only after any Open Callbacks have been executed.
5. In the Event Callback phase NodeJS executes all "close" Event Callbacks
6. We might exit but only if there aren't any events registered

### Global Features vs Core Modules vs Third-Party Modules

#### Global features:

- Keywords like const or function but also some global objects like process.
- Global features are always available, you don't need to import them into the files where you want to use them.

#### Core Node.js Modules:

- Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http").
- Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

#### Third-party Modules:

- Installed via npm install, you can add any kind of feature to your app via this way.
- Third-party Modules need to be installed (via npm install in the project folder) AND imported.

#### Install in Development Only

> npm install --save-dev pkg-name

#### Install in Production

> npm install --save pkg-name

#### Install Globally in Machine

> npm install -g pkg-name

### Types of Errors

1. Syntax Erros
2. Runtime Errors
3. Logical Errors
