//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.
var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
for (var planeId in myHangar) {
    if (myHangar.hasOwnProperty(planeId)) {
        var plane = myHangar[planeId];
        console.log("".concat(planeId, ":").concat(plane.model, "(").concat(plane.npassengers, ")"));
    }
}
