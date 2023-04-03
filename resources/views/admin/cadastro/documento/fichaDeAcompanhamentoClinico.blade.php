<html>
    <head>
        <link rel="stylesheet" href="{{asset('css/reset.css')}}">
        <link rel="stylesheet" href="{{asset('css/formulario.css')}}">
    </head>
    <body class="container margin-cabecalho">
        <article class="full">
            <img class="logo">
            <p class="centro text-title">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO PARA REALIZAÇÃO DE INTERNAÇÃO DE TRATAMENTO CLÍNICO OU CIRÚRGICO</p>
            <section class="m-top">
                <p class="d-inline">Declaro o livre consentimento para realização de intervenção e tratamento necessário no animal acaso identificado, a ser realizado pelo Médico Veterinário</p>
                <select class="select d-inline">
                    <option value="1">Milena Ferrareis Hannoff</option>
                    <option value="2" selected>Eduardo Pedro Meneghel</option>
                </select>
                <p class="d-inline">, CRMV nº</p>
                <select class="select d-inline">
                    <option value="1">999999</option>
                    <option value="1">999998</option>
                </select>
                <p class="d-inline">.</p>
            </section>
            <p class="text-title">Identificação Animal:</p>
            <section class="m-top">
                <p class="d-inline">Nome:</p>
                <input class="input d-inline">
                <p class="d-inline m-left">Sexo:</p>
                <input class="d-inline" type="radio" id="macho" name="sexo" value="0">
                <label class="d-inline" for="macho">Macho</label>
                <input type="radio" id="femea" name="sexo" value="1">
                <label for="macho">Fêmea</label>
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Especie:</p>
                <select class="select d-inline">
                    <option value="1">Cachorro</option>
                    <option value="1">Gato</option>
                </select>
                <p class="d-inline m-left">Raça:</p>
                <select class="select d-inline">
                    <option value="1">Lulu</option>
                    <option value="1">Pincher</option>
                </select>
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Idade:</p>
                <input class="input d-inline">
                <p class="d-inline m-left">Pelagem:</p>
                <select class="select d-inline">
                    <option value="1">Liso</option>
                    <option value="1">Encaracolado</option>
                </select>
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Microchip:</p>
                <input class="input d-inline">
                </select>
            </section>
            <section class="m-top">
                <p class="text-title">Observações:</p>
                <textarea class="textarea"></textarea>
            </section>
            <section class="m-top">
                <p class="d-inline">Declaro, ainda ter sido esclarecido(a) a cerco dos possiveis riscos inerentes à situação clínica do animal bem como do(s)
                    tratamento(s) proposto(s), estando o(a) referido(a) profissional isento(a) qualquer responsabilidade decorrente de tais riscos.</p>
            </section>
            <section class="m-top">
                <p class="text-title">Observações de interesse a serem fornecidas pelo(a) Médico(a) Veterinário(a):</p>
                <textarea class="textarea"></textarea>
            </section>
            <section class="m-top">
                <p class="text-title">Observações de interesse a serem fornecidas pelo(a) Tutor(a)/Proprietário(a)/Responsaável:</p>
                <textarea class="textarea"></textarea>
            </section>
            <p class="text-title">Identificação do Tutor(a)/Proprietário(a)/Responsaável pelo animal:</p>
            <section class="m-top">
                <p class="d-inline m-top">Nome:</p>
                <input class="input d-inline">
            </section>
            <section class="m-top">
                <p class="d-inline m-top">CPF:</p>
                <input class="input d-inline">
                <p class="d-inline m-left m-top">RG:</p>
                <input class="input d-inline">
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Endereço:</p>
                <input class="input d-inline">
            </section>
            <section class="m-top">
                <p class="d-inline m-top">CEP:</p>
                <input class="input d-inline">
                <p class="d-inline m-left m-top">Bairro:</p>
                <input class="input d-inline">
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Cidade:</p>
                <input class="input d-inline">
                <p class="d-inline m-left m-top">Telefone:</p>
                <input class="input d-inline">
            </section>
            <section class="m-top">
                <p class="d-inline m-top">Orleans,</p>
                <input class="input input-small d-inline">
                <p class="d-inline m-top">de</p>
                <input class="input d-inline">
                <p class="d-inline m-top">de</p>
                <input class="input input-small d-inline">
            </section>
            {{$hash}}
        </article>
    </body>
</html>
