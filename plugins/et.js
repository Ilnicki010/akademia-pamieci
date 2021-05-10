export default (context, inject) => {
  //   const script = document.createElement("script");
  //   script.src = "https://scripts.embedtables.com/script.js";
  //   script.async = true;
  //   document.getElementsByTagName("head")[0].appendChild(script);
  //   console.log("init et plugin");
  const initEt = () => {
    var et_host = 'scripts.embedtables.com',
      et_bundle = document.createElement('SCRIPT')
    ;(et_bundle.src = '//' + et_host + '/script.js'),
      (et_bundle.async = true),
      (et_bundle.id = 'etScript')
    document.head.appendChild(et_bundle)
  }
  const deleteEt = () => {
    var script = document.getElementById('etScript')
    console.log(script)
    document.head.removeChild(script)
  }

  const isEt = () => {
    var script = document.getElementById('etScript')
    return script ? true : false
  }

  //   const delEt = () => {
  //     const e = document.body.getElementById("etScript");
  //     console.log(e);
  //   };

  inject('initEt', initEt)
  inject('deleteEt', deleteEt)
  inject('isEt', isEt)
  // For Nuxt <= 2.12, also add 👇
  context.$initEt = initEt
  context.$deleteEt = deleteEt
  context.$isEt = isEt
  //   inject("delEt", delEt);
  //   // For Nuxt <= 2.12, also add 👇
  //   context.$delEt = delEt;
}
