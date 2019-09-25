---
layout: default
title: "Home"
---

<div data-aos="fade-up"
    data-aos-duration="2000">

<a href="/portfolio">
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

<div class="header-img bl">
<img class="season-img" src="/assets/images/default-test.png">
</div>

<h5 class="solutionLink bl">Change season</h5>
<div class="hidden"> 
<div id="autumn" class="button_cont"><button class="example_f"><span>Autumn</span></button></div>
<div id="winter" class="button_cont"><button class="example_f"><span>Winter</span></button></div>
<div id="spring" class="button_cont"><button class="example_f"><span>Spring</span></button></div>
<div id="summer" class="button_cont"><button class="example_f"><span>Summer</span></button></div>
</div>

<div class="main-section row">

<div class="main-content col">

<section id="archives" class="portfolio-container">
<img src="/assets/images/profile-picture.png" class="profile-picture mobile-hide">
<img src="assets/images/profile-picture-ontop.png" class="portfolio-overlay-pp profile-picture">
</section>



<h2> Hi, I'm Sofie </h2>


<p>I'm a Frontend Developer. I make your business look good <br> by creating a beautiful website</p>

</div>

<div class="main-content col">
<section class="portfolio-container">
<img src="/assets/images/available.png" class="profile-picture">
<img src="assets/images/available-ontop.png" class="portfolio-overlay-pp profile-picture mobile-hide">
</section>

<h2>Available for new projects</h2>
<p>Currently awailable for freelance. <br>Contact me at contact@sofieohlsson.com</p>
</div>

<div class="main-content col">
<section class="portfolio-container">
    <img src="/assets/images/postcard-front.png" class="profile-picture mobile-hide">
    <a href="https://sharp-lumiere-c4f2bb.netlify.com/">
        <img src="assets/images/postcard-back.png" class="portfolio-overlay profile-picture">
    </a>
</section>
<h2>Letters from the Archives</h2>
<p>Here is a hand-picked selection of my previous works. <br> More will come over time</p>

</div>

</div>

<p class="padtest"></p>
<h2 id="bucketlist">Bucketlist</h2>
Life is unexpected. Make the most of it. Turn you dreams into memories



<section class="container flex-cards page-section bl">
{% for bl in site.data.bl %}
    <div class="wrap flex-cards bucketlist-container {{bl.class}}">
        <div class="card">
            <div class="bucketlist-contain">
            <figure class="card-header">
            <img src="{{bl.image}}" class="image"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div class="middle">
            <div class="bucketlist-centered text">{{bl.date}}</div>
            </div>
            </figure>
            </div>
            <div class="card-inner">
                <p>{{bl.description}}</p>
            </div>
        </div>
</div>
{% endfor %}
</section>