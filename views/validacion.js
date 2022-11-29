regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
regNombre = /^[a-zA-Z\s]{3,50}/
regFecha = /^\d{4}-\d{2}-\d{2}$/
regUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/
regNombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/
regPass = /^.{5,12}$/ 
regEtiqueta = /^[a-zA-ZÀ-ÿ\s]{1,50}$/
regCantidad = /\d/
regHora = /^\d{2}:\d{2}$/


form = document.getElementById('registro')
formulario = document.getElementById('objetivos')

var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑÁÉÍÓÚqwertyuiopasdfghjklñzxcvbnmáéíóú"
var metodo = "1234"

function validarRegistro(event)
{
    if(form.nombre.value.length < 3)
    {
        alert("Escriba por lo menos 3 Caracteres para el nombre "+ form.nombre.value.length)
        form.nombre.focus()
        event.preventDefault()
        return false
    }

    for(var i = 0; i < form.nombre.value.length; i++)
    {
        var ch = form.nombre.value.charAt(i)
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j) || ch == ' ')
            break
        }
        if(j == checkOK.length)
        {
            alert("Escriba unicamente letras en el campo de nombre")
            form.nombre.focus()
            event.preventDefault()
            return false
        }
    }
    
    if(form.apellido.value.length < 5)
    {
        alert("Escriba por lo menos 5 Caracteres para el apellido "+ form.apellido.value.length);
        form.apellido.focus();
        event.preventDefault()
        return false
    }

    for(var i = 0; i < form.apellido.value.length; i++)
    {
        var ch = form.apellido.value.charAt(i)
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            {
                break
            }
        }
        if(j == checkOK.length){
            alert("Escriba unicamente letras en el campo de appellido")
            form.apellido.focus()
            event.preventDefault()
            return false
        }
    }
    
    if(form.pass.value.length < 5)
    {
        alert("La contraseña debe tener lo menos 5 caracteres")
        form.pass.focus()
        event.preventDefault()
        return false
    }

    for(var i = 0; i < form.pass.value.length; i++)
    {
        var ch = form.pass.value.charAt(i)
        if(ch == '\'')
        {
            alert("La contraseña no puede contener el caracter: '")
            form.pass.focus()
            event.preventDefault()
            return false
        }
    }

    if(!regFecha.test(form.nacimiento.value))
    {
        alert("La fecha no es válida")
        form.nacimiento.focus()
        event.preventDefault()
        return false
    }

    if(!regPass.test(form.pass.value))
    {
        alert("La contraseña no es valida")
        form.pass.focus()
        event.preventDefault()
        return false
    }

    if(!regUsuario.test(form.usuario.value))
    {
        alert("El usuario no es válido")
        form.usuario.focus()
        event.preventDefault()
        return false
    }

    try
    {
        if(!regFecha.test(form.nacimiento.value)
            || Date.parse(form.nacimiento.value) > Date.parse('2011-01-01')
            || Date.parse(form.nacimiento.value) < Date.parse('1920-01-01'))
        {
            alert("La fecha no es válida")
            form.nacimiento.focus()
            event.preventDefault()
            return false
        }
    }catch(e)
    {
        alert("La fecha no es válida")
        form.nacimiento.focus()
        event.preventDefault()
        return false
    }
    
    if(!regHora.test(form.horaCig.value))
    {
        alert("La fecha no es válida")
        form.horaCig.focus()
        event.preventDefault()
        return false
    }
    try
    {
        let arr = form.horaCig.value.split(':')
        if(arr.length != 2)
        {
            alert("La hora no es válida")
            form.horaCig.focus()
            event.preventDefault()
            return false
        }
        if(parseInt(arr[0]) < 0 || parseInt(arr[0]) > 23
            || parseInt(arr[0]) < 0 || parseInt(arr[0]) > 60)
        {
            alert("La hora no es válida")
            form.horaCig.focus()
            event.preventDefault()
            return false
        }

    }catch(e)
    {
        alert("La hora no es válida")
        form.horaCig.focus()
        event.preventDefault()
        return false
    }

    if(form.sexo.value != 0 && form.sexo.value != 1)
    {
        alert("El sexo no es válido")
        form.sexo.focus()
        event.preventDefault()
        return false
    }
}












function  validarObjetivos(event){

    if(!regEtiqueta.test(formulario.etiquetaob.value))
    {
        alert("La Etiqueta no es válida")
        formulario.etiquetaob.focus()
        event.preventDefault()
        return false
    }
    
    if(formulario.cpropuestos.value <= 0)
    {
        alert("La cantidad no es válida "+ formulario.cpropuestos.value)
        formulario.cpropuestos.focus()
        event.preventDefault()
        return false
    }

    if(!regCantidad.test(formulario.cpropuestos.value))
    {
        alert("La cantidad debe ser un dato numérico")
        formulario.cpropuestos.focus()
        event.preventDefault()
        return false
    }

    let valido = false
    for(var i = 0; i < 4; i++)
    {
        var ch = formulario.metodosp.value
        
        if(ch == metodo.charAt(i))
        {
            valido = true
            break
        }
    }

    if(!valido)
    {
        alert("Método inválido")
        formulario.metodosp.focus()
        event.preventDefault()
        return false
    }

    if(!regCantidad.test(formulario.metodosp.value))
    {
        alert("Método Invalido")
        formulario.metodosp.focus()
        event.preventDefault()
        return false
    }
}