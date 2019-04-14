
Node Clean Architecture
=======================

Overview
========

Recently we had to build a new application in our company. After conducting
business and technical design (which is out of the scope of this article), we
decided that the application should be a single-page application that works with
rest API. The technology stack we choose was:

Client: React

Server (API + persistent): node, elasticsearch

Coming from a background of object-oriented languages, it was natural that we
wanted to keep all our [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
in our new and shiny node API.

Like any other architecture, we had to make different trade-offs in the
implementation.

We had to be careful not to over-engineer or over-abstract our layers, but
rather keep it as flexible as needed.

In recent years, we have implemented [clean
architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
by Robert C. Martin (Uncle Bob) on our API projects. This architecture attempts
to integrate some of the leading modern architecture like [Hexagonal
Architecture](http://alistair.cockburn.us/Hexagonal+architecture), [Onion
Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/),
[Screaming
Architecture](http://blog.cleancoders.com/2011-09-30-Screaming-Architecture)
into one main architecture. It aims to achieve good separation of concerns. Like
most architecture, it also aims to make the application more flexible to
inevitable changes in client requirements (which always happens).

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

clean architecture diagram - dependencies direction are from outside in.
[source](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

This diagram is taken from the [official
article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
by Robert C. Martin. I recommend reading his article before diving into the node
implementation. This is the best source knowledge about this architecture.

Few words about this diagram and how to read it:

-   Dependency - the dependency direction is from the outside in. meaning that
    the Entities layer is independent and the Frameworks layer depend on all the
    other layers.

-   Entities - contains all the business entities that construct our
    application.

-   Use Cases - This is where we centralize our logic. Each use case
    orchestrates all of the logic for a specific business use case.

-   Controllers and Presenters - Our controller, presenters, and gateways are
    intermediate layers. You can think of them as an entry and exit gates to the
    use cases .

-   Frameworks - This layer has all the specific implementations. The database,
    the web frameworks, error handling etc.  
    Robert C. Martin describes this layer :  
    *“This layer is where all the details go. The Web is a detail. The database
    is a detail. We keep these things on the outside where they can do little
    harm.”*

In this point you will probably say to yourself “database is in outer layer,
database is a detail ???” database is supposed to be my core layer.

I love this architecture because it has a smart motivation behind it. Instead of
focusing on frameworks and tools, it focuses on the business logic of the
application. This architecture is framework independent (or as much as it can
be). This means it doesn’t matter which database, frameworks, UI, external
services you are using, the entities and the business logic of the application
will always stay the same. We can change all of the above without changing our
logic. This is what makes it so easy to test applications built on this
architecture. Don’t worry if you don’t understand this yet, we will explore it
step-by-step.

In this series, we will slowly unpack the different layers of the architecture
through the example of a sample app.

Like any other architecture, there are many different approaches to implement
it, and each approach has its own consideration and trade-offs. Here I will give
my interpretation of how to implement this architecture on node. I will try to
explain the different implementation considerations along the way.

Let’s take a look at the sample application.

### Sample Application

Our sample app is a student registration application. The app holds a list of
students, courses, and enrollments. Our backend application is a simple node API
that supports all the application use-cases.

In the series we will implement the backend API layer-by-layer. You can find all
the code [here](https://github.com/royib/clean-architecture-node). The articles
contains fractions of the code but the best approach (to my opinion) is to
explore the code while reading the articles.

The series includes these articles:

-   Node clean architecture -
    [Overview](https://fullstackroy.home.blog/2019/03/21/the-journey-begins/)

-   Node clean architecture - *Entities and use cases*

-   Node clean architecture - *Controllers and Presenters*

-   Node clean architecture - *Frameworks*
