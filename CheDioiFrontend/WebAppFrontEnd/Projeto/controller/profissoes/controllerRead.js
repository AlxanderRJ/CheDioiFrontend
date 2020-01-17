﻿var myControllers = angular.module("myControllersProfissoesRead", []);

myControllers.controller('profissoesControllersRead', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $rootScope.profissoes = [
            { IdProfissao: 1, Descricao: "Investigador particular" },
            { IdProfissao: 2, Descricao: "Gestor público" },
            { IdProfissao: 3, Descricao: "Ginasta artística" },
            { IdProfissao: 4, Descricao: "Ginasta rítmica" },
            { IdProfissao: 5, Descricao: "Ginecologista" },
            { IdProfissao: 6, Descricao: "Gourmet" },
            { IdProfissao: 7, Descricao: "Governador" },
            { IdProfissao: 8, Descricao: "Governanta" },
            { IdProfissao: 9, Descricao: "Grafologista" },
            { IdProfissao: 10, Descricao: "Gravurista" },
            { IdProfissao: 11, Descricao: "Guarda ou policial rodoviário" },
            { IdProfissao: 12, Descricao: "Guarda roupeiro" },
            { IdProfissao: 13, Descricao: "Guardador de veículos" },
            { IdProfissao: 14, Descricao: "Guia turistico" },
            { IdProfissao: 15, Descricao: "Guincheiro" },
            { IdProfissao: 16, Descricao: "Guitarrista" },
            { IdProfissao: 17, Descricao: "Harpista" },
            { IdProfissao: 18, Descricao: "Headhunter" },
            { IdProfissao: 19, Descricao: "Hematologista" },
            { IdProfissao: 20, Descricao: "Historiador" },
            { IdProfissao: 21, Descricao: "Homeopata" },
            { IdProfissao: 22, Descricao: "Hostess" },
            { IdProfissao: 23, Descricao: "Ilustrador" },
            { IdProfissao: 24, Descricao: "Implantodontista" },
            { IdProfissao: 25, Descricao: "Impressor" },
            { IdProfissao: 26, Descricao: "Imunologista" },
            { IdProfissao: 27, Descricao: "Infectologista" },
            { IdProfissao: 28, Descricao: "Inspetor" },
            { IdProfissao: 29, Descricao: "Instalador de linha telefônica" },
            { IdProfissao: 30, Descricao: "Instalador de painéis" }];

        $rootScope.areaDeConhecimento = [
            { idArea: 1, descricao: "Ciências Exatas e da Terra" },
            { idArea: 2, descricao: "Matemática" },
            { idArea: 3, descricao: "Álgebra" },
            { idArea: 4, descricao: "Conjuntos" },
            { idArea: 5, descricao: "Lógica Matemática" },
            { idArea: 6, descricao: "Teoria dos Números" },
            { idArea: 7, descricao: "Grupos de Álgebra Não - Comutaviva" },
            { idArea: 8, descricao: "Álgebra Comutativa" },
            { idArea: 9, descricao: "Geometria Algébrica" },
            { idArea: 10, descricao: "Análise" },
            { idArea: 11, descricao: "Análise Complexa" },
            { idArea: 12, descricao: "Análise Funcional" },
            { idArea: 13, descricao: "Análise Funcional Não - Linear" },
            { idArea: 14, descricao: "Equações Diferenciais Ordinárias" },
            { idArea: 15, descricao: "Equações Diferenciais Parciais" },
            { idArea: 16, descricao: "Equações Diferenciais Funcionais" },
            { idArea: 17, descricao: "Geometria e Topologia" },
            { idArea: 18, descricao: "Geometria Diferencial" },
            { idArea: 19, descricao: "Topologia Algébrica" },
            { idArea: 20, descricao: "Topologia das Variedades" }];
    }
]);






