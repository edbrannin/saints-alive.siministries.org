---
title: About
permalink: /about/index.html
description: About this starter
layout: home
youtube: true
blog:
  title: 'Blog'
  intro: "I'm showing the last 4 blog posts, but there might be more!"
---

## An Eleventy starter

This (opiniated) [Eleventy](https://www.11ty.dev/) starter is based on [Andy Bell's](https://twitter.com/piccalilli_) talk 'Be the browser’s mentor, not its micromanager' and it's companion website buildexcellentwebsit.es.

In his words, it's about hinting the browser rather than micromanaging it, using progressive enhancement, CSS layout, fluid type & spacing, as well as modern CSS features.

This way we can shape frontends that look good to everyone, regardless of device, connection speed or context.

---

Based on the companion website of Andy Bell's talk 'Be the browser’s mentor, not its micromanager'.
An approach that promotes modern CSS with methodologies, fluid type & space, flexible Layouts and Progressive Enhancement.

This starter exists to hopefully spread the use of this _excellent_ workflow. To work with it efficiently you should be familiar with [cube.fyi](https://cube.fyi/), [utopia.fyi](https://utopia.fyi/) and [every-layout.dev](https://every-layout.dev/).

- Find out more on https://buildexcellentwebsit.es/.
- Remix the original: https://glitch.com/edit/#!/remix/build-excellent-websites

Edit your preferences (colors, fonts, fluid text sizes etc.) in `src/assets/css/design-tokens`.

## Watch the talk

{% youtube '5uhIiI9Ld5M', 'Andy Bell – Be the browser’s mentor, not its micromanager' %}

<article class="region" style="--region-space-top: var(--space-s)">
  <div class="wrapper flow prose">
    <h2>{{ blog.title }}</h2>
    <!-- blog intro text is optional. -->
    {% if blog.intro %}
    <p>{{ blog.intro }}</p>
    {% endif %}
  </div>
  <!-- TODO: duplicate of partials/blog.njk -->

  <ul class="wrapper grid mt-l-xl" role="list" data-rows="masonry" data-layout="50-50">
    {% set postslist = collections.posts %} {% for post in postslist.slice(0, 4) %} {%
    include "partials/blog-card.njk" %} {% endfor %}
  </ul>
</article>