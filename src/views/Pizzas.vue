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
        src="../img/pizzas/pizza1.png"
        alt="Pizza"
      >

      <div class="banner-text">
        <div class="text-h2 text-weight-bold">
          Pizzas
        </div>
        <div class="text-subtitle1">
          Pizzas recién horneadas con ingredientes de primera calidad.
        </div>
      </div>
    </div>

    <div class="q-pa-lg">

      <q-card class="chef-card q-mb-xl">
        <q-card-section>
          <div class="row items-center">

            <div class="col-12 col-md-4">
              <q-img
                src="../img/pizzas/pizza2.png"
                height="220px"
              />
            </div>

            <div class="col-12 col-md-8 q-pa-lg">
              <div class="text-overline text-orange-8">
                RECOMENDACIÓN DEL CHEF
              </div>

              <div class="text-h4 text-weight-bold">
                Pizza Especial
              </div>

              <p>
                Salsa de tomate, mozzarella, pepperoni,
                champiñones, pimentón y aceitunas.
              </p>

              <div class="text-h5 text-orange-8 text-weight-bold">
                $32.000
              </div>
            </div>

          </div>
        </q-card-section>
      </q-card>

      <div class="text-h4 text-weight-bold q-mb-lg">
        Nuestras pizzas
      </div>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/pizzas/pizza3.png"
              height="200px"
            />
            <q-card-section>
              <div class="text-h6 text-weight-bold">
                Margarita
              </div>
              <p>
                Salsa de tomate, mozzarella,
                tomate fresco y albahaca.
              </p>
              <div class="price">$27.000</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/pizzas/pizza4.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="orange" text-color="white">
                Más pedido
              </q-chip>
              <div class="text-h6 text-weight-bold">
                Pepperoni
              </div>
              <p>
                Salsa de tomate, mozzarella
                y abundante pepperoni.
              </p>
              <div class="price">$30.000</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/pizzas/pizza5.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="green" text-color="white">
                Vegetariana
              </q-chip>
              <div class="text-h6 text-weight-bold">
                Vegetariana
              </div>
              <p>
                Mozzarella, champiñones, pimentón,
                tomate, cebolla y aceitunas.
              </p>
              <div class="price">$29.000</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="product-card">
            <q-img
              src="../img/pizzas/pizza1.png"
              height="200px"
            />
            <q-card-section>
              <q-chip color="green" text-color="white">
                Nuevo
              </q-chip>
              <div class="text-h6 text-weight-bold">
                Especial
              </div>
              <p>
                Pepperoni, jamón, champiñones,
                pimentón, mozzarella y aceitunas.
              </p>
              <div class="price">$32.000</div>
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

.product-card {
  height: 100%;
  border-radius: 14px;
}

.chef-card {
  border-radius: 18px;
  border-left: 6px solid #ff9800;
}

.price {
  color: #f57c00;
  font-size: 20px;
  font-weight: bold;
}
</style>
