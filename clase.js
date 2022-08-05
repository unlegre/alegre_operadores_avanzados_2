//trae por Id un solo elemmento
let titulo =document.getElementById("titulo");
console.log(titulo);

//innerText
titulo.innerText ="bienvenidos a Efectivo ya !!!"
console.log("muestro lo q tiene innerText",titulo.innerText);

Swal.fire({
  text:" bienvenidos a Efectivo ya",
})

let lista_usuario =[];

function calcular_prestamo (monto_1,cuotas_1){
  if( cuotas_1 == 3){
    return monto_1 * 1.25
  }
  else if(cuotas_1 == 6){
    return monto_1 * 1.40 
  }
  else if(cuotas_1 == 12){
    return monto_1 * 1.60
  }
  else if(cuotas_1 == 18){
    return monto_1 * 1.90
  }
  else{
    console.log("ingrese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

class Prestamo{
  constructor(monto_1,cuotas_1){
    this.monto_1 = monto_1;
    this.cuotas_1 = cuotas_1;
  }
} 

let lista_prestamo =[];

// OPERADOR TERNARIO con Jquery

//let boton_edad= document.getElementById("boton_edad");
//boton_edad.addEventListener("click",function(){

  $("#boton_edad").click(function(){
  let edad = parseInt(prompt("ingrese edad por favor"));

  edad >= 18 ? aprueba_prestamo(): no_aprueba_prestamo();
});



function aprueba_prestamo (){
  Swal.fire({
    text:"Comience con la Solicitud",
  
  })
};

function no_aprueba_prestamo (){
  Swal.fire({
    icon:"error",
    text:"No tiene edad suficinete para solicitar prestamo",
  
  })
};


//boton simulador con funcion
let boton_simulador= document.getElementById("boton_simulador");

boton_simulador.addEventListener("click",function(){
  Swal.fire({
    text:"Siga los pasos para su prerstamos",
  
  })

 for  ( let i= 0; i < 1 ; i++){

    let monto_1 = parseInt(prompt(" Monto a Solicitar"))
    let cuotas_1 = parseInt(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));
    
    calcular_prestamo (monto_1,cuotas_1)
    
    let total_prestamo = calcular_prestamo (monto_1,cuotas_1)/cuotas_1;
    Swal.fire({
      text:"usted va a pagar :"+" "+cuotas_1+" "+"cuotas de :"+total_prestamo,
    
    })
  
    let nuevo_prestamo = new Prestamo(monto_1,cuotas_1);// creo nuevo_prestamo  para capturar los datos de la class :Prestamo
    lista_prestamo.push(nuevo_prestamo); // ahora envio con un push los datos al arreglo Lista_prestamo []; que se cargo en ;nuevo_prestamo
  
} 
  console.log(lista_prestamo); // y muestro por consola el arreglo:  Lista_prestamo [];

}
);
// monto y cuotas
  // capturo los botones de los importes con JQUERY
  $("#5_mil").click(function(){  
    Toastify({
      text: "5 mil pesos ",
      duration: 3000
      }).showToast();
      }
      )
    
  $("#10_mil").click(function(){  
      Toastify({
       text: "10 mil pesos ",
       duration: 3000
      }).showToast();
      }
      )      
   $("#50_mil").click(function(){  
      Toastify({
       text: "50 mil pesos ",
       duration: 3000
        }).showToast();
        }
        )

    $("#100_mil").click(function(){  
      Toastify({
         text: "100 mil pesos ",
         duration: 3000
         }).showToast();
         }
         )     
            
    $("#200_mil").click(function(){  
        Toastify({
          text: "200 mil pesos ",
          duration: 3000
          }).showToast();
           }
           )           

  // capturo los botones de las cuotas con JQUERY
  $("#cuotas_3").click(function(){  
  Toastify({
    text: "3 cuotas ",
    duration: 3000
    }).showToast();
    }
    ) 
  
  $("#cuotas_6").click(function(){    
  Toastify({
    text: "6 cuotas ",
    duration: 3000
    }).showToast();
    }
    )


  $("#cuotas_12").click(function(){ 
  Toastify({
    text: "12 cuotas ",
    duration: 3000
    }).showToast();
    }
    ) 

    $("#cuotas_18").click(function(){ 
    Toastify({
      text: "18 cuotas ",
      duration: 3000
      }).showToast();
    }
    ) 



//even listener  puedo ejecutar varias funciones
let Bajo_dependencia = document.getElementById("Bajo_dependencia");

Bajo_dependencia.addEventListener("click",()=>{ // funcion flecha con Toastify
  Toastify({
    text: "selecciono : Bajo dependencia",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }

  }).showToast();
    }
    ); 

    let Monotributista = document.getElementById("Monotributista");

Monotributista.addEventListener("click",()=>{ // funcion flecha con Toastify
  Toastify({
    text: "selecciono : Monotributista",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
    }
    );

    let Jubilado = document.getElementById("Jubilado");
    
    Jubilado.addEventListener("click",()=>{ // funcion flecha con Toastify
      Toastify({
        text: "selecciono : Jubilado",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
        }
        ); 
    
    let dni = document.getElementById("dni");

    dni.addEventListener("click",()=>{ // funcion flecha con Toastify
      Toastify({
        text: "selecciono : Credito con DNI",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
        }
        ); 
    
        let arreglo_prestamo =[]
          
        function dar_prestamo(){
            // capturo el input y me tarigo el nodo con id "nombre" y "apellido"
            let importe_cuotas =document.getElementById("importe_cuotas");
            let Cantidad_cuotas =document.getElementById("Cantidad_cuotas");
        
            //creamos un objeto literal y con value solo traemos el valor osea el nombre , no todo el nodo 
            let data_prestamo = {"importe_cuotas":importe_cuotas.value ,"Cantidad_cuotas":Cantidad_cuotas.value}
            // 
            
            arreglo_prestamo.push(data_prestamo)// pusheo todod el arrglo q esta en la variable "usuario"
          
            let prestamo_jSON= JSON.stringify(arreglo_prestamo); // convierto todo el arreglo a texto plano
            localStorage.setItem("data_prestamo",prestamo_jSON);
            // traigo el primer elemento del local storage
            let recuperando_data_json = localStorage.getItem("data_prestamo");
            console.log(JSON.parse(recuperando_data_json));
        
        }
              // MAURICIO !!!!
               // NO ME SALIO CALCULAR EL MONTO A PAGAR EN LA FUNCION DE ABAJO sim me podes dar una mano genial
        /*
         $("#btn_calculo_total").click(function(){
          let total_a_pagar = importe_cuotas / Cantidad_cuotas;
          alert(total_a_pagar);
         }
         */

        

        let btn_solicitar = document.getElementById("btn_solicitar");
        // capturo los datos con clik . en el evento de tocar el btn registar
        btn_solicitar.addEventListener("click",dar_prestamo); 
             

// creo para registar con un arreglo de objetos usuarios 

// JSON =notacion de objeto de JS, Formato basado en texto plano

let arreglo_usuarios =[]

console.log("SPREAD de Arreglo Usuarios",...arreglo_usuarios);

function set_data(){
    // capturo el input y me tarigo el nodo con id "nombre" y "apellido"
    let nombre_usuario =document.getElementById("nombre");
    let apellido_usuario =document.getElementById("apellido");
    let telefono_usuario =document.getElementById("telefono");
    let email_usuario =document.getElementById("email");
    //creamos un objeto literal y con value solo traemos el valor osea el nombre , no todo el nodo 
    let usuario = {"nombre":nombre_usuario.value ,"apellido":apellido_usuario.value,"telefono":telefono_usuario.value,"email":email_usuario.value }
    // 
    
    arreglo_usuarios.push(usuario)// pusheo todod el arrglo q esta en la variable "usuario"
  
    let arreglo_jSON= JSON.stringify(arreglo_usuarios); // convierto todo el arreglo a texto plano
    localStorage.setItem("usuarios",arreglo_jSON);
    // traigo el primer elemento del local storage
    let recuperando_json = localStorage.getItem("usuarios");
    console.log(JSON.parse(recuperando_json));


}

let boton  = document.getElementById("boton");
// capturo los datos con clik . en el evento de tocar el btn registar
boton.addEventListener("click",set_data);
        







