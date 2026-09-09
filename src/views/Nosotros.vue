<template>
  <q-page class="bg-grey-1">

    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <div class="logo">
            <img src="../img/nosotros/logo.png" alt="">
            <h2>Barrio Fast</h2>
          </div>
        </q-toolbar-title>

        <q-btn flat label="Hamburguesas" to="/hamburguesas" />
        <q-btn flat label="Perros" to="/perros" />
        <q-btn flat label="Pizzas" to="/pizzas" />
        <q-btn flat label="Bebidas" to="/bebidas" />
        <q-btn flat label="Postres" to="/postres" />
        <q-btn flat label="Promociones" to="/" />
        <q-btn flat label="Nosotros" to="/nosotros" />
      </q-toolbar>
    </q-header>

    <!-- PORTADA -->
    <div class="banner">
      <img
        src="../img/nosotros/banner.png"
        alt="Restaurante"
      >

      <div class="banner-text">
        <div class="text-h2 text-weight-bold">
          Nosotros
        </div>

        <div class="text-subtitle1">
          Conoce la historia detrás de Barrio Fast.
        </div>
      </div>
    </div>

    <div class="q-pa-lg">

      <!-- HISTORIA -->
      <q-card class="q-mb-xl">
        <q-card-section class="q-pa-xl">

          <div class="text-h4 text-weight-bold text-orange-8 q-mb-md">
            Nuestra historia
          </div>

          <p class="text-body1">
            Barrio Fast nació con la idea de crear un lugar donde
            las personas pudieran disfrutar comidas rápidas deliciosas,
            preparadas con ingredientes frescos y mucho cariño.
          </p>

          <p class="text-body1">
            Desde nuestros comienzos hemos trabajado para ofrecer
            hamburguesas, perros, pizzas, bebidas y postres con
            excelente calidad y un servicio cercano a nuestros clientes.
          </p>

          <p class="text-body1">
            Nuestro objetivo es que cada persona que visite
            Barrio Fast se vaya satisfecha y con ganas de regresar.
          </p>

        </q-card-section>
      </q-card>

      <!-- INFORMACIÓN -->
      <div class="row q-col-gutter-lg q-mb-xl">

        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="text-h5 text-weight-bold">
                 Dirección
              </div>

              <p>
                Carrera 10 # 12-35<br>
                San Gil, Santander
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="text-h5 text-weight-bold">
                Horarios
              </div>

              <p>
                Lunes a sábado<br>
                11:00 AM - 10:00 PM
              </p>

              <p>
                Domingos<br>
                12:00 PM - 8:00 PM
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="info-card">
            <q-card-section>
              <div class="text-h5 text-weight-bold">
               Pedidos
              </div>

              <p>
                Teléfono: 300 123 4567
              </p>

              <p>
                WhatsApp: 300 123 4567
              </p>
            </q-card-section>
          </q-card>
        </div>

      </div>

      <!-- EQUIPO -->
      <div class="text-h4 text-weight-bold q-mb-lg">
        Nuestro equipo
      </div>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-4">
          <q-card class="team-card">
            <q-img
              src="../img/nosotros/chef.png"
              height="300px"
            />

            <q-card-section class="text-center">
              <div class="text-h5 text-weight-bold">
                Mauricio Velasquez
              </div>

              <div class="text-orange-8 text-subtitle1">
                Chef
              </div>

              <p>
                Encargado de crear nuestras recetas
                y mantener la calidad de cada plato.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="team-card">
            <q-img
              src="../img/nosotros/Cajera.png"
              height="300px"
            />

            <q-card-section class="text-center">
              <div class="text-h5 text-weight-bold">
                Laura Figueroa
              </div>

              <div class="text-orange-8 text-subtitle1">
                Cajera
              </div>

              <p>
                Encargada de recibir a nuestros clientes
                y gestionar los pedidos.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="team-card">
            <q-img
              src="../img/nosotros/domiciliario.png"
              height="300px"
            />

            <q-card-section class="text-center">
              <div class="text-h5 text-weight-bold">
                Santiago Romero
              </div>

              <div class="text-orange-8 text-subtitle1">
               Domiciliario
              </div>

              <p>
                Encargado de llevar nuestros pedidos
                hasta la puerta de nuestros clientes.
              </p>
            </q-card-section>
          </q-card>
        </div>

      </div>

    </div>

  </q-page>
</template>

<style scoped>
.banner {
  position: relative;
  height: 380px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(55%);
}

.logo{
  width: 100%;
  height: 70px;
  justify-content: center;
  object-fit: cover;
  display: flex;
}

.logo h2{
  font-size: 1.8rem;
  font-weight: 500;
}

.logo img{
  width: 100px;
  height: 75px;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  color: white;
}

.info-card {
  height: 100%;
  border-radius: 14px;
}

.team-card {
  height: 100%;
  border-radius: 16px;
}

.team-card:hover {
  transform: translateY(-5px);
}
</style>
