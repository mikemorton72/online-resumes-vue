<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Resume Portal</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/users/2">User 2</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <br />
    <router-view/>
    </div>
  </div>
<<<<<<< HEAD
</template>
=======
</template>

<style>
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  align-content: "center";
  width: 800px;
}
</style>
>>>>>>> be5f50c4fcc0eba0ccb7fedd6e483b0b1a65909d
