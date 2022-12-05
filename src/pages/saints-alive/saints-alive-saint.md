---
pagination:
    data: "saints_alive_saints"
    size: 1
    alias: saint
    resolve: values
permalink: "saints-alive/saint/{{ saint.title | slug }}/index.html"
layout: page
---

{{ saint.markdown }}
