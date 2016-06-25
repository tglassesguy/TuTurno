/**
 * @author tglassesguy
 * @author camiloacosta
 */
angular.module('TuturnoApp', ['ngCookies'])
    .controller('loginController', function($scope, $location, $cookies){
        $scope.usuarios = [
            { codigo: "admin" , contrasenia: "admin", name: "Administrador" },
            { codigo: "1005716137" , contrasenia: "1005716137", name: 'PARRA REINA JUAN DAVID' },
            { codigo: "1006117695" , contrasenia: "1006117695", name: 'VILLARREAL ESPINOSA YERSON FABIAN' },
            { codigo: "1014250909" , contrasenia: "1014250909", name: 'VALLEJO QUINTERO DANIELA' },
            { codigo: "1018450433" , contrasenia: "1018450433", name: 'CORREA ABELLO JENNY MILENA' },
            { codigo: "1069754336" , contrasenia: "1069754336", name: 'GUZMAN SIERRA LUIS ARMANDO' },
            { codigo: "1075305612" , contrasenia: "1075305612", name: 'CONDE TEJADA JHON SEBASTIAN' },
            { codigo: "1083912931" , contrasenia: "1083912931", name: 'TOVAR PARRA YESSICA PAOLA' },
            { codigo: "1088310866" , contrasenia: "1088310866", name: 'CASTRO CASTRO SERGIO DANIEL' },
            { codigo: "1110062621" , contrasenia: "1110062621", name: 'MACHADO HERRERA RAUL DUVAN' },
            { codigo: "1110540286" , contrasenia: "1110540286", name: 'MORERA GONZALEZ NATALIA' },
            { codigo: "1110549502" , contrasenia: "1110549502", name: 'FORERO GAITAN HERMES AUGUSTO' },
            { codigo: "1110555489" , contrasenia: "1110555489", name: 'CHAUX MARTINEZ JUAN CAMILO' },
            { codigo: "1110560310" , contrasenia: "1110560310", name: 'PUENTES PADILLA JHOAN SEBASTIAN' },
            { codigo: "1110577587" , contrasenia: "1110577587", name: 'GUERRERO QUIJANO LINA MARIA' },
            { codigo: "1110585421" , contrasenia: "1110585421", name: 'BARRETO PARRA ALISON DAHIANA' },
            { codigo: "1110587663" , contrasenia: "1110587663", name: 'CASTAÑO ARIAS LEIDY VIVIANA' },
            { codigo: "1110587665" , contrasenia: "1110587665", name: 'GUARNIZO ALVAREZ NATALY MARIA' },
            { codigo: "1110588562" , contrasenia: "1110588562", name: 'CAICEDO GUTIERREZ VICTOR ALFONSO' },
            { codigo: "1111200589" , contrasenia: "1111200589", name: 'SALDAÑA RODRIGUEZ DANIEL JOSE' },
            { codigo: "1111203871" , contrasenia: "1111203871", name: 'MONCALEANO ROJAS MARIA ALEJANDRA' },
            { codigo: "1234639490" , contrasenia: "1234639490", name: 'SABOGAL MURILLO ANGIE NATALIA' },
            { codigo: "1234639831" , contrasenia: "1234639831", name: 'PATIÑO FORERO DIEGO ALEJANDRO' },
            { codigo: "1234639924" , contrasenia: "1234639924", name: 'SAIZ POSADA JULIAN MAURICIO' },
            { codigo: "1.234.640.340" , contrasenia: "1.234.640.340", name: 'ZEA CHAMBUETA SEAN ANDERSON' },
            { codigo: "97062515680" , contrasenia: "97062515680", name: 'GUZMAN GUASCA CRISTIAN CAMILO' },
            { codigo: "98020260904" , contrasenia: "98020260904", name: 'PEREZ CRUZ DANIEL SIMEON' },
            { codigo: "98022264036" , contrasenia: "98022264036", name: 'CARDONA NOGUERA DANIELA ALEJANDRA' },
            { codigo: "98042667625" , contrasenia: "98042667625", name: 'BORJA MENDEZ WILSON DAVID' },
            { codigo: "98051753518" , contrasenia: "98051753518", name: 'DIAZ GUTIERREZ JENIFER MILENA' },
            { codigo: "98060766070" , contrasenia: "98060766070", name: 'SUAREZ BERMUDEZ YENNY ALEXANDRA' },
            { codigo: "98061720472" , contrasenia: "98061720472", name: 'LOPEZ BUITRAGO INGRITH YAIR' },
            { codigo: "98062668725" , contrasenia: "98062668725", name: 'PEREZ QUIMBAYO JHOAN SEBASTIAN' },
            { codigo: "98080152035" , contrasenia: "98080152035", name: 'GASCA TEJADA MONICA ANDREA' },
            { codigo: "98110571003" , contrasenia: "98110571003", name: 'BERRIO LOPEZ LEIF EDILSON' },
            { codigo: "98111460035" , contrasenia: "98111460035", name: 'CORTES CASTAÑEDA ANGIE TATIANA' },
            { codigo: "99010913116" , contrasenia: "99010913116", name: 'MUÑOZ MOLINA MAIRA ALEJANDRA' },
            { codigo: "99031507355" , contrasenia: "99031507355", name: 'DIAZ RIAÑO GERALDINE TATIANA' },
            { codigo: "99060607695" , contrasenia: "99060607695", name: 'TAMA GARCÍA YANDRY DAYANA' },
        ];

        $scope.errors = {
            NONE: '',
            WRONG_USER: 'No se encontró el usuario especificado',
            WRONG_PASS: 'La contraseña especificada es incorrecta',
        }

        $scope.usuario = {
            codigo: '',
            contrasenia: '',
            hasError: false,
            error: ''
        };

        findUser = function(cod){
            u = false;
            angular.forEach($scope.usuarios, function(el, k){
                if(angular.equals(el.codigo, cod)){
                    u = el;
                }
            });
            return u;
        }

        $scope.login = function(){
            var u = findUser($scope.usuario.codigo);
            if(!u){
                $scope.usuario.hasError = true;
                $scope.usuario.error = $scope.errors.WRONG_USER;
            }else{
                if(!angular.equals(u.contrasenia, $scope.usuario.contrasenia)){
                    $scope.usuario.hasError = true;
                    $scope.usuario.error = $scope.errors.WRONG_PASS;
                }else{
                    window.location.href = 'App.html';
                    $cookies.put('user.name', u.name);
                    $scope.usuario.hasError = false;
                }
            }
        }

    })
    .controller('userController', function($scope, $cookies){
        var name = $cookies.get('user.name');
        $scope.usuario = {
            name: name == undefined ? 'Nombre de usuario' : name
        };
    });
