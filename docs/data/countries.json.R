library("sf")
library(geojsonsf)
world <- st_read("docs/data/countries.gpkg", quiet = TRUE)
sf_geojson(world)
