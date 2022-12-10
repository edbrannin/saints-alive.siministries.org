---
permalink: "saints-alive/index.html"
layout: page
title: "Saints Alive"
---

<img src="/assets/images/FrMcNamara.png" style="float: right; margin: 1em">

Rev. Dr. Robert F. McNamara was ordained a priest in 1936 and was Professor of Church History for over 40 years. He said weekend Masses at St. Salome for many years, and moved to St. Thomas the Apostle when he retired from teaching in 1980. These vignettes were published in the parish bulletin for over 28 years.

We cannot answer questions about his articles.

Aside from "Saints Alive" and many historical books, he wrote a series entitled "All God's Children" in in the early-1980's with reflections centering on the readings of the liturgical cycle. Visit [Sunday Reflections](/sunday-reflections/) to read these articles.

[What is a Saint?](/saints-alive/what-is-a-saint/)


| Note | Name | Feast |
| --- | --- | --- |
{%- for saint in saints_alive_saints %}
| {{ saint.note }} | [{{saint.title}}](/saints-alive/saint/{{ saint.slug }}) | {{ saint.feastDay }} |
{%- endfor %}
