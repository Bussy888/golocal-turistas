import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PublicIcon from "@mui/icons-material/Public";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { track } from "@vercel/analytics";

// Colores
const terracota = "#d35400";
const terracotaOscuro = "#a04000";

function App() {
  const testimonials = [
    {
      name: "Laura Martínez",
      text: "Encontré un tour al Salar de Uyuni más barato y auténtico que en una agencia. Increíble experiencia.",
      rating: 5,
    },
    {
      name: "David Torres",
      text: "Me recomendaron un hospedaje en Sucre perfecto para mi presupuesto. ¡Como estar en familia!",
      rating: 5,
    },
    {
      name: "Andrea Silva",
      text: "La app me ayudó a descubrir un festival cultural que no conocía. Fue lo mejor del viaje.",
      rating: 4,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleClick = () => {
    track("registro_turista_click"); // evento para analíticas
  };

  return (
    <Box
      sx={{
        bgcolor: "#fdfaf6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
{/* Navbar */}
<AppBar position="static" sx={{ bgcolor: terracota }}>
  <Toolbar sx={{ justifyContent: "space-between" }}>
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
      <Box
        component="img"
        src="/golocal-logo2.png"
        alt="GoLocal"
        sx={{ height: 50, marginTop: 1 }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          marginTop: 4, // 👈 desplaza el texto un poco hacia abajo
        }}
      >
        Turistas
      </Typography>
    </Box>

    <Button
      href="https://docs.google.com/forms/d/e/1FAIpQLSeXAMPLE/viewform"
      target="_blank"
      onClick={handleClick}
      variant="contained"
      sx={{
        bgcolor: "#fff",
        color: terracota,
        fontWeight: "bold",
        borderRadius: 2,
        "&:hover": { bgcolor: "#fbe9e7" },
      }}
    >
      Empieza a explorar
    </Button>
  </Toolbar>
</AppBar>


      {/* Hero */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('https://unifranz.edu.bo/wp-content/uploads/2024/01/IMG_1448-1024x683.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          py: 18,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Vive Bolivia como un local
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Descubre experiencias auténticas, ajustadas a tus intereses y presupuesto.
            </Typography>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXAMPLE/viewform"
              target="_blank"
              onClick={handleClick}
              size="large"
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                bgcolor: terracota,
                borderRadius: 3,
                fontWeight: "bold",
                "&:hover": { bgcolor: terracotaOscuro },
              }}
            >
              Empieza tu viaje
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Beneficios */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: terracotaOscuro }}
        >
          ¿Por qué usar GoLocal?
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
  {[
    {
      icon: <ExploreIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Recomendaciones personalizadas",
      text: "Recibe sugerencias de tours, hospedajes y actividades que encajan contigo.",
      image: "https://revistaemporioempresarial.com/wp-content/uploads/2023/12/foti2.jpeg", // 🔗 URL ejemplo
    },
    {
      icon: <FavoriteIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Experiencias auténticas",
      text: "Conecta con guías y emprendedores locales que te mostrarán lo real.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9Mym3uGMQeN3FPvRqkfqlto-qZgmZcUp-w&s",
    },
    {
      icon: <PublicIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Precios justos",
      text: "Reserva sin intermediarios ni comisiones ocultas.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/258167505.jpg?k=9ced2340fff52e35d65d99b83d1f931277da797e8d9f5ed6fdab1c2cb70fdb03&o=&hp=1",
    },
    {
      icon: <StarIcon sx={{ color: terracota, fontSize: 40 }} />,
      title: "Confianza",
      text: "Lee reseñas reales de otros viajeros antes de reservar.",
      image: "https://cdn.prod.website-files.com/60b550ccbb1a59f65dc28805/661e9559616f428a7fcab3af_como_eliminar_r4ese%C3%B1a_negativa.jpg",
    },
  ].map((benefit, i) => (
  <Grid size={{ xs: 12, md: 6 }} key={i}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <Paper elevation={4} sx={{ p: 2, borderRadius: 3, textAlign: "center" }}>
          {/* Imagen arriba */}
          <Box
            component="img"
            src={benefit.image}
            alt={benefit.title}
            sx={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 2,
              mb: 2,
            }}
          />
          {/* Ícono */}
          {benefit.icon}
          {/* Título */}
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
            {benefit.title}
          </Typography>
          {/* Texto */}
          <Typography variant="body2" color="text.secondary">
            {benefit.text}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  ))}
</Grid>

      </Container>

      {/* Experiencias destacadas */}
      <Box sx={{ py: 12, bgcolor: "#fff3e0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: terracotaOscuro }}
          >
            Experiencias destacadas
          </Typography>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {[
              {
                name: "Tour Salar de Uyuni",
                image:
                  "https://blackpepper.travel/cache/2023-12/viajes-bolivia-blackpepper-0031-galeria-2x-1008x671.jpg",
                rating: 5,
                price: "Explora el desierto de sal más grande del mundo y vive paisajes únicos como un espejo infinito.",
              },
              {
                name: "Hospedaje Lago Titicaca",
                image:
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221764795.jpg?k=37d0b657f95621a634b258af065071f8712ce9e4d3086bfd74f3f377b4ce5b31&o=&hp=1",
                rating: 4,
                price: "Descansa frente al lago navegable más alto del planeta con vistas mágicas y cultura viva.",
              },
              {
                name: "Festival Cultural en La Paz",
                image:
                  "https://mercociudades.org/wp-content/uploads/2018/02/nodo6683.jpg",
                rating: 5,
                price: "Sumérgete en la energía andina con música, danzas y tradiciones llenas de color.",
              },
            ].map((exp, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i} >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Card sx={{ borderRadius: 3 }}>
                    <img
                      src={exp.image}
                      alt={exp.name}
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {exp.name}
                      </Typography>
                      <Rating value={exp.rating} readOnly size="small" />
                      <Typography color="text.secondary">{exp.price}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonios */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: terracotaOscuro }}
        >
          Lo que dicen los viajeros
        </Typography>
        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <Box key={i} sx={{ width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3, m: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: terracota, mr: 2 }}>
                      {t.name[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">{t.name}</Typography>
                      <Rating value={t.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    "{t.text}"
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: terracota,
          color: "#fff",
          py: 3,
          textAlign: "center",
          mt: "auto",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} GoLocal. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
