<template>
  <q-page class="bg-grey-1 pizzas-page">

    <!-- BARRA DE NAVEGACIÓN -->
    <q-header elevated class="bg-dark text-white">
      <q-toolbar class="nav-toolbar">
        <q-toolbar-title class="text-weight-bold">
          <div class="logo">
            <img src="../img/nosotros/logo.png" alt="Logo Barrio Fast">
            <h2>Barrio Fast</h2>
          </div>
        </q-toolbar-title>

        <q-btn flat no-caps label="Hamburguesas" to="/hamburguesas" />
        <q-btn flat no-caps label="Perros" to="/perros" />
        <q-btn flat no-caps label="Pizzas" to="/pizzas" class="active-nav-btn" />
        <q-btn flat no-caps label="Bebidas" to="/bebidas" />
        <q-btn flat no-caps label="Postres" to="/postres" />
        <q-btn flat no-caps label="Promociones" to="/" />
        <q-btn flat no-caps label="Nosotros" to="/nosotros" />
      </q-toolbar>
    </q-header>

    <!-- BANNER HERO INSET -->
    <div class="banner">
      <img
        src="../img/pizzas/pizza1.png"
        alt="Pizzas Barrio Fast"
      >
      <div class="banner-overlay"></div>
      <div class="banner-text">
        <div class="badge-banner q-mb-sm">
          <q-icon name="local_pizza" class="q-mr-xs" /> Pizzas Artesanales
        </div>
        <h1 class="text-h2 text-weight-bolder q-ma-none banner-title">
          Pizzas al Horno
        </h1>
        <p class="text-subtitle1 banner-subtitle q-mt-sm">
          Masa crujiente estirada a mano, salsa de tomate italiana y abundancia de queso mozzarella fundido.
        </p>
      </div>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <div class="content-container">

      <!-- RECOMENDACIÓN DEL CHEF -->
      <q-card class="chef-card q-mb-xl shadow-4">
        <div class="row items-center no-wrap-md">

          <div class="col-12 col-md-5">
            <div class="chef-img-wrapper">
              <q-img
                :src="pizza2"
                alt="Pizza Barrio Fast"
                fit="contain"
                class="chef-img"
              />
              <div class="chef-float-badge">
                <q-icon name="star" color="amber" size="18px" class="q-mr-xs" />
                Más pedida
              </div>
            </div>
          </div>

          <div class="col-12 col-md-7 chef-info q-pa-lg q-pa-md-xl">
            <div class="chef-tag row items-center q-gutter-x-xs text-orange-9 text-weight-bold text-uppercase q-mb-xs">
              <q-icon name="restaurant_menu" size="20px" />
              <span>Recomendación del Chef</span>
            </div>

            <div class="text-h4 text-weight-bolder text-dark q-mb-sm chef-title">
              Pizza Barrio Fast Suprema
            </div>

            <p class="chef-desc text-body1 text-grey-8">
              Masa madre dorada al horno, abundante salsa pomodoro, doble capa de mozzarella fundido, pepperoni americano, champiñones frescos salteados, pimentón asado y aceitunas negras.
            </p>

            <div class="row items-center justify-between q-mt-lg">
              <div>
                <span class="text-caption text-grey-6 text-uppercase text-weight-medium">Precio especial</span>
                <div class="text-h4 text-weight-bolder text-orange-9 price-highlight">
                  $32.000
                </div>
              </div>

              <q-btn
                unelevated
                rounded
                no-caps
                color="orange-9"
                size="lg"
                icon="shopping_bag"
                label="Pedir Ahora"
                class="chef-action-btn text-weight-bold shadow-3"
                @click="addToCart({ name: 'Pizza Barrio Fast Suprema', price: 32000 })"
              />
            </div>
          </div>

        </div>
      </q-card>

      <!-- ENCABEZADO Y FILTROS -->
      <div class="section-header row items-center justify-between q-mb-lg">
        <div>
          <h2 class="text-h4 text-weight-bolder text-dark q-ma-none">
            Nuestras Pizzas
          </h2>
          <p class="text-grey-7 text-body2 q-mt-xs q-mb-none">
            Elaboradas con masa fresca del día e ingredientes prémium
          </p>
        </div>

        <div class="category-filters row q-gutter-sm q-mt-sm q-mt-md-none">
          <q-btn
            v-for="cat in categories"
            :key="cat.id"
            unelevated
            rounded
            no-caps
            :color="selectedCategory === cat.id ? 'orange-9' : 'grey-2'"
            :text-color="selectedCategory === cat.id ? 'white' : 'grey-9'"
            :icon="cat.icon"
            :label="cat.label"
            class="filter-pill text-weight-medium"
            @click="selectedCategory = cat.id"
          />
        </div>
      </div>

      <!-- GRID DE A 2 PRODUCTOS POR FILA (col-12 col-md-6) -->
      <div class="row q-col-gutter-xl">

        <div
          v-for="item in filteredPizzas"
          :key="item.id"
          class="col-12 col-md-6"
        >
          <q-card class="product-card shadow-2 column justify-between">

            <!-- IMAGEN COMPLETA, SIN CORTAR, SIN DISTORSIÓN (FIT CONTAIN) -->
            <div class="card-media-wrapper">
              <q-img
                :src="item.img"
                :alt="item.name"
                fit="cover"
                class="product-image"
                loading="lazy"
              >
                <template #loading>
                  <q-spinner-dots color="orange" size="40px" />
                </template>
              </q-img>

              <div class="card-badges">
                <q-chip
                  :color="item.tagColor"
                  text-color="white"
                  dense
                  class="product-chip shadow-1"
                  :icon="item.tagIcon"
                >
                  {{ item.tag }}
                </q-chip>
              </div>

              <q-btn
                round
                flat
                dense
                size="md"
                :icon="item.isFavorite ? 'favorite' : 'favorite_border'"
                :color="item.isFavorite ? 'red' : 'grey-6'"
                class="favorite-btn"
                @click.stop="toggleFavorite(item)"
              />
            </div>

            <!-- CUERPO DE LA TARJETA -->
            <q-card-section class="card-body col column justify-between">
              <div>
                <div class="product-category text-caption text-grey-6 text-weight-bold text-uppercase q-mb-xs">
                  {{ item.subtitle }}
                </div>

                <div class="product-title text-h6 text-weight-bold text-dark q-mb-xs">
                  {{ item.name }}
                </div>

                <p class="product-desc text-body2 text-grey-7">
                  {{ item.desc }}
                </p>
              </div>

              <!-- PRECIO Y BOTÓN AGREGAR -->
              <div class="card-footer row items-center justify-between q-pt-md">
                <div class="price-box">
                  <div class="price-caption text-caption text-grey-6">Precio</div>
                  <div class="price-value text-h6 text-weight-bolder text-orange-9">
                    {{ formatPrice(item.price) }}
                  </div>
                </div>

                <q-btn
                  unelevated
                  rounded
                  no-caps
                  color="orange-9"
                  text-color="white"
                  icon="add_shopping_cart"
                  label="Agregar"
                  class="add-cart-btn text-weight-bold"
                  @click="addToCart(item)"
                />
              </div>
            </q-card-section>

          </q-card>
        </div>

      </div>

    </div>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

