---
pagination:
    data: "saints_alive_saints"
    size: 1
    alias: saint
    resolve: values
permalink: "saints-alive/saint/{{ saint.slug }}/index.html"
layout: saint
---

{{ saint.markdown | safe }}
