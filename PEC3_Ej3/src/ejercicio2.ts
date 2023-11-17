//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.

interface Plane{
    model:string,
    npassengers:number
}

interface HangarHash {
    [planeId: string]: Plane;
}

let myHangar: HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}

myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

for (const planeId in myHangar) {    
    if (myHangar.hasOwnProperty(planeId)) {
        const plane = myHangar[planeId];
        console.log(`${planeId}:${plane.model}(${plane.npassengers})`);
    }
}

