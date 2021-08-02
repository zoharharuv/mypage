'use strict'
$(initPage);
function initPage() {
    renderProjects();
}
function renderProjects() {
    var projs = getProjects();
    var projsHtml = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onRenderModal('${proj.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#modal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content" >
              <i class="fa fa-plus fa-3x" ></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.img}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`;
    });
    $('.projects').html(projsHtml);
}
function onRenderModal(id) {
    var proj = getProject(id);
    var labels = proj.labels.map(function (label) {
        return `<li>${label}</li>`;
    })
    var modalHtml = `<a href="${proj.url}"><h2>${proj.name}</h2></a>
                  <p class="item-intro text-muted">${proj.title}</p>
                  <img class="img-fluid d-block mx-auto" src="${proj.img}-full.jpg" alt="">
                  <p>${proj.desc}</p>
                  <ul class="list-inline">
                    <li>Publised at: ${proj.publishedAt}</li>
                    <li class="labels">Labels:</li>
                    ${labels.join('')}
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>`;
    $('.modal-body').html(modalHtml);
}
function onSend() {
    var name = $("[name='name']").val();
    var email = $("[name='email']").val();
    var msg = $("[name='message']").val();
    if (!name || !email || !msg) return;
    window.location.assign(`https://mail.google.com/mail/?view=cm&fs=1&to=zoharpr0@gmail.com&su=${name}&body=${msg}&bcc=${email}`);
}
function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}
