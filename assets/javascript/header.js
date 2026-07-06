let body=document.getElementsByTagName('body')[0];
body.innerHTML=`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="#">Going On</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item ms-4">
          <a class="nav-link fs-6"= href="index.html">Home</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link fs-6" href="user.html">Users</a>
        </li>
        <li class="nav-item ms-5 saved">
          <a class="nav-link fs-6" href="saved.html">
          <i class="bi bi-bookmark-fill"></i>
            Saved
          </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="button"  onclick='find(this)'><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
`


