const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log(e)
  const res = await fetch("http://localhost:8080/producto/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: e.target.children.nombre.value,
      apellido: e.target.children.apellido.value,
      edad: e.target.children.edad.value,
      fechaNacimiento: e.target.children.apellido.value
    })
    //  body: JSON.stringify({
    //   nombre: 'e.target.children.nombre',
    //   apellido: 'e.target.children.apellido',
    //   edad: 'e.target.children.edad',
    //   fechaNacimiento: 'e.target.children.apellido'
    // })
  });
  
  console.log(res)
  if (!res.ok) return mensajeError.classList.toggle("escondido", false);
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
});
