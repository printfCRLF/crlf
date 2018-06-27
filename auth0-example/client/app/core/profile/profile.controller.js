(function(){
    'use strict';

    angular.module('app.profile', [])
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];

    function ProfileController() {
        var vm = this;

        vm.message = 'Hello from ProfileController';
    }
})();

// (function () {
//     'use strict';

//     angular.module('app.form', [])

//             .controller('FormController', FormController);

//     FormController.$inject = [];

//     function FormController() {
//         var vm = this;

//         var date = new Date();
//         vm.contactForm = {date: date};
//         vm.update = update;

//         function update(contact) {
//             vm.contactForm = angular.copy(contact);
//         }
//     }
// })();
