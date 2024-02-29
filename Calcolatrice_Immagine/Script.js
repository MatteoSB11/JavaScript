let tvAccesa = false;

function accendiTv() {
    const tv = document.getElementById('tv');
    const bottone = document.getElementById('bottone');
    if (tvAccesa){
    tv.src = "TvSpenta.jpg";
    bottone.textContent = 'Accendi tv';
    tvAccesa = false
    }
    else{
      tv.src = "TvAccesa.jpg"
      bottone.textContent = 'Spegni tv';
      tvAccesa = true;
    }
  }

  function sommaValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var somma = primo + secondo;
  
    document.getElementById('somma').value = somma;
  }

  function sottrazioneValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var sottrazione = primo - secondo;
  
    document.getElementById('sottrazione').value = sottrazione;
  }

  function moltiplicazioneValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var moltiplicazione = primo * secondo;
  
    document.getElementById('moltiplicazione').value = moltiplicazione;
  }

  function divisioneValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var divisione = primo / secondo;
  
    document.getElementById('divisione').value = divisione;
  }