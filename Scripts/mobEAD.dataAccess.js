/// <reference path="../Scripts/knockout-2.2.0.debug.js" />
/// <reference path="../Scripts/jquery-1.8.2.intellisense.js" />

(function () {
    window.MobEADApp = window.MobEADApp || {};

    // Private: Routes
    var studentUrl = function (id) { return "api/student/" + (id || "") }; //Acertar caminho aplicação

    // Private: Ajax helper
    function ajaxRequest(type, url, data) {
        var options = { dataType: "json", contentType: "application/json", cache: false, type: type, data: ko.toJSON(data) }
        return $.ajax(url, options);
    }

    // Public: Db methods
    window.MobEADApp.Db = {
        getStudents: function () {
            return ajaxRequest("get", studentUrl());
        },

        getMock: function () {
            return {
                "Id": 1, "ExamId": 1, "UserId": 1, "Exam": "ITIL v3 Foundation",
                "QuestionsAmount": 2, "CurrentQuestion": 0, "MinCorrectAmount": 2,
                "ActualCorrectAmount": 0, "ExamTime": 60.0, "ElapsedTime": 0.0,
                "Result": false,
                "Questions": [
                    {
                        "Id": 1, "TestId": 1, "FormulationId": 1, "QuestionNumber": 0,
                        "Formulation": "Qual o propósito da estratégia de serviços?",
                        "AlternativeOne": "To provide the ability to define how value is created and delivered",
                        "AlternativeTwo": "To provide a clear identification of the definition of services and the customers who use them",
                        "AlternativeThree": "To define the perspective, position, plans and patterns that a service provider needs to be able to execute to meet an organization's business outcomes",
                        "AlternativeFour": "To understand what the strategy is",
                        "CorrectAlternativeNumber": 1, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    },
                    {
                        "Id": 2, "TestId": 1, "FormulationId": 2, "QuestionNumber": 1,
                        "Formulation": "O cuidado em identificar pontos críticos na execução dos pontos do programa pode nos levar a considerar a reestruturação do sistema de formação de quadros que corresponde às necessidades. Por outro lado, a mobilidade dos capitais internacionais oferece uma interessante oportunidade para verificação do orçamento setorial?",
                        "AlternativeOne": "O que temos que ter sempre em mente é que o comprometimento entre as equipes assume importantes posições no estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições.",
                        "AlternativeTwo": "Acima de tudo, é fundamental ressaltar que a crescente influência da mídia prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.",
                        "AlternativeThree": "No mundo atual, o fenômeno da Internet deve passar por modificações independentemente do processo de comunicação como um todo. ",
                        "AlternativeFour": "A nível organizacional, o novo modelo estrutural aqui preconizado promove a alavancagem dos modos de operação convencionais. ",
                        "CorrectAlternativeNumber": 2, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    },
                    {
                        "Id": 3, "TestId": 1, "FormulationId": 2, "QuestionNumber": 2,
                        "Formulation": "Qual o início da atividade geral de formação de atitudes afeta positivamente a correta previsão dos índices pretendidos?",
                        "AlternativeOne": "A prática cotidiana prova que a necessidade de renovação processual auxilia a preparação e a composição do processo de comunicação como um todo.",
                        "AlternativeTwo": "Percebemos, cada vez mais, que a contínua expansão de nossa atividade nos obriga à análise dos procedimentos normalmente adotados.",
                        "AlternativeThree": "Todavia, o surgimento do comércio virtual assume importantes posições no estabelecimento das condições inegavelmente apropriadas. Neste sentido, a hegemonia do ambiente político possibilita uma melhor visão global do levantamento das variáveis envolvidas.",
                        "AlternativeFour": "O empenho em analisar a expansão dos mercados mundiais afeta positivamente a correta previsão do investimento em reciclagem técnica. A certificação de metodologias que nos auxiliam a lidar com o acompanhamento das preferências de consumo aponta para a melhoria das diversas correntes de pensamento.",
                        "CorrectAlternativeNumber": 3, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    }
                ],
            };
        },

        getMock2: function () {
            return {
                "Id": 2, "ExamId": 2, "UserId": 1, "Exam": "PMP Certification",
                "QuestionsAmount": 2, "CurrentQuestion": 0, "MinCorrectAmount": 2,
                "ActualCorrectAmount": 0, "ExamTime": 60.0, "ElapsedTime": 0.0,
                "Result": false,
                "Questions": [
                    {
                        "Id": 4, "TestId": 1, "FormulationId": 1, "QuestionNumber": 0,
                        "Formulation": "What is the purpose of service strategy?",
                        "AlternativeOne": "To provide the ability to define how value is created and delivered",
                        "AlternativeTwo": "To provide a clear identification of the definition of services and the customers who use them",
                        "AlternativeThree": "To define the perspective, position, plans and patterns that a service provider needs to be able to execute to meet an organization's business outcomes",
                        "AlternativeFour": "To understand what the strategy is",
                        "CorrectAlternativeNumber": 1, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    },
                    {
                        "Id": 5, "TestId": 1, "FormulationId": 2, "QuestionNumber": 1,
                        "Formulation": "O cuidado em identificar pontos críticos na execução dos pontos do programa pode nos levar a considerar a reestruturação do sistema de formação de quadros que corresponde às necessidades. Por outro lado, a mobilidade dos capitais internacionais oferece uma interessante oportunidade para verificação do orçamento setorial?",
                        "AlternativeOne": "O que temos que ter sempre em mente é que o comprometimento entre as equipes assume importantes posições no estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições.",
                        "AlternativeTwo": "Acima de tudo, é fundamental ressaltar que a crescente influência da mídia prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral.",
                        "AlternativeThree": "No mundo atual, o fenômeno da Internet deve passar por modificações independentemente do processo de comunicação como um todo. ",
                        "AlternativeFour": "A nível organizacional, o novo modelo estrutural aqui preconizado promove a alavancagem dos modos de operação convencionais. ",
                        "CorrectAlternativeNumber": 2, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    },
                    {
                        "Id": 6, "TestId": 1, "FormulationId": 2, "QuestionNumber": 2,
                        "Formulation": "Qual o início da atividade geral de formação de atitudes afeta positivamente a correta previsão dos índices pretendidos?",
                        "AlternativeOne": "A prática cotidiana prova que a necessidade de renovação processual auxilia a preparação e a composição do processo de comunicação como um todo.",
                        "AlternativeTwo": "Percebemos, cada vez mais, que a contínua expansão de nossa atividade nos obriga à análise dos procedimentos normalmente adotados.",
                        "AlternativeThree": "Todavia, o surgimento do comércio virtual assume importantes posições no estabelecimento das condições inegavelmente apropriadas. Neste sentido, a hegemonia do ambiente político possibilita uma melhor visão global do levantamento das variáveis envolvidas.",
                        "AlternativeFour": "O empenho em analisar a expansão dos mercados mundiais afeta positivamente a correta previsão do investimento em reciclagem técnica. A certificação de metodologias que nos auxiliam a lidar com o acompanhamento das preferências de consumo aponta para a melhoria das diversas correntes de pensamento.",
                        "CorrectAlternativeNumber": 3, "NumberAnswered": 0, "Correct": false, "Tagged": false,
                    }
                ],
            };
        },

        getMockArray: function () { return [this.getMock(),this.getMock2()]; }



    };

})();
