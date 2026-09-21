<template>
  <q-page class="bg-grey-1 bebidas-page">

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
        <q-btn flat no-caps label="Pizzas" to="/pizzas" />
        <q-btn flat no-caps label="Bebidas" to="/bebidas" class="active-nav-btn" />
        <q-btn flat no-caps label="Postres" to="/postres" />
        <q-btn flat no-caps label="Promociones" to="/" />
        <q-btn flat no-caps label="Nosotros" to="/nosotros" />
      </q-toolbar>
    </q-header>

    <!-- BANNER HERO (CON BORDES REDONDEADOS Y 10% PADDING INTEGRADO) -->
    <div class="banner">
      <img
        src="../img/bebidas/bebida5.png"
        alt="Bebidas Barrio Fast"
      >
      <div class="banner-overlay"></div>
      <div class="banner-text">
        <div class="badge-banner q-mb-sm">
          <q-icon name="local_bar" class="q-mr-xs" /> Menú de Bebidas
        </div>
        <h1 class="text-h2 text-weight-bolder q-ma-none banner-title">
          Bebidas Refrescantes
        </h1>
        <p class="text-subtitle1 banner-subtitle q-mt-sm">
          Acompaña tu comida con nuestras limonadas naturales, malteadas y bebidas frías.
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
                :src="imgLimCoco"
                alt="Limonada de Coco"
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
              Limonada de Coco Cremosita
            </div>

            <p class="chef-desc text-body1 text-grey-8">
              Preparada artesanalmente con extracto de limón natural, suave crema de coco dulce y hielo triturado al punto frappé. El equilibrio perfecto de frescura y sabor caribeño.
            </p>

            <div class="row items-center justify-between q-mt-lg">
              <div>
                <span class="text-caption text-grey-6 text-uppercase text-weight-medium">Precio especial</span>
                <div class="text-h4 text-weight-bolder text-orange-9 price-highlight">
                  $9.500
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
                @click="addToCart({ name: 'Limonada de Coco Cremosita', price: 9500 })"
              />
            </div>
          </div>

        </div>
      </q-card>

      <!-- SECCIÓN DEL CATÁLOGO -->
      <div class="section-header row items-center justify-between q-mb-lg">
        <div>
          <h2 class="text-h4 text-weight-bolder text-dark q-ma-none">
            Nuestras Bebidas
          </h2>
          <p class="text-grey-7 text-body2 q-mt-xs q-mb-none">
            Selecciona tu bebida favorita para acompañar tus platos
          </p>
        </div>

        <!-- FILTROS DE CATEGORÍA -->
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

      <!-- GRID DE TARJETAS REDISEÑADAS -->
      <div class="row q-col-gutter-xl">

        <div
          v-for="drink in filteredDrinks"
          :key="drink.id"
          class="col-12 col-md-6"
        >
          <q-card class="product-card shadow-2 column justify-between">

            <!-- CONTENEDOR DE IMAGEN (COMPLETA, SIN CORTAR, SIN DISTORSIÓN) -->
            <div class="card-media-wrapper">
              <q-img
                :src="drink.img"
                :alt="drink.name"
                fit="cover"
                class="product-image"
                loading="lazy"
              >
                <template #loading>
                  <q-spinner-dots color="orange" size="40px" />
                </template>
              </q-img>

              <!-- BADGE DE ESTADO / TIPO -->
              <div class="card-badges">
                <q-chip
                  :color="drink.tagColor"
                  text-color="white"
                  dense
                  class="product-chip shadow-1"
                  :icon="drink.tagIcon"
                >
                  {{ drink.tag }}
                </q-chip>
              </div>

              <!-- BOTÓN DE FAVORITOS -->
              <q-btn
                round
                flat
                dense
                size="md"
                :icon="drink.isFavorite ? 'favorite' : 'favorite_border'"
                :color="drink.isFavorite ? 'red' : 'grey-6'"
                class="favorite-btn"
                @click.stop="toggleFavorite(drink)"
              />
            </div>

            <!-- INFORMACIÓN DEL PRODUCTO -->
            <q-card-section class="card-body col column justify-between">
              <div>
                <div class="product-category text-caption text-grey-6 text-weight-bold text-uppercase q-mb-xs">
                  {{ drink.subtitle }}
                </div>

                <div class="product-title text-h6 text-weight-bold text-dark q-mb-xs">
                  {{ drink.name }}
                </div>

                <p class="product-desc text-body2 text-grey-7">
                  {{ drink.desc }}
                </p>
              </div>

              <!-- PRECIO Y BOTÓN AGREGAR -->
              <div class="card-footer row items-center justify-between q-pt-md">
                <div class="price-box">
                  <div class="price-caption text-caption text-grey-6">Precio</div>
                  <div class="price-value text-h6 text-weight-bolder text-orange-9">
                    {{ formatPrice(drink.price) }}
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
                  @click="addToCart(drink)"
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

