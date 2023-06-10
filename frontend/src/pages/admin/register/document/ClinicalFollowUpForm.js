import React from 'react';
import Header from '../../../../components/admin/util/Header';

const ClinicalFollowUpForm = () => {
    return (
        <>
            <Header />
            <main className="mx-auto w-full max-w-2xl text-white">
                <article className="full">
                    <img className="logo" />
                    <p className="centro text-title">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO PARA REALIZAÇÃO DE INTERNAÇÃO DE TRATAMENTO CLÍNICO OU CIRÚRGICO</p>
                    <section className="m-top">
                        <p className="d-inline">Declaro o livre consentimento para realização de intervenção e tratamento necessário no animal acaso identificado, a ser realizado pelo Médico Veterinário</p>
                        <select className="select d-inline">
                            <option value="1">Milena Ferrareis Hannoff</option>
                            <option value="2" selected>Eduardo Pedro Meneghel</option>
                        </select>
                        <p className="d-inline">, CRMV nº</p>
                        <select className="select d-inline">
                            <option value="1">999999</option>
                            <option value="1">999998</option>
                        </select>
                        <p className="d-inline">.</p>
                    </section>
                    <p className="text-title">Identificação Animal:</p>
                    <section className="m-top">
                        <p className="d-inline">Nome:</p>
                        <input className="input d-inline" />
                        <p className="d-inline m-left">Sexo:</p>
                        <input className="d-inline" type="radio" id="macho" name="sexo" value="0" />
                        <label className="d-inline" for="macho">Macho</label>
                        <input type="radio" id="femea" name="sexo" value="1" />
                        <label for="macho">Fêmea</label>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Especie:</p>
                        <select className="select d-inline">
                            <option value="1">Cachorro</option>
                            <option value="1">Gato</option>
                        </select>
                        <p className="d-inline m-left">Raça:</p>
                        <select className="select d-inline">
                            <option value="1">Lulu</option>
                            <option value="1">Pincher</option>
                        </select>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Idade:</p>
                        <input className="input d-inline" />
                        <p className="d-inline m-left">Pelagem:</p>
                        <select className="select d-inline">
                            <option value="1">Liso</option>
                            <option value="1">Encaracolado</option>
                        </select>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Microchip:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="text-title">Observações:</p>
                        <textarea className="textarea"></textarea>
                    </section>
                    <section className="m-top">
                        <p className="d-inline">Declaro, ainda ter sido esclarecido(a) a cerco dos possiveis riscos inerentes à situação clínica do animal bem como do(s)
                            tratamento(s) proposto(s), estando o(a) referido(a) profissional isento(a) qualquer responsabilidade decorrente de tais riscos.</p>
                    </section>
                    <section className="m-top">
                        <p className="text-title">Observações de interesse a serem fornecidas pelo(a) Médico(a) Veterinário(a):</p>
                        <textarea className="textarea"></textarea>
                    </section>
                    <section className="m-top">
                        <p className="text-title">Observações de interesse a serem fornecidas pelo(a) Tutor(a)/Proprietário(a)/Responsaável:</p>
                        <textarea className="textarea"></textarea>
                    </section>
                    <p className="text-title">Identificação do Tutor(a)/Proprietário(a)/Responsaável pelo animal:</p>
                    <section className="m-top">
                        <p className="d-inline m-top">Nome:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">CPF:</p>
                        <input className="input d-inline"/>
                        <p className="d-inline m-left m-top">RG:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Endereço:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">CEP:</p>
                        <input className="input d-inline"/>
                        <p className="d-inline m-left m-top">Bairro:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Cidade:</p>
                        <input className="input d-inline"/>
                        <p className="d-inline m-left m-top">Telefone:</p>
                        <input className="input d-inline"/>
                    </section>
                    <section className="m-top">
                        <p className="d-inline m-top">Orleans,</p>
                        <input className="input input-small d-inline"/>
                        <p className="d-inline m-top">de</p>
                        <input className="input d-inline"/>
                        <p className="d-inline m-top">de</p>
                        <input className="input input-small d-inline"/>
                    </section>
                </article>
            </main>
        </>
    );
}

export default ClinicalFollowUpForm;