function isLandscape(width, height){
    return (width > height);
}
let measure = isLandscape(13, 3)
console.log(measure);