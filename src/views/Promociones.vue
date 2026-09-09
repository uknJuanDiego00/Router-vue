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

    <div class="banner">
      <img
        src="../img/promociones/promocion1.png"
        alt="Promociones"
      >

      <div class="banner-text">
        <div class="text-h2 text-weight-bold">
          Promociones
        </div>

        <div class="text-subtitle1">
          Más sabor por menos. ¡Aprovecha nuestras ofertas!
        </div>
      </div>
    </div>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold q-mb-lg">
        Ofertas de la semana 
      </div>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-4">
          <q-card class="promo-card">
            <q-img
              src="../img/promociones/promocion2.png"
              height="250px"
            />

            <q-card-section>
              <q-chip color="red" text-color="white">
                20% DESCUENTO
              </q-chip>

              <div class="text-h5 text-weight-bold">
                Combo Hamburguesa
              </div>

              <p>
                Hamburguesa clásica + papas fritas +
                gaseosa personal.
              </p>

              <div class="text-h6 text-grey-6">
                <s>$27.000</s>
              </div>

              <div class="text-h5 text-orange-8 text-weight-bold">
                $21.600
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="promo-card">
            <q-img
              src="../img/promociones/promocion1.png"
              height="250px"
            />

            <q-card-section>
              <q-chip color="red" text-color="white">
                2x1
              </q-chip>

              <div class="text-h5 text-weight-bold">
                Martes de Pizza
              </div>

              <p>
                Compra una pizza grande y recibe
                otra pizza mediana gratis.
              </p>

              <div class="text-h5 text-orange-8 text-weight-bold">
                Desde $30.000
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="promo-card">
            <q-img
              src="../img/promociones/promocion3.png"
              height="250px"
            />

            <q-card-section>
              <q-chip color="green" text-color="white">
                COMBO
              </q-chip>

              <div class="text-h5 text-weight-bold">
                Combo Dulce
              </div>

              <p>
                Brownie + helado + malteada
                de chocolate.
              </p>

              <div class="text-h5 text-orange-8 text-weight-bold">
                $18.000
              </div>
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
  filter: brightness(60%);
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

.promo-card {
  height: 100%;
  border-radius: 16px;
}

.promo-card:hover {
  transform: translateY(-5px);
}
</style>
