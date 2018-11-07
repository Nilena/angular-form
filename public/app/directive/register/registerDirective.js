/*
* @auther : Arun lalithambaran
* @Description : Main app script for Angular Registration Form
*/
(()=> {
    angular.module('adminPanel')
    .directive('registerDirective', ['registerUserFactory', 'getUserFactory', 'ipcMain', '$location', function(registerUserFactory, getUserFactory, ipcMain, $location) {
        return {
            link: link,
            templateUrl: 'app/directive/register/addUserTemplate.html'
        }
        function link(scope, element, attr) {
            let editUser;
            function init() {
                editUser = ipcMain.get('user');
                if(editUser) {
                    scope.userList = editUser.userList;
                    scope.user = editUser.userList[editUser.id];
                    scope.buttonText = 'Update User';
                } else {
                    scope.userList = getUserFactory.get();
                    scope.user = {
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        confPassword: '',
                        phone: '',
                        gender: 'male',
                        addressLine1: '',
                        addressLine2: '',
                        state: '',
                        pin: ''
                    }
                    scope.buttonText = 'Add User';
                }
            }
            init();
            scope.addUser = function(status = false) {
                if(!editUser) scope.userList.push(scope.user);
                if(registerUserFactory.save(scope.userList)) {
                    init();
                    if(status === true) {
                        $location.path('/userhome');
                    }
                }
            }
        }
    }])
    .factory('registerUserFactory', ['getUserFactory', function(getUserFactory) {
        let userList = getUserFactory.get();
        return {
            save: function(user) {
                if(Array.isArray(user)) {
                    userList = user;
                } else {
                    userList.push(user);
                }
                localStorage.setItem('userList', JSON.stringify(userList));
                return true;
            }
        }
    }]);
})();
