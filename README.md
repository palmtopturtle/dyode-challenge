# dyode-challenge
```
1. You would utilize section settings and set up an approprate schema to make the text editable in the theme editor. So, if the schema had an id of "homepage_text" with type "text", you can access it in liquid with something like {{ section.settings.homepage_text }}
 
2. The collection banner can be easily accessed via {{ collection.image }}. Maybe something like this, with a width.
{% if collection.image %}
    <img src="{{ collection.image | img_url }}" alt="{{ collection.image.alt }}"/>
{% endif %}

3.
{% assign prevLimit = paginate.current_page | minus: 2 %}
{% assign nextLimit = paginate.current_page | plus: 2 %}

{% if paginate.previous.is_link %}
    <a href="{{ paginate.previous.url }}"><</a>
{% endif %}
{% for part in paginate.parts %}
    {% if part.is_link %}
        {% if forloop.index > prevLimit and forloop.index < nextLimit or forloop.index == paginate.pages %}
            {{ part.title | link_to: part.url }}
        {% elsif forloop.index == prevLimit or forloop.index == nextLimit %}
            ...
        {% endif %}
    {% endif %}
{% endfor %}
{% if paginate.next.is_link %}
    <a href="{{ paginate.next.url }}">></a>
{% endif %}

4.
{% assign blueshirt = all_products["Blue T-Shirt"] %}
{% assign blueshirt_title = blueshirt.title %}
{% assign blueshirt_id = blueshirt.id %}
{% assign blueshirt_handle = blueshirt.handle %}
{% assign blueshirt_price = blueshirt.price %}
{% assign blueshirt_url = blueshirt.url %}
{% assign blueshirt_image = blueshirt.image %}

5.
{% assign arr = "fruit:apple,vegetable:carrot,cloth:t-shirt,denim:jeans" | split: "," %}

{% for item in arr %}
    {% assign item_arr = item | split: ":" %}
    {% capture var_name %}item_{{ item_arr | first }}{% endcapture %}
    {% assign var_name = item_arr | last %}
{% endfor %}

We could also use capture to store all the values in one variable.
```
