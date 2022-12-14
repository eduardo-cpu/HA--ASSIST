const btnInic = document.querySelector('#btn-nivel-user-inic');
const btnExper = document.querySelector('#btn-nivel-user-exper');
const btnLeft = document.querySelector('.disable-btn-left');

const footer = document.querySelector('.disable-footer');
const btnBusca = document.querySelector('.disable-btn-busca');
const btnConsulta = document.querySelector('.disable-btn-consulta');
const btnProtocol = document.querySelector('.disable-btn-protocol');
const nivelUserIni = document.querySelector('.nivel-user-ini');
const nivelUserExper = document.querySelector('.nivel-user-exper');
const btnRelatorio = document.querySelector('.disable-btn-relatorio');

function iniciante(){
    const el = document.querySelector('#retorno-config-nivel-user');
    el.innerHTML = 'Configuração salva, Aguarde!!';
    el.style.fontSize = '1rem';
    el.style.color = 'black';
    el.style.fontWeight = '500';
    setTimeout(function(){
        el.innerHTML = '';
        btnBusca.style.display = 'block';
        btnConsulta.style.display = 'block';
        btnRelatorio.style.display = 'block';
        nivelUserIni.style.display = 'none';
        nivelUserExper.style.display = 'none';
        btnLeft.style.cssText = 'display: none !important';
        
    }, 3000);
    localStorage.setItem('ConfigNivelUser', 'iniciante');

}
function experiente(){
    const el = document.querySelector('#retorno-config-nivel-user');
    el.innerHTML = 'Configuração salva, Aguarde!!';
    el.style.fontSize = '1rem';
    el.style.color = 'black';
    el.style.fontWeight = '500';
    setTimeout(function(){
        el.innerHTML = '';
        btnBusca.style.display = 'block';
        btnConsulta.style.display = 'block';
        btnProtocol.style.display = 'block';
        btnRelatorio.style.display = 'block';
        nivelUserIni.style.display = 'none';
        nivelUserExper.style.display = 'none';
        btnLeft.style.cssText = 'display: flex !important';
        
    }, 3000);
    localStorage.setItem('ConfigNivelUser', 'experiente');

}

btnInic.addEventListener("click", iniciante);
btnExper.addEventListener("click", experiente);