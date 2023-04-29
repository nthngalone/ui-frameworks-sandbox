# UI Frameworks Sandbox - Dojo 1.x

## Progress

| Framework |      Source        |       Build        | Tests |        Notes       |
|-----------|:------------------:|:------------------:|:-----:|:------------------:|
| Dojo 1.x  | :heavy_check_mark: | :heavy_check_mark: |  :x:  | :heavy_check_mark: |

### Legend

* :white_check_mark: In Progress
* :heavy_check_mark: Complete
* :x: Blocked

## Background

Created by SitePen, the Dojo Toolkit was first released in 2005 - making it one of the first widgeting libraries available.  While relatively obscure, the Dojo Toolkit was, in my opinion, way ahead of its time.  It provided many utilities that attempted to solve common issues with cross-browser web development at the time.  The component/widget library (Dijit) was one of the first ones out there - changing how we approached building web UIs.  With release 1.7, the Dojo Toolkit was rearchitected to use an AMD (asynchronous module defintion) style of module loading, similar to requirejs.

The Dojo toolkit is made of up 3 primary modules: `dojo`, `dijit`, and `dojox`.  The `dojo` module consists of core utility modules, `dijit` is its web UI framework for building components/widgets, and `dojox` is a module of experimental utilities and features.

While ahead of its time upon release, the Dojo Toolkit did not keep up with the times and quickly fell from relative obscurity to disuse.  Dojo 2 was marketed as a complete rewrite using modern JavaScript patterns and techniques, but release of Dojo 2 kept being delayed.  By the time Dojo 2 was officially released in 2018, there was no way that it would be taking any kind of marketshare away from immensely popular frameworks such as Angular and React.

Dojo is currently up to version 8.0.  This sample project is focused on the older 1.x AMD style of Dojo.  To see a sample of the latest and greatest Dojo - go to the [Dojo 8](../dojo-8) sample.

While Dojo 1.x is deprecated, I decided to go ahead and include it in my samples due to my large amount of experience with it and the fact that there is still a good bit of legacy Dojo code out there in the world.

## Personal Notes

For several years, I was a big fan of the Dojo Toolkit.  The Dojo Toolkit was packaged with IBM's WebSphere Portal Server product, and became the framework of choice when working with WPS applications.  I spent a lot of time working with it and even taught a few classes on it - earning me the nickname of the "Dojo Mofo" by my colleagues.  The important thing to remember about Dojo is that it is marketed as a "toolkit".  It gives you a lot of different tools and utilities to build your application with, but not a ton of guidance around architecture.  This was somewhat of a turn-off to a lot of people, but for those that enjoyed designing applications and weren't scared away by the learning curve (there are A LOT of modules in the Dojo Toolkit), it was a great option until frameworks like Angular, Vue, and React came along.

The `dojox` module had a few really useful items in it.  Among my favorites were the AOP (aspect oriented programming) utilities.  To this day, I have not found any alternatives that were as useful or easy to use as the original dojox offerings.

The biggest limitation of the `dijit` library is that the templates are very static (ie. not reactive like most frameworks today).  Any kind of DOM manipulation, you typically have to do programatically in the dijit JavaScript code.  There is, however, a DTL framework available in the `dojox` module that can be used to create a dynamic template.  The Dojo DTL framework is a port of the Python Django framework (DTL = Django Template Library).  While incredibly useful, it was also very difficult to learn.  Most of its documentation was delegated to the documentation for the original Django framework, which became increasingly difficult (impossible now) to find as it was a port of a very old version of Django.

## Development Notes

Any small sample app built with Dojo will only barely scratch the surface of the toolkit, so I don't feel like this app is sufficiently showing off the capabilities of Dojo, but that's ok.  I did choose to use one of the more useful features of Dojo for web UIs - event delegation.  The `dojo/on` module provides a capability to attach an even handler to a parent DOM node that will fire the callback only if the target child element matches a CSS selector that you provide.  If you have multiple DOM nodes that need to respond to the same event (such as my calculator button clicks), this allows you to setup one DOM event handler instead of attaching events to every child node.  If your nodes are dynamic (ie. being created and destroyed over time), this also lessens the amount of work needed to create and cleanup those objects and lessens the risk of memory leaks.

## Build Notes

The Dojo build system is a custom build system provided by the Dojo Toolkit.  It is available in a 4th module called `util`, which was originally only available in the full source downloads of the Dojo Toolkit.  Today is it available in npm from a package named `dojo-util`.  Unfortunately, the build scripts still expect to find a folder with the name `util`, which does not match the npm package/folder name.  This makes it a bit of pain to use, which was also slightly complicated by using npm workspaces for this project.  To get around this, I used a `postinstall` script to create local symlinks to the `dojo`, `dijit`, `dojox`, and `util` modules from my parent `node_modules` directory.  If there's a better way to do this, I'm all ears.

## Testing Notes

Dojo ships with a very basic testing framework known as DOH (Dojo Objective Harness).  DOH is a browser-based testing framework and is useful for someone who is doing purely browser based work.  Most of my experience with Dojo testing has been with using DOH. Since DOH is very web based, this also means that DOH is difficult to integrate into any kind of CI/CD system (not impossible mind you, but more like a heavy nuisance).

SitePen has created a separate testing framework called Intern, and it has been the preferred testing framework for Dojo for several years.  While it was originally built specifically for Dojo, it has since then been expanded to be a more generic testing framework that could be used for any JavaScript project.

I chose to use Intern as my Dojo testing framework for this effort.  I have experimented with Intern in the past and it seemed pretty easy to set up and work with then.  At the moment though, I am struggling to get it to work with web components and have thus marked testing as blocked.  Configuration for web testing appears to be very environment specific, which worries me, but its possible that I'm just not setting it up right.  I'm not sure if it's changes in the library since the last time I used it, or just that it's been so long since I've used it, but as opposed to wasting more time on this, I'm choosing to move on and leaving this blocked at the moment.  If I remain blocked on Intern, I may go back and add some examples of the DOH framework at a later time as well.
