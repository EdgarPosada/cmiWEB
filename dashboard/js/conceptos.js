var num = 0;

	function crear(){

		num ++;

		//se crea el fieldset para una nueva descripcion
		contenedor = document.getElementById("conceptos");
		concepto = document.createElement("fieldset");
		concepto.id = "fiel"+num;
		concepto.name = "fiel";
		legen = document.createElement("legend");
		legen.appendChild(document.createTextNode("Concepto"));
		concepto.appendChild(legen);
		contenedor.appendChild(concepto);

		//se agrega el ul al fieldset
		ul = document.createElement("ul");
		concepto.appendChild(ul);

		//se creal los labels e inputs dentro del ul
		lblCant = document.createElement("label");
		lblCant.id = "lblCant";
		lblCant.appendChild(document.createTextNode("Cantidad"));
		ul.appendChild(lblCant);

		//se crea el input para la cantidad
		txtCant = document.createElement("input");
		txtCant.id = "cantidad"+num;
		txtCant.type = "number";
		txtCant.placeholder = "Cantidad";
		txtCant.required = "required";
		ul.appendChild(txtCant);

		//se crea el label para el precio unitario
		lblUnit = document.createElement("label");
		lblUnit.id = "lblUnit";
		lblUnit.appendChild(document.createTextNode("Precio Unitario"));
		ul.appendChild(lblUnit);

		//se crea el input para el precio unitario
		txtUnit = document.createElement("input");
		txtUnit.id = "unitario"+num;
		txtUnit.type = "text";
		txtUnit.placeholder = "Precio Unitario";
		txtUnit.required = "required";
                
		ul.appendChild(txtUnit);

		//Se crea un salto de linea
		espacio = document.createElement("br");
		txtUnit.parentNode.insertBefore(espacio);

		//se crea el label para el concepto
		lblCon = document.createElement("label");
		lblCon.id = "lblCon";
		lblCon.appendChild(document.createTextNode("Concepto"));
		ul.appendChild(lblCon);

		//se crea el textArea para el concepto
		txtAcon = document.createElement("textArea");
		txtAcon.id = "txtAcon";
		txtAcon.cols = "100";
		txtAcon.rows = "3";
		txtAcon.placeholder = "Concepto";
		txtAcon.required = "required";
		ul.appendChild(txtAcon);

		//se crea el label para el importe
		lblImp = document.createElement("label");
		lblImp.id = "lblImp";
		lblImp.appendChild(document.createTextNode("Importe"));
		ul.appendChild(lblImp);

		//se crea el input para el importe
		txtImp = document.createElement("input");
		txtImp.id = "txtImp"+num;
		txtImp.type = "text";
		txtImp.placeholder = "Importe";
		ul.appendChild(txtImp);
                
                

		ele = document.createElement('input'); // 5
  		ele.type = 'button'; // 6
  		ele.value = 'Eliminar Concepto'; // 8
  		ele.name = 'fiel'+num; // 8
  		ele.onclick = function () {borrar(this.name)} // 9
  		ul.appendChild(ele); // 7
                
               // txtUnit.onkeyup = function () {importe(document.getElementById("cantidad"+num).value, document.getElementById("unitario"+num).value, document.getElementById("txtImp"+num).id)}
                
                
		
        }

	function borrar(obj) {
	    fi = document.getElementById("conceptos"); // 1 
  	    fi.removeChild(document.getElementById(obj)); // 10
  	}
		

	function muestraId(id)
	{
		var id = id;
		alert(id);
	}
        
        //funcion para generar el importe de cada concepto
        function importe2()
        {
            var cant = document.getElementById('cantidad').value;
            var pUnitario = document.getElementById('pUnitario').value;
            document.getElementById('importe').value = cant * pUnitario;
        }