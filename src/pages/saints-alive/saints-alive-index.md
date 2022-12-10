---
permalink: "saints-alive/index.html"
layout: page
title: "Saints Alive"
---

<img src="/assets/images/FrMcNamara.png" style="float: right; margin: 1em">

Saints Alive 
------------


Rev. Dr. Robert F. McNamara was ordained a priest in 1936 and was Professor of Church History for over 40 years. He said weekend Masses at St. Salome for many years, and moved to St. Thomas the Apostle when he retired from teaching in 1980. These vignettes were published in the parish bulletin for over 28 years.

Father McNamara went home to the Lord on May 22, 2009 at the age of 98.

### Biography

Father's cousin, Ann K. Maloney, has written a book about his life. A Priest Forever: The Life and Times of Father Robert F. McNamara, is available for purhcase / order at [amazon.com](http://www.amazon.com/Priest-Forever-Father-Robert-McNamara/dp/1483418766/ref=sr_1_2?ie=UTF8&qid=1419434426&sr=8-2&keywords=a+priest+forever), [lulu.com](http://www.lulu.com/shop/ann-k-maloney/a-priest-forever-the-life-and-times-of-father-robert-f-mcnamara/paperback/product-21861586.html), [turtlepromise.com](http://www.turtlepromise.com/) and Barnes & Noble Booksellers. It is also available as an ebook on [lulu.com](http://www.lulu.com/shop/ann-k-maloney/a-priest-forever-the-life-and-times-of-father-robert-f-mcnamara/ebook/product-21864796.html).

We cannot answer questions about his articles.

Aside from many historical books, he wrote a series entitled "All God's Children" in in the early-1980's with reflections centering on the readings of the liturgical cycle. Visit [Sunday Reflections](/sunday-reflections/) to read these articles.

[What is a Saint?](/saints-alive/what-is-a-saint/)


| Note | Name | Feast |
| --- | --- | --- |
{%- for saint in saints_alive_saints %}
| {{ saint.note }} | [{{saint.title}}](/saints-alive/saint/{{ saint.slug }}) | {{ saint.feastDay }} |
{%- endfor %}