import imgCocaCola from '../img/bebidas/coca-cola.png'
import imgLimonadaRosa from '../img/bebidas/bebida4.png'
import imgLimCoco from '../img/bebidas/lim-coco.png'
import imgMalteada from '../img/bebidas/malteada.png'
import imgFrutosRojos from '../img/bebidas/bebida2.png'
import imgSummerRedBull from '../img/bebidas/bebida3.png'

const $q = useQuasar()

const selectedCategory = ref('todas')

const categories = [
  { id: 'todas', label: 'Todas', icon: 'local_bar' },
  { id: 'limonadas', label: 'Limonadas & Jugos', icon: 'local_drink' },
  { id: 'gaseosas', label: 'Gaseosas', icon: 'sports_bar' },
  { id: 'especiales', label: 'Especiales', icon: 'icecream' }
]

const drinks = ref([
  {
    id: 1,
    name: 'Coca-Cola Original',
    category: 'gaseosas',
    subtitle: 'Bebida gaseosa • 400 ml',
    desc: 'Bebida gaseosa fría servida con hielo cristalino y el auténtico sabor que acompaña tus comidas.',
    price: 5000,
    img: imgCocaCola,
    tag: 'Clásica',
    tagColor: 'grey-9',
    tagIcon: 'ac_unit',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Limonada Tropical',
    category: 'limonadas',
    subtitle: '100% Natural • Vaso 16 oz',
    desc: 'Exclusiva limonada artesanal preparada con limón fresco seleccionado, hielo y toque frutal.',
    price: 7000,
    img: imgLimonadaRosa,
    tag: '100% Natural',
    tagColor: 'positive',
    tagIcon: 'eco',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Limonada de Coco',
    category: 'limonadas',
    subtitle: 'Receta Especial • Vaso 16 oz',
    desc: 'Exquisita limonada con leche de coco cremosa, endulzada suavemente y servida en textura frappé.',
    price: 9500,
    img: imgLimCoco,
    tag: 'Más pedida',
    tagColor: 'orange-9',
    tagIcon: 'star',
    isFavorite: true
  },
  {
    id: 4,
    name: 'Malteada Suprema',
    category: 'especiales',
    subtitle: 'Helado artesanal • Vaso 16 oz',
    desc: 'Deliciosa malteada de vainilla y chocolate espeso, coronada con crema chantilly y cereza.',
    price: 12000,
    img: imgMalteada,
    tag: 'Tentación',
    tagColor: 'purple-8',
    tagIcon: 'cake',
    isFavorite: false
  },
  {
    id: 5,
    name: 'Limonada Frutos Rojos',
    category: 'limonadas',
    subtitle: 'Artesanal • Frasco 16 oz',
    desc: 'Infusión refrescante de frutos del bosque, fresas, arándanos y limón con hojas de menta.',
    price: 8500,
    img: imgFrutosRojos,
    tag: 'Artesanal',
    tagColor: 'deep-orange-7',
    tagIcon: 'local_florist',
    isFavorite: false
  },
  {
    id: 6,
    name: 'Summer Drink Red Bull',
    category: 'especiales',
    subtitle: 'Edición Verano • Copa 20 oz',
    desc: 'Cóctel enérgico con Red Bull Summer Edition, hielo frappé y rodajas de fresas frescas.',
    price: 14000,
    img: imgSummerRedBull,
    tag: 'Especial',
    tagColor: 'blue-8',
    tagIcon: 'bolt',
    isFavorite: false
  }
])

const filteredDrinks = computed(() => {
  if (selectedCategory.value === 'todas') return drinks.value
  return drinks.value.filter(d => d.category === selectedCategory.value)
})

function formatPrice(value) {
  return '$' + value.toLocaleString('es-CO')
}

function addToCart(drink) {
  $q.notify({
    message: `¡${drink.name} agregada al pedido!`,
    icon: 'shopping_bag',
    color: 'positive',
    position: 'bottom-right',
    timeout: 2200,
    actions: [{ label: 'Ver pedido', color: 'white' }]
  })
}

function toggleFavorite(drink) {
  drink.isFavorite = !drink.isFavorite
  $q.notify({
    message: drink.isFavorite ? `Guardada en favoritos` : `Eliminada de favoritos`,
    icon: drink.isFavorite ? 'favorite' : 'favorite_border',
    color: 'dark',
    position: 'top-right',
    timeout: 1300
  })
}
</script>

<style scoped>
/* PÁGINA GENERAL CON 10% DE PADDING */
.bebidas-page {
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
  .bebidas-page {
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
