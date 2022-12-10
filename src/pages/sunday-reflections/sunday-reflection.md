---
pagination:
    data: "sunday-reflections"
    size: 1
    alias: reflection
    resolve: values
permalink: "sunday-reflections/{{ reflection.slug }}/index.html"
layout: reflection
---

{{ reflection.markdown }}
