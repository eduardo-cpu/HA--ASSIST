import { searchUltimaConsulta } from "../connection/consulta_db.js";
import { loadUserSus } from "../connection/userSus_db.js";


async function printUltimaConsulta() {
    const idUser = localStorage.getItem('idUserSus');

    let result = document.querySelector(".retorno-select-3");

    let row = await loadUserSus(idUser);

    let data_nasc = row[0].data_nasc.getDate() + '/' + (row[0].data_nasc.getMonth() + 1) + '/' + row[0].data_nasc.getFullYear();

    let basic_info = `
        <div class="info">
            <h3>Dados do Usuário</h3>
            <div class="infos">
                <div>
                    <p><strong>Nome:</strong> ${row[0].nome}</p>
                    <p><strong>Cartão do SUS:</strong> ${row[0].cart_sus}</p>
                    <p><strong>CPF:</strong> ${row[0].cpf}</p>
                </div>
                <div>
                    <p><strong>Data de Nascimento:</strong> ${data_nasc}</p>
                    <p><strong>Sexo:</strong> ${row[0].sexo}</p>
                </div>
            </div>
        </div>
    `;

    row = await searchUltimaConsulta(idUser);

    console.log(row);

    let info_consulta = `
        <div class="info">
            <h3>Consulta</h3>
            <div class="infos">
                <div>
                    <p><strong>PAS:</strong> ${row.pas}</p>
                    <p><strong>Classificação da HA:</strong> ${row.clas_ha}</p>
                    <p><strong>IMC:</strong> ${row.imc}</p>
                    <p><strong>Classificação do IMC:</strong> ${row.clas_imc}</p>
                </div>
                <div>
                    <p><strong>Classificação Abdomen:</strong> ${row.clas_abdo}</p>
                    <p><strong>Classificação Cintura Quadril:</strong> ${row.clas_cint_quad}</p>
                    <p><strong>Classificação Tornozelo Braquial:</strong> ${row.clas_torn_brac}</p>
                </div>
            </div>
        </div>
    `;

    let estrat = `
        <div class="info html2pdf__page-break">
            <h3>Estratificação</h3>
            <p><strong>Classificação da Estratificação:</strong> ${row.clas_estrat}</p>
            <p>${row.indicadores}</p>
        </div>
    `;

    let nec_psBio = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicobiológicas</h3>
            <p>${row.list_psicobio}</p>
        </div>
    `;

    let nec_psSoc = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicosociais</h3>
            <p>${row.list_psicosoc}</p>
        </div>
    `;

    let nec_psEsp = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicoespirituais</h3>
            <p>${row.list_psicoesp}</p>
        </div>
    `;

    result.innerHTML = basic_info + info_consulta + estrat + nec_psBio + nec_psSoc + nec_psEsp;
}

window.addEventListener('load', printUltimaConsulta);