import pizza1 from '../img/pizzas/pizza1.png'
import pizza2 from '../img/pizzas/pizza2.png'
import pizza3 from '../img/pizzas/pizza3.png'
import pizza4 from '../img/pizzas/pizza4.png'
import pizza5 from '../img/pizzas/pizza5.png'

const $q = useQuasar()

const selectedCategory = ref('todas')

const categories = [
  { id: 'todas', label: 'Todas', icon: 'local_pizza' },
  { id: 'clasicas', label: 'Clásicas', icon: 'thumb_up' },
  { id: 'carnes', label: 'Carnes', icon: 'whatshot' },
  { id: 'veggie', label: 'Vegetarianas', icon: 'eco' }
]

const pizzas = ref([
  {
    id: 1,
    name: 'Pizza Margarita Clásica',
    category: 'clasicas',
    subtitle: '8 Porciones • 35 cm',
    desc: 'Salsa pomodoro artesanal italiana, abundante queso mozzarella de búfala, rodajas de tomate fresco y albahaca fresca.',
    price: 27000,
    img: pizza3,
    tag: 'Clásica',
    tagColor: 'green-8',
    tagIcon: 'eco',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Pizza Pepperoni Lovers',
    category: 'carnes',
    subtitle: '8 Porciones • 35 cm',
    desc: 'Salsa pomodoro, mozzarella derretido y una generosa porción de pepperoni horneado con borde crujiente.',
    price: 30000,
    img: pizza4,
    tag: 'Más pedido',
    tagColor: 'orange-9',
    tagIcon: 'star',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Pizza Huerto Vegetariana',
    category: 'veggie',
    subtitle: '8 Porciones • 35 cm',
    desc: 'Queso mozzarella, champiñones frescos, pimentón en julianas, cebolla morada, tomate y aceitunas negras.',
    price: 29000,
    img: pizza5,
    tag: '100% Veggie',
    tagColor: 'teal-8',
    tagIcon: 'eco',
    isFavorite: false
  },
  {
    id: 4,
    name: 'Pizza Suprema Especial',
    category: 'carnes',
    subtitle: '8 Porciones • 35 cm',
    desc: 'Pepperoni americano, jamón prémium, champiñones, pimentón asado, queso mozzarella y orégano italiano.',
    price: 33000,
    img: pizza1,
    tag: 'Especial',
    tagColor: 'deep-orange-8',
    tagIcon: 'local_fire_department',
    isFavorite: false
  }
])

const filteredPizzas = computed(() => {
  if (selectedCategory.value === 'todas') return pizzas.value
  return pizzas.value.filter(p => p.category === selectedCategory.value)
})

function formatPrice(value) {
  return '$' + value.toLocaleString('es-CO')
}

