import { connect } from "./db_connect.js";

const btnFinaliza = document.querySelector("#btn-finaliza-consulta");

function ajustaIndicadores() {
    let indicadores = '';

    let baixoRisco = [];
    baixoRisco[0] = localStorage.getItem('brIdade');
    baixoRisco[1] = localStorage.getItem('brSexMasc');
    baixoRisco[2] = localStorage.getItem('brTabag');
    baixoRisco[3] = localStorage.getItem('brHipert');
    baixoRisco[4] = localStorage.getItem('brObs');
    baixoRisco[5] = localStorage.getItem('brSedent');
    baixoRisco[6] = localStorage.getItem('brHistoFam');
    baixoRisco[7] = localStorage.getItem('brHistoDoenca');
    baixoRisco[8] = localStorage.getItem('brManifest');
    baixoRisco[9] = localStorage.getItem('brDiagnDislip');
    baixoRisco[10] = localStorage.getItem('brDiagnPolic');

    let listBaixo = '';
    for (i = 0; i < baixoRisco.length; i++) {
        if (baixoRisco[i] != null) {
            listBaixo += baixoRisco[i] + "\n";
        }
    }

    if (listBaixo != '') {
        indicadores = "- Baixo Risco:\n" + listBaixo;
    }

    let altoRisco = [];
    altoRisco[0] = localStorage.getItem('arAcidVasc');
    altoRisco[1] = localStorage.getItem('arInfartAgud');
    altoRisco[2] = localStorage.getItem('arLesPerif');
    altoRisco[3] = localStorage.getItem('arAtaqIsqu');
    altoRisco[4] = localStorage.getItem('arHiperVentr');
    altoRisco[5] = localStorage.getItem('arNefrop');
    altoRisco[6] = localStorage.getItem('arRetin');
    altoRisco[7] = localStorage.getItem('arAneur');
    altoRisco[8] = localStorage.getItem('arEsten');
    altoRisco[9] = localStorage.getItem('arDiabet');
    altoRisco[10] = localStorage.getItem('arDoenVasc');
    altoRisco[11] = localStorage.getItem('arInsuf');
    altoRisco[12] = localStorage.getItem('arAngina');
    altoRisco[13] = localStorage.getItem('arDoencRenal');

    let listAlto = '';
    for (i = 0; i < altoRisco.length; i++) {
        if (altoRisco[i] != null) {
            listAlto += altoRisco[i] + "\n";
        }
    }

    if (listAlto != '') {
        indicadores = "- Alto Risco:\n" + listAlto;
    }

    if (indicadores != '') {
        indicadores = "INDICADORES:\n" + indicadores;
    }

    return indicadores;
}

function generalList(nome) {
    let lista = '';
    let tot = localStorage.getItem(`qtd-${nome}`);
    for (let i = 0; i < tot; i++) {
        let item = `${nome}-${i}`;
        let check = localStorage.getItem(item);
        // console.log(check);
        if (check != null)
            lista += check + ".\n";
    }
    return lista;
}

function ajustaListPsicobio() {
    let lista_final = '';

    //OXIGENA????O
    let oxi = generalList('oxi');
    if (oxi != '') {
        lista_final += "- Oxigena????o:\n" + oxi + "\n";
    }

    //NUTRI????O
    let nut = generalList('nut');
    if (nut != '') {
        lista_final += "- Nutri????o:\n" + nut + "\n";
    }

    //SONO E REPOUSO
    let son = generalList('son');
    if (son != '') {
        lista_final += "- Sono e Repouso:\n" + son + "\n";
    }

    //ATIVIDADE F??SICA
    let fis = generalList('fis');
    if (fis != '') {
        lista_final += "- Atividade F??sica:\n" + fis + "\n";
    }

    //REG. VASCULAR
    let vas = generalList('vas');
    if (vas != '') {
        lista_final += "- Regula????o Vascular:\n" + vas + "\n";
    }

    //REG. HORMONAL
    let hor = generalList('hor');
    if (hor != '') {
        lista_final += "- Regula????o Hormonal:\n" + hor + "\n";
    }

    //REG. NEUROL??GICA
    let neu = generalList('neu');
    if (neu != '') {
        lista_final += "- Regula????o Neurol??gica:\n" + neu + "\n";
    }

    //??RG??OS DO SENTIDO
    let sen = generalList('sen');
    if (sen != '') {
        lista_final += "- ??rg??os do Sentido:\n" + sen + "\n";
    }

    //TERAP??UTICA
    let ter = generalList('ter');
    if (ter != '') {
        lista_final += "- Terap??utica:\n" + ter + "\n";
    }

    if (lista_final != '') {
        lista_final = "NECESSIDADES PSICOBIOL??GICAS:\n" + lista_final;
    }

    console.log(lista_final);
    return lista_final;
}

