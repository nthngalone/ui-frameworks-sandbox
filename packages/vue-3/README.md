# UI Frameworks Sandbox - Vue 3

## Progress

| Framework |      Source        |       Build        |        Tests       |        Notes       |
|-----------|:------------------:|:------------------:|:------------------:|:------------------:|
| Vue 3     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Legend

* :white_check_mark: In Progress
* :heavy_check_mark: Complete
* :x: Blocked

## Background

Vue.js was first released in 2014 by its founder, Evan You.  Evan's goal was to create a framework that supported
his favorite features of Angular, but was much lighter and easier to use.  Vue describes itself as the "progressive
JavaScript framework" and it's based upon the reactive style of rendering a user interface.  In 2016, Vue 2 was
released followed by Vue 3 in 2020.

Vue 3 added an alternate style to developing Vue components known as the "Composition API" (the original style being known as the "Options API").  Vue 3 supports both styles, with preference towards the Composition API for enterprise/production applications.  The Composition API is a more procedural style API where the developer choses exactly what to expose to the templates instead of relying on the pollution of a "this" object.

The Vue.js team also released a new data store library known as Pinia as an alternate to their Vuex library.  The Vue.js team still supports both libraries, but it's looking like Vuex will probably be phased out in later releases.  Pinia is similar to Vuex, but somewhat simpler to use.

## Personal Notes

I started dabbling in Vue 3 in mid-2021, but quickly started hitting walls when looking to upgrade my third-party component library usage.  Even though Vue 3 had been out for over a year, many long-standing component libraries had not migrated to it - making it difficult to upgrade existing applications that depended on them.  The Material Design based Vuetify, did not release its Vue 3 upgrade until late 2022 and BootstrapVue still has not released an official Vue 3 upgrade as of this writing (May 2023), although they did release a Vue 3 compatibility build for their Vue 2 components to allow development teams to go ahead and complete their upgrades.  This has been problematic since Vue 2 will be end-of-life on December 31, 2023.

> Note: While I love BootstrapVue, its future greatly concerns me.  Vuetify is ok... but I've found it harder to work with and I don't like it's look and feel as much.  I recently discovered a Vue 3 supported component library called Inkline that looks promising.  I may have to look into using it for my personal projects.

Even with those limitations though, I still highly enjoy working with Vue.  I love its simplicity and easy to following single-file components (SFCs) that neatly delineate between HTML, JavaScript, and CSS.  For someone who spends a lot of time teaching non-web developers how to develop for the web, keeping these concepts separated is hard enough without intermingling the physical code itself.

The Composition API took a little getting used to, but I can see its advantages.  For someone first starting out with the Composition API that is used to using the Options API, I recommend just commenting the various variables with what they are intended to represent.

## Development Notes

Since my Vue 2 sample was obviously written with the Options API, and that hasn't really changed much here, I opted to demonstrate the Composition API in the Vue 3 sample.  The code is extremely similar between the two - the only differences really being the differences in the APIs.  The Composition API version does feel slimmer - maybe that's just my imagination?

## Build Notes

Similar to my Vue 2 sample, I used the "official" CLI instructions in the Vue "Getting Started" guides to generate a sample project.  The latest Vue 3 release has updated all of their build and CLI dependencies to use Vite as their go-to build system.  This was new for me - I have never used Vite before until now.  I haven't dived too deeply into Vite, but the out-of-the-box scripts that came with the template worked fine for what I needed with no issues.

## Testing Notes

Along with switching to use Vite for application life-cycle management, Vue has switched their go-to testing framework to Vitest as well.  This was also my first time using Vitest, but the APIs were almost identical to Jest for what I needed that I really didn't even have to look into anything.  The `@vue/test-utils` updates for Vue 3 offer a slimmed down API.  One of the best improvements that I noted was doing away with the WrapperArray class, which was annoying and confusing in my opinion.  Just like my notes in Vue 2 stated though, I still recommend encapsulating your `@vue/test-utils` code in either helper functions or page objects to simplify your test writing.
