---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: César Alves | cesartalvez
show_lang_switch: true
---

<div class="card-grid">  
{% for post in site.posts %}

  <a class="card-with-text" href="{{ post.url | relative_url }}">
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-image">
    <div class="card-text">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
  
        <p class="post-meta">{{ post.date | date: "%B, %Y" }}</p>
      
    </div>
  </a>
{% endfor %}
</div>
