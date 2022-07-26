const a  = "Prueba";

function global(){
    const b = " de ";

    function local(){
        const c = "clausulas";
        return a + b + c;
    }
    return local;
}

const clausula1 = global();
clausula1();

const nom1  = "Jorge";

function global2(){
    const nom2 = " Steven ";

    function local2(){
        const nom3 = "Moreno";
        return nom1 + nom2 + nom3;
    }
    return local2;
}

const clausula2 = global2();
clausula2();