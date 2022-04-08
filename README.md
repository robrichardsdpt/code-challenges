# code-challenges

These are questions that I am using to improve some of my logical thinking. I chose typescript, as I truly enjoy working in typescript.

## Concepts:

### DNS

- Domain Name System is a hierarchical and decentralized system for internet connected resources. DNS maintains a list of domain names along with the resources, such as IP addresses that are associated with them

- The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a DNS lookup. By contrast, a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address.

### CORS

- Cross Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

- An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

- For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

- The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.

### REST

- Representational State Transfer refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems.

- The basic idea of REST is that a resource, e.g. a document, is transferred via well-recognized, language-agnostic, and reliably standardized client/server interactions. Services are deemed RESTful when they adhere to these constraints.

- HTTP APIs in general are sometimes colloquially referred to as RESTful APIs, RESTful services, or REST services, although they don't necessarily adhere to all REST constraints. Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools.

#### GET

- The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data (they shouldn't include data).

Request has body: No
Successful response has body: Yes
Safe: Yes
Idempotent: Yes
Cacheable: Yes
Allowed in HTML forms: Yes

#### POST

- The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.

- The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), where successive identical POST may have additional effects, like passing an order several times.

- A POST request is typically sent via an HTML form and results in a change on the server. In this case, the content type is selected by putting the adequate string in the enctype attribute of the <form> element or the formenctype attribute of the <input> or <button> elements:

- application/x-www-form-urlencoded: the keys and values are encoded in key-value tuples separated by '&', with a '=' between the key and the value. Non-alphanumeric characters in both keys and values are percent encoded: this is the reason why this type is not suitable to use with binary data (use multipart/form-data instead)
  multipart/form-data: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the Content-Disposition header of each part.
  text/plain

- When the POST request is sent via a method other than an HTML form — like via an XMLHttpRequest — the body can take any type. As described in the HTTP 1.1 specification, POST is designed to allow a uniform method to cover the following functions:

- Annotation of existing resources
  Posting a message to a bulletin board, newsgroup, mailing list, or similar group of articles;
  Adding a new user through a signup modal;
  Providing a block of data, such as the result of submitting a form, to a data-handling process;
  Extending a database through an append operation.

Request has body: Yes
Successful response has body: Yes
Safe: No
Idempotent: No
Cacheable: Only if freshness information is included
Allowed in HTML forms: Yes

#### PUT

- The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.

- The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the same effect (that is no side effect), whereas successive identical POST requests may have additional effects, akin to placing an order several times.

Request has body: Yes
Successful response has body: No
Safe: No
Idempotent: Yes
Cacheable: No
Allowed in HTML forms: No

#### PATCH

- The HTTP PATCH request method applies partial modifications to a resource.

- PATCH is somewhat analogous to the "update" concept found in CRUD (in general, HTTP is different than CRUD, and the two should not be confused).

- A PATCH request is considered a set of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resource.

- A PATCH is not necessarily idempotent, although it can be. Contrast this with PUT; which is always idempotent. The word "idempotent" means that any number of repeated, identical requests will leave the resource in the same state. For example if an auto-incrementing counter field is an integral part of the resource, then a PUT will naturally overwrite it (since it overwrites everything), but not necessarily so for PATCH.

- PATCH (like POST) may have side-effects on other resources.

- To find out whether a server supports PATCH, a server can advertise its support by adding it to the list in the Allow or Access-Control-Allow-Methods (for CORS) response headers.

- Another (implicit) indication that PATCH is allowed, is the presence of the Accept-Patch header, which specifies the patch document formats accepted by the server.

Request has body: Yes
Successful response has body: Yes
Safe: No
Idempotent: No
Cacheable: No
Allowed in HTML forms: No

#### DELETE

- The HTTP DELETE request method deletes the specified resource.

Request has body: May
Successful response has body: May
Safe: No
Idempotent: Yes
Cacheable: No
Allowed in HTML forms: No

### API

- An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.

- In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.

### Web Caching

- The performance of web sites and applications can be significantly improved by reusing previously fetched resources. Web caches reduce latency and network traffic and thus lessen the time needed to display resource representations. HTTP caching makes Web sites more responsive.

#### Types

- There are several types of caches. These can be grouped into two main categories: shared and private caches. A shared cache is a cache that stores responses for reuse by more than one user. A private cache is dedicated to a single user. This page will mostly talk about browser and proxy caches, but there are also gateway caches, CDN, reverse proxy caches and load balancers that are deployed on web servers for better reliability, performance and scaling of web sites and web applications.

- Private browser caches
  A private cache is dedicated to a single user. You may have seen "caching" in your browser's settings already. A browser cache holds all documents the user downloads via HTTP. This cache is used to make visited documents available for back/forward navigation, saving, viewing-as-source, etc. without requiring an additional trip to the server. It also improves offline browsing of cached content.

- Shared proxy caches
  A shared cache is a cache that stores responses to be reused by more than one user. For example, an Internet Service Provider (ISP) or your company might have set up a web proxy as part of its local network infrastructure to serve many users so that popular resources are reused a number of times, reducing network traffic and latency.

### MVC

- Model-View-Controller is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever).

- The three parts of the MVC software-design pattern can be described as follows:

Model: Manages data and business logic.
View: Handles layout and display.
Controller: Routes commands to the model and view parts.
