---
data: posts.posts
layout: index.njk
---

![profile-photo](/assets/profile-photo.png)

# It's time to cook

It took me 3 years of procrastination to finally get around to setting up my personal site. And it took only 5 mins and 10$ to actually do it. What am I doing here? I don’t know, I don’t have anything interesting to say, or cool tech buzz to share. But perhaps I don’t have any great thoughts because I don’t have an outlet for them? This is it. Welcome to my outlet. I am curious to see how it evolves. 

## This is what I wrote

{% for post in posts.posts | limit(5) %}
[{{post.title}}](/blog/{{post.path}})
{% endfor %}