function ajustaListPsicossoc() {
    let lista_final = '';

    //AMOR E ACEITA????O
    let amo = generalList('amo');
    if (amo != '') {
        lista_final += "- Amor e Aceita????o:\n" + amo + "\n";
    }

    //LIBERDADE E PARTICIPA????O
    let lib = generalList('lib');
    if (lib != '') {
        lista_final += "- Liberdade e Aceita????o:\n" + lib + "\n";
    }

    //EDUCA????O PARA SA??DE E APRENDIZAGEM
    let edu = generalList('edu');
    if (edu != '') {
        lista_final += "- Educa????o para Sa??de e Aprendizagem:\n" + edu + "\n";
    }

    if (lista_final != '') {
        lista_final = "NECESSIDADES PSICOSSOCIAIS:\n" + lista_final;
    }

    console.log(lista_final);
    return lista_final;
}

function ajustaListPsicoesp() {
    let lista_final = '';

    //RELIGIOSIDADE E ESPIRITUALIDADE
    let reg = generalList('reg');
    if (reg != '') {
        lista_final = "NECESSIDADES PSICOESPIRITUAIS:\n- Religiosidade e Espiritualidade:\n" + reg + "\n";
    }

    console.log(lista_final);
    return lista_final;
}

export async function saveConsulta() {
    let date = new Date();
    let cur_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let idUserSus = localStorage.getItem('idUserSus');
    let pas = localStorage.getItem('pas');
    let clas_ha = localStorage.getItem('clas_ha');
    let imc = localStorage.getItem('imc');
    let clas_imc = localStorage.getItem('clas_imc');
    let clas_abdo = localStorage.getItem('clas_abdo');
    let clas_cint_quad = localStorage.getItem('clas_cint_quad');
    let clas_torn_braq = localStorage.getItem('clas_torn_braq');

    //INDICADORES
    let indicadores = ajustaIndicadores();

    let clas_estrat = localStorage.getItem('clas_estrat');
    let list_psicobio = ajustaListPsicobio();
    let list_psicosoc = ajustaListPsicossoc();
    let list_psicoesp = ajustaListPsicoesp();

    let hemogHemac = localStorage.getItem('hemogHemac');
    let hemogHemogl = localStorage.getItem('hemogHemogl');
    let hemogHemat = localStorage.getItem('hemogHemat');
    let hemogHeuc = localStorage.getItem('hemogHeuc');
    let hemogHinf = localStorage.getItem('hemogHinf');
    let hemogHlaq = localStorage.getItem('hemogHlaq');
    let hemogHlic = localStorage.getItem('hemogHlic');
    let hemogColes = localStorage.getItem('hemogColes');
    let hemogHdl = localStorage.getItem('hemogHdl');
    let hemogTrig = localStorage.getItem('hemogTrig');
    let hemogHemogGlic = localStorage.getItem('hemogHemogGlic');
    let hemogCreat = localStorage.getItem('hemogCreat');
    let hemogPotass = localStorage.getItem('hemogPotass');
    let hemogEqu = localStorage.getItem('hemogEqu');
    let hemogMicroa = localStorage.getItem('hemogMicroa');
    let hemogAlbum = localStorage.getItem('hemogAlbum');
    let hemogAcid = localStorage.getItem('hemogAcid');
    let hemogUreia = localStorage.getItem('hemogUreia');
    let hemogTgo = localStorage.getItem('hemogTgo');
    let hemogTgp = localStorage.getItem('hemogTgp');

    // console.log(ajustaIndicadores());
    const conn = await connect();
    let [results] = await conn.query(
        'INSERT INTO consulta (data_cons, fk_id_usersus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_brac, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [cur_date, idUserSus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_braq, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp],
        function (err) {
            if (err) throw err;
        }
    );

    let [results2] = await conn.query(
        'INSERT INTO hemograma (fk_id_usersus, fk_data_cons, hemacias, hemoglobina, hematoclito, leucocitos, linfocitos, plaquetas, glicemia_jejum, colesterol_total, hdl, triglicerideos, hemoglobina_glicada, creatina, potassio_plasmatico, equ, microalbumina_urina, albumina, acido_urico, ureia, tgo, tgp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idUserSus, cur_date, hemogHemac, hemogHemogl, hemogHemat, hemogHeuc, hemogHinf, hemogHlaq, hemogHlic, hemogColes, hemogHdl, hemogTrig, hemogHemogGlic, hemogCreat, hemogPotass, hemogEqu, hemogMicroa, hemogAlbum, hemogAcid, hemogUreia, hemogTgo, hemogTgp],
        function (err) {
            if (err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}

btnFinaliza.addEventListener('click', saveConsulta);