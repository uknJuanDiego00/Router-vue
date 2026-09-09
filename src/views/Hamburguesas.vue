<template>
  <q-page class="bg-grey-1">

    <!-- BARRA DE NAVEGACIÓN -->
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

    <!-- BANNER -->
    <div class="banner">
      <img
        src="../img/hamburguesas/hamburguesa1.png"
        alt="Hamburguesas"
      >

      <div class="banner-text">
        <div class="text-h2 text-weight-bold">Hamburguesas</div>
        <div class="text-subtitle1">
          Hamburguesas artesanales preparadas con ingredientes frescos.
        </div>
      </div>
    </div>

    <div class="q-pa-lg">

      <!-- RECOMENDACIÓN -->
      <q-card class="chef-card q-mb-xl">
        <q-card-section>
          <div class="row items-center">

            <div class="col-12 col-md-4">
              <q-img
                src="../img/hamburguesas/hamburguesa2.png"
                height="220px"
              />
            </div>

            <div class="col-12 col-md-8 q-pa-lg">
              <div class="text-overline text-orange-8">
                RECOMENDACIÓN DEL CHEF
              </div>

              <div class="text-h4 text-weight-bold">
                Hamburguesa Barrio Fast
              </div>

              <p>
                Carne de res, queso cheddar, lechuga, tomate,
                cebolla caramelizada, salsa especial y pan artesanal.
              </p>

              <div class="text-h5 text-orange-8 text-weight-bold">
                $24.500
              </div>

              <q-chip color="orange" text-color="white">
                Más pedida
              </q-chip>
            </div>

          </div>
        </q-card-section>
      </q-card>

      <!-- PRODUCTOS -->
      <div class="text-h4 text-weight-bold q-mb-lg">
        Nuestras hamburguesas
      </div>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/hamburguesas/hamburguesa3.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="orange" text-color="white" size="sm">
                Más pedido
              </q-chip>

              <div class="text-h6 text-weight-bold">
                Clásica
              </div>

              <p>
                Carne de res, queso, lechuga, tomate,
                cebolla y salsa de la casa.
              </p>

              <div class="text-h6 text-orange-8 text-weight-bold">
                $18.500
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/hamburguesas/hamburguesa4.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="red" text-color="white" size="sm">
                Picante
              </q-chip>

              <div class="text-h6 text-weight-bold">
                Mexicana
              </div>

              <p>
                Carne de res, queso cheddar, jalapeños,
                guacamole, tomate y salsa picante.
              </p>

              <div class="text-h6 text-orange-8 text-weight-bold">
                $22.000
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/hamburguesas/hamburguesa5.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="green" text-color="white" size="sm">
                Nuevo
              </q-chip>

              <div class="text-h6 text-weight-bold">
                BBQ Bacon
              </div>

              <p>
                Carne de res, tocino crocante, queso cheddar,
                cebolla y salsa BBQ.
              </p>

              <div class="text-h6 text-orange-8 text-weight-bold">
                $23.500
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/hamburguesas/hamburguesa1.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="green" text-color="white" size="sm">
                Vegetariano
              </q-chip>

              <div class="text-h6 text-weight-bold">
                Veggie
              </div>

              <p>
                Hamburguesa vegetal, lechuga, tomate,
                aguacate, cebolla y salsa especial.
              </p>

              <div class="text-h6 text-orange-8 text-weight-bold">
                $20.000
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
  overflow: hidden;
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

.product-card {
  height: 100%;
  border-radius: 14px;
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.chef-card {
  border-radius: 18px;
  border-left: 6px solid #ff9800;
}
</style>
