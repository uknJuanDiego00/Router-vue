<template>
  <q-page class="bg-grey-1 nosotros-page">

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
        <q-btn flat no-caps label="Bebidas" to="/bebidas" />
        <q-btn flat no-caps label="Postres" to="/postres" />
        <q-btn flat no-caps label="Promociones" to="/" />
        <q-btn flat no-caps label="Nosotros" to="/nosotros" class="active-nav-btn" />
      </q-toolbar>
    </q-header>

    <!-- BANNER HERO INSET -->
    <div class="banner">
      <img
        src="../img/nosotros/banner.png"
        alt="Restaurante Barrio Fast"
      >
      <div class="banner-overlay"></div>
      <div class="banner-text">
        <div class="badge-banner q-mb-sm">
          <q-icon name="info" class="q-mr-xs" /> Nuestra Esencia
        </div>
        <h1 class="text-h2 text-weight-bolder q-ma-none banner-title">
          Sobre Nosotros
        </h1>
        <p class="text-subtitle1 banner-subtitle q-mt-sm">
          Conoce la pasión, el sabor y el equipo que hace posible Barrio Fast día a día.
        </p>
      </div>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <div class="content-container">

      <!-- TARJETA DE HISTORIA -->
      <q-card class="story-card q-mb-xl shadow-3">
        <q-card-section class="q-pa-lg q-pa-md-xl">
          <div class="row items-center q-gutter-x-sm text-orange-9 text-weight-bold text-uppercase q-mb-xs">
            <q-icon name="history_edu" size="20px" />
            <span>Nuestra Trayectoria</span>
          </div>

          <h2 class="text-h4 text-weight-bolder text-dark q-mb-md">
            Pasión por la buena comida rápida
          </h2>

          <p class="text-body1 text-grey-8 line-relaxed">
            Barrio Fast nació con el sueño de transformar la comida rápida tradicional en una experiencia gastronómica llena de sabor, utilizando carnes seleccionadas, panadería artesanal e ingredientes frescos traídos cada mañana del campo.
          </p>

          <p class="text-body1 text-grey-8 line-relaxed q-mt-sm">
            Desde el primer día, nuestra misión ha sido ofrecer a nuestros comensales hamburguesas prémium, hot dogs especiales, pizzas recién horneadas, bebidas refrescantes y postres irresistibles con un servicio cálido y cercano.
          </p>
        </q-card-section>
      </q-card>

      <!-- TARJETAS DE INFORMACIÓN -->
      <div class="row q-col-gutter-lg q-mb-xl">

        <div class="col-12 col-md-4">
          <q-card class="info-card shadow-2">
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-orange-1 text-orange-9 q-mb-md">
                <q-icon name="place" size="28px" />
              </div>
              <div class="text-h6 text-weight-bold text-dark q-mb-xs">
                Ubicación
              </div>
              <p class="text-grey-7 text-body2">
                Carrera 10 # 12-35<br>
                San Gil, Santander - Colombia
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="info-card shadow-2">
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-green-1 text-green-9 q-mb-md">
                <q-icon name="schedule" size="28px" />
              </div>
              <div class="text-h6 text-weight-bold text-dark q-mb-xs">
                Horarios de Atención
              </div>
              <p class="text-grey-7 text-body2">
                Lunes a Sábado: 11:00 AM - 10:00 PM<br>
                Domingos: 12:00 PM - 8:00 PM
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="info-card shadow-2">
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-blue-1 text-blue-9 q-mb-md">
                <q-icon name="support_agent" size="28px" />
              </div>
              <div class="text-h6 text-weight-bold text-dark q-mb-xs">
                Línea de Domicilios
              </div>
              <p class="text-grey-7 text-body2">
                Teléfono: (607) 724 5500<br>
                WhatsApp: +57 300 123 4567
              </p>
            </q-card-section>
          </q-card>
        </div>

      </div>

      <!-- NUESTRO EQUIPO -->
      <div class="section-header q-mb-lg">
        <h2 class="text-h4 text-weight-bolder text-dark q-ma-none">
          Conoce a Nuestro Equipo
        </h2>
        <p class="text-grey-7 text-body2 q-mt-xs q-mb-none">
          Las personas dedicadas que hacen que cada visita sea especial
        </p>
      </div>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-6">
          <q-card class="team-card shadow-2">
            <div class="team-img-wrapper">
              <q-img
                src="../img/nosotros/chef.png"
                alt="Mauricio Velásquez - Chef Principal"
                fit="cover"
                position="top"
                class="team-img"
              />
            </div>
            <q-card-section class="text-center q-pa-lg">
              <div class="text-h6 text-weight-bold text-dark">
                Mauricio Velásquez
              </div>
              <div class="text-orange-9 text-subtitle2 text-weight-bold q-mb-sm">
                Chef Ejecutivo
              </div>
              <p class="text-grey-7 text-body2">
                Creativo detrás de nuestras recetas insignia y garante de la frescura en cada ingrediente.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="team-card shadow-2">
            <div class="team-img-wrapper">
              <q-img
                src="../img/nosotros/Cajera.png"
                alt="Laura Figueroa - Atención al Cliente"
                fit="cover"
                position="top"
                class="team-img"
              />
            </div>
            <q-card-section class="text-center q-pa-lg">
              <div class="text-h6 text-weight-bold text-dark">
                Laura Figueroa
              </div>
              <div class="text-orange-9 text-subtitle2 text-weight-bold q-mb-sm">
                Atención & Caja
              </div>
              <p class="text-grey-7 text-body2">
                Encargada de brindar una bienvenida cálida y gestionar tus pedidos con máxima agilidad.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="team-card shadow-2">
            <div class="team-img-wrapper">
              <q-img
                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800&q=80"
                alt="Santiago Romero - Domicilios"
                fit="cover"
                position="top"
                class="team-img"
              />
            </div>
            <q-card-section class="text-center q-pa-lg">
              <div class="text-h6 text-weight-bold text-dark">
                Santiago Romero
              </div>
              <div class="text-orange-9 text-subtitle2 text-weight-bold q-mb-sm">
                Líder de Domicilios
              </div>
              <p class="text-grey-7 text-body2">
                Asegura que tu comida llegue caliente, en perfecto estado y en el menor tiempo posible.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="team-card shadow-2">
            <div class="team-img-wrapper">
              <q-img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Andrea Suárez - Administración"
                fit="cover"
                position="top"
                class="team-img"
              />
            </div>
            <q-card-section class="text-center q-pa-lg">
              <div class="text-h6 text-weight-bold text-dark">
                Andrea Suárez
              </div>
              <div class="text-orange-9 text-subtitle2 text-weight-bold q-mb-sm">
                Gerente Administrativa
              </div>
              <p class="text-grey-7 text-body2">
                Coordina el equipo, gestiona proveedores y garantiza que cada detalle operativo funcione a la perfección.
              </p>
            </q-card-section>
          </q-card>
        </div>

      </div>

    </div>

  </q-page>
</template>

<style scoped>
/* PÁGINA GENERAL CON 10% DE PADDING */
.nosotros-page {
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
  .nosotros-page {
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

/* TARJETA DE HISTORIA */
.story-card { border-radius: 24px; background: #ffffff; border: 1px solid #e2e8f0; }
.line-relaxed { line-height: 1.7; }
/* TARJETAS DE INFORMACI�N */
.info-card { border-radius: 20px; background: #ffffff; border: 1px solid #e2e8f0; height: 100%; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.info-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important; }
.icon-circle { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
/* TARJETAS DE EQUIPO */
.team-card { border-radius: 20px; background: #ffffff; border: 1px solid #e2e8f0; overflow: hidden; height: 100%; max-width: 420px; margin: 0 auto; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.team-card:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0, 0, 0, 0.1) !important; }
.team-img-wrapper { position: relative; height: 460px; overflow: hidden; border-bottom: 1px solid #f1f5f9; background-color: #f8fafc; }
.team-img { width: 100%; height: 100%; transition: transform 0.4s ease; }
.team-img :deep(img) { object-fit: cover !important; object-position: top center !important; }
.team-card:hover .team-img { transform: scale(1.05); }
@media (max-width: 768px) { .team-img-wrapper { height: 290px; } }
</style>
