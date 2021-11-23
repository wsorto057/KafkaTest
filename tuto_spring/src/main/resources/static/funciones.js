function eliminar(id){
	
		
		
		Swal
    .fire({
        title: "Seguro de Eliminasr el Registro",
        text: "¿Eliminar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            console.log("*se elimina la venta*");
            $.ajax({url: "/delete/"+id, 
			success: function(res){console.log(res)}
			}).then(() =>{location.href="/listar"})
			
        } else {
            // Dijeron que no
            console.log("*NO se elimina la venta*");
        }
    });

}