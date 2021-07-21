library(magick)

size = 224


files <- list.files("img/gallery/raw")

nb <- length(files)

for (i in 1:nb){

files[i]
x <- strsplit(files[i], ".", fixed = TRUE)[[1]][1]
x <- strsplit(x, "_", fixed = TRUE)[[1]]
year <- x[1]
label <- x[2]

img <- image_read(paste0("img/gallery/raw/",files[i]))

m <- data.frame(image_info(img))
w <- m$width
h <- m$height
min <- min(m$width, m$height)

if (h == min){
  img <- image_crop(img, paste0(min,"x",min,"+",(w-h)/2,"+0"))
}
if (w == min){
  img <- image_crop(img, paste0(min,"x",min,"+","0+",(h-w)/2))
}

class(img)

img <- image_resize(img, geometry_size_pixels(size))
img <- image_annotate(img, label, size = 22, gravity = "northwest", color = "white", boxcolor = "#0077B8")
img <- image_annotate(img, year, size = 15, gravity = "southeast", color = "white", boxcolor = "#0077B8")

image_write(img, path = paste0("img/gallery/",files[i]), format = "png")

}



