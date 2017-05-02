angular
  .module('todoList', [])
  .controller('todoCtrl', function ($scope) {
    // Сюда добавить начальную загрузку
    $scope.todoList = [];

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