function addToCart(item) {
  $q.notify({
    message: `¡${item.name} agregada al pedido!`,
    icon: 'shopping_bag',
    color: 'positive',
    position: 'bottom-right',
    timeout: 2200,
    actions: [{ label: 'Ver pedido', color: 'white' }]
  })
}

function toggleFavorite(item) {
  item.isFavorite = !item.isFavorite
  $q.notify({
    message: item.isFavorite ? `Guardada en favoritos` : `Eliminada de favoritos`,
    icon: item.isFavorite ? 'favorite' : 'favorite_border',
    color: 'dark',
    position: 'top-right',
    timeout: 1300
  })
}
</script>

<style scoped>
/* PÁGINA GENERAL CON 10% DE PADDING */
.pizzas-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  padding: 0 10% 48px 10%;
  box-sizing: border-box;
  width: 100%;
}

/* NAVBAR */
.nav-toolbar {
  padding: 0 10%;
  width: 100%;
  box-sizing: border-box;
}

.active-nav-btn {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  font-weight: 700;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.logo h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
}

/* BANNER HERO INSET CON BORDES REDONDEADOS */
.banner {
  position: relative;
  height: 320px;
  border-radius: 24px;
  margin-top: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(45%);
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.banner-text {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 40px;
  color: #ffffff;
}

.badge-banner {
  display: inline-flex;
  align-items: center;
  background: rgba(245, 124, 0, 0.9);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 4px 14px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.banner-title {
  letter-spacing: -1px;
  font-size: 2.75rem;
  line-height: 1.15;
}

.banner-subtitle {
  max-width: 600px;
  font-size: 1.15rem;
  color: #e2e8f0;
}

/* CONTENEDOR PRINCIPAL */
.content-container {
  width: 100%;
  padding: 36px 0 0 0;
  box-sizing: border-box;
}

/* TARJETA RECOMENDACIÓN DEL CHEF */
.chef-card {
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(245, 124, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.chef-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -10px rgba(245, 124, 0, 0.18) !important;
}

.chef-img-wrapper {
  position: relative;
  height: 280px;
  background: radial-gradient(circle at center, #ffffff 0%, #fff7ed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.chef-img {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.12));
  transition: transform 0.4s ease;
}

.chef-card:hover .chef-img {
  transform: scale(1.05);
}

.chef-float-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #c2410c;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
}

.chef-title {
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.chef-desc {
  line-height: 1.6;
  max-width: 620px;
}

.price-highlight {
  letter-spacing: -0.5px;
}

.chef-action-btn {
  padding: 10px 28px;
  border-radius: 50px;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.chef-action-btn:hover {
  transform: scale(1.03);
  filter: brightness(1.05);
}

/* FILTROS */
.filter-pill {
  padding: 6px 18px;
  font-size: 0.88rem;
  border-radius: 50px;
  transition: all 0.25s ease;
}

/* TARJETAS DE PRODUCTOS (GRID) */
.product-card {
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 35px -8px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(245, 124, 0, 0.12) !important;
  border-color: rgba(245, 124, 0, 0.35);
}

/* CONTENEDOR DE IMAGEN: 100% DEL ÁREA SIN ESPACIOS BLANCOS */
.card-media-wrapper {
  position: relative;
  height: 260px;
  overflow: hidden;
  border-bottom: 1px solid #f1f5f9;
}

/* IMAGEN: FIT COVER LLENA EL 100% SIN ESPACIOS BLANCOS */
.product-image {
  width: 100%;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.product-card:hover .product-image {
  transform: scale(1.07);
}

.card-badges {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
}

.product-chip {
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  padding: 4px 10px;
  border-radius: 50px;
}

.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.favorite-btn:hover {
  transform: scale(1.12);
  background: #ffffff;
}

/* CUERPO DE LA TARJETA */
.card-body {
  padding: 20px;
}

.product-category {
  letter-spacing: 0.5px;
}

.product-title {
  font-size: 1.22rem;
  letter-spacing: -0.3px;
  line-height: 1.25;
}

/* DESCRIPCIÓN CON COMPATIBILIDAD ESTÁNDAR LIMPIA SIN ALERTAS */
.product-desc {
  line-height: 1.55;
  min-height: 52px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* FOOTER DE LA TARJETA */
.card-footer {
  border-top: 1px dashed #e2e8f0;
}

.price-caption {
  font-size: 0.75rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.price-value {
  font-size: 1.35rem;
  letter-spacing: -0.5px;
  line-height: 1;
}

.add-cart-btn {
  padding: 8px 18px;
  font-size: 0.88rem;
  border-radius: 50px;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.add-cart-btn:hover {
  transform: scale(1.04);
  filter: brightness(1.05);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .pizzas-page {
    padding: 0 5% 32px 5%;
  }
  .nav-toolbar {
    padding: 0 5%;
  }
  .banner {
    height: 250px;
    margin-top: 16px;
    border-radius: 16px;
  }
  .banner-text {
    padding: 0 20px;
  }
  .banner-title {
    font-size: 2rem;
  }
  .card-media-wrapper {
    height: 220px;
  }
  .chef-img-wrapper {
    height: 230px;
  }
}
</style>
