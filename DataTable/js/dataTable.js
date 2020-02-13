//Métodos Públicos
function crearDataTable(configuracionUsuario) {
    var configuracion = {};

    if(typeof configuracionUsuario === 'object') {
        configuracionBasica(configuracion, configuracionUsuario);
        configuracionOrdenacion(configuracion, configuracionUsuario);
        configuracionPaginacion(configuracion, configuracionUsuario);
        configuracionScroll(configuracion, configuracionUsuario);
        configuracionLenguaje(configuracion, configuracionUsuario);
        construirTabla(configuracion, configuracionUsuario);
    }
}

//Métodos Privados
function configuracionBasica(configuracion, configuracionUsuario) {
    configuracion.info     = configuracionUsuario.informacion || false;
}

function configuracionOrdenacion(configuracion, configuracionUsuario) {
    configuracion.ordering = configuracionUsuario.ordenacion || false;

    if(typeof configuracionUsuario.ordenar === 'object') {
        configuracion.order = [];
        var list;
        for(var i=0; i<configuracionUsuario.ordenar.length; i++) {
            list = [];
            list.push(configuracionUsuario.ordenar[i].columna);
            list.push(configuracionUsuario.ordenar[i].ordenacion);
            configuracion.order.push(list);
        }
    }
}

function configuracionPaginacion(configuracion, configuracionUsuario) {
    if(configuracionUsuario.tipoPaginacion) {
        configuracion.pagingType = configuracionUsuario.tipoPaginacion;
    } else {
        configuracion.paging     = configuracionUsuario.paginacion || false;
    }
}

function configuracionScroll(configuracion, configuracionUsuario) {
    if(configuracionUsuario.scrollY) {
        configuracion.scrollY = configuracionUsuario.scrollY + 'vh';
    }
}

function configuracionLenguaje(configuracion, configuracionUsuario) {
    var lenguaje = {};

    lenguaje.decimal   = ',';
    lenguaje.thousands = '.';

    configuracion.language = lenguaje;
}

function construirTabla(configuracion, configuracionUsuario) {
    if(configuracionUsuario.id) {
        $('#' + configuracionUsuario.id).DataTable(configuracion);
    } else {
        $('.' + configuracionUsuario.clase).DataTable(configuracion);
    }
    
}