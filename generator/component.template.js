const componentTemplate = (name) => `
@@include("parts/header.html", {"local": "../"})

  <main class="main">
    <section class="sidebar">
      @@include("parts/sidebar.html", {"local": "../"})
    </section>

    <section class="center">
      <div class="container">
        <h1 class="page-title">${name}</h1>

        <div class="page-example">
          <h4 class="page-section"> Example </h4>
          @@include("components/${name}/example.html")
        </div>

        @@include("components/${name}/code.html", {"local": "../"})
      </div>
    </section>
  </main>

@@include("parts/footer.html", {"local": "../"})
`

module.exports = componentTemplate
