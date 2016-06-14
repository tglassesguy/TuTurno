angular.module('TuturnoApp', ['ngCookies'])
    .controller('loginController', function($scope, $location, $cookies){
        $scope.usuarios = [
            { codigo: "admin" , contrasenia: "admin", name: "Mia Malkova" },
            { codigo: "1005716137" , contrasenia: "1005716137", name: 'Mia Khalifa' },
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
                    window.location.href = '/user.html';
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