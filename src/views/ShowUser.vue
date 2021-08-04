<template>
  <div class="aclass bg-secondary">
    <br>
    <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://s.yimg.com/uu/api/res/1.2/j.IuW7t1ZkqNb32aj9xaDw--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/fec49aa7467e3735885162a33b8e83d9" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8" >
          <div class="card-body">
            <h5 class="card-title">Student #1</h5>
            <h6 class="card-subtitle mb-2 text-muted">Bio</h6>
            <p class="card-text">Highly motivated student that strategizes key learnings into buckets</p>
            <h6 class="card-subtitle mb-2 text-muted">Contact Info</h6>
            <p class="card-text"><a href="https://www.linkedin.com/in/mike-morton72/">LinkedIn</a></p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="card" style="width: 800px;">
      <div class="card-body">
        <h5 class="card-title">Experiences</h5>
        <h6 class="card-subtitle mb-2 text-muted">Company Name</h6>
        <p class="card-text">All of my responsibilites at Company Name</p>
        <h6 class="card-subtitle mb-2 text-muted">Another Company Name</h6>
        <p class="card-text">All of my responsibilites at Another Company Name</p>
      </div>
    </div>
    <br />
    <div class="card" style="width: 800px;">
      <div class="card-body">
        <h5 class="card-title">Education</h5>
        <h6 class="card-subtitle mb-2 text-muted">School #1</h6>
        <p class="card-text">All of my responsibilites at School Name</p>
        <h6 class="card-subtitle mb-2 text-muted">Another School Name</h6>
        <p class="card-text">All of my responsibilites at Another School Name</p>
      </div>
    </div>
    <br />
    <div class="card" style="width: 800px;">
      <div class="card-body">
        <h5 class="card-title">Skills</h5>
        <p class="card-text">Skill 1, skill 2, skill 3, skill 5</p>
      </div>
    </div>
    <br />
    <div class="card" style="width: 800px;">
      <div class="card-body">
        <h5 class="card-title">Capstone</h5>
        <h6 class="card-subtitle mb-2 text-muted">Description</h6>
        <p class="card-text">Capstone description text</p>
        <p class="card-text">Capstone URL</p>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.stack.imgur.com/y9DpT.jpg" class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.stack.imgur.com/y9DpT.jpg" class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.stack.imgur.com/y9DpT.jpg" class="d-block w-100" alt="">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <br />
    <div class="card" style="width: 800px;">
      <div class="card-body">
        <h5 class="card-title">Twitter Feed</h5>
        <TwitterFeed data-width="800" data-height="800" data-theme="dark"  src="https://twitter.com/elmo"></TwitterFeed>
      </div>
    </div>
  </div>
</template>
