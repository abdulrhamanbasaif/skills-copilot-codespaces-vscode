function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/skills/member.html',
    scope: {
      member: '='
    },
    controller: 'SkillsMemberController',
    controllerAs: 'vm'
  };
}