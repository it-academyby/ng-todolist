angular
  .module('todoList', [])
  .controller('todoCtrl', function ($scope) {
    try {
      $scope.todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    } catch(e) {
      $scope.todoList = [];
    }
    $scope.saveListToLS = () => localStorage.setItem('todoList', JSON.stringify($scope.todoList));
    $scope.$watch('todoList', $scope.saveListToLS, true);

    // Добавление нового пункта
    $scope.addTodo = () => {
      $scope.todoList.push({
        todoText: $scope.todoInput,
        done: false
      });
      $scope.todoInput = "";
    };

    // удаление пункта
    $scope.removeTodo = (itemToRemove) => $scope.todoList = $scope.todoList.filter((item) => item !== itemToRemove);
  });