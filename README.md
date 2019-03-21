
Implementing clean architecture using node
==========================================

Overview
========

Recently we had to build a new application in our company, after business and
technical design (which is out of the scope of this article) we decided that the
application should be a single page application that works with rest API. The
technology stack we choose was:

Client: React

Server (API + persistent): node, elasticsearch

Coming from c\# background it was natural that we wanted to keep all our
[SOLID](https://en.wikipedia.org/wiki/SOLID) principles in our new and shiny
node API.

Like any other architecture, we had to make different tradeoffs in the
implementation.

We had to be careful not to over engineer or over abstract our layers, but keep
it as much as flexible as needed.

In recent years, we are implementing the [clean
architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
by Robert C. Martin (Uncle Bob) on our API projects. This architecture attempts
to integrate some of the main leading modern architecture like [Hexagonal
Architecture](http://alistair.cockburn.us/Hexagonal+architecture), [Onion
Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/),
[Screaming
Architecture](http://blog.cleancoders.com/2011-09-30-Screaming-Architecture)
into one main Architecture. it aims to achieve good and solid separation of
concerns.

Like most architectures, it aims to make the application more flexible to
changes in requirements, which eventually always comes.

This diagram is taken from the [official
article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
by Robert C. Martin. I recommend reading his article before diving into the node
implementation. This is the best source knowledge about this architecture.

![](media/d606470a2e27b4e1b3dd0b482d5697c7.png)

clean architecture diagram - dependencies direction are from outside in.
*source*

I love this architecture because it has a smart motivation behind it:

Instead of focusing on frameworks and tools it focuses on the business logic of
the application. This architecture is framework independent (as much as we
can:)).

It means that it doesn’t matter which database, frameworks, UI, external
services you are using, the entities and the business logic of the application
stays the same. We can change all the above without changing our logic. This is
what makes it so easy to be tested. Don’t worry if you don’t understand this
yet, we will explore it step by step.

In this series, we will slowly understand the different layers of the
architecture through a sample app.

Like any other architecture, there are many different implementation ways. Each
way has its own consideration and trade-offs. Here I will give my interpretation
on how to implement this architecture on node. I will try to explain the
different implementation considerations along the way. After that was said,
let’s take a look at the sample application.

### Sample Application

Our sample app is a student registration application. The app holds a list of
students, courses, and enrollments. Our backend application is a simple node API
that supports all the application use-cases. we will start implementing the API,
layer by layer.

The series includes these articles:

-   Implementing clean architecture using node - [Overview](https://fullstackroy.home.blog/2019/03/21/the-journey-begins/)

-   Implementing clean architecture using node - [Entities and use cases](https://fullstackroy.home.blog/2019/03/21/core-layers-entities-and-use-cases/)

-   Implementing clean architecture using node - [Controllers and Presenters](https://fullstackroy.home.blog/2019/03/21/controllers-and-presenters/)

-   Implementing clean architecture using node - [Frameworks](https://fullstackroy.home.blog/2019/03/21/frameworks/)
