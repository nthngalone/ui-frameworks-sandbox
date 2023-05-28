# UI Frameworks Sandbox - Vue 2

## Progress

| Framework |      Source        |       Build        |        Tests       |        Notes       |
|-----------|:------------------:|:------------------:|:------------------:|:------------------:|
| Vue 2     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### Legend

* :white_check_mark: In Progress
* :heavy_check_mark: Complete
* :x: Blocked

## Background

Vue.js was first released in 2014 by its founder, Evan You.  Evan's goal was to create a framework that supported
his favorite features of Angular, but was much lighter and easier to use.  Vue describes itself as the "progressive
JavaScript framework" and it's based upon the reactive style of rendering a user interface.  In 2016, Vue 2 was
released followed by Vue 3 in 2020.

Vue 2 is a simple yet very powerful framework.  It's single-file component (SFC) style provides a very clear and
intuitive separation of HTML, JavaScript, and CSS.  It also supports a plug-in system to enhance the core functionality.
2 plug-in add-ons provided by the core Vue team provide routing (VueRouter) and datastore (Vuex) functionality.  There
is also a rich ecosystem of third-party plug-ins offering varying options of functionality - including component
libraries based around popular design systems such as Bootstrap and Material Design.

## Personal Notes

I began learning and using Vue.js in my day-to-day development somewhere around 2017 and immediately fell in love
with its simplicity.  The reactive nature was heads-and-shoulders above my experience with Dojo, and the simplicity
of the components compared to the high-ceremony approach of Angular was great.  To top it all off, the SFC format was
extremely easy to understand and did not require any kind of cognitive shift like the JSX formats of React.  All that
combined has made Vue my go-to framework for the last several years.  My only concern with Vue.js is that its adoption
rate within the United States is much lower than other frameworks, such as React, which makes it harder to find job
openings, or incoming talent, for Vue.js unless you branch out internationally.

## Development Notes

Since this is just a sample application, I used the Vue CLI to bootstrap my application and get started.  This is a great
way to get your feet wet with Vue or to get started with a new project.  For larger or more long-term supported applications,
I would recommend switching out the Vue CLI provided tooling for using the equivalent tools directly (ie. babel, webpack, jest,
etc.).  This allows you more direct access to upgrade/patch the individual tools more easily when you need to (the Vue CLI is
not quick to upgrade its internal dependencies - which can be problematic when transitive dependencies are flagged with
vulnerabilities), and you can pick the toolset that you prefer.

Since this is a very simple sample application, I'm not going to get the chance to demonstrate all of the Vue features, but
I have examples of the reactive data model, computed fields, event handlers, and method support.  The template for the
component is also very simple - just displaying a reactive field pulled from a computed property and event handlers.  There
is a whole treasure chest of options available to use in Vue templates including conditional statements, property bindings,
value bindings, and iterations.

## Build Notes

As stated above, I opted to stick with the Vue CLI for creating this project, which handles all the details of actually "building"
the code.  This could also be handled by using a module bundler directly (ex. Webpack) that has Vue plug-ins available.  The SFC
(`.vue` files) are the only reason why building is required.  The build step translates these into JavaScript that any browser can
execute.  Vue.js can also be developed as plain HTML/JavaScript - in which case building is not required.  That is a great option
for prototyping or creating simple applications where magnitude or reusability is not a concern.

## Testing Notes

The reactive nature of the framework can sometimes make testing difficult, but Vue offers a great library of utilities to make testing
easier.  The `@vue/test-utils` library provides methods for mounting and interacting with components and events in a way that embraces
their reactive nature - often providing Promise-based responses that allow you to know when an operation is complete.  The `@vue/test-utils`
API can be a bit verbose though, so I recommend wrapping the API in your own helper functions (as demonstrated in the sample test), or
building page objects around the API if reusability is a concern across tests.
