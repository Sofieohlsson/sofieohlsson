---
layout: portfolio
title: "Home"
---

<img src="/assets/images/test-bg.png" class="pagetwo-bg" />

<a href="#sofie"><span class="arrow">&#8595;</span></a>


<div class="s-wrapper inscroll">
<h1>Sofie Ohlsson</h1>
</div>



<main class="pagetwo-content">

<div class="main-section row">

<div class="main-content col">

<section id="archives" class="portfolio-container">
<img src="/assets/images/profile-picture.png" class="profile-picture mobile-hide">
<img src="assets/images/profile-picture-ontop.png" class="portfolio-overlay-pp profile-picture">
</section>



<div class="inscroll left">
<h2 id="sofie">Hi, I'm Sofie </h2>
<p>I'm a Frontend Developer. I make your business look good by creating a beautiful website</p>
</div>

</div>

<a href="/index">
<div id="Awesome" class="anim750">
	
  <div class="reveal circle_wrapper">
		<div class="circle"></div>
	</div>
						
	<div class="sticky anim750">
		<div class="front circle_wrapper anim750">
			<div class="circle anim750"></div>
	  </div>
	</div>
						
</div>

</a>

<div class="main-content col freelance">
<section class="portfolio-container">
<img src="/assets/images/available.png" class="profile-picture">
<img src="assets/images/available-ontop.png" class="portfolio-overlay-pp profile-picture mobile-hide">
</section>

<div class="inscroll right">
<h2>Available for new projects</h2>
<p>Currently awailable for freelance. Contact me at contact@sofieohlsson.com</p>
</div>

</div>

</div>

<p class="padtest"></p>
<div class="inscroll left">
<h2 id="bucketlist">Bucketlist</h2>
<p>Life is unexpected. Make the most of it. Turn you dreams into memories</p>
</div>
</main>

<section class="container flex-cards page-section">
{% for bucketlist in site.data.bucketlist %}
    <div class="wrap flex-cards {{bucketlist.class}}">
        <div class="card inscroll">
            <figure class="card-header snip1104">
            <img src="{{bucketlist.image}}">
            <div class="card-inner">
                  <figcaption>
    <h2>{{bucketlist.description1}} <span> {{bucketlist.description2}}</span></h2>
  </figcaption>
            </div>
            </figure>
        </div>
</div>
{% endfor %}
</